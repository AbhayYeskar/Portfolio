import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState('all');

  // 🔥 DIRECT PROJECTS DATA - Yahan apne projects add/edit kar 🔥
  const projects = [
    {
      id: 1,
      title: "Magestic Style saloon wesite",
      description: "REST API based expense tracker with CRUD operations, batch insert (add multiple expenses at once), category-wise summary, date range filtering, and global exception handling. Built with Spring Boot 2.7.15, Hibernate 5, MySQL 8, and Maven.",
      tech: ["Spring Boot", "Hibernate", "MySQL", "REST API", "JPA", "Maven"],
      github: "https://github.com/AbhayYeskar/magestic-Abhay.git",
      live: "https://github.com/AbhayYeskar/magestic-Abhay.git",
      image: "https://placehold.co/600x400/f8fafc/6366f1?text=Salon+Booking+System",
      featured: true
    },
    {
      id: 2,
      title: "Product Management System",
      description: "Full CRUD application built with Spring Boot and REST APIs. Implements GET/POST/PUT/DELETE operations with exception handling, @RestController, @Entity mapping, and PostgreSQL database. Tested APIs via Postman.",
      tech: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "REST API", "Postman"],
      github: "https://github.com/AbhayYeskar/ProductManagementSystem",
      live: "#",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Product+Mgmt",
      featured: true
    },
    {
      id: 3,
      title: "Smart Expense Tracker (Console)",
      description: "Console-based Java application using Core Java Collections Framework (ArrayList, HashMap), Custom Exception Handling, and Date API (LocalDate). Features: Add/View/Delete expenses, category-wise summary, highest expense, date range filtering.",
      tech: ["Core Java", "Collections", "Exception Handling", "Date API", "OOPs"],
      github: "https://github.com/AbhayYeskar/SmartExpenseTracker-Console",
      live: "https://github.com/AbhayYeskar/SmartExpenseTracker.git",
      image: "https://placehold.co/400x250/ec4899/ffffff?text=Console+App",
      featured: false
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "Modern responsive portfolio website built with React.js and Tailwind CSS. Features dynamic components, dark theme, contact form with EmailJS integration, project showcase with GitHub links, and responsive design for all devices.",
      tech: ["React.js", "Tailwind CSS", "Vite", "EmailJS", "Framer Motion"],
      github: "https://github.com/AbhayYeskar/abhayprotfolio",
      live: "https://abhayyeskar.netlify.app",
      image: "https://placehold.co/400x250/06b6d4/ffffff?text=Portfolio",
      featured: true
    },
    {
      id: 5,
      title: "WordPress Portfolio Sites",
      description: "Built responsive websites using WordPress and modern UI practices during front-end internship at Appxbuild Technologies. Client-focused web solutions with team collaboration and problem-solving.",
      tech: ["WordPress", "HTML5", "CSS3", "JavaScript", "PHP"],
      github: "#",
      live: "#",
      image: "https://placehold.co/400x250/10b981/ffffff?text=WordPress",
      featured: false
    },
    {
      id: 6,
      title: "REST API Testing Suite (Postman)",
      description: "Comprehensive Postman collection for testing REST APIs. Includes test cases for CRUD operations (GET, POST, PUT, DELETE), environment variables, pre-request scripts, test assertions, and automated workflows.",
      tech: ["Postman", "REST API", "Testing", "JavaScript"],
      github: "https://github.com/AbhayYeskar/Postman-API-Testing",
      live: "#",
      image: "https://placehold.co/400x250/f59e0b/ffffff?text=Postman+API",
      featured: false
    }
  ];

  // Filter projects based on selection
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  // Stats
  const stats = {
    total: projects.length,
    github: projects.filter(p => p.github && p.github !== '#').length,
    live: projects.filter(p => p.live && p.live !== '#').length,
    techs: projects.reduce((acc, p) => acc + (p.tech?.length || 0), 0)
  };

  // Open link function
  const openLink = (url, type) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert(`${type} link not available yet!`);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          My Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                : 'bg-light/10 text-light/70 hover:text-white hover:bg-light/20'
            }`}
          >
            All Projects ({stats.total})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              filter === 'featured' 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                : 'bg-light/10 text-light/70 hover:text-white hover:bg-light/20'
            }`}
          >
            <FaStar size={14} /> Featured ({projects.filter(p => p.featured).length})
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-light/5 rounded-lg p-4 text-center hover:bg-light/10 transition-all cursor-pointer">
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-light/50 text-sm">Total Projects</div>
          </div>
          <div className="bg-light/5 rounded-lg p-4 text-center hover:bg-light/10 transition-all cursor-pointer">
            <div className="text-2xl font-bold text-primary">{stats.github}</div>
            <div className="text-light/50 text-sm">GitHub Repos</div>
          </div>
          <div className="bg-light/5 rounded-lg p-4 text-center hover:bg-light/10 transition-all cursor-pointer">
            <div className="text-2xl font-bold text-primary">{stats.live}</div>
            <div className="text-light/50 text-sm">Live Demos</div>
          </div>
          <div className="bg-light/5 rounded-lg p-4 text-center hover:bg-light/10 transition-all cursor-pointer">
            <div className="text-2xl font-bold text-primary">{stats.techs}</div>
            <div className="text-light/50 text-sm">Technologies</div>
          </div>
        </div>
        
        {filteredProjects.length === 0 ? (
          <div className="text-center text-light/60 py-20 bg-light/5 rounded-2xl">
            <p className="text-lg">No projects found.</p>
            <p className="text-sm mt-2">Add your projects in the projects array above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-dark/50 rounded-xl overflow-hidden border border-light/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x250/6366f1/ffffff?text=${project.title.split(' ')[0]}`;
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-secondary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <FaStar size={10} /> Featured
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button 
                      onClick={() => openLink(project.github, 'GitHub')}
                      className="p-3 bg-white rounded-full text-dark hover:scale-110 transition-transform hover:shadow-xl"
                      title="View GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </button>
                    <button 
                      onClick={() => openLink(project.live, 'Live Demo')}
                      className="p-3 bg-white rounded-full text-dark hover:scale-110 transition-transform hover:shadow-xl"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-light/60 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech && project.tech.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech && project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-light/10 text-light/50 rounded-full">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;