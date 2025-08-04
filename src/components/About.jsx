import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  const values = [
    { title: 'Client Success:', text: 'Your growth defines ours.' },
    { title: 'Innovation:', text: 'We stay on top of trends so you stay ahead of the competition.' },
    { title: 'Transparency:', text: 'Open communication, honest pricing, and measurable impact.' },
    { title: 'Community Focus:', text: 'Proudly supporting the small businesses that power St. Louis.' },
    { title: 'Excellence:', text: 'Every detail matters — from code to content.' },
  ];

  const processSteps = [
    { num: 1, title: "Discover", desc: "We dive deep into your business, goals, and challenges.", color: "#667eea" },
    { num: 2, title: "Strategize", desc: "We design a tailored plan to grow your online presence.", color: "#764ba2" },
    { num: 3, title: "Create", desc: "We build websites, apps, and campaigns that work for you.", color: "#f093fb" },
    { num: 4, title: "Launch & Support", desc: "We go live and stay with you every step of the way.", color: "#f5576c" },
    { num: 5, title: "Optimize", desc: "We analyze, tweak, and grow as your business evolves.", color: "#4facfe" }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const FloatingShapes = () => (
    <div className="floating-shapes">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-shape"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
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
        
        .about-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a202c;
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        .floating-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .floating-shape {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 50%;
          animation: floatShape infinite linear;
          filter: blur(1px);
        }
        
        @keyframes floatShape {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(90vh) rotate(36deg) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-10vh) rotate(324deg) scale(1);
          }
          100% {
            transform: translateY(-20vh) rotate(360deg) scale(0);
            opacity: 0;
          }
        }
        
        .hero-section {
          position: relative;
          min-height: 70vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
          z-index: 1;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 0 2rem;
          animation: heroFadeIn 1.5s ease-out;
        }
        
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
          animation: titlePulse 3s ease-in-out infinite;
        }
        
        @keyframes titlePulse {
          0%, 100% { text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3); }
          50% { text-shadow: 2px 4px 30px rgba(255, 255, 255, 0.5); }
        }
        
        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          font-weight: 400;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
          animation: subtitleSlide 1.5s ease-out 0.5s both;
        }
        
        @keyframes subtitleSlide {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 0.95;
            transform: translateX(0);
          }
        }
        
        .content-wrapper {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .section {
          padding: 5rem 0;
          position: relative;
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .who-we-are {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        
        .who-we-are-content {
          animation: slideInLeft 1s ease-out;
        }
        
        .who-we-are-image {
          animation: slideInRight 1s ease-out;
          position: relative;
        }
        
        .who-we-are-image::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          z-index: -1;
          opacity: 0.3;
        }
        
        .who-we-are-image img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease;
        }
        
        .who-we-are-image img:hover {
          transform: scale(1.05) rotate(2deg);
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .mission-vision {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          border-radius: 24px;
          padding: 4rem 2rem;
          margin: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .mission-vision::before {
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
        
        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }
        
        .mission-card, .vision-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .mission-card::before, .vision-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .mission-card:hover, .vision-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }
        
        .mission-card:hover::before, .vision-card:hover::before {
          left: 100%;
        }
        
        .difference-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .difference-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(102, 126, 234, 0.1);
        }
        
        .difference-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }
        
        .difference-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.4s ease;
        }
        
        .difference-card:hover .difference-icon {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
        
        .values-list {
          max-width: 800px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }
        
        .value-item {
          background: white;
          margin-bottom: 1.5rem;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border-left: 4px solid transparent;
          opacity: 0;
          transform: translateX(50px);
          animation: valueSlideIn 0.6s ease-out forwards;
        }
        
        .value-item:nth-child(1) { animation-delay: 0.1s; border-left-color: #667eea; }
        .value-item:nth-child(2) { animation-delay: 0.2s; border-left-color: #764ba2; }
        .value-item:nth-child(3) { animation-delay: 0.3s; border-left-color: #f093fb; }
        .value-item:nth-child(4) { animation-delay: 0.4s; border-left-color: #f5576c; }
        .value-item:nth-child(5) { animation-delay: 0.5s; border-left-color: #4facfe; }
        
        @keyframes valueSlideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .value-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }
        
        .process-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 24px;
          padding: 4rem 2rem;
          margin: 4rem 0;
          position: relative;
        }
        
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .process-step {
          text-align: center;
          position: relative;
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          animation: processStepIn 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .process-step:nth-child(1) { animation-delay: 0.1s; }
        .process-step:nth-child(2) { animation-delay: 0.2s; }
        .process-step:nth-child(3) { animation-delay: 0.3s; }
        .process-step:nth-child(4) { animation-delay: 0.4s; }
        .process-step:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes processStepIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .process-step:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        
        .process-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          position: relative;
          z-index: 3;
          transition: all 0.4s ease;
        }
        
        .process-step:hover .process-number {
          transform: scale(1.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          color: white;
          margin: 4rem 0;
          position: relative;
          overflow: hidden;
          animation: ctaGlow 3s ease-in-out infinite alternate;
        }
        
        @keyframes ctaGlow {
          from { box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3); }
          to { box-shadow: 0 30px 80px rgba(102, 126, 234, 0.5); }
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 4s infinite;
          pointer-events: none;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        .cta-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          background: #f8fafc;
        }
        
        .animate-in {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .who-we-are {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .mission-vision-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .difference-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .process-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .section {
            padding: 3rem 0;
          }
          
          .mission-vision, .process-section, .cta-section {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <div className="about-container">
        <FloatingShapes />
        
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">About DGlobal Technology</h1>
            <p className="hero-subtitle">
              Empowering small and medium businesses with innovative, practical, and scalable digital solutions designed to help them thrive in today's increasingly connected world.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Who We Are Section */}
          <div className="section" data-id="who-we-are">
            <div className={`who-we-are ${isVisible['who-we-are'] ? 'animate-in' : ''}`}>
              <div className="who-we-are-content">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Who We Are
                </h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#4a5568' }}>
                  At DGlobal Technologies, we don't just build digital solutions — we build digital momentum. Rooted in India, we focus on transforming small and medium enterprises into future-ready brands by crafting smart, scalable, and impactful digital experiences.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#4a5568' }}>
                  Whether you're a family-owned store, a fast-growing startup, or a long-standing neighborhood brand, we bring your vision to life through custom websites, mobile applications, and results-driven digital marketing strategies.
                </p>
              </div>
              <div className="who-we-are-image">
                <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: '600' }}>
                  DGlobal Team Image
                </div>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="mission-vision" data-id="mission-vision">
            <div className={`mission-vision-grid ${isVisible['mission-vision'] ? 'animate-in' : ''}`}>
              <div className="mission-card">
                <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Our Mission
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.7' }}>
                  At DGlobal Technologies, we simplify digital transformation by delivering affordable, high-quality, and tailored digital solutions. Our mission is to be the trusted technology partner for ambitious entrepreneurs and growing enterprises.
                </p>
              </div>
              <div className="vision-card">
                <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Why We Exist
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.7' }}>
                  DGlobal Technologies was founded with a clear vision: countless ambitious businesses were falling behind simply because they lacked the technical expertise to embrace digital transformation. We set out to change that.
                </p>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="section" data-id="difference">
            <h2 className="section-title">What Makes Us Different</h2>
            <div className={`difference-grid ${isVisible['difference'] ? 'animate-in' : ''}`}>
              {[
                { title: 'Local Understanding', desc: 'We know what St. Louis businesses need because we are one.', icon: '🎯' },
                { title: 'Client-First Culture', desc: 'We don\'t offer one-size-fits-all packages. We listen, strategize, and build around your unique needs.', icon: '❤️' },
                { title: 'Transparent Process', desc: 'No jargon, no hidden fees — just clear communication and dependable service.', icon: '🔍' },
                { title: 'Real Results', desc: 'We don\'t just build digital products; we help drive real growth.', icon: '📈' }
              ].map((item, index) => (
                <div key={index} className="difference-card">
                  <div className="difference-icon">
                    <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3748' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="section" data-id="values">
            <h2 className="section-title">Our Core Values</h2>
            <ul className={`values-list ${isVisible['values'] ? 'animate-in' : ''}`}>
              {values.map((val, i) => (
                <li key={i} className="value-item">
                  <strong style={{ color: '#2d3748', fontSize: '1.1rem' }}>{val.title}</strong>{' '}
                  <span style={{ color: '#4a5568' }}>{val.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Process */}
          <div className="section" data-id="process">
            <h2 className="section-title">Our Process</h2>
            <div className="process-section">
              <div className={`process-grid ${isVisible['process'] ? 'animate-in' : ''}`}>
                {processSteps.map((step, index) => (
                  <div key={step.num} className="process-step">
                    <div className="process-number" style={{ background: step.color }}>
                      {step.num}
                    </div>
                    <h5 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#2d3748', fontWeight: '600' }}>
                      {step.title}
                    </h5>
                    <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section" data-id="cta">
            <div className={isVisible['cta'] ? 'animate-in' : ''}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Ready to take your business online?
              </h2>
              <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: '0.9' }}>
                Let's build something powerful together.
              </p>
              <button className="cta-button">
                Book a free consultation today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;