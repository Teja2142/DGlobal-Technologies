import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    position: '',
    workAuth: '',
    location: '',
    availability: '',
    comments: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();

      // Mapping formData keys to backend expected field names
      const backendFieldMap = {
        fullName: 'full_name',
        email: 'email',
        phone: 'phone',
        linkedIn: 'linkedin',
        position: 'role',
        workAuth: 'work_auth_status',
        location: 'preferred_location',
        availability: 'availability',
        comments: 'comments'
      };

      Object.keys(formData).forEach(key => {
        if (key !== 'resume' && formData[key]) {
          formDataToSend.append(backendFieldMap[key], formData[key]);
        }
      });

      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('https://jenkins-server.kgktechnologies.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit your information. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };


  const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!formData.fullName.trim()) return "Full name is required.";
  if (!emailRegex.test(formData.email)) return "Invalid email format.";
  if (!phoneRegex.test(formData.phone)) return "Phone number must be 10 digits.";
  if (!formData.position.trim()) return "Position is required.";
  if (!formData.workAuth) return "Work authorization is required.";
  if (!formData.location) return "Preferred location is required.";
  if (!formData.availability.trim()) return "Availability is required.";
  if (!formData.resume) return "Resume is required.";

  return null; // valid
};


  const FloatingParticles = () => (
    <div className="floating-particles">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        .careers-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float infinite linear;
        }
        
        @keyframes float {
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
        }
        
        .alert-banner {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.95) 0%, rgba(255, 142, 83, 0.95) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 24px 32px;
          margin-bottom: 40px;
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
          animation: slideInDown 0.8s ease-out;
        }
        
        @keyframes slideInDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .hero-section {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
          margin-bottom: 60px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 1s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 3s infinite;
          pointer-events: none;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 24px;
          color: white;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
          animation: titleGlow 2s ease-in-out infinite alternate;
          position: relative;
          z-index: 2;
        }
        
        @keyframes titleGlow {
          from { text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3); }
          to { text-shadow: 2px 4px 30px rgba(255, 255, 255, 0.4); }
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 400;
          position: relative;
          z-index: 2;
        }
        
        .form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
          animation: slideInUp 0.8s ease-out 0.3s both;
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
        
        @keyframes slideInUp {
          from {
            transform: translateY(80px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .form-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .form-group {
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #374151;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          font-family: inherit;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
          background: white;
        }
        
        .form-input:hover, .form-select:hover, .form-textarea:hover {
          border-color: #d1d5db;
          transform: translateY(-1px);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .file-input {
          width: 100%;
          padding: 20px;
          border: 2px dashed #d1d5db;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .file-input:hover {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          transform: translateY(-2px);
        }
        
        .submit-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          max-width: 320px;
          margin: 30px auto 0;
          display: block;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
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
        
        .success-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
          animation: successBounce 0.8s ease-out;
        }
        
        @keyframes successBounce {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .success-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 30px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .values-section {
          margin-top: 80px;
          text-align: center;
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        
        .values-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 60px;
          color: white;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }
        
        .value-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .value-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.95);
        }
        
        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .value-card:hover::before {
          left: 100%;
        }
        
        .value-icon {
          font-size: 3.5rem;
          margin-bottom: 24px;
          display: block;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .value-title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .value-description {
          line-height: 1.7;
          color: #6b7280;
          font-size: 1rem;
        }
        
        .error-banner {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.9) 100%);
          backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 16px 24px;
          margin-bottom: 24px;
          font-weight: 500;
          text-align: center;
          animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 1rem;
          }
          
          .hero-section {
            padding: 60px 30px;
            margin-bottom: 40px;
          }
          
          .form-container {
            padding: 30px 20px;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .values-section {
            margin-top: 60px;
          }
          
          .values-grid {
            gap: 24px;
          }
        }
      `}</style>

      <div className="careers-container">
        <FloatingParticles />
        
        <div className="content-wrapper">
          {/* Alert Banner */}
          <div className="alert-banner">
            <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>⚠️</span>
            <strong>Important Notice:</strong> We currently have no open positions, but we welcome your interest! Submit your details and we'll contact you when opportunities arise.
          </div>

          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="hero-title">Future Opportunities at DGlobal Technologies</h1>
            <p className="hero-subtitle">
              We're always seeking exceptional talent to join our innovative team. While we may not be actively hiring, we believe in building relationships with outstanding professionals like you.
            </p>
          </div>

          {/* Form or Success Message */}
          {!submitted ? (
            <div className="form-container">
              <h2 className="form-title">Express Your Interest</h2>
              
              {error && (
                <div className="error-banner">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Position/Role Interested In *</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="e.g., Software Engineer, Product Manager"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Work Authorization Status *</label>
                    <select
                      name="workAuth"
                      value={formData.workAuth}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select your status...</option>
                      <option value="OPT">OPT</option>
                      <option value="CPT">CPT</option>
                      <option value="H1B">H1B</option>
                      <option value="Green Card">Green Card</option>
                      <option value="US Citizen">US Citizen</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Preferred Work Location *</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select preference...</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Availability to Start *</label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="e.g., Immediately, 2 weeks notice"
                    />
                  </div>
                </div>
                
                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">Resume Upload *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="file-input"
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: '32px' }}>
                  <label className="form-label">Additional Comments</label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us more about yourself, your interests, or anything else you'd like us to know..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="submit-button"
                >
                  {isLoading ? (
                    <div className="spinner" />
                  ) : (
                    'Submit Your Interest'
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="success-container">
              <div className="success-icon">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Thank You!
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 40px', color: '#6b7280' }}>
                Your interest has been successfully submitted! We've received your information and will reach out when opportunities that match your profile become available.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    linkedIn: '',
                    position: '',
                    workAuth: '',
                    location: '',
                    availability: '',
                    comments: '',
                    resume: null
                  });
                }}
                className="submit-button"
                style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
              >
                Submit Another Response
              </button>
            </div>
          )}

          {/* Values Section */}
          <div className="values-section">
            <h2 className="values-title">Why Choose DGlobal Technologies?</h2>
            
            <div className="values-grid">
              {[
                {
                  icon: '🚀',
                  title: 'Innovation at Scale',
                  description: 'Work on groundbreaking projects that push the boundaries of technology and create meaningful impact in the digital world.'
                },
                {
                  icon: '🌍',
                  title: 'Global Reach',
                  description: 'Your contributions will reach millions of users worldwide, making a real difference in how people interact with technology.'
                },
                {
                  icon: '👥',
                  title: 'Collaborative Excellence',
                  description: 'Join a diverse team of passionate professionals who value knowledge sharing, mentorship, and collective growth.'
                },
                {
                  icon: '📈',
                  title: 'Unlimited Growth',
                  description: 'Experience continuous learning opportunities, career advancement paths, and the support to achieve your professional goals.'
                }
              ].map((item, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{item.icon}</span>
                  <h3 className="value-title">{item.title}</h3>
                  <p className="value-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;