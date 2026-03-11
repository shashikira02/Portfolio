'use client';

import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

const ContactInfo = () => {
  const posthog = usePostHog();

  return (
    <div className='space-y-6 md:space-y-8' >
      <div className='space-y-4 md:space-y-6'>
        <div>
          <h2 className='text-xl md:text-2xl font-bold mb-2'>Let&apos;s Connect</h2>
          <p className='text-sm md:text-base text-muted-foreground'>Feel free to reach out through any of these channels</p>
        </div>

        <div className='space-y-3 md:space-y-4 mt-4'>
          <Link
            href="mailto:shashikira4124@gmail.com"
            onClick={() => {
              posthog?.capture('email_link_clicked', {
                email: 'shashikira4124@gmail.com',
                location: 'contact_info',
              });
            }}
            className='flex items-center gap-3 md:gap-4 transition group'
          >
            <div className='p-2 rounded-lg bg-card/50 group-hover:bg-accent transition shrink-0'>
              <Mail size={18} className='md:w-5 md:h-5' />
            </div>
            <div className='min-w-0'>
              <p className='text-xs md:text-sm text-muted-foreground'>Email</p>
              <p className='font-medium text-sm md:text-base truncate'>shashikira4124@gmail.com</p>
            </div>
          </Link>
        </div>

        <div className='flex items-start gap-3 md:gap-4'>
          <div className='p-2 rounded-lg bg-card/50 hover:bg-accent transition shrink-0'>
            <MapPin size={18} className='md:w-5 md:h-5' />
          </div>
          <div>
            <p className='text-xs md:text-sm text-muted-foreground'>Location</p>
            <p className='font-medium text-sm md:text-base'>Hyderabad, India.</p>
            <p className='text-xs md:text-sm text-muted-foreground'>Available for remote opportunities worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
