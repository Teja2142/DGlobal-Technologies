import React from "react";
import { useNavigate } from "react-router-dom";

const RetailECommerce = () => {
  const navigate=useNavigate();
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
          font-family: 'Montserrat', sans-serif;
          line-height: 1.6;
        }

        .page-container {
          background: #ffffff;
          color: #1e293b;
          overflow-x: hidden;
        }

        .hero {
          position: relative;
          text-align: center;
          padding: 120px 24px 100px;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%);
          color: white;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(16,185,129,0.1)"/><stop offset="100%" style="stop-color:transparent"/></radialGradient></defs><circle cx="200" cy="200" r="300" fill="url(%23grad)"/><circle cx="800" cy="600" r="400" fill="url(%23grad)"/></svg>') no-repeat center;
          background-size: cover;
          opacity: 0.6;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 32px;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #d1fae5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: clamp(1.125rem, 2vw, 1.375rem);
          max-width: 700px;
          margin: 0 auto 48px;
          line-height: 1.7;
          color: #e2e8f0;
          font-weight: 400;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 40px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          text-decoration: none;
          border-radius: 16px;
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 24px;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .section-header p {
          font-size: 1.25rem;
          max-width: 800px;
          margin: 0 auto;
          color: #64748b;
          line-height: 1.8;
          font-weight: 400;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 80px;
        }

        .feature-card {
          background: white;
          padding: 48px 40px;
          border-radius: 24px;
          text-align: left;
          transition: all 0.4s ease;
          border: 1px solid #f1f5f9;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #10b981 0%, #059669 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
          border-color: #e2e8f0;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          color: white;
          font-size: 32px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .feature-card p {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.7;
          font-weight: 400;
        }

        .stats-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 100px 24px;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 60px;
          max-width: 1200px;
          margin: 80px auto 0;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: #10b981;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 1.125rem;
          color: #475569;
          font-weight: 600;
        }

        .cta-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
          color: white;
          padding: 120px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-section h2 {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .cta-section p {
          font-size: 1.25rem;
          margin-bottom: 48px;
          color: #e2e8f0;
          line-height: 1.7;
        }

        .cta-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          padding: 20px 48px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          text-decoration: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
          border: none;
          cursor: pointer;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }

        .cta-secondary {
          padding: 20px 48px;
          background: transparent;
          color: white;
          text-decoration: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 80px 20px 60px;
          }

          .section {
            padding: 80px 20px;
          }

          .features {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .feature-card {
            padding: 40px 32px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Enterprise Retail & eCommerce Solutions</h1>
            <p>
              Transform your retail business with cutting-edge, scalable digital commerce platforms. 
              Drive growth, enhance customer experience, and dominate your market with enterprise-grade solutions.
            </p>
            <button className="hero-cta" onClick={()=>navigate("/contact")}>Start Your Transformation<span>→</span></button>
            
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="section-header">
            <h2>Comprehensive eCommerce Capabilities</h2>
            <p>
              End-to-end digital commerce solutions engineered for enterprise growth. 
              From custom platforms to advanced analytics — we deliver measurable results.
            </p>
          </div>
          
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">🏪</div>
              <h3>Custom Enterprise Platforms</h3>
              <p>
                Scalable, high-performance eCommerce platforms built for enterprise needs. 
                Advanced architecture supporting millions of products and concurrent users.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile-First Commerce</h3>
              <p>
                Progressive web applications and native mobile solutions that deliver 
                seamless shopping experiences across all devices and platforms.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Enterprise Security & Payments</h3>
              <p>
                PCI-compliant payment processing with advanced fraud detection. 
                Multi-gateway integration with enterprise-grade security protocols.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics & AI</h3>
              <p>
                Real-time business intelligence with predictive analytics. 
                AI-powered personalization and automated inventory optimization.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Cloud Infrastructure</h3>
              <p>
                Auto-scaling cloud architecture with 99.99% uptime guarantee. 
                Global CDN integration for lightning-fast performance worldwide.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>System Integration</h3>
              <p>
                Seamless integration with ERP, CRM, and inventory management systems. 
                API-first architecture for maximum flexibility and scalability.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="section-header">
            <h2>Proven Enterprise Results</h2>
            <p>
              Our solutions drive measurable impact for enterprise retail clients worldwide.
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.99%</div>
              <div className="stat-label">Platform Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40%</div>
              <div className="stat-label">Average Revenue Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Enterprise Support</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Scale Your Enterprise?</h2>
            <p>
              Partner with the industry leaders in enterprise eCommerce solutions. 
              Let's architect your digital transformation and accelerate your growth.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary" onClick={()=>navigate("/consultantform")}>Schedule Consultation</button>
              <button className="cta-secondary">View Case Studies</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RetailECommerce;