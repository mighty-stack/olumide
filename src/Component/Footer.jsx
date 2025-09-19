import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mighty-stack', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/oladeji-olumide-alabi', icon: '💼' },
    { name: 'Twitter', url: 'https://x.com/i_m_olumide', icon: '🐦' },
    { name: 'Instagram', url: 'https://www.instagram.com/i_am_.olumide', icon: '📷' }
  ];

  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Olumide</h5>
              <p className="footer-description">
                Creating digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="social-link"
                    title={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Quick Links</h6>
              <ul className="footer-links">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Services</h6>
              <ul className="footer-links">
                <li><span className="footer-link">Web Development</span></li>
                <li><span className="footer-link">WordPress Design</span></li>
                <li><span className="footer-link">UI/UX Design</span></li>
                <li><span className="footer-link">Consulting</span></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section">
              <h6 className="footer-subtitle">Contact Info</h6>
              <div className="contact-info">
                <p className="contact-item">
                  <span className="contact-icon">📧</span>
                  oladejialabi22@gmail.com
                </p>
                <p className="contact-item">
                  <span className="contact-icon">📱</span>
                  +234 (816) 805-3286
                </p>
                <p className="contact-item">
                  <span className="contact-icon">📍</span>
                  Ogbomoso, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <p className="copyright">
                © {currentYear} Portfolio. All rights reserved.
              </p>
              <p className="footer-note">
                Built with ❤️ using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;