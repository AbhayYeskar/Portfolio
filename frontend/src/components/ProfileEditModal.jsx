import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaCamera, FaUser, FaSave, FaTrash, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ProfileEditModal = ({ isOpen, onClose, userData, onSave }) => {
  // State for form data
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [experience, setExperience] = useState('');
  const [projectsCount, setProjectsCount] = useState('');
  const [happyClients, setHappyClients] = useState('');
  const [previewAvatar, setPreviewAvatar] = useState('');
  const [activeTab, setActiveTab] = useState('basic');
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const modalContentRef = useRef(null);
  const fileInputRef = useRef(null);

  // Initialize form when modal opens
  useEffect(() => {
    if (isOpen && userData) {
      setName(userData.name || '');
      setRole(userData.title || '');
      setBio(userData.fullBio || '');
      setEmail(userData.email || '');
      setLocation(userData.location || '');
      setWebsite(userData.website || '');
      setGithub(userData.github || '');
      setLinkedin(userData.linkedin || '');
      setTwitter(userData.twitter || '');
      setInstagram(userData.instagram || '');
      setExperience(userData.experience || '');
      setProjectsCount(userData.projectsCount || '');
      setHappyClients(userData.happyClients || '');
      setPreviewAvatar(userData.profilePhoto || '');
    }
  }, [isOpen, userData]);

  // Handle scroll to show/hide scroll to top button
  const handleScroll = () => {
    if (modalContentRef.current) {
      setShowScrollTop(modalContentRef.current.scrollTop > 200);
    }
  };

  // Scroll to top of modal
  const scrollToTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Photo size should be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPreviewAvatar(null);
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert('Name is required');
      return;
    }
    
    const updatedProfile = {
      ...userData,
      name: name,
      title: role,
      fullBio: bio,
      email: email,
      location: location,
      website: website,
      github: github,
      linkedin: linkedin,
      twitter: twitter,
      instagram: instagram,
      experience: experience,
      projectsCount: projectsCount,
      happyClients: happyClients,
      profilePhoto: previewAvatar
    };
    
    if (onSave && typeof onSave === 'function') {
      onSave(updatedProfile);
    }
    onClose();
  };

  // Main website colors - same as portfolio
  const colors = {
    dark: '#0f172a',
    light: '#f8fafc',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#ec4899'
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }} onClick={onClose}>
      <div style={{
        maxWidth: '650px',
        width: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        background: colors.dark,
        borderRadius: '1.5rem',
        border: `1px solid ${colors.primary}30`,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 1.5rem 0.5rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          flexShrink: 0
        }}>
          <h2 style={{
            color: 'white',
            margin: 0,
            fontSize: '1.5rem',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ✏️ Edit Profile
          </h2>
          <button onClick={onClose} style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}>
            <FaTimes />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
          ref={modalContentRef}
          style={{
            overflowY: 'auto',
            padding: '1.5rem',
            flex: 1,
            scrollBehavior: 'smooth'
          }}
          onScroll={handleScroll}
        >
          {/* Photo Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '1rem',
            border: `1px solid ${colors.primary}20`
          }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div 
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  boxShadow: `0 0 20px ${colors.primary}80`
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                {previewAvatar ? (
                  <img src={previewAvatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <FaUser style={{ fontSize: '3.5rem', color: 'white' }} />
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaCamera size={14} />
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
            </div>
            {previewAvatar && (
              <button 
                onClick={handleRemovePhoto} 
                style={{
                  marginTop: '1rem',
                  background: 'none',
                  border: 'none',
                  color: '#f87171',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                <FaTrash /> Remove Photo
              </button>
            )}
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.7rem', marginTop: '0.5rem' }}>
              Click on the avatar to upload a new photo (Max 5MB)
            </p>
          </div>

          {/* Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '1rem'
          }}>
            {[
              { id: 'basic', label: 'Basic Info', icon: '👤' },
              { id: 'professional', label: 'Professional', icon: '💼' },
              { id: 'contact', label: 'Contact', icon: '📞' },
              { id: 'social', label: 'Social Links', icon: '🔗' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.5rem 1.2rem',
                  background: activeTab === tab.id ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` : 'rgba(255, 255, 255, 0.05)',
                  border: activeTab === tab.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '2rem',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease',
                  fontWeight: activeTab === tab.id ? '600' : '400'
                }}
              >
                <span style={{ marginRight: '0.3rem' }}>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div>
            {/* Basic Info Tab */}
            {activeTab === 'basic' && (
              <div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Full Name</label>
                  <input 
                    type="text" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Role / Title</label>
                  <input 
                    type="text" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Bio</label>
                  <textarea 
                    rows="3" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    value={bio} 
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Professional Tab */}
            {activeTab === 'professional' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Experience</label>
                    <input 
                      type="text" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      value={experience} 
                      onChange={(e) => setExperience(e.target.value)} 
                      placeholder="e.g., 1+ years"
                    />
                  </div>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Projects</label>
                    <input 
                      type="text" 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '0.5rem',
                        color: 'white',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      value={projectsCount} 
                      onChange={(e) => setProjectsCount(e.target.value)} 
                      placeholder="e.g., 6+ completed"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Happy Clients</label>
                  <input 
                    type="text" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={happyClients} 
                    onChange={(e) => setHappyClients(e.target.value)} 
                    placeholder="e.g., 5+"
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Website</label>
                  <input 
                    type="url" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={website} 
                    onChange={(e) => setWebsite(e.target.value)} 
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Email Address</label>
                  <input 
                    type="email" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>Location</label>
                  <input 
                    type="text" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Social Links Tab */}
            {activeTab === 'social' && (
              <div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>
                    <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
                  </label>
                  <input 
                    type="url" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={github} 
                    onChange={(e) => setGithub(e.target.value)} 
                    placeholder="https://github.com/username"
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>
                    <FaLinkedin style={{ marginRight: '0.5rem' }} /> LinkedIn
                  </label>
                  <input 
                    type="url" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={linkedin} 
                    onChange={(e) => setLinkedin(e.target.value)} 
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>
                    <FaTwitter style={{ marginRight: '0.5rem' }} /> Twitter
                  </label>
                  <input 
                    type="url" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={twitter} 
                    onChange={(e) => setTwitter(e.target.value)} 
                    placeholder="https://twitter.com/username"
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: '500' }}>
                    <FaInstagram style={{ marginRight: '0.5rem' }} /> Instagram
                  </label>
                  <input 
                    type="url" 
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                    value={instagram} 
                    onChange={(e) => setInstagram(e.target.value)} 
                    placeholder="https://instagram.com/username"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem 1.5rem 1.5rem 1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          flexShrink: 0
        }}>
          <button 
            onClick={handleSave}
            style={{
              flex: 1,
              padding: '0.75rem',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              border: 'none',
              borderRadius: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <FaSave /> Save Changes
          </button>
          <button 
            onClick={onClose}
            style={{
              flex: 1,
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Cancel
          </button>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 15px ${colors.primary}80`,
              zIndex: 1001
            }}
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileEditModal;