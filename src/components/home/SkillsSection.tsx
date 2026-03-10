import { skillsData } from '@/lib/skills.data';

const SkillsSection = () => {
  return <section id="skills" className="max-w-5xl mx-auto mt-24 py-16 scroll-mt-24" >

    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12" >Technical Skills</h2>
    
    <div className="space-y-8" >
      {skillsData.map((group) => (
        <div key={group.category}>
          <h3 className="text-lg font-semibold text-foreground mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 text-xs font-medium bg-card/50 border border-border rounded-full" >
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
