import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarker, FaTimes } from 'react-icons/fa';

const ProfileModal = ({ isOpen, onClose, userData }) => {
  if (!isOpen) return null;

  const profileData = userData || {
    name: "Abhay Yeskar",
    title: "Java Full Stack Developer",
    fullBio: "MCA Graduate with expertise in Spring Boot, Hibernate, and REST APIs. Passionate about building scalable web applications. Available for immediate joining.",
    shortBio: "MCA Graduate | Spring Boot | Hibernate | REST APIs",
    email: "abhayyeskar55@gmail.com",
    phone: "+91 9359897507",
    location: "Nagpur, Maharashtra, India",
    github: "https://github.com/AbhayYeskar",
    linkedin: "https://linkedin.com/in/abhayyeskar",
    twitter: "https://twitter.com/abhayyeskar",
    profilePhoto: "https://placehold.co/128x128/6366f1/ffffff?text=AY"
  };

  const profilePhoto = profileData.profilePhoto || "https://placehold.co/128x128/6366f1/ffffff?text=AY";

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(5px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '1.5rem',
          maxWidth: '420px',
          width: '100%',
          padding: '2rem',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.5)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          <FaTimes />
        </button>

        {/* Profile Content */}
        <div style={{ textAlign: 'center' }}>
          {/* Profile Image */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              margin: '0 auto 1rem',
              padding: '3px',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#1a1a2e'
              }}
            >
              <img
                src={profilePhoto}
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/120x120/6366f1/ffffff?text=AY";
                }}
              />
            </div>
          </div>

          {/* Name & Title */}
          <h2 style={{ 
            color: 'white', 
            marginBottom: '0.5rem', 
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #fff, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {profileData.name}
          </h2>
          <p style={{ color: '#8b5cf6', marginBottom: '1rem', fontWeight: '500' }}>{profileData.title}</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            {profileData.fullBio || profileData.shortBio}
          </p>

          {/* Contact Info */}
          <div style={{ 
            marginBottom: '1.5rem', 
            background: 'rgba(255, 255, 255, 0.05)', 
            borderRadius: '1rem', 
            padding: '1rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
              <FaEnvelope style={{ color: '#8b5cf6' }} /> {profileData.email}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
              <FaPhone style={{ color: '#8b5cf6' }} /> {profileData.phone}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
              <FaMapMarker style={{ color: '#8b5cf6' }} /> {profileData.location}
            </div>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1.25rem'
            }}
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.5rem', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#8b5cf6'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <FaGithub />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.5rem', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#8b5cf6'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <FaLinkedin />
            </a>
            <a
              href={profileData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.5rem', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#8b5cf6'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ IMPORTANT: Default export - Must be at the end
export default ProfileModal;