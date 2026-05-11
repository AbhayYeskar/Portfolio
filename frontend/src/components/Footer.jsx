import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-light/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-light/50 text-sm">
          © {currentYear} Abhay Yeskar. All rights reserved. Built with React & Tailwind CSS 💙
        </p>
      </div>
    </footer>
  );
};

export default Footer;