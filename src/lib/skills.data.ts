export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillsData: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'SQL'],
  },
  {
    category: 'Technologies',
    skills: ['Node.js', 'React', 'Express.js'],
  },
  {
    category: 'Other Tools',
    skills: ['Redux', 'REST API', 'AWS', 'Git', 'Bootstrap', 'Figma', 'Material UI', 'Tailwind CSS'],
  },
];
