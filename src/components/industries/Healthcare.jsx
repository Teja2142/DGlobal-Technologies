import React from "react";

const Healthcare = () => {
  const handleNavigate = () => {
    // Navigation function - replace with your routing solution
    console.log("Navigate to contact page");
  };
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: #1e293b;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .healthcare-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          width: 100%;
        }

        /* Background Elements */
        .healthcare-container::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: min(600px, 50vw);
          height: min(600px, 50vw);
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        .healthcare-container::after {
          content: '';
          position: absolute;
          bottom: -300px;
          left: -300px;
          width: min(800px, 60vw);
          height: min(800px, 60vw);
          background: radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        .hero {
          text-align: center;
          padding: clamp(60px, 12vh, 100px) clamp(20px, 5vw, 40px) clamp(80px, 15vh, 120px);
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0891b2 100%);
          position: relative;
          color: white;
          margin-bottom: clamp(60px, 12vh, 100px);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: clamp(2rem, 8vw, 4rem);
          margin-bottom: clamp(16px, 3vw, 24px);
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .hero p {
          font-size: clamp(1rem, 3vw, 1.4rem);
          opacity: 0.95;
          line-height: 1.6;
          font-weight: 400;
          max-width: min(700px, 90vw);
          margin: 0 auto;
        }

        .section {
          margin-bottom: clamp(80px, 15vh, 120px);
          padding: 0 clamp(20px, 5vw, 40px);
        }

        .section-title {
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          text-align: center;
          margin-bottom: clamp(40px, 8vh, 60px);
          font-weight: 700;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #1e40af 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          line-height: 1.2;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: clamp(60px, 15vw, 80px);
          height: 4px;
          background: linear-gradient(90deg, #14b8a6, #06b6d4);
          border-radius: 2px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(350px, 90vw), 1fr));
          gap: clamp(24px, 5vw, 40px);
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: clamp(16px, 4vw, 24px);
          padding: clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px);
          box-shadow: 
            0 20px 40px rgba(30, 58, 138, 0.1),
            0 8px 16px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.5);
          width: 100%;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #14b8a6, #06b6d4, #0891b2);
          border-radius: clamp(16px, 4vw, 24px) clamp(16px, 4vw, 24px) 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 
            0 32px 64px rgba(30, 58, 138, 0.15),
            0 16px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .card:hover::before {
          opacity: 1;
        }

        .icon-placeholder {
          width: clamp(60px, 12vw, 80px);
          height: clamp(60px, 12vw, 80px);
          border-radius: clamp(12px, 3vw, 20px);
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin: 0 auto clamp(16px, 3vw, 24px);
          font-weight: 600;
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.3);
          transition: all 0.3s ease;
        }

        .card:hover .icon-placeholder {
          transform: scale(1.05) rotate(3deg);
          box-shadow: 0 12px 32px rgba(20, 184, 166, 0.4);
        }

        .card h3 {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          margin-bottom: clamp(12px, 2.5vw, 16px);
          font-weight: 600;
          color: #1e40af;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .card p {
          color: #475569;
          line-height: 1.6;
          font-size: clamp(0.9rem, 2.2vw, 1rem);
          font-weight: 400;
        }

        .section-gray {
          background-color: rgba(241, 245, 249, 0.7);
          padding: clamp(32px, 6vw, 40px);
          border-radius: clamp(16px, 3vw, 24px);
          margin: clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .cta {
          text-align: center;
          padding: clamp(60px, 12vh, 80px) clamp(24px, 5vw, 40px);
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: white;
          border-radius: clamp(20px, 4vw, 32px);
          margin: 0 clamp(20px, 5vw, 40px) clamp(40px, 8vh, 60px);
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 50%);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta h2 {
          font-size: clamp(1.8rem, 5vw, 2.6rem);
          margin-bottom: clamp(16px, 3vw, 20px);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .cta p {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          margin-bottom: clamp(24px, 5vw, 32px);
          opacity: 0.9;
          max-width: min(600px, 90vw);
          margin-left: auto;
          margin-right: auto;
          margin-bottom: clamp(24px, 5vw, 32px);
          font-weight: 400;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: clamp(14px, 3vw, 18px) clamp(28px, 6vw, 36px);
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.3);
          white-space: nowrap;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(20, 184, 166, 0.4);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:active {
          transform: translateY(0) scale(1.01);
        }

        /* Ensure touch targets are adequate */
        .cta-button {
          min-height: 48px;
          min-width: 120px;
        }

        /* Handle very small screens */
        @media (max-width: 320px) {
          .grid {
            grid-template-columns: 1fr;
          }
          
          .hero h1 {
            font-size: 1.8rem;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
        }

        /* Ensure readability on small screens */
        @media (max-height: 600px) {
          .hero {
            padding: 40px clamp(20px, 5vw, 40px) 60px;
          }
          
          .section {
            margin-bottom: 60px;
          }
        }
      `}</style>

      <div className="healthcare-container">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-content">
            <h1>Healthcare & Life Sciences</h1>
            <p>
              Empowering hospitals, clinics, and researchers with cutting-edge digital
              transformation solutions that revolutionize patient care and save lives.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="section">
          <h2 className="section-title">Our Healthcare Solutions</h2>
          <div className="grid">
            <div className="card">
              <div className="icon-placeholder">📋</div>
              <h3>Electronic Health Records</h3>
              <p>
                Enterprise-grade EHR systems with advanced security, seamless integration,
                and complete HIPAA compliance for comprehensive patient data management.
              </p>
            </div>
            <div className="card">
              <div className="icon-placeholder">📱</div>
              <h3>Telemedicine Platform</h3>
              <p>
                Revolutionary telehealth solutions featuring HD video consultations,
                real-time diagnostics, and integrated patient monitoring systems.
              </p>
            </div>
            <div className="card">
              <div className="icon-placeholder">📊</div>
              <h3>Healthcare Analytics</h3>
              <p>
                AI-powered predictive analytics and intelligent dashboards that transform
                medical data into actionable insights for improved patient outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="section section-gray">
          <h2 className="section-title">Why Industry Leaders Choose Us</h2>
          <div className="grid">
            <div className="card">
              <div className="icon-placeholder">🔒</div>
              <h3>Enterprise Security</h3>
              <p>
                Bank-level encryption, multi-factor authentication, and comprehensive
                compliance with HIPAA, GDPR, and global healthcare regulations.
              </p>
            </div>
            <div className="card">
              <div className="icon-placeholder">⚡</div>
              <h3>24/7 Expert Support</h3>
              <p>
                Dedicated healthcare technology specialists providing round-the-clock
                support with 99.9% uptime guarantee and rapid response protocols.
              </p>
            </div>
            <div className="card">
              <div className="icon-placeholder">🚀</div>
              <h3>Next-Gen Innovation</h3>
              <p>
                Cutting-edge AI, machine learning, IoT integration, and cloud-native
                architecture designed to transform healthcare delivery and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta">
          <div className="cta-content">
            <h2>Ready to Transform Healthcare?</h2>
            <p>
              Join leading healthcare organizations worldwide. Partner with us to build
              innovative digital solutions that save lives and drive operational excellence.
            </p>
            <button
                className="cta-button"
                onClick={handleNavigate}
              >
                Start Your Transformation
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Healthcare;