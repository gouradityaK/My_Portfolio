export default function Skills() {
  const skills = [
    { name: 'Web Development', level: 100 },
    { name: 'UI/UX Design', level: 85 },
    // { name: 'Mobile Development', level: 80 },
    { name: 'Backend Development', level: 75 },
    // { name: 'DevOps', level: 70 },
    { name: 'Project Management', level: 85 },
  ]

  const technologies = [
    { name: 'JavaScript', icon: 'JS' },
    // { name: 'TypeScript', icon: 'TS' },
      { name: 'Next.js', icon: 'NEXT' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: 'NODE' },
    { name: 'MongoDB', icon: '' },
    // { name: 'Docker', icon: '🐳' },
    // { name: 'AWS', icon: '☁️' },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-indigo-600">Skills</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          The skills, tools and technologies I use to bring your ideas to life
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg flex flex-col items-center hover:bg-indigo-50 transition-colors"
                >
                  <span className="text-2xl mb-2">{tech.icon}</span>
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}