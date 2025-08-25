import React from "react";
import { useNavigate } from "react-router-dom"; 
import EnterpriseDashboard from "../../assets/EnterpriseDashboard.png"

const FinanceBanking = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .finance-container {
          min-height: 100vh;
          background: #ffffff; /* ✅ Changed to White */
          position: relative;
          overflow-x: hidden;
        }

        .hero {
          text-align: center;
          padding: 120px 20px 100px;
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          color: #0f172a; /* ✅ Dark heading */
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .hero .subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #334155; /* ✅ Dark gray */
          max-width: 800px;
          margin: 0 auto 40px;
          line-height: 1.6;
          font-weight: 400;
        }

        .hero-cta {
          display: inline-flex;
          gap: 20px;
          margin-top: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary {
          padding: 18px 36px;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(20, 184, 166, 0.3);
          letter-spacing: 0.02em;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(20, 184, 166, 0.4);
        }

        .btn-secondary {
          padding: 18px 36px;
          font-size: 1.1rem;
          font-weight: 600;
          border: 2px solid rgba(0, 0, 0, 0.1); /* ✅ Light border */
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.05); /* ✅ Light gray */
          color: #0f172a;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: rgba(20, 184, 166, 0.6);
          background: rgba(20, 184, 166, 0.1);
          transform: translateY(-2px);
        }

        .services {
          margin: 100px auto;
          max-width: 1400px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header .badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(20, 184, 166, 0.1);
          color: #14b8a6;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          border: 1px solid rgba(20, 184, 166, 0.2);
        }

        .services h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f172a; /* ✅ Dark heading */
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .services .subtitle {
          font-size: 1.2rem;
          color: #475569; /* ✅ Mid gray */
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 32px;
          margin-top: 60px;
        }

        .service-card {
          background: #f8fafc; /* ✅ Light card */
          border-radius: 20px;
          padding: 40px 32px;
          text-align: left;
          border: 1px solid #e2e8f0; /* ✅ Light border */
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: #f1f5f9;
          border-color: #14b8a6;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 24px;
          color: white;
          font-weight: 600;
        }

        .service-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #0f172a; /* ✅ Dark heading */
          letter-spacing: -0.01em;
        }

        .service-card p {
          font-size: 1rem;
          color: #334155; /* ✅ Dark gray */
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .service-link {
          color: #14b8a6;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: #0891b2;
          transform: translateX(4px);
        }

        .about {
          background: #f9fafb; /* ✅ Light background */
          border-radius: 32px;
          padding: 80px 40px;
          margin: 120px auto;
          max-width: 1400px;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .about-content h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          margin-bottom: 24px;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .about-content .highlight {
          color: #14b8a6;
          font-weight: 700;
        }

        .about-content p {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .stat-item {
          text-align: center;
          padding: 24px;
          background: rgba(20, 184, 166, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(20, 184, 166, 0.2);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          color: #14b8a6;
          display: block;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #475569;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact {
          text-align: center;
          padding: 100px 20px;
          position: relative;
          z-index: 2;
        }

        .contact h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 24px;
          color: #0f172a; /* ✅ Dark heading */
        }

        .contact p {
          color: #334155;
          font-size: 1.2rem;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
      `}</style>

      <div className="finance-container">
        {/* Hero Section */}
        <div className="hero">
          <h1>Enterprise Finance & Banking Solutions</h1>
          <p className="subtitle">
            Transform your business with cutting-edge financial technology. Our comprehensive suite of banking solutions delivers enterprise-grade security, scalability, and performance that Fortune 500 companies trust.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={()=>navigate("/consultantform")}>Get Started Today</button>
            <button className="btn-secondary" onClick={()=>navigate("/contact")}>Schedule Demo</button>
          </div>
        </div>

        {/* Services */}
        <div className="services">
          <div className="section-header">
            <div className="badge">Our Solutions</div>
            <h2>Comprehensive Financial Services</h2>
            <p className="subtitle">
              Built for enterprise scale with bank-level security and compliance standards
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">DB</div>
              <h3>Digital Banking Platform</h3>
              <p>Next-generation digital banking infrastructure with real-time processing, advanced analytics, and seamless integration capabilities.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">IA</div>
              <h3>Investment Advisory</h3>
              <p>AI-powered wealth management solutions with portfolio optimization, risk assessment, and personalized investment strategies.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">RM</div>
              <h3>Risk Management</h3>
              <p>Advanced risk analytics and compliance solutions that protect your assets while ensuring regulatory adherence across all markets.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">CF</div>
              <h3>Corporate Finance</h3>
              <p>Strategic financial solutions including capital structuring, M&A advisory, and treasury management for enterprise growth.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about">
          <div className="about-content">
            <h2>Trusted by <span className="highlight">Global Leaders</span></h2>
            <p>
              For over two decades, we've been at the forefront of financial innovation, delivering mission-critical banking solutions to Fortune 500 companies and emerging fintech leaders worldwide. Our platform processes over $2 trillion in transactions annually with 99.99% uptime.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Enterprise Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$2T+</span>
                <span className="stat-label">Annual Volume</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.99%</span>
                <span className="stat-label">Uptime SLA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Global Support</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-placeholder">
              <img 
                src={EnterpriseDashboard} 
                alt="Enterprise Dashboard"
                style={{ width: "100%", maxWidth: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Join industry leaders who trust our platform for their most critical financial operations. 
            Let's discuss how we can accelerate your digital transformation.
          </p> 
          <button className="btn-primary" onClick={() => navigate("/contact")}>Contact Our Enterprise Team</button>
        </div>
      </div>
    </>
  );
};

export default FinanceBanking;
