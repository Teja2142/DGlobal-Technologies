import React, { useState } from 'react';
import jobs from "../data/jobs.json"; 
import JobSection from './JobSection';
const Careers = () => {

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
          margin-top: 60px;
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
        .image-placeholder {
  width: 100%;
  max-width: 800px;   
  margin: 40px auto;  
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08); 
}

.image-placeholder img {
  width: 100%;
  height: auto;      
  border-radius: 16px;
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
         <JobSection/>


          {/* Immigration Support */}
          <div className="immigration-section">
            <h2 className="values-title">Immigration & Green Card Support</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>
              At D-Global Tech, we actively support talented professionals with work visas, OPT/CPT, H-1B, and Green Card processing. Our HR team works closely with you to ensure a smooth process.
            </p>
             <div className="image-placeholder">
              <img src="https://images.unsplash.com/photo-1673837552454-9ec933815419?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="greencard"/>

            </div>
          </div>

          {/* Form */}
          

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
              <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>📧 HR@Dglobaltech.com</span>
              <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>📞 +1-469-529-2700</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;