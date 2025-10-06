import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';
import './Services.css';

const Services = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring secure payments, inventory management, and analytics.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Paystack'],
      status: 'Completed',
      duration: '3 months'
    },
    // {
    //   id: 2,
    //   title: 'Mobile Banking App',
    //   category: 'Mobile Development',
    //   description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial analytics.',
    //   image: 'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=500',
    //   technologies: ['React ', 'Firebase', 'Redux', 'Stripe'],
    //   status: 'Completed',
    //   duration: '4 months'
    // },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      category: 'Frontend',
      description: 'An intuitive healthcare management dashboard for doctors and patients with appointment scheduling and medical record management.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Chart.js', 'Restful API', 'Express'],
      status: 'Completed',
      duration: '1 months'
    },
    {
      id: 3,
      title: 'Tech Agency Website',
      category: 'Frontend',
      description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculations, and agent management.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['JavaScript', 'Bootstrap', 'Animate.css', 'HTML & CSS'],
      status: 'Completed',
      duration: '1 month'
    },

    // {
    //   id: 4,
    //   title: 'Real Estate Platform',
    //   category: 'Full Stack',
    //   description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculations, and agent management.',
    //   image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=500',
    //   technologies: ['', '', '', ''],
    //   status: 'Completed',
    //   duration: '5 months'
    // },

    // {
    //   id: 5,
    //   title: 'Learning Management System',
    //   category: 'Web Development',
    //   description: 'An interactive learning platform with course creation tools, video streaming, progress tracking, and certification system.',
    //   image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=500',
    //   technologies: ['', '', '', ''],
    //   status: 'Completed',
    //   duration: '6 months'
    // },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'A complete food delivery ecosystem with customer, restaurant, and delivery partner apps, featuring real-time tracking.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      status: 'Work in Progress',
      duration: '4 months'
    }
  ];

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Full-stack web applications using modern frameworks and technologies',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatibility']
    },
    {
      icon: '📱',
      title: 'WordPress Design',
      description: 'I design and build professional, scalable, and easy-to-manage websites using WordPress',
      features: ['Custom WordPress Websites','Theme Customization', 'Plugin Integration', 'E-commerce with Woocommerce',]
    },
    // {
    //   icon: '🎨',
    //   title: 'UI/UX Design',
    //   description: 'User-centered design solutions that enhance user experience',
    //   features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    // },
    // {
    //   icon: '☁️',
    //   title: 'Cloud Solutions',
    //   description: 'Scalable cloud infrastructure and deployment solutions',
    //   features: ['AWS/Azure', 'Docker', 'CI/CD', 'Monitoring']
    // }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="services-title">
                My <span className="text-gradient">Services</span> & Projects
              </h1>
              <p className="services-subtitle">
                Delivering exceptional digital solutions that drive business growth and user satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">What I Offer</h2>
              <p className="section-subtitle">
                Comprehensive digital solutions tailored to your needs
              </p>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-4">
                <div className="service-card hover-lift">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Recent Projects</h2>
              <p className="section-subtitle">
                A showcase of successful projects and satisfied clients
              </p>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="project-card hover-lift">
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="img-fluid"
                    />
                    <div className="project-overlay">
                      <div className="project-actions">
                        <Button variant="primary" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <span className="project-category">{project.category}</span>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <div className="project-duration">
                        <span className="meta-label">Duration:</span>
                        <span className="meta-value">{project.duration}</span>
                      </div>
                      <div className="project-tech">
                        <span className="meta-label">Tech:</span>
                        <div className="tech-tags">
                          {project.technologies.slice(0, 2).map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="tech-tag more">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's discuss how we can bring your vision to life with cutting-edge technology and design.
              </p>
              <Link to="/contact" className="btn-link">
              <Button variant="accent" size="lg">
                  Get Started Today
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;