'use client'

import Image from "next/image"
import { usePostHog } from 'posthog-js/react';

const Hero = () => {
  const posthog = usePostHog();

  return (
    <section id='hero' className="min-h-[80vh] flex items-center" >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* Left - About/Information */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm tracking-widest text-muted-foreground" >
            HEY 👋 , I&apos;M
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Shashi Kiran
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl" >
            Full-Stack Developer focused on building scalable, performant web application with modern technologies.
          </p>
          <div className="flex gap-4 pt-4 justify-center md:justify-start" >
            <a 
              href="#projects" 
              onClick={() => {
                posthog?.capture('hero_cta_clicked', {
                  button: 'view_projects',
                  destination: '#projects',
                });
              }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a 
              href="#contact" 
              onClick={() => {
                posthog?.capture('hero_cta_clicked', {
                  button: 'get_in_touch',
                  destination: '#contact',
                });
              }}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end" >
          <Image src='/profile.png' alt="Shashi Kiran" width={480} height={480} className="w-48 h-48 md:w-64 md:h-64 lg:h-72 lg:w-72 xl:w-88 xl:h-88 object-cover rounded-full border border-border shadow-lg" priority />
        </div>
      </div>

    </section>
  )
}

export default Hero