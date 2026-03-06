'use client';

import { Home, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  // { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-6" ref={menuRef}>

        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">

          <div className="flex items-center gap-3">

            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-wide hover:opacity-80 transition">
              <Home />
              Shashi Kiran
            </Link>
            <span className='text-neutral-500 text-xl hidden md:block' aria-hidden="true">|</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center md:gap-8">

            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
