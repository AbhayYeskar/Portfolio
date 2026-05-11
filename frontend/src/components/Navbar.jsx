import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import ProfileEditModal from './ProfileEditModal';
import { userData as initialUserData } from '../data/userData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profile, setProfile] = useState(initialUserData);

  // Load saved profile from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
    
    // Listen for profile updates
    const handleProfileUpdate = () => {
      const updated = localStorage.getItem('userProfile');
      if (updated) {
        setProfile(JSON.parse(updated));
      }
    };
    window.addEventListener('profileUpdated', handleProfileUpdate);
    return () => window.removeEventListener('profileUpdated', handleProfileUpdate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
    window.dispatchEvent(new Event('profileUpdated'));
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const profilePhoto = profile.profilePhoto || "https://placehold.co/40x40/6366f1/ffffff?text=AY";

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* 🔥 Left Side - Profile Photo (Click to Edit) 🔥 */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="relative group focus:outline-none"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
                  <div className="w-full h-full rounded-full bg-dark overflow-hidden">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/40x40/6366f1/ffffff?text=U";
                      }}
                    />
                  </div>
                </div>
                {/* Hover edit indicator */}
                <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white text-xs font-bold">✎</span>
                </div>
              </button>
              
              {/* Brand Name */}
              <a href="#home" className="text-xl md:text-2xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {profile.name?.split(' ')[0] || 'Abhay'}
                </span>
                <span className="text-white">{profile.name?.split(' ')[1] ? ` ${profile.name.split(' ')[1]}` : 'Yeskar'}</span>
              </a>
            </div>

            {/* Center - Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className="text-light/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side - Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-light text-2xl">
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="text-light/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile mein bhi profile edit option */}
              <button
                onClick={() => {
                  setIsProfileModalOpen(true);
                  setIsOpen(false);
                }}
                className="text-left text-light/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        userData={profile}
        onSave={handleSaveProfile}
      />
    </>
  );
};

export default Navbar;