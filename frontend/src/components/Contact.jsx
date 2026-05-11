import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-light/5">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Contact Info */}
          <div className="flex-1">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg border border-light/10">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:abhayyeskar55@gmail.com" className="text-light/60 hover:text-primary">
                    abhayyeskar55@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg border border-light/10">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:9359897507" className="text-light/60 hover:text-primary">
                    +91 9359897507
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-lg border border-light/10">
                <div className="p-3 bg-primary/20 rounded-full">
                  <FaMapMarker className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-light/60">Nagpur, Maharashtra, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/AbhayYeskar" target="_blank" rel="noopener noreferrer" className="p-3 bg-light/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/abhayyeskar" target="_blank" rel="noopener noreferrer" className="p-3 bg-light/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com/abhayyeskar" target="_blank" rel="noopener noreferrer" className="p-3 bg-light/10 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form (Spring Boot Backend) */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light/10 border border-light/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light/10 border border-light/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light/10 border border-light/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">✅ Message sent successfully! Stored in database.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">❌ Failed to send. Please try again!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;