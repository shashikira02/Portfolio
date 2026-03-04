import React from 'react'

const AboutContent = () => {
  return (
    <div className='space-y-16' >
      <section>
        <h1 className='text-4xl font-bold mb-6'>
          About Me
        </h1>
        <p className='text-neutral-300 leading-relaxed'>
          I am a Full-Stack Developer passionate about building scalable and efficient web applications. I enjoy working across both frontend and backend, understanding how systems connect, and continously improving my Problem Solving skills through real-world projects.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4' >
          My Journey
        </h2>

        <p className='text-neutral-300 leading-relaxed'>
          I started coding during my college years in 2020, and began practicing consistently from 2022. Over time, development became a way to think critically and break down complex problems into manageable solutions.

        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>Technical Mindset</h2>

        <p className='text-neutral-300 leading-relaxed'>
          I am deeply intrested in how the internet works - from frontend interface to backend logic & cloud infrastructure. I enjoy both Frontend and Backend equally, as they provide a complete understanding of system architecture.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>
          Current Focus
        </h2>
        <p className='text-neutral-300 leading-relaxed'>
          Currently gaining hands-on experience with Next.js and TypeScript by building structured, scalable projects using industry best practices and clean architecture.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>
          Education
        </h2>
        <p className='text-neutral-300'>
          Bacherlor&apos;s Degree in Computer Science <br />
          Indian Institute of Information Technology Guwahati <br />
          2024
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>
          Career Objective
        </h2>
        <p className='text-neutral-300 leading-relaxed'>
          Targeting full-stack roles while remaining flexible toward frontend or backend opportunities
        </p>
      </section>

    </div>
  )
}

export default AboutContent