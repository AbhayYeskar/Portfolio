import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEye } from 'react-icons/fa';
import { userData } from '../data/userData';

// 🔥 IMAGE PATH - Apni image public/images/ folder mein daalo 🔥
// Agar image nahi hai toh placeholder show hoga
const profilePhoto = "/images/AbhayYeskar.jpeg";  // ✅ SAHI

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/AbhayYeskar_Resume.pdf";
    link.download = "AbhayYeskar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-semibold text-lg mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {userData.name.split(' ')[0]} 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}{userData.name.split(' ')[1]}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-light/70 mb-4">{userData.title}</p>
            <p className="text-light/60 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              {userData.shortBio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadResume} 
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <FaDownload className="group-hover:animate-bounce" /> Download Resume
              </button>
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary/70 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <FaEye /> View Projects
              </button>
              <button 
                onClick={scrollToContact}
                className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/10 hover:border-secondary/70 transition-all duration-300 hover:-translate-y-1"
              >
                Hire Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 justify-center lg:justify-start mt-8">
              <a href={userData.github} target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                <FaGithub />
              </a>
              <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                <FaLinkedin />
              </a>
              <a href={userData.twitter} target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-primary text-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Side - Large Image with Effects */}
          <div className="flex-1 flex justify-center">
            <div className="relative group w-full max-w-2xl">
              {/* Outer Rotating Border */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
                   style={{ filter: 'blur(12px)' }}>
              </div>
              
              {/* Middle Glow Effect */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              </div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={profilePhoto}
                  alt={userData.name}
                  className="w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: '650px', maxHeight: '650px', objectPosition: 'center top' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${userData.name.replace(' ', '+')}&background=6366f1&color=fff&size=400&bold=true&length=2`;
                  }}
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                </div>
              </div>

              {/* Image Badge - Professional Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-4 text-center border border-white/10">
                <p className="text-white text-base md:text-lg font-semibold">
                  {userData.name} • {userData.title}
                </p>
                <p className="text-white/50 text-xs mt-1 flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for work
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-primary/50 rounded-tl-2xl"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-secondary/50 rounded-br-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;