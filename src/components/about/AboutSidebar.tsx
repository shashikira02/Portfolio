'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

const AboutSidebar = () => {
  const posthog = usePostHog();

  return (
    <aside className='md:sticky md:top-32 h-fit space-y-6 p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg'>
      <div className='flex flex-col items-center text-center'>
        <div className='w-36 h-36 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4'>
          <span className='text-4xl font-bold text-white/50'>SK</span>
        </div>
        <h2 className='text-xl font-semibold'>Shashi Kiran</h2>
        <p className='text-sm text-neutral-400'>Full Stack Developer</p>
      </div>
      
      <p className='text-sm text-neutral-300 text-center leading-relaxed'>
        Passionate about building scalable web applications and continuously learning modern technologies.
      </p>

      <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
        <Link 
          href='https://github.com/shashikira02' 
          target='_blank'
          onClick={() => {
            posthog?.capture('social_link_clicked', {
              platform: 'github',
              url: 'https://github.com/shashikira02',
              location: 'about_sidebar',
            });
          }}
          aria-label='GitHub' 
          className='hover:scale-110 transition-transform'
        >
          <Github size={22} className='hover:opacity-70 transition' />
        </Link>

        <Link 
          href='https://linkedin.com/in/shashikira02/' 
          target='_blank'
          onClick={() => {
            posthog?.capture('social_link_clicked', {
              platform: 'linkedin',
              url: 'https://linkedin.com/in/shashikira02/',
              location: 'about_sidebar',
            });
          }}
          aria-label='LinkedIn' 
          className='hover:scale-110 transition-transform'
        >
          <Linkedin size={22} className='hover:opacity-70 transition' />
        </Link>

        <Link 
          href='mailto:shashikira4124@gmail.com' 
          onClick={() => {
            posthog?.capture('email_link_clicked', {
              email: 'shashikira4124@gmail.com',
              location: 'about_sidebar',
            });
          }}
          aria-label='Email' 
          className='hover:scale-110 transition-transform'
        >
          <Mail size={22} className='hover:opacity-70 transition' />
        </Link>
      </div>
    </aside>
  );
};

export default AboutSidebar;
