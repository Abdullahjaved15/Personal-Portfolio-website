import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>abdullahch23504@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>0327-6776015</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/abdullah-javed-646368315/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/abdullah-javed-646368315
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <div>
                  <h4>Education</h4>
                  <p>COMSATS University Islamabad, Sahiwal Campus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="whatsapp-sidebar">
            <div className="whatsapp-card">
              <h3>Quick Contact</h3>
              <p>Chat with me on WhatsApp</p>
              <a href="https://wa.me/923276776015" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 