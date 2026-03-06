'use client'

import Image from "next/image"

const Hero = () => {
  return (
    <section id='hero' className="min-h-[80vh] flex items-center" >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* Left - About/Information */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm tracking-widest text-neutral-400" >
            HEY, I&apos;M
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Shashi Kiran
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl" >
            Full-Stack Developer focused on building scalable, performant web application with modern technologies.
          </p>
          <div className="flex gap-4 pt-4 justify-center md:justify-start" >
            <a href="#projects" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition" >
              View Projects
            </a>

            <a href="#contact" className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition" >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end" >
          <Image src='/profile.png' alt="Shashi Kiran" width={480} height={480} className="w-48 h-48 md:w-64 md:h-64 lg:h-72 lg:w-72 xl:w-88 xl:h-88 object-cover rounded-full border border-white/10 shadow-lg" priority />
        </div>
      </div>

    </section>
  )
}

export default Hero