'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto flex max-w7xl items-center justify-between px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/5">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Shashi Kiran
        </Link>

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
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu*/}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 py-6 backdrop-blur-md bg-white/5 border-b border-white/5 ">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium"
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
