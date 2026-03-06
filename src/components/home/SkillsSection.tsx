import { skillsData } from '@/lib/skills.data';

const SkillsSection = () => {
  return <section id="skills" className="max-w-5xl mx-auto mt-24 py-16 scroll-mt-24" >

    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12" >Technical Skills</h2>
    
    <div className="space-y-8" >
      {skillsData.map((group) => (
        <div key={group.category}>
          <h3 className="text-lg font-semibold text-neutral-300 mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full backdrop-blur-sm" >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>;
};

export default SkillsSection;
