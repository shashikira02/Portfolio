const AboutSection = () => {
    return (
        <section id="about" className='max-w-4xl mx-auto mt-24 space-y-6 scroll-mt-24'  >
            <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
                About Me
            </h1>
            <p className='text-neutral-300 leading-relaxed text-lg md:text-xl'>
                I am a <span className='text-white font-semibold'>Full-Stack Developer</span> passionate about building scalable and efficient web applications. I enjoy working across both frontend and backend.
            </p>

            <p className="text-lg text-neutral-300 leading-relaxed" >
                <span className='font-semibold text-white'>Currently seeking opportunities</span> as a full stack Developer where I can contribute to building scalable applications while continuing to grow as an engineer.
            </p>
        </section>
    )
}

export default AboutSection;