import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSidebar = () => {
  return (
    <aside className='md:sticky  md:top-32 h-fit space-y-6 p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-md'>
      <div className='flex flex-col items-center text-center' >
        <Image
          src={''}
          alt="Shashi Kiran"
          width={140}
          height={140}
          className="rounded-full object-cover"
        />
        <h2 className='mt-4 text-xl font-semibold' >Shashi Kiran</h2>
        <p className='text-sm' >Full Stack Developer</p>
      </div>
      <p className='text-sm text-neutral-300 text-center' >Passionate about building scalable web applications and continously learning modern technologies</p>

      <div className="flex justify-center gap-6 pt-4">
        <Link href='#' aria-label='GitHub'>
          <Github className='hover:opacity-70 transition' />
        </Link>

        <Link href='#' aria-label='LinkedIn'>
          <Linkedin className='hover:opacity-70 transition' />
        </Link>

        <Link href='#' aria-label='GitHub'>
          <Mail className='hover:opacity-70 transition' />
        </Link>
      </div>
    </aside>
  );
};

export default AboutSidebar;
