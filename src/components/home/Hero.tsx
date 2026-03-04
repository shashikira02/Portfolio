'use client'

import Image from "next/image"

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center" >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* Left - About/Information */}
        <div className="space-y-6">
          <p className="text-sm tracking-widest text-neutral-400" >
            HEY, I&apos;M
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Shashi
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl" >
            Full-Stack Developer passionate about building scalable and efficient web applications.
          </p>
          <div className="flex gap-4 pt-4" >
            <a href="/projects" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition" >
              View Projects
            </a>

            <a href="/contact" className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition" >
              View Projects
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end" >
          <Image src='/profile.png' alt="Shashi Kiran" width={240} height={240} className="object-cover rounded-full border border-white/10 shadow-lg " priority />
        </div>

      </div>

    </section>
  )
}

export default Hero