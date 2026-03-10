'use client';

import { Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Resume', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState('hero')
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

      setActiveSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-6" ref={menuRef}>

        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">

          <div className="flex items-center gap-3">

            <Link 
              href="/" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0});
                }
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
                className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white underline underline-offset-4' : 'text-neutral-400 hover:text-white'} hover:opacity-70`}
              >
                {link.label}
              </Link>
            })}
          </div>

          {/* Mobile Menu Button*/}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu*/}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden w-[90%] mx-auto mt-4  flex flex-col gap-6 px-6 py-6 rounded-3xl border border-white/10  bg-white/5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const section = link.href.replace('/#', '').replace('#', '');
            const isActive = pathname === '/' && activeSection === section;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setIsOpen(false)
                }}
                className={`text-sm font-medium transition-colors ${isActive ? 'text-white underline underline-offset-4' : 'text-neutral-400 hover:text-white'} duration-200 hover:opacity-70 `}
              >
                {link.label}
              </Link>
            )
          })}

        </div>
      )}
    </header>
  );
};

export default Navbar;
