import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className='space-y-10' >
      <div >
        <h2 className='text-xl font-semibold mb-4' >Direct Contact</h2>
        <div className='space-y-4'>
          <Link href="#" className='block p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md hover:opacity-80 transition' >
            <div className='flex items-center gap-3' >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </div>
          </Link>

          <Link href="mailto:shashikira4124@gmail.com" className='block p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md hover:opacity-80 transition' >
            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span>Send an Email</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Networking */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>Networking</h2>
        <div className='flex items-center gap-6'>
          <Link href="#" aria-label="GitHub" className='flex items-center gap-2 hover:text-white/70 transition'>
            <Github size={20} />
            <span>GitHub</span>
          </Link>

          <Link href="#" aria-label="LinkedIn" className='flex items-center gap-2 hover:text-white/70 transition'>
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
