'use client'

import { Github, Linkedin } from 'lucide-react';
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
            <div className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 z-50">
                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:-translate-y-1 hover:text-white/80 transition-all duration-200"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>

                <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:-translate-y-1 hover:text-white/80 transition-all duration-200"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>

                <div className='w-px h-24 bg-white/30'></div>
            </div>

            {/* Right - Email */}
            <div className='fixed right-6 bottom-0 hidden md:flex flex-col items-center z-50'>
                <button 
                    onClick={copyEmail} 
                    className='[writing-mode:vertical-rl] text-sm tracking-widest hover:text-white/80 hover:-translate-y-1 transition-all duration-200 mb-6'
                    aria-label="Copy email"
                >
                    {copied ? 'Copied!' : email}
                </button>
                <div className='w-px h-24 bg-white/30'></div>
            </div>
        </>
    )
}

export default SocialSidebar