import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Hi, I'm <span className="text-gradient">Olumide</span>
                </h1>
                <h2 className="hero-subtitle">
                  Full Stack Developer & WordPress Designer
                </h2>
                <p className="hero-description">
                  I create beautiful, responsive, and user-friendly web applications 
                  that solve real-world problems. Let's bring your ideas to life!
                </p>
                <div className="hero-buttons">
                  <Link to="/services" className="btn-link">
                  <Button variant="primary" size="lg" className="me-3">
                      View My Work
                  </Button>
                  </Link>

                   <Link to="/contact" className="btn-link-outline">
                  <Button variant="outline" size="lg">
                      Get In Touch
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-card">
                  <img 
                    src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500" 
                    alt="Developer workspace"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">What I Do</h2>
              <p className="section-subtitle">
                Passionate about creating exceptional digital experiences
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="skill-card hover-lift">
                <div className="skill-icon">
                  🎨
                </div>
                <h4 className="skill-title">WordPress Design</h4>
                <p className="skill-description">
                  Creating intuitive and beautiful user interfaces that provide 
                  excellent user experiences across all devices.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="skill-card hover-lift">
                <div className="skill-icon">
                  💻
                </div>
                <h4 className="skill-title">Web Development</h4>
                <p className="skill-description">
                  Building responsive and scalable web applications using modern 
                  technologies and best practices.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="skill-card hover-lift">
                <div className="skill-icon">
                  📱
                </div>
                <h4 className="skill-title">UI/UX Design</h4>
                <p className="skill-description">
                  Creating user-centered designs that enhance the overall user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's work together to create something amazing that will make a difference.
              </p>
              <Link to="/contact" className="btn-link">
              <Button variant="accent" size="lg">
                  Start a Project
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;