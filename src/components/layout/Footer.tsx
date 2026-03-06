'use client'

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Footer = () => {
  const email = 'shashikira4124@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="w-full px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-6">

        {/* Copyright */}
        <p className="text-sm text-neutral-200">
          © {new Date().getFullYear()} Shashi Kiran.
        </p>
        <button onClick={copyEmail} className='text-sm text-neutral-200 hover:opacity-70 transition md:hidden'>
          {copied ? 'Copied!' : email}
        </button>

        {/* Social Links */}
        <div className='flex items-center gap-6 md:hidden' >
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
