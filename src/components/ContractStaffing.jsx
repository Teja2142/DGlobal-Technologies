import React, { useEffect, useState } from "react";

import Erp from "../assets/ServicesImages/Erp.png";
import Etl from "../assets/ServicesImages/Etl.jpeg";
import fullstack from "../assets/ServicesImages/full-stack-web-development.jpg";
import Qa from "../assets/ServicesImages/Qa.jpeg";
import salesforce from "../assets/ServicesImages/salesforce.png";

import c2c from "../assets/ServicesImages/c2c.jpeg";
import TechLogosMarquee from "./TechLogosMarquee";

const ContractStaffing = () => {
  const [navbarHeight, setNavbarHeight] = useState(100);

  useEffect(() => {
    const calculateNavbarHeight = () => {
      // Try to find the navbar element by common selectors
      const navbar = document.querySelector('nav') || 
                    document.querySelector('.navbar') || 
                    document.querySelector('[role="navigation"]') ||
                    document.querySelector('header');
      
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height + 20); // Add 20px extra spacing
      } else {
        // Fallback heights based on screen size
        const width = window.innerWidth;
        if (width <= 480) {
          setNavbarHeight(200);
        } else if (width <= 768) {
          setNavbarHeight(180);
        } else if (width <= 1024) {
          setNavbarHeight(160);
        } else {
          setNavbarHeight(120);
        }
      }
    };

    // Calculate on mount
    calculateNavbarHeight();

    // Recalculate on window resize
    window.addEventListener('resize', calculateNavbarHeight);
    
    // Also try to calculate after a short delay in case navbar loads later
    const timeoutId = setTimeout(calculateNavbarHeight, 500);

    return () => {
      window.removeEventListener('resize', calculateNavbarHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .services-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          padding-top: ${navbarHeight}px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
          position: relative;
          overflow-x: hidden;
        }

        .services-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23cbd5e1" fill-opacity="0.3"><circle cx="30" cy="30" r="2"/></g></svg>') repeat;
          pointer-events: none;
        }

        .services-inner {
          position: relative;
          z-index: 1;
          padding: 80px 20px 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        .services-header h1 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .services-header p {
          font-size: clamp(16px, 2.5vw, 20px);
          color: #475569;
          font-weight: 400;
          letter-spacing: 0.5px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .service-section {
          margin-bottom: 80px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 50px 40px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(148, 163, 184, 0.2);
          border: 1px solid rgba(203, 213, 225, 0.3);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: slideInUp 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }

        .service-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
        }

        .service-section:nth-child(even) {
          animation-delay: 0.5s;
        }

        .service-section h2 {
          font-size: clamp(24px, 4vw, 32px);
          color: #1e293b;
          margin-bottom: 30px;
          font-weight: 600;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .service-section h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
          border-radius: 2px;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          justify-items: center;
        }

        .service-list.five-items {
          grid-template-areas: 
            "item1 item2 item3"
            "item4 item5 .";
        }

        .service-list.five-items .service-card:nth-child(1) { grid-area: item1; }
        .service-list.five-items .service-card:nth-child(2) { grid-area: item2; }
        .service-list.five-items .service-card:nth-child(3) { grid-area: item3; }
        .service-list.five-items .service-card:nth-child(4) { grid-area: item4; }
        .service-list.five-items .service-card:nth-child(5) { grid-area: item5; }

        .service-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
          padding: 40px 30px;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid rgba(226, 232, 240, 0.8);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          width: 100%;
          max-width: 350px;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 
            0 30px 60px rgba(59, 130, 246, 0.2),
            0 15px 35px rgba(0,0,0,0.12);
          border-color: rgba(59, 130, 246, 0.4);
          background: linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .service-card:hover::after {
          opacity: 1;
        }

        .service-card img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          margin-bottom: 25px;
          border-radius: 16px;
          background: linear-gradient(145deg, #f1f5f9, #e2e8f0);
          transition: all 0.3s ease;
        }

        .service-card:hover img {
          transform: scale(1.15) rotate(5deg);
          filter: brightness(1.1) contrast(1.1);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .service-card span {
          font-size: 18px;
          font-weight: 600;
          color: #334155;
          line-height: 1.4;
          transition: all 0.3s ease;
          z-index: 2;
          position: relative;
        }

        .service-card:hover span {
          color: #1e40af;
          font-weight: 700;
          transform: translateY(-2px);
        }

        .sub-section {
          margin-top: 50px;
          padding: 30px;
          background: linear-gradient(145deg, #f8fafc 0%, #ffffff 100%);
          border-radius: 16px;
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .sub-section h3 {
          font-size: clamp(18px, 3vw, 24px);
          margin-bottom: 20px;
          color: #1e293b;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sub-section h3::before {
          content: '';
          width: 4px;
          height: 24px;
          background: linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%);
          border-radius: 2px;
        }

        .sub-section p {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 20px;
          text-align: justify;
        }

        .sub-section ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .sub-section ul li {
          font-size: 15px;
          color: #475569;
          padding: 12px 20px;
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
          border-radius: 10px;
          border-left: 4px solid #3b82f6;
          position: relative;
          transition: all 0.3s ease;
        }

        .sub-section ul li:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
        }

        .sub-section ul li::before {
          content: '✓';
          position: absolute;
          left: -2px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 20px;
          background: #3b82f6;
          border-radius: 2px;
          color: #3b82f6;
          font-weight: bold;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sub-section.overview {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .sub-section.overview .overview-text {
          order: 1;
        }

        .sub-section.overview .overview-image {
          order: 2;
          margin: 0;
        }

        .tech-stack-section {
          background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 16px;
          padding: 20px;
          margin: 20px 0;
          overflow: hidden;
          border: 1px solid rgba(203, 213, 225, 0.5);
        }

        .sub-section.overview {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .sub-section.overview .overview-text {
          order: 1;
        }

        .sub-section.overview .overview-image {
          order: 2;
          margin: 0;
        }

        .overview-image {
          width: 100%;
          max-width: 400px;
          height: 250px;
          object-fit: cover;
          border-radius: 16px;
          margin: 0;
          display: block;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .overview-image:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .services-inner {
            padding: 60px 15px 40px;
          }
          
          .service-section {
            padding: 40px 30px;
            margin-bottom: 60px;
          }

          .service-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .service-list.five-items {
            grid-template-areas: 
              "item1 item2"
              "item3 item4"
              "item5 .";
          }

          .service-card {
            padding: 35px 25px;
          }

          .service-card img {
            width: 100px;
            height: 100px;
          }

          .sub-section.overview {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sub-section.overview .overview-text {
            order: 1;
          }

          .sub-section.overview .overview-image {
            order: 2;
            justify-self: center;
          }
        }

        @media (max-width: 768px) {
          .services-inner {
            padding: 40px 10px 30px;
          }

          .services-header {
            margin-bottom: 60px;
          }

          .service-section {
            padding: 30px 20px;
            margin-bottom: 40px;
            border-radius: 16px;
          }

          .service-list {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-list.five-items {
            grid-template-areas: 
              "item1"
              "item2"
              "item3"
              "item4"
              "item5";
          }

          .service-card {
            padding: 30px 25px;
            max-width: 100%;
          }

          .service-card img {
            width: 90px;
            height: 90px;
          }

          .service-card span {
            font-size: 16px;
          }

          .sub-section {
            padding: 20px;
            margin-top: 30px;
          }

          .sub-section.overview {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .sub-section ul {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .services-inner {
            padding: 30px 15px 20px;
          }

          .services-header {
            margin-bottom: 50px;
          }

          .services-header h1 {
            font-size: clamp(28px, 6vw, 36px);
            margin-bottom: 15px;
          }

          .services-header p {
            font-size: clamp(14px, 3vw, 18px);
          }

          .service-section {
            padding: 25px 15px;
            margin-bottom: 35px;
          }

          .service-card {
            padding: 25px 20px;
          }

          .service-card img {
            width: 80px;
            height: 80px;
          }

          .service-card span {
            font-size: 15px;
          }

          .sub-section {
            padding: 15px;
            margin-top: 25px;
          }

          .sub-section h3 {
            font-size: clamp(16px, 4vw, 20px);
            margin-bottom: 15px;
          }

          .sub-section p {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="services-container">
        <div className="services-inner">
          <div className="services-header">
            <h1>Our Services</h1>
            <p>Innovative IT solutions tailored to accelerate your business growth and digital transformation</p>
          </div>

          {/* Contract Staffing Section */}
          <div className="service-section">
            <h2>Contract Staffing (C2C / W2)</h2>
            <ul className="service-list five-items">
              <li className="service-card">
                <img src={Erp} alt="ERP"/>
                <span>ERP (Oracle, SAP)</span>
              </li>
              <li className="service-card">
                <img src={fullstack} alt="Full Stack"/>
                <span>Full-Stack / App Dev</span>
              </li>
              <li className="service-card">
                <img src={Qa} alt="QA"/>
                <span>QA / Automation</span>
              </li>
              <li className="service-card">
                <img src={Etl} alt="ETL"/>
                <span>ETL / Data Engineering</span>
              </li>
              <li className="service-card">
                <img src={salesforce} alt="Salesforce"/>
                <span>Salesforce / CRM</span>
              </li>
            </ul>

            <div className="sub-section overview">
              <div className="overview-text">
                <h3>Overview</h3>
                <p>
                  We connect businesses with highly skilled professionals across diverse technologies. Our staffing services ensure flexibility, expertise, and scalability for your project. With a focus on quality and agility, we help organizations accelerate growth while reducing hiring complexities.
                </p>
              </div>
              <img src={c2c} alt="C2C overview" className="overview-image"/>
            </div>

            <div className="sub-section">
              <h3>Engagement Types</h3>
              <ul>
                <li>Onsite Collaboration</li>
                <li>Hybrid Work Models</li>
                <li>Remote Excellence</li>
              </ul>
            </div>

            <div className="sub-section">
              <h3>Tech Stacks</h3>
              <div className="tech-stack-section">
                <TechLogosMarquee/>
              </div>
            </div>

            <div className="sub-section">
              <h3>Industry Use Cases</h3>
              <p>
                Supporting Fortune 500 companies, startups, and mid-sized enterprises across 
                finance, healthcare, retail, and technology sectors with expert consultants who drive innovation and deliver measurable results.
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default ContractStaffing;