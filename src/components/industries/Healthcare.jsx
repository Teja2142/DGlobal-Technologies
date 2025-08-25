import React from "react";
import { useNavigate } from "react-router-dom";

const Healthcare = () => {
  const navigate = useNavigate();
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
  width: 100%;   /* ✅ added */
}

        .healthcare-container {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

/* ✅ On large desktops keep max-width */
@media (min-width: 1400px) {
  .healthcare-container {
    max-width: 1400px;
  }
}



        /* Background Elements */
        .healthcare-container::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        .healthcare-container::after {
          content: '';
          position: absolute;
          bottom: -300px;
          left: -300px;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(30, 58, 138, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
        }

        .hero {
          text-align: center;
          padding: clamp(60px, 8vw, 100px) 20px clamp(80px, 10vw, 120px);
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0891b2 100%);
          position: relative;
          color: white;
          margin-bottom: clamp(60px, 10vw, 100px);
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
          font-size: clamp(2rem, 6vw, 4rem);
          margin-bottom: 24px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          opacity: 0.95;
          line-height: 1.7;
          font-weight: 400;
          max-width: 700px;
          margin: 0 auto;
        }

        .section {
          margin-bottom: clamp(60px, 10vw, 120px);
          padding: 0 clamp(16px, 5vw, 40px);
        }

        .section-title {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          text-align: center;
          margin-bottom: 40px;
          font-weight: 700;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #1e40af 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #14b8a6, #06b6d4);
          border-radius: 2px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* FIXED */
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: clamp(20px, 5vw, 40px) clamp(16px, 4vw, 32px);
          box-shadow: 
            0 20px 40px rgba(30, 58, 138, 0.1),
            0 8px 16px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #14b8a6, #06b6d4, #0891b2);
          border-radius: 24px 24px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 32px 64px rgba(30, 58, 138, 0.15),
            0 16px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .card:hover::before {
          opacity: 1;
        }

        .icon-placeholder {
          width: clamp(50px, 8vw, 80px);
          height: clamp(50px, 8vw, 80px);
          border-radius: 20px;
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: clamp(1.2rem, 4vw, 2rem);
          margin: 0 auto 24px;
          font-weight: 600;
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.3);
          transition: all 0.3s ease;
        }

        .card:hover .icon-placeholder {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 32px rgba(20, 184, 166, 0.4);
        }

        .card h3 {
          font-size: 1.2rem;
          margin-bottom: 16px;
          font-weight: 600;
          color: #1e40af;
          letter-spacing: -0.01em;
        }

        .card p {
          color: #475569;
          line-height: 1.7;
          font-size: 1rem;
          font-weight: 400;
        }

        .cta {
          text-align: center;
          padding: clamp(40px, 8vw, 80px) clamp(16px, 5vw, 40px);
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: white;
          border-radius: clamp(16px, 5vw, 32px);
          margin: 0 clamp(12px, 3vw, 40px) clamp(32px, 5vw, 60px);
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
          font-size: clamp(1.6rem, 4vw, 2.6rem);
          margin-bottom: 20px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .cta p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          margin-bottom: 32px;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.3);
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
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 32px rgba(20, 184, 166, 0.4);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:active {
          transform: translateY(0) scale(1.02);
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
              <div className="icon-placeholder">🩺</div>
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
        <div
          className="section"
          style={{ backgroundColor: "lightgray", padding: "40px", borderRadius: "10px" }}
        >
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
              onClick={() => navigate("/contact")}
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
