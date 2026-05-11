export const userData = {
  name: "Abhay Yeskar",
  title: "Java Full Stack Developer",
  shortBio: "MCA Graduate | Spring Boot | Hibernate | REST APIs | Microservices | React",
  fullBio: "MCA Graduate with expertise in Spring Boot, Hibernate, REST APIs, and Microservices. Passionate about building scalable web applications. Available for immediate joining.",
  location: "Nagpur, Maharashtra, India",
  email: "abhayyeskar55@gmail.com",
  phone: "+91 9359897507",
  github: "https://github.com/AbhayYeskar",
  linkedin: "https://linkedin.com/in/abhayyeskar",
  twitter: "https://twitter.com/abhayyeskar",
  experience: "1+ years",
  projectsCount: "6+ completed",
  happyClients: "5+",
  resumeUrl: "/AbhayYeskar_Resume.pdf",
  profilePhoto: "https://placehold.co/128x128/6366f1/ffffff?text=AY",
  
  skills: [
    { name: "HTML5", level: 90, category: "frontend" },
    { name: "CSS3", level: 85, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "React.js", level: 75, category: "frontend" },
    { name: "Core Java", level: 85, category: "backend" },
    { name: "Java 8+", level: 80, category: "backend" },
    { name: "Spring Framework", level: 80, category: "backend" },
    { name: "Spring Boot", level: 80, category: "backend" },
    { name: "Spring MVC", level: 75, category: "backend" },
    { name: "Spring Data JPA", level: 75, category: "backend" },
    { name: "Spring Security", level: 65, category: "backend" },
    { name: "Spring IOC", level: 75, category: "backend" },
    { name: "Spring AOP", level: 65, category: "backend" },
    { name: "Hibernate", level: 75, category: "backend" },
    { name: "JPA", level: 75, category: "backend" },
    { name: "MySQL", level: 80, category: "database" },
    { name: "PostgreSQL", level: 70, category: "database" },
    { name: "MongoDB", level: 60, category: "database" },
    { name: "SQL", level: 80, category: "database" },
    { name: "REST APIs", level: 85, category: "tools" },
    { name: "Microservices", level: 65, category: "tools" },
    { name: "Postman", level: 80, category: "tools" },
    { name: "Git/GitHub", level: 75, category: "tools" },
    { name: "Maven", level: 75, category: "tools" },
    { name: "JUnit", level: 65, category: "tools" }
  ],
  
  // 🔥 PROJECTS ARRAY 🔥
  projects: [
    {
      id: 1,
      title: "Smart Expense Tracker API",
      description: "REST API based expense tracker with CRUD operations, batch insert (add multiple expenses at once), category-wise summary, date range filtering, and global exception handling. Built with Spring Boot 2.7.15, Hibernate 5, MySQL 8, and Maven.",
      tech: ["Spring Boot", "Hibernate", "MySQL", "REST API", "JPA", "Maven"],
      github: "https://github.com/AbhayYeskar/SmartExpenseTracker",
      live: "https://smart-expense-tracker.onrender.com",
      image: "https://placehold.co/400x250/6366f1/ffffff?text=Expense+Tracker",
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
      live: "#",
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
  ]
};