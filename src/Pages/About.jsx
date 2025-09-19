import React from 'react';
import Button from '../Component/Button';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'WordPress Design', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'Postman', level: 82 },
    { name: 'Firebase', level: 80 },
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Awards Won' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="About me"
                  className="img-fluid rounded shadow-custom"
                />
                <div className="experience-badge">
                  <span className="experience-number">2</span>
                  <span className="experience-text">Years<br/>Experience</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h1 className="about-title">
                  About <span className="text-gradient">Me</span>
                </h1>
                <p className="about-description">
                  I'm a passionate Full Stack Developer with 2 years of experience 
                  in creating digital solutions that matter. I specialize in modern web 
                  technologies and have a keen eye for design.
                </p>
                <p className="about-description">
                  My journey started with a curiosity about how things work on the web, 
                  and it has evolved into a career where I get to solve complex problems 
                  and create beautiful, functional applications every day.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span>Problem Solver</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Innovation Focused</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Fast Learner</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-link">
                <Button variant="primary" size="lg" className="mt-4">
                    Let's Work Together
                </Button>
                </Link>
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
              <h2 className="section-title">My Skills</h2>
              <p className="section-subtitle">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item mb-4">
                  <div className="skill-header d-flex justify-content-between align-items-center mb-2">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="row">
            {achievements.map((achievement, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="achievement-card text-center">
                  <h3 className="achievement-number">{achievement.number}</h3>
                  <p className="achievement-label">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title mb-4">My Philosophy</h2>
              <p className="philosophy-text">
                "Great design is not just about how it looks, but how it works. 
                I believe in creating solutions that are not only beautiful but also 
                functional, accessible, and meaningful to the people who use them."
              </p>
              <div className="philosophy-author">
                <strong>- Oladeji Alabi</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;