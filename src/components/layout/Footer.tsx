'use client'

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const email = 'shashikira4124@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <footer className="border-t border-border mt-24">
      <div className="w-full px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-6">

        {/* Copyright */}
        <p className="text-sm dark:text-muted-foreground text-black">
          © {new Date().getFullYear()} Shashi Kiran.
        </p>
        <button onClick={copyEmail} className='text-sm text-muted-foreground hover:opacity-70 transition md:hidden'>
          {copied ? 'Copied!' : email}
        </button>

        {/* Social Links */}
        <div className='flex items-center gap-6 md:hidden' >
          <a
            href="https://github.com/shashikira02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:text-foreground/80 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com/in/shashikira02/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:text-foreground/80 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        
        </div>

      </div>
    </footer>
  );
};

export default Footer;
