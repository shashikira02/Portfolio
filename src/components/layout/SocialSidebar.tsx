'use client'

import { Check, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const SocialSidebar = () => {
    const email = 'shashikira4124@gmail.com';
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <>
            {/* Left - Social Icons */}
            <div className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 z-50 dark:text-foreground text-black">
                <a
                    href="https://github.com/shashikira02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:-translate-y-1 dark:hover:text-foreground/80 hover:text-black/80 transition-all duration-200"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>

                <a
                    href="https://linkedin.com/in/shashikira02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:-translate-y-1 dark:hover:text-foreground/80 hover:text-black/80 transition-all duration-200"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>

                <div className='w-px h-24 dark:bg-border bg-black'></div>
            </div>

            {/* Right - Email */}
            <div className='fixed right-6 bottom-0 hidden md:flex flex-col items-center z-50 dark:text-foreground text-black'>
                <div className='relative'>
                    <button
                        onClick={copyEmail}
                        className='[writing-mode:vertical-rl] text-sm tracking-widest dark:hover:text-foreground/80 hover:text-black/80 hover:-translate-y-1 transition-all duration-200 mb-6'
                        aria-label="Copy email"
                    >
                        {email}
                    </button>

                    {copied && (
                        <span className='absolute top-1/2 -translate-y-1/2 right-8 bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shadow-lg flex items-center gap-1.5'>
                            <Check size={12} />
                            Copied!
                        </span>
                    )}
                </div>
                <div className='w-px h-24 dark:bg-border bg-black'></div>
            </div>
        </>
    )
}

export default SocialSidebar