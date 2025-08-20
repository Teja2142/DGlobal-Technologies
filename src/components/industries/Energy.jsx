import React from "react";
import hydro from "../../assets/Energy/hydro.png";
import wind from "../../assets/Energy/wind.png";
import smartgrids from "../../assets/Energy/smartgrids.jpeg";
const Energy = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          line-height: 1.6;
          color: #1e3a8a;
        }
        
        .energy-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          position: relative;
          overflow-x: hidden;
        }
        
        .energy-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero {
          text-align: center;
          padding: 120px 20px 100px;
          position: relative;
          z-index: 2;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #10b981, transparent);
          opacity: 0.8;
        }
        
        .hero h1 {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        
        .hero p {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #cbd5e1;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 400;
          opacity: 0.9;
        }
        
        .section {
          margin: 100px auto;
          max-width: 1400px;
          padding: 60px 40px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15),
                      0 0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
          border: 1px solid rgba(16, 185, 129, 0.1);
        }
        
        .section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #1e3a8a, #10b981, #1e3a8a);
          border-radius: 32px 32px 0 0;
        }
        
        .section h2 {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 20px;
          color: #1e3a8a;
          letter-spacing: -0.01em;
          position: relative;
        }
        
        .section h2::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #1e3a8a, #10b981);
          border-radius: 2px;
        }
        
        .subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 30px auto 60px;
          font-weight: 500;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }
        
        .card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-radius: 24px;
          padding: 40px 32px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(30, 58, 138, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 24px;
        }
        
        .card:hover::before {
          opacity: 1;
        }
        
        .card:hover {
          transform: translateY(-12px);
          box-shadow: 0 32px 64px rgba(30, 58, 138, 0.15),
                      0 0 0 1px rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.3);
        }
        
        .image-placeholder {
          width: 100%;
          height: 200px;
          border-radius: 20px;
          background: linear-gradient(135deg, #1e3a8a, #10b981);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }
        
        .image-placeholder::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg);
          transition: transform 0.6s ease;
        }
        
        .card:hover .image-placeholder::before {
          transform: rotate(45deg) translate(100%, 100%);
        }
        
        .card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1e3a8a;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
        }
        
        .card p {
          color: #475569;
          line-height: 1.7;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          z-index: 1;
        }
        
        .cta {
          text-align: center;
          margin: 120px auto 80px;
          position: relative;
          z-index: 2;
        }
        
        .cta button {
          padding: 20px 48px;
          border: none;
          border-radius: 16px;
          font-size: 1.2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e3a8a 0%, #10b981 100%);
          color: white;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        
        .cta button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .cta button:hover::before {
          left: 100%;
        }
        
        .cta button:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 20px 40px rgba(30, 58, 138, 0.4),
                      0 0 0 4px rgba(16, 185, 129, 0.2);
        }
        
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin: 80px 0 60px;
          padding: 40px;
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border-radius: 20px;
          border: 1px solid rgba(16, 185, 129, 0.1);
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          color: #10b981;
          display: block;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 8px;
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 40px 24px;
            margin: 60px 20px;
          }
          
          .hero {
            padding: 80px 20px 60px;
          }
          
          .grid {
            gap: 24px;
            grid-template-columns: 1fr;
          }
          
          .card {
            padding: 32px 24px;
          }
          
          .stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          
          .cta button {
            padding: 16px 32px;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="energy-container">
        {/* Hero Section */}
        <div className="hero">
          <h1>Powering a Sustainable Future</h1>
          <p>
            At D-Global Technologies, we engineer breakthrough solutions in renewable and clean energy. 
            Our mission drives the world toward smarter, greener, and exponentially more efficient energy systems 
            that power sustainable growth for enterprises globally.
          </p>
        </div>

        {/* Energy Solutions Section */}
        <div className="section">
          <h2>Enterprise Energy Solutions</h2>
          <p className="subtitle">
            Transforming how organizations harness, distribute, and optimize energy through cutting-edge technology and strategic innovation.
          </p>
          
          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime Guaranteed</span>
            </div>
            <div className="stat">
              <span className="stat-number">2.5GW</span>
              <span className="stat-label">Energy Generated</span>
            </div>
            <div className="stat">
              <span className="stat-number">85%</span>
              <span className="stat-label">Cost Reduction</span>
            </div>
          </div>
          
          <div className="grid">
            <div className="card">
              <div className="image-placeholder"><img src={hydro} alt="Solar Energy"/></div>
              <h3>Enterprise Solar Solutions</h3>
              <p>Industrial-scale solar installations with AI-optimized performance monitoring and predictive maintenance capabilities for maximum ROI and operational efficiency.</p>
            </div>
            <div className="card">
              <div className="image-placeholder"><img src={wind} alt="Wind Energy"/></div>
              <h3>Advanced Wind Power</h3>
              <p>Next-generation wind turbine technology with smart grid integration, delivering consistent renewable energy output for large-scale commercial operations.</p>
            </div>
            <div className="card">
              <div className="image-placeholder"><img src={hydro} alt="Solar Energy"/></div>
              <h3>Hydro Energy Systems</h3>
              <p>Engineered hydroelectric solutions that leverage water resources for sustainable power generation with minimal environmental impact and maximum efficiency.</p>
            </div>
            <div className="card">
              <div className="image-placeholder"><img src={smartgrids} alt="Smart Grids"/></div>
              <h3>Intelligent Grid Infrastructure</h3>
              <p>AI-powered smart grid technology that optimizes energy distribution, reduces waste, and provides real-time analytics for strategic energy management.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta">
          <button>Explore Our Energy Portfolio</button>
        </div>
      </div>
    </>
  );
};

export default Energy;