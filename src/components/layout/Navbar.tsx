'use client';

import { Download, ExternalLink, Home, Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { usePostHog } from 'posthog-js/react';

const NAV_LINKS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const posthog = usePostHog();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState('hero')
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const resumePreviewLink = process.env.NEXT_PUBLIC_RESUME_DRIVE_LINK || '/perka_shashi_kiran_resume.pdf';
  const resumeDownloadLink = '/perka_shashi_kiran_resume.pdf';

  const handleDownload = useCallback(async (device: 'desktop' | 'mobile') => {
    try {
      const response = await fetch(resumeDownloadLink);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Shashi_Kiran_Perka_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      posthog?.capture('resume_download_clicked', {
        from_section: activeSection,
        device: device,
      });
    } catch (error) {
      console.error('Download failed:', error);
    }
  }, [resumeDownloadLink, posthog, activeSection]);

  const handleThemeToggle = useCallback((device: 'desktop' | 'mobile') => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    posthog?.capture('theme_toggled', {
      new_theme: newTheme,
      device: device,
    });
  }, [theme, setTheme, posthog]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      let foundSection = activeSection;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId) {
            foundSection = sectionId;
          }
        }
      });

      if (foundSection !== activeSection) {
        posthog?.capture('section_viewed', {
          section: foundSection,
          pathname: pathname,
        });
      }

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, pathname, posthog]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-6">

        <div ref={menuRef}>
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-md">

          <div className="flex items-center gap-3">

            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0 });
                }
                posthog?.capture('navbar_home_clicked', {
                  from_pathname: pathname,
                });
              }}
              className="flex items-center gap-2 text-lg font-semibold tracking-wide hover:opacity-80 transition"
            >
              <Home />
              SK
            </Link>
            <span className='text-neutral-500 text-xl hidden md:block' aria-hidden="true">|</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center md:gap-7">

            {NAV_LINKS.map((link) => {
              const section = link.href.replace('/#', '').replace('#', '');
              const isActive = pathname === '/' && activeSection === section;
              return <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  posthog?.capture('navbar_link_clicked', {
                    link_label: link.label,
                    link_href: link.href,
                    from_section: activeSection,
                    device: 'desktop',
                  });
                }}
                className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-foreground underline underline-offset-4' : 'text-muted-foreground hover:text-foreground'} hover:opacity-70`}
              >
                {link.label}
              </Link>
            })}
            
            <div className="flex items-center gap-2">
              <a
                href={resumePreviewLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  posthog?.capture('resume_preview_clicked', {
                    from_section: activeSection,
                    device: 'desktop',
                  });
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 hover:opacity-70 flex items-center gap-1.5 group"
              >
                Resume
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <button
                onClick={() => handleDownload('desktop')}
                className="p-1.5 rounded-md hover:bg-accent transition-colors"
                aria-label="Download Resume"
              >
                <Download size={16} className="text-muted-foreground hover:text-foreground" />
              </button>
            </div>

            <button onClick={() => handleThemeToggle('desktop')} className='p-2 rounded-full hover:bg-accent transition' >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle*/}
          <div className='flex items-center gap-3'>
            <button onClick={() => handleThemeToggle('mobile')} className='p-2 rounded-full hover:bg-accent transition md:hidden' >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden"
              onClick={() => {
                const newState = !isOpen;
                setIsOpen(newState);
                posthog?.capture('mobile_menu_toggled', {
                  is_open: newState,
                  current_section: activeSection,
                });
              }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

      {/* Mobile Menu*/}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden mt-4 flex flex-col gap-6 px-6 py-6 rounded-3xl border border-border bg-card/50 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const section = link.href.replace('/#', '').replace('#', '');
            const isActive = pathname === '/' && activeSection === section;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  posthog?.capture('navbar_link_clicked', {
                    link_label: link.label,
                    link_href: link.href,
                    from_section: activeSection,
                    device: 'mobile',
                  });
                }}
                className={`text-sm font-medium transition-colors ${isActive ? 'text-foreground underline underline-offset-4' : 'text-muted-foreground hover:text-foreground'} duration-200 hover:opacity-70 `}
              >
                {link.label}
              </Link>
            )
          })}

          <div className="flex items-center gap-3">
            <a
              href={resumePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsOpen(false);
                posthog?.capture('resume_preview_clicked', {
                  from_section: activeSection,
                  device: 'mobile',
                });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 hover:opacity-70 flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Resume
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                handleDownload('mobile');
              }}
              className="p-2 rounded-md hover:bg-accent transition-colors flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Download size={16} />
              Download
            </button>
          </div>

        </div>
      )}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
