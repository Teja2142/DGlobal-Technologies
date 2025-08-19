import React, { useState } from 'react';

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
  const [filter, setFilter] = useState('All');

  // Sample jobs for demo
  const jobs = [
    { title: 'Full Stack Developer', category: 'Tech', location: 'Remote', type: 'Full-time' },
    { title: 'Cloud Engineer', category: 'Tech', location: 'On-site', type: 'Full-time' },
    { title: 'Healthcare Data Analyst', category: 'Healthcare', location: 'Hybrid', type: 'Contract' },
    { title: 'Financial Systems Consultant', category: 'Finance', location: 'Remote', type: 'Full-time' },
    { title: 'UI/UX Designer', category: 'Tech', location: 'Remote', type: 'Contract' }
  ];

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.category === filter);

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

  const FloatingParticles = () => (
    <div className="floating-particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 15}s`
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
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .careers-container {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e5e7eb 75%, #f9fafb 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          overflow-x: hidden;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(99, 102, 241, 0.4);
          border-radius: 50%;
          animation: float linear infinite;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .alert-banner {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 16px 24px;
          margin: 20px 0;
          border-radius: 16px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(10px);
          animation: slideInDown 0.8s ease-out;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-section {
          text-align: center;
          padding: 80px 0;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #1f2937, #374151);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 20px rgba(0,0,0,0.1);
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
        }

        .values-section {
          margin: 80px 0;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .values-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          background: linear-gradient(135deg, #1f2937, #374151);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.01em;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px 32px;
          border-radius: 24px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.5);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .value-card:hover::before {
          opacity: 1;
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: #1f2937;
        }

        .value-description {
          color: #6b7280;
          line-height: 1.6;
          font-weight: 400;
        }

        .jobs-section {
          margin: 80px 0;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 32px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
          animation: slideInUp 0.8s ease-out 0.4s both;
        }

        .jobs-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          text-align: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.01em;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-buttons button {
          padding: 12px 24px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: #f3f4f6;
          color: #6b7280;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .filter-buttons button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transition: left 0.3s ease;
        }

        .filter-buttons button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .filter-buttons button.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .job-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }

        .job-card:hover::before {
          transform: scaleY(1);
        }

        .job-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1f2937;
        }

        .job-card p {
          color: #6b7280;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .job-card small {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .immigration-section {
          margin: 80px 0;
          text-align: center;
          animation: slideInUp 0.8s ease-out 0.6s both;
        }

        .immigration-section p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4b5563;
          font-weight: 400;
        }

        .form-container {
          margin: 80px 0;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 32px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
          animation: slideInUp 0.8s ease-out 0.8s both;
        }

        .form-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.01em;
        }

        .error-banner {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 16px 24px;
          margin-bottom: 32px;
          border-radius: 12px;
          font-weight: 500;
          text-align: center;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #374151;
          font-size: 0.95rem;
        }

        .form-input, .form-select, .form-textarea {
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          font-family: 'Inter', sans-serif;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .file-input {
          padding: 16px;
          border: 2px dashed #d1d5db;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #fafafa;
        }

        .file-input:hover {
          border-color: #667eea;
          background: #f8faff;
        }

        .submit-button {
          width: 100%;
          padding: 18px 32px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
          position: relative;
          overflow: hidden;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.3);
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .success-container {
          text-align: center;
          padding: 80px 40px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 32px;
          margin: 80px 0;
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
          animation: zoomIn 0.6s ease-out;
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .success-icon {
          font-size: 4rem;
          color: #10b981;
          margin-bottom: 24px;
          display: inline-block;
          animation: bounce 1s ease-in-out;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        .success-container h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1f2937;
        }

        .success-container p {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 32px;
        }

        .testimonials-section {
          margin: 80px 0;
          text-align: center;
          animation: slideInUp 0.8s ease-out 1s both;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 50px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px 32px;
          border-radius: 24px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(226, 232, 240, 0.5);
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 16px;
          left: 24px;
          font-size: 4rem;
          color: rgba(99, 102, 241, 0.2);
          font-family: serif;
          line-height: 1;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .testimonial-card p {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 24px;
          font-style: italic;
          position: relative;
          z-index: 1;
        }

        .testimonial-card strong {
          color: #1f2937;
          font-weight: 600;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 0 16px;
          }
          
          .hero-section {
            padding: 60px 0;
          }
          
          .values-section, .jobs-section, .form-container {
            padding: 40px 24px;
            margin: 60px 0;
          }
          
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-buttons {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .values-title, .jobs-title, .form-title {
            font-size: 1.8rem;
          }
          
          .values-section, .jobs-section, .form-container {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div className="careers-container">
        <FloatingParticles />

        <div className="content-wrapper">
          {/* Alert */}
          <div className="alert-banner">
            ⚠️ <strong>Important Notice:</strong> We currently have limited openings — but we welcome your interest!
          </div>

          {/* Hero */}
          <div className="hero-section">
            <h1 className="hero-title">Future Opportunities at D-Global Tech</h1>
            <p className="hero-subtitle">We're always looking for talented people. Submit your profile, and we'll reach out when a matching role opens.</p>
          </div>

          {/* Why join */}
          <div className="values-section">
            <h2 className="values-title">Why Join D-Global Tech?</h2>
            <div className="values-grid">
              {[
                { icon: '🚀', title: 'Innovation at Scale', description: 'Work on cutting-edge tech that impacts millions.' },
                { icon: '🌍', title: 'Global Reach', description: 'Collaborate with teams and clients worldwide.' },
                { icon: '👥', title: 'Collaborative Excellence', description: 'A culture of mentorship and teamwork.' },
                { icon: '📈', title: 'Unlimited Growth', description: 'Learning, career advancement, and support.' }
              ].map((item, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{item.icon}</span>
                  <h3 className="value-title">{item.title}</h3>
                  <p className="value-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs Section */}
          <div className="jobs-section">
            <h2 className="jobs-title">Available Roles</h2>
            <div className="filter-buttons">
              {['All', 'Tech', 'Healthcare', 'Finance'].map(cat => (
                <button
                  key={cat}
                  className={filter === cat ? 'active' : ''}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            {filteredJobs.map((job, idx) => (
              <div key={idx} className="job-card">
                <h3>{job.title}</h3>
                <p>{job.location} • {job.type}</p>
                <small>Category: {job.category}</small>
              </div>
            ))}
          </div>

          {/* Immigration Support */}
          <div className="immigration-section">
            <h2 className="values-title">Immigration & Green Card Support</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              At D-Global Tech, we actively support talented professionals with work visas, OPT/CPT, H-1B, and Green Card processing. Our HR team works closely with you to ensure a smooth process.
            </p>
          </div>

          {/* Form */}
          {!submitted ? (
            <div className="form-container">
              <h2 className="form-title">Submit Your Resume</h2>
              {error && <div className="error-banner">{error}</div>}
              <form onSubmit={handleSubmit}>
                {/* Full Name & Email */}
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
                  </div>
                </div>
                {/* Phone & LinkedIn */}
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                {/* Position & Work Auth */}
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Position *</label>
                    <input type="text" name="position" value={formData.position} onChange={handleChange} required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Work Authorization *</label>
                    <select name="workAuth" value={formData.workAuth} onChange={handleChange} required className="form-select">
                      <option value="">Select...</option>
                      <option>OPT</option>
                      <option>CPT</option>
                      <option>H1B</option>
                      <option>Green Card</option>
                      <option>US Citizen</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                {/* Location & Availability */}
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Preferred Location *</label>
                    <select name="location" value={formData.location} onChange={handleChange} required className="form-select">
                      <option value="">Select...</option>
                      <option>Remote</option>
                      <option>On-site</option>
                      <option>Hybrid</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Availability *</label>
                    <input type="text" name="availability" value={formData.availability} onChange={handleChange} required className="form-input" />
                  </div>
                </div>
                {/* Resume */}
                <div className="form-group">
                  <label className="form-label">Resume *</label>
                  <input type="file" name="resume" onChange={handleFileChange} required accept=".pdf,.doc,.docx" className="file-input" />
                </div>
                {/* Comments */}
                <div className="form-group">
                  <label className="form-label">Comments</label>
                  <textarea name="comments" value={formData.comments} onChange={handleChange} className="form-textarea" placeholder="Tell us about yourself, your experience, or any specific interests..." />
                </div>
                {/* Submit */}
                <button type="submit" disabled={isLoading} className="submit-button">
                  {isLoading ? <div className="spinner" /> : 'Submit Application'}
                </button>
              </form>
            </div>
          ) : (
            <div className="success-container">
              <div className="success-icon">✔</div>
              <h2>Thank You!</h2>
              <p>We've received your application and will be in touch when we have a matching opportunity.</p>
              <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', linkedIn: '', position: '', workAuth: '', location: '', availability: '', comments: '', resume: null }); }} className="submit-button">Submit Another Application</button>
            </div>
          )}

          {/* Testimonials */}
          <div className="testimonials-section">
            <h2 className="values-title">What Our Team Says</h2>
            <div className="testimonials-grid">
              {[
                { name: 'Amit S.', role: 'Senior Developer', feedback: 'D-Global Tech sponsored my H-1B and gave me challenging projects that accelerated my career growth. The mentorship here is exceptional.' },
                { name: 'Sophia R.', role: 'Data Analyst', feedback: 'Amazing work-life balance with global exposure. The team is incredibly supportive and the projects are cutting-edge.' },
                { name: 'John D.', role: 'Cloud Engineer', feedback: 'From OPT to Green Card, D-Global was with me at every step. They truly invest in their people\'s long-term success.' }
              ].map((t, i) => (
                <div key={i} className="testimonial-card">
                  <p>{t.feedback}</p>
                  <strong>— {t.name}</strong>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '4px' }}>{t.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 0', 
            borderTop: '1px solid rgba(226, 232, 240, 0.8)', 
            marginTop: '80px',
            animation: 'fadeIn 1s ease-out 1.2s both'
          }}>
            <h3 style={{ 
              color: '#1f2937', 
              fontSize: '1.5rem', 
              marginBottom: '16px', 
              fontWeight: '600' 
            }}>Ready to Shape the Future?</h3>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.1rem', 
              maxWidth: '500px', 
              margin: '0 auto 32px' 
            }}>
              Join our innovative team and be part of technology solutions that make a difference.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>📧 hr@dglobaltech.com+</span>
              <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>📞 +1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;