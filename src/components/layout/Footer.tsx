import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-sm text-neutral-200">
          © {new Date().getFullYear()} Shashi Kiran. All rights reserved.
        </p>

            {/* Social Links */}
        <div className='flex items-center gap-6' >
          <Link href="#" aria-label="GitHub" className='hover:opacity-70 transition' >
            <Github size={20} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className='hover:opacity-70 transition' >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
