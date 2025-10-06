import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Component/Button';
import './Contact.css';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'Oladejialabi22@gmail.com',
      link: 'mailto:Oladejialabi22@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone/Whatsapp',
      value: '+234 (816) 805-3286',
      link: 'tel:+2348168053286'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Ogbomoso, Nigeria',
      link: '#'
    }
  ];

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(50, 'Must be 50 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(
        /^[\+]?[1-9][\d]{0,15}$/,
        'Please enter a valid phone number'
      ),
    subject: Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(100, 'Must be 100 characters or less')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Must be at least 10 characters')
      .max(500, 'Must be 500 characters or less')
      .required('Message is required'),
    budget: Yup.string()
      .required('Please select a budget range'),
    timeline: Yup.string()
      .required('Please select a timeline'),
    agreement: Yup.boolean()
      .oneOf([true], 'You must agree to the terms')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitStatus('sending');
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', values);
      setSubmitStatus('success');
      resetForm();
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="contact-title">
                Let’s <span className="text-gradient">Build</span> Together 
              </h1>
              <p className="contact-subtitle">
                I’m open to freelance projects, full-time opportunities, and collaborations. If you have an idea or project in mind, feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section-padding">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="contact-info">
                <h3 className="info-title">Let's Start a Conversation</h3>
                <p className="info-description">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Reach out and let's create something extraordinary together.
                </p>
                
                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-method">
                      <div className="method-icon">{info.icon}</div>
                      <div className="method-content">
                        <span className="method-label">{info.label}</span>
                        <a href={info.link} className="method-value">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="response-time">
                  <h4 className="response-title">⚡ Quick Response</h4>
                  <p className="response-text">
                    I typically respond to all inquiries within 24 hours. 
                    For urgent projects, feel free to call me directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-container">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    budget: '',
                    timeline: '',
                    agreement: false
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, values }) => (
                    <Form className="contact-form">
                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="alert alert-success">
                          <strong>✅ Success!</strong> Your message has been sent successfully. 
                          I'll get back to you within 24 hours.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="alert alert-error">
                          <strong>❌ Error!</strong> Something went wrong. Please try again or 
                          contact me directly via email.
                        </div>
                      )}

                      {/* Name Fields */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                              First Name <span className="required">*</span>
                            </label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              className="form-control"
                              placeholder="Your first name"
                            />
                            <ErrorMessage name="firstName" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                              Last Name <span className="required">*</span>
                            </label>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              className="form-control"
                              placeholder="Your last name"
                            />
                            <ErrorMessage name="lastName" component="div" className="error-message" />
                          </div>
                        </div>
                      </div>

                      {/* Contact Fields */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="email" className="form-label">
                              Email Address <span className="required">*</span>
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="your.email@example.com"
                            />
                            <ErrorMessage name="email" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <Field
                              type="tel"
                              id="phone"
                              name="phone"
                              className="form-control"
                              placeholder="+1 (555) 123-4567"
                            />
                            <ErrorMessage name="phone" component="div" className="error-message" />
                          </div>
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="form-group mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject <span className="required">*</span>
                        </label>
                        <Field
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="What's this about?"
                        />
                        <ErrorMessage name="subject" component="div" className="error-message" />
                      </div>

                      {/* Project Details */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="budget" className="form-label">
                              Budget Range <span className="required">*</span>
                            </label>
                            <Field as="select" id="budget" name="budget" className="form-control">
                              <option value="">Select budget range</option>
                              <option value="under-1k">Under $1,000</option>
                              <option value="1k-5k">$1,000 - $5,000</option>
                              <option value="5k-10k">$5,000 - $10,000</option>
                              <option value="10k-15k">$10,000 - $15,000</option>
                              <option value="over-15k">Over $15,000</option>
                            </Field>
                            <ErrorMessage name="budget" component="div" className="error-message" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="timeline" className="form-label">
                              Timeline <span className="required">*</span>
                            </label>
                            <Field as="select" id="timeline" name="timeline" className="form-control">
                              <option value="">Select timeline</option>
                              <option value="asap">ASAP</option>
                              <option value="1-month">Within 1 month</option>
                              <option value="1-3-months">1-3 months</option>
                              <option value="3-6-months">3-6 months</option>
                              <option value="flexible">I'm flexible</option>
                            </Field>
                            <ErrorMessage name="timeline" component="div" className="error-message" />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group mb-4">
                        <label htmlFor="message" className="form-label">
                          Message <span className="required">*</span>
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          rows="6"
                          className="form-control"
                          placeholder="Tell me about your project, goals, and any specific requirements..."
                        />
                        <ErrorMessage name="message" component="div" className="error-message" />
                        <div className="character-count">
                          {values.message.length}/500 characters
                        </div>
                      </div>

                      {/* Agreement */}
                      <div className="form-group mb-4">
                        <div className="checkbox-wrapper">
                          <Field
                            type="checkbox"
                            id="agreement"
                            name="agreement"
                            className="checkbox-input"
                          />
                          <label htmlFor="agreement" className="checkbox-label">
                            I agree that my personal data will be processed according to the 
                            <a href="#" className="privacy-link"> Privacy Policy</a>
                            <span className="required"> *</span>
                          </label>
                        </div>
                        <ErrorMessage name="agreement" component="div" className="error-message" />
                      </div>

                      {/* Submit Button */}
                      <div className="form-submit">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          className={submitStatus === 'sending' ? 'loading' : ''}
                        >
                          {submitStatus === 'sending' ? 'Sending Message...' : 'Send Message'}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;