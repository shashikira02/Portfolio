import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className='space-y-6 md:space-y-8' >
      <div className='space-y-4 md:space-y-6'>
        <div>
          <h2 className='text-xl md:text-2xl font-bold mb-2'>Let&apos;s Connect</h2>
          <p className='text-sm md:text-base text-neutral-400'>Feel free to reach out through any of these channels</p>
        </div>

        <div className='space-y-3 md:space-y-4 mt-10'>
          <Link 
            href="mailto:shashikira4124@gmail.com" 
            className='flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-white/10 hover:bg-white/10 transition group' 
          >
            <div className='p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition shrink-0'>
              <Mail size={18} className='md:w-5 md:h-5' />
            </div>
            <div className='min-w-0'>
              <p className='text-xs md:text-sm text-neutral-400'>Email</p>
              <p className='font-medium text-sm md:text-base truncate'>shashikira4124@gmail.com</p>
            </div>
          </Link>

          <Link 
            href="#" 
            className='flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-white/10 hover:bg-white/10 transition group' 
          >
            <div className='p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition shrink-0'>
              <Linkedin size={18} className='md:w-5 md:h-5' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-neutral-400'>LinkedIn</p>
              <p className='font-medium text-sm md:text-base'>Connect with me</p>
            </div>
          </Link>

          <Link 
            href="#" 
            className='flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-white/10 hover:bg-white/10 transition group' 
          >
            <div className='p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition shrink-0'>
              <Github size={18} className='md:w-5 md:h-5' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-neutral-400'>GitHub</p>
              <p className='font-medium text-sm md:text-base'>Check out my code</p>
            </div>
          </Link>
        </div>
      </div>

      <div className='p-4 md:p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md'>
        <div className='flex items-start gap-3'>
          <MapPin size={18} className='mt-1 text-neutral-400 shrink-0 md:w-5 md:h-5' />
          <div>
            <p className='font-medium mb-1 text-sm md:text-base'>Location</p>
            <p className='text-xs md:text-sm text-neutral-400'>Available for remote opportunities worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
