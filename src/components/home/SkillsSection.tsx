type skillsProps = {
  skills: string[];
};

const SkillsSection = ({ skills }: skillsProps) => {
  return <section className="max-w-4xl mx-auto mt-16 px-6 text-center" >
    <h3 className="text-2xl font-semibold mb-6" >Technical Skills</h3>
    <div className="flex flex-wrap justify-center gap-4" >
      {skills.map(skill=>(
        <span key={skill} className="px-4 py-2 text-sm bg-white/5 border border-white/ rounded-full backdrop-blur-sm" >
          {skill}
        </span>
      ))}
    </div>
  </section>;
};

export default SkillsSection;
