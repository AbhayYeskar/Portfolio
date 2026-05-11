import React, { useState } from 'react';

const About = () => {
  // 🔥 DIRECT SKILLS DATA - No percentages, only skill names 🔥
  const [skills] = useState([
    // Frontend Skills
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    
    // Backend & Frameworks
    { name: "Core Java", category: "backend" },
    { name: "Java 8+", category: "backend" },
    { name: "Spring Framework", category: "backend" },
    { name: "Spring Boot", category: "backend" },
    { name: "Spring MVC", category: "backend" },
    { name: "Spring Data JPA", category: "backend" },
    { name: "Spring Security", category: "backend" },
    { name: "Spring IOC", category: "backend" },
    { name: "Spring AOP", category: "backend" },
    { name: "Hibernate", category: "backend" },
    { name: "JPA", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "Microservices", category: "backend" },
    
    // Database
    { name: "MySQL", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "SQL", category: "database" },
    
    // Tools & Others
    { name: "VS Code", category: "tools" },
    { name: "Maven", category: "tools" },
    { name: "Spring Boot Tools", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "JUnit", category: "tools" },
    { name: "Eclipse", category: "tools" },
    { name: "IntelliJ IDEA", category: "tools" }
  ]);

  // Filter skills by category
  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const databaseSkills = skills.filter(s => s.category === 'database');
  const toolsSkills = skills.filter(s => s.category === 'tools');

  // Bio text
  const fullBio = "MCA Graduate with expertise in Spring Boot, Hibernate, REST APIs, and Microservices. Passionate about building scalable web applications. Available for immediate joining.";

  return (
    <section id="about" className="py-20 bg-light/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Bio, Education, Certifications */}
          <div className="flex-1">
            <p className="text-light/80 text-lg leading-relaxed mb-6">
              {fullBio}
            </p>
            <p className="text-light/80 text-lg leading-relaxed mb-6">
              During my 3-month front-end internship at Appxbuild Technologies, I built responsive websites using 
              WordPress and modern UI practices. I've developed a <span className="text-secondary font-semibold">
              CRUD application using Spring Boot and REST APIs</span>, which demonstrates my ability to build 
              real-world applications.
            </p>
            <p className="text-light/80 text-lg leading-relaxed">
              I'm available for <span className="text-primary font-semibold">immediate joining</span> and eager 
              to contribute to challenging projects where I can learn and grow.
            </p>
            
            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">🎓 Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-semibold text-light">Master of Computer Applications (MCA)</p>
                  <p className="text-light/60 text-sm">GH Raisoni College of Amravati University | 9.07 CGPA | 2021-2023</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <p className="font-semibold text-light">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-light/60 text-sm">Kamla Nehru College | 72.51% | 2018-2021</p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">📜 Certifications</h3>
              <div className="space-y-2">
                <p className="text-light/80">✅ Full Stack Java Development Certification - Kiran Academy</p>
                <p className="text-light/80">✅ Web Development Certification  </p>
                <p className="text-light/80">✅ SQL Certification - Udemy</p>
                <p className="text-light/80">✅MS-CIT Certification</p>
              </div>
            </div>
          </div>

          {/* Right Side - Technical Skills */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-4">💻 Technical Skills</h3>
            
            <div className="space-y-6">
              {/* Frontend Skills */}
              {frontendSkills.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-light/80 mb-2">🎨 Frontend Development</h4>
                  <div className="text-light/60 text-sm leading-relaxed">
                    {frontendSkills.map((skill, index) => (
                      <span key={index}>
                        <span className="text-primary">•</span> {skill.name}
                        {index < frontendSkills.length - 1 && '   '}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend Skills */}
              {backendSkills.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-light/80 mb-2">⚙️ Backend & Frameworks</h4>
                  <div className="text-light/60 text-sm leading-relaxed">
                    {backendSkills.map((skill, index) => (
                      <span key={index}>
                        <span className="text-purple-400">•</span> {skill.name}
                        {index < backendSkills.length - 1 && '   '}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Database Skills */}
              {databaseSkills.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-light/80 mb-2">🗄️ Database Technologies</h4>
                  <div className="text-light/60 text-sm leading-relaxed">
                    {databaseSkills.map((skill, index) => (
                      <span key={index}>
                        <span className="text-green-400">•</span> {skill.name}
                        {index < databaseSkills.length - 1 && '   '}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools Skills */}
              {toolsSkills.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-light/80 mb-2">🛠️ Tools & Others</h4>
                  <div className="text-light/60 text-sm leading-relaxed">
                    {toolsSkills.map((skill, index) => (
                      <span key={index}>
                        <span className="text-orange-400">•</span> {skill.name}
                        {index < toolsSkills.length - 1 && '   '}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Skills Summary */}
            <div className="mt-6 pt-4 border-t border-light/10">
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-primary font-bold">{skills.length}</span>
                  <span className="text-light/50 ml-1">Technologies</span>
                </div>
                <div>
                  <span className="text-primary font-bold">4</span>
                  <span className="text-light/50 ml-1">Categories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;