import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaAward,
  FaProjectDiagram,
  FaRocket,
  FaRegClock,
} from "react-icons/fa";

const About = () => {
  const timelineEvents = [
    { year: "2018", title: "Founded", text: "D-Global Tech started with a vision to deliver agile, high-quality IT solutions." },
    { year: "2020", title: "Expanded Services", text: "Introduced dual-track model: consultant placement & in-house delivery." },
    { year: "2023", title: "Nationwide Reach", text: "Serving clients across the U.S. with a growing team of experts." },
    { year: "2025", title: "Future Focus", text: "Driving innovation, compliance excellence, and unmatched service." },
  ];

  return (
    <div className="about-page">
      <style jsx>{`
        .about-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.7;
          color: #2d3748;
          overflow-x: hidden;
        }

        .section {
          padding: 80px 24px;
          position: relative;
        }

        .section-title {
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 700;
          text-align: center;
          margin-bottom: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        /* Timeline Styles */
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
          z-index: 1;
        }

        .timeline-item {
          padding: 30px 0;
          position: relative;
          width: 50%;
          opacity: 0;
          animation: slideInUp 0.8s ease forwards;
        }

        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.4s; }
        .timeline-item:nth-child(4) { animation-delay: 0.6s; }
        .timeline-item:nth-child(5) { animation-delay: 0.8s; }

        .timeline-item.left {
          left: 0;
          padding-right: 40px;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
          padding-left: 40px;
        }

        .timeline-content {
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .timeline-content:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.15);
        }

        .timeline-circle {
          position: absolute;
          top: 40px;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 0 6px rgba(255,255,255,1), 0 0 20px rgba(102, 126, 234, 0.3);
          animation: pulse 2s infinite;
        }

        .timeline-item.left .timeline-circle {
          right: -12px;
        }

        .timeline-item.right .timeline-circle {
          left: -12px;
        }

        .timeline-heading {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a202c;
        }

        .timeline-text {
          color: #4a5568;
          font-size: 16px;
        }

        /* Mission Vision Values Grid */
        .mvv-section {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          position: relative;
          overflow: hidden;
        }

        .mvv-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e2e8f0" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .mvv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .mvv-card {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          padding: 40px 30px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,255,255,0.3);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .mvv-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(102, 126, 234, 0.03) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .mvv-card:hover::before {
          opacity: 1;
        }

        .mvv-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 40px 100px rgba(0,0,0,0.15);
        }

        .mvv-icon {
          font-size: 64px;
          margin-bottom: 24px;
          display: block;
          transition: transform 0.4s ease;
        }

        .mvv-card:hover .mvv-icon {
          transform: scale(1.1) rotateY(15deg);
        }

        .mvv-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1a202c;
        }

        .mvv-text {
          color: #4a5568;
          font-size: 16px;
        }

        /* Philosophy Section */
        .philosophy-section {
          background: url('https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhZGVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .philosophy-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 0;
        }

        .philosophy-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          position: relative;
          z-index: 1;
        }

        .philosophy-content .section-title {
          color: white;
          -webkit-text-fill-color: white;
        }

        .philosophy-content .section-title::after {
          background: rgba(255,255,255,0.3);
        }

        .philosophy-text {
          font-size: 20px;
          line-height: 1.8;
          opacity: 0.95;
        }

        /* Differentiators Section */
        .diff-section {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
        }

        .diff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .diff-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: rgba(255,255,255,0.8);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          border: 1px solid rgba(255,255,255,0.5);
        }

        .diff-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          background: rgba(255,255,255,0.95);
        }

        .diff-icon {
          font-size: 40px;
          flex-shrink: 0;
          transition: transform 0.4s ease;
        }

        .diff-item:hover .diff-icon {
          transform: scale(1.1);
        }

        .diff-text {
          color: #4a5568;
          font-size: 16px;
        }

        /* About Intro Section */
        .about-intro-section {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
        }

        .about-intro-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          transition: transform 0.4s ease;
        }

        .about-image-wrapper:hover {
          transform: scale(1.02);
        }

        .about-image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .about-image-wrapper:hover::before {
          opacity: 1;
        }

        .about-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.05);
        }

        .about-content {
          padding: 20px 0;
        }

        .about-text {
          font-size: 18px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 24px;
          text-align: justify;
          position: relative;
          opacity: 0;
          animation: slideInRight 0.8s ease forwards;
        }

        .about-text:nth-child(1) { animation-delay: 0.2s; }
        .about-text:nth-child(2) { animation-delay: 0.4s; }
        .about-text:nth-child(3) { animation-delay: 0.6s; }

        .about-text:first-child {
          font-size: 20px;
          font-weight: 500;
          color: #2d3748;
        }

        .about-text:first-child::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #667eea, #764ba2);
          border-radius: 2px;
          margin-right: 20px;
          left: -20px;
        }

        /* Responsive Design for About Section */
        @media (max-width: 968px) {
          .about-intro-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .about-text {
            text-align: left;
          }

          .about-image {
            height: 300px;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .cta-section {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-text {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.4);
        }

        /* Animations */
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }

          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding-left: 80px !important;
            padding-right: 20px !important;
            text-align: left !important;
          }

          .timeline-circle {
            left: 18px !important;
            right: auto !important;
          }

          .section {
            padding: 60px 20px;
          }

          .mvv-grid,
          .diff-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .diff-item {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }
      `}</style>

      {/* About Section */}
      <section className="section about-intro-section">
        <div className="about-intro-container">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbSUyMHdvcmt8ZW58MHx8MHx8fDA%3D" 
              alt="team"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <p className="about-text">
              D-Global Tech is a forward-thinking, full-cycle IT solutions provider specializing in contract staffing and end-to-end project delivery. With a uniquely agile and quality-first approach, we connect enterprises with top-tier consultants under C2C and W2 models, while also executing complete technology projects through our in-house delivery teams.
            </p>
            <p className="about-text">
              Our expertise spans ERP solutions, full-stack development, quality assurance, cloud transformation, data engineering, and beyond, serving diverse industries including healthcare, finance, retail, manufacturing, and logistics. By combining deep technical screening with rapid deployment, we ensure that clients get the right talent and solutions—faster, smarter, and better.
            </p>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="section">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-circle"></div>
              <div className="timeline-content">
                <h3 className="timeline-heading">
                  {event.year} - {event.title}
                </h3>
                <p className="timeline-text">{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section mvv-section">
        <h2 className="section-title">Our Foundation</h2>
        <div className="mvv-grid">
          <div className="mvv-card">
            <FaBullseye className="mvv-icon" style={{ color: "#667eea" }} />
            <h3>Our Mission</h3>
            <p className="mvv-text">
              Deliver transformative IT solutions that empower businesses to
              thrive in the digital age.
            </p>
          </div>
          <div className="mvv-card">
            <FaLightbulb className="mvv-icon" style={{ color: "#f6ad55" }} />
            <h3>Our Vision</h3>
            <p className="mvv-text">
              To be the trusted partner for innovative, reliable, and agile
              technology services worldwide.
            </p>
          </div>
          <div className="mvv-card">
            <FaHandshake className="mvv-icon" style={{ color: "#48bb78" }} />
            <h3>Our Values</h3>
            <p className="mvv-text">
              Integrity, innovation, collaboration, and customer-first
              commitment guide everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section philosophy-section">
        <div className="philosophy-content">
          <h2 className="section-title">Leadership Philosophy</h2>
          <p className="philosophy-text">
            Our leadership believes in empowering teams, fostering innovation, and
            maintaining a client-centric approach. We lead by example, building an
            inclusive culture that values collaboration, growth, and excellence in
            every engagement.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section diff-section">
        <h2 className="section-title">What Makes Us Different</h2>
        <div className="diff-grid">
          <div className="diff-item">
            <FaProjectDiagram className="diff-icon" style={{ color: "#667eea" }} />
            <p className="diff-text">
              Dual-track services — consultant placement (C2C) & in-house
              project delivery for maximum flexibility.
            </p>
          </div>
          <div className="diff-item">
            <FaRegClock className="diff-icon" style={{ color: "#805ad5" }} />
            <p className="diff-text">
              Proactive compliance & streamlined onboarding for fast, secure
              project starts.
            </p>
          </div>
          <div className="diff-item">
            <FaAward className="diff-icon" style={{ color: "#f6ad55" }} />
            <p className="diff-text">
              Deep technical screening and vetting ensures top-tier, job-ready
              talent every time.
            </p>
          </div>
          <div className="diff-item">
            <FaUsers className="diff-icon" style={{ color: "#48bb78" }} />
            <p className="diff-text">
              White-glove client service with dedicated account management and
              long-term partnership focus.
            </p>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Let's Build Something Great Together
          </h2>
          <p className="cta-text">
            Partner with D-Global Tech for agile, quality-first technology
            solutions that drive real business results.
          </p>
          <button className="cta-button">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;