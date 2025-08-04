import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://getform.io/f/byvplyla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const FloatingElements = () => (
    <div className="floating-elements">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="floating-element"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .contact-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
          background-size: 400% 400%;
          animation: gradientFlow 12s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: floatUp infinite linear;
        }
        
        .floating-element:nth-child(odd) {
          background: rgba(255, 255, 255, 0.2);
          width: 4px;
          height: 4px;
        }
        
        .floating-element:nth-child(3n) {
          background: rgba(255, 255, 255, 0.6);
          width: 8px;
          height: 8px;
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          width: 100%;
          max-width: 1000px;
          align-items: center;
        }
        
        .contact-info {
          color: white;
          animation: slideInLeft 1s ease-out;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .contact-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
          animation: titleGlow 3s ease-in-out infinite alternate;
        }
        
        @keyframes titleGlow {
          from { text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3); }
          to { text-shadow: 2px 4px 30px rgba(255, 255, 255, 0.5); }
        }
        
        .contact-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
          animation: subtitleFade 1s ease-out 0.5s both;
        }
        
        @keyframes subtitleFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 0.9;
            transform: translateY(0);
          }
        }
        
        .contact-details {
          margin-top: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          animation: contactItemSlide 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(-30px);
        }
        
        .contact-item:nth-child(1) { animation-delay: 0.8s; }
        .contact-item:nth-child(2) { animation-delay: 1s; }
        .contact-item:nth-child(3) { animation-delay: 1.2s; }
        
        @keyframes contactItemSlide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(10px);
        }
        
        .contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-size: 1.2rem;
        }
        
        .form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
          animation: slideInRight 1s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .form-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
          background-size: 200% 100%;
          animation: gradientSlide 3s ease-in-out infinite;
        }
        
        @keyframes gradientSlide {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .form-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
        }
        
        .form-subtitle {
          text-align: center;
          color: #6b7280;
          margin-bottom: 2rem;
          font-size: 1rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          font-family: inherit;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
          background: white;
        }
        
        .form-input:hover, .form-textarea:hover {
          border-color: #d1d5db;
          transform: translateY(-1px);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1.2rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          margin-top: 1rem;
        }
        
        .submit-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }
        
        .submit-button:active {
          transform: translateY(-1px);
        }
        
        .submit-button:disabled {
          background: #d1d5db;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .loading-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .status-message {
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 500;
          animation: statusSlide 0.5s ease-out;
        }
        
        @keyframes statusSlide {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .status-success {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);
          color: #065f46;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .status-error {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%);
          color: #7f1d1d;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .single-column {
          grid-template-columns: 1fr;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .single-column .contact-info {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .single-column .contact-details {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .single-column .contact-item {
          flex-direction: column;
          text-align: center;
          padding: 1.5rem 1rem;
          min-width: 150px;
        }
        
        .single-column .contact-icon {
          margin: 0 0 0.5rem 0;
        }
        
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .contact-info {
            text-align: center;
          }
          
          .contact-details {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          
          .contact-item {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem 1rem;
            min-width: 140px;
            margin-bottom: 1rem;
          }
          
          .contact-icon {
            margin: 0 0 0.5rem 0;
          }
          
          .form-container {
            padding: 2rem;
          }
        }
        
        @media (max-width: 640px) {
          .content-wrapper {
            padding: 1rem;
          }
          
          .contact-details {
            flex-direction: column;
            align-items: center;
          }
          
          .contact-item {
            width: 100%;
            max-width: 300px;
          }
          
          .form-container {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="contact-container" id="contact">
        <FloatingElements />
        
        <div className="content-wrapper">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subtitle">
                Ready to transform your business with cutting-edge digital solutions? Let's start a conversation and bring your vision to life.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'white', fontWeight: '600' }}>Email Us</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>hello@dglobal.tech</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'white', fontWeight: '600' }}>Call Us</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'white', fontWeight: '600' }}>Visit Us</h4>
                    <p style={{ margin: 0, opacity: 0.9 }}>St. Louis, MO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-container">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">We'd love to hear about your project and how we can help.</p>
              
              {submitStatus && (
                <div className={`status-message ${submitStatus === 'success' ? 'status-success' : 'status-error'}`}>
                  {submitStatus === 'success' 
                    ? '✅ Message sent successfully! We\'ll get back to you soon.'
                    : '❌ Failed to send message. Please try again.'
                  }
                </div>
              )}
              
              <div onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, and how we can help you succeed..."
                    rows="5"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;