import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import { userData as initialUserData } from '../data/userData';

const Profile = () => {
  const [profile, setProfile] = useState(initialUserData);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
    
    const handleProfileUpdate = () => {
      const updated = localStorage.getItem('userProfile');
      if (updated) {
        setProfile(JSON.parse(updated));
      }
    };
    window.addEventListener('profileUpdated', handleProfileUpdate);
    return () => window.removeEventListener('profileUpdated', handleProfileUpdate);
  }, []);

  const profilePhoto = profile.profilePhoto || "https://placehold.co/128x128/6366f1/ffffff?text=AY";

  return (
    <section id="profile" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-dark/50 rounded-2xl border border-light/10 overflow-hidden">
            
            {/* Cover Photo */}
            <div className="h-32 bg-gradient-to-r from-primary to-secondary"></div>
            
            <div className="relative px-6 pb-8">
              {/* Profile Image */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-dark overflow-hidden">
                      <img 
                        src={profilePhoto}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-dark"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="mt-20 text-center">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {profile.name}
                </h1>
                <p className="text-xl text-primary mt-2">{profile.title}</p>
                <p className="text-light/60 mt-4 max-w-lg mx-auto">{profile.fullBio || profile.shortBio}</p>

                {/* Contact Details */}
                <div className="flex flex-wrap justify-center gap-6 mt-6 text-light/60 text-sm">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-primary" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-primary" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarker className="text-primary" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-light/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                    <FaGithub size={18} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-light/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                    <FaLinkedin size={18} />
                  </a>
                  <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-light/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                    <FaTwitter size={18} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-light/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profile.experience || '1+ years'}</div>
                  <div className="text-light/50 text-sm">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profile.projectsCount || '6+ completed'}</div>
                  <div className="text-light/50 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profile.happyClients || '5+'}</div>
                  <div className="text-light/50 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;