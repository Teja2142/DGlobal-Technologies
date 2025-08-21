import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ValueProposition from "./ValueProposition";


// Mock data for demonstration
const activeconsultants = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop";
const Projectdelivery = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop";
const usclients = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop";
const hirec2c = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop";
const outsource = "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop";
const joinourteam = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop";

const bg = "https://images.unsplash.com/photo-1675434301763-594b4d0c5819?w=1920&h=1080&fit=crop";
const Healthcare = "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=500&h=300&fit=crop";
const Finance = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop";
const retail = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop";
const energy = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop";
const manufacturing = "https://images.unsplash.com/photo-1610891015188-5369212db097?w=500&h=300&fit=crop";
const logistics = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const industries = [
    {
      image: Healthcare,
      alt: "Healthcare",
      title: "Healthcare & Life Sciences",
      description: "We deliver secure, compliant, and innovative IT solutions that enhance patient care, optimize operations, and drive digital transformation for healthcare and life sciences organizations.",
      destination: "/healthcare",
    },
    {
      image: Finance,
      alt: "Finance",
      title: "Finance & Banking",
      description: "We provide robust, secure, and scalable financial technology solutions that enable banks and financial institutions to innovate while maintaining compliance and security standards.",
      destination: "/finance",
    },
    {
      image: retail,
      alt: "Retail",
      title: "Retail & eCommerce",
      description: "We help retailers and eCommerce brands boost customer experience, streamline operations, and drive sales with scalable digital solutions, from omnichannel platforms to data-driven insights.",
      destination: "/retail",
    },
    {
      image: energy,
      alt: "Energy",
      title: "Energy",
      description: "We enable energy and utilities companies to modernize operations, improve efficiency, and meet sustainability goals through advanced IT solutions, smart data management, and automation.",
      destination: "/energy",
    },
    {
      image: manufacturing,
      alt: "Manufacturing",
      title: "Manufacturing",
      description: "We help manufacturers enhance productivity, streamline supply chains, and adopt smart technologies with tailored IT solutions, from ERP integration to IoT-driven automation.",
      destination: "/manufacturing",
    },
    {
      image: logistics,
      alt: "Logistics",
      title: "Logistics & Supply Chain",
      description: "We optimize logistics and supply chain operations with intelligent IT solutions that improve visibility, reduce costs, and enable real-time tracking from production to delivery.",
      destination: "/logistics",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .hero-banner {
          background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 2rem;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: slideUp 1s ease-out 0.5s both;
          background: linear-gradient(45deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section {
          padding: 5rem 1.25rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-heading {
          text-align: center;
          font-size: clamp(2rem, 3.5vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1a202c;
          position: relative;
        }

        .section-heading::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        .value-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          height: 450px;
          cursor: pointer;
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .value-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 70px rgba(102, 126, 234, 0.25);
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.95) 0%,
            rgba(118, 75, 162, 0.95) 100%
          );
          color: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(5px);
        }

        .value-card:hover .card-overlay {
          opacity: 1;
          visibility: visible;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
          text-align: center;
          position: absolute;
          bottom: 2rem;
          left: 0;
          right: 0;
          padding: 0 2rem;
          transition: all 0.4s ease;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          margin: 0;
        }

        .value-card:hover .card-title {
          opacity: 0;
          visibility: hidden;
        }

        .card-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .metric-card {
          background: linear-gradient(145deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 25px;
          padding: 2.5rem;
          display: flex;
          align-items: center;
          gap: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(226, 232, 240, 0.6);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
        }

        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(102, 126, 234, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .metric-card:hover::before {
          left: 100%;
        }

        .metric-card:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .metric-content {
          flex: 1;
          z-index: 2;
        }

        .metric-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #667eea;
          position: relative;
        }

        .metric-description {
          color: #4a5568;
          line-height: 1.7;
          font-size: 1rem;
        }

        .metric-image {
          width: 220px;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .metric-card:hover .metric-image {
          transform: scale(1.08) rotate(2deg);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
        }

        .slider-container {
          position: relative;
          overflow: hidden;
          border-radius: 25px;
          background: white;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .slider-wrapper {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-${currentSlide * 100}%);
        }

        .slide {
          min-width: 100%;
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .slide-image {
          width: 100%;
          max-width: 500px;
          height: 300px;
          object-fit: cover;
          border-radius: 25px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
          margin-bottom: 2rem;
          transition: transform 0.4s ease;
        }

        .slide-image:hover {
          transform: scale(1.05);
        }

        .slide-title {
          font-size: 1.9rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #2d3748;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-description {
          color: #4a5568;
          line-height: 1.7;
          max-width: 600px;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 3;
          font-size: 1.5rem;
          color: #667eea;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .slider-nav:hover {
          background: white;
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .slider-nav.prev {
          left: 25px;
        }

        .slider-nav.next {
          right: 25px;
        }

        .slider-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 25px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .indicator::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #667eea;
          transform: scale(1.3);
        }

        .indicator.active::after {
          border-color: rgba(102, 126, 234, 0.3);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .testimonial-card {
          background: linear-gradient(145deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 25px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 1px solid rgba(226, 232, 240, 0.6);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 25px;
          font-size: 4rem;
          color: rgba(102, 126, 234, 0.2);
          font-family: Georgia, serif;
          z-index: 1;
        }

        .testimonial-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(102, 126, 234, 0.05),
            transparent
          );
          transition: left 0.5s ease;
        }

        .testimonial-card:hover::after {
          left: 100%;
        }

        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .testimonial-card p {
          position: relative;
          z-index: 2;
          font-style: italic;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .testimonial-card strong {
          position: relative;
          z-index: 2;
          color: #667eea;
          font-weight: 600;
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .cta-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
          position: relative;
          z-index: 2;
        }

        .cta-button {
          background: rgba(255, 255, 255, 0.95);
          color: #2d3748;
          padding: 1.2rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          border: 2px solid rgba(255, 255, 255, 0.3);
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
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          background: white;
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          border-color: white;
        }

        .know-more-btn {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.9rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .know-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .know-more-btn:hover::before {
          left: 100%;
        }

        .know-more-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        /* Value Proposition Grid */
        .value-proposition-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .value-proposition-section {
          text-align: center;
        }

        .value-proposition-section .container {
          padding: 0 2rem;
        }

        .value-proposition-section .section-heading {
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .value-proposition-section .value-card {
          margin: 0 auto;
          text-align: left;
        }

        .value-proposition-section .card-title,
        .value-proposition-section .card-desc {
          text-align: center;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .metric-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
            gap: 1.5rem;
          }

          .metric-image {
            width: 180px;
            height: 180px;
          }

          .metric-title {
            text-align: center;
            margin-bottom: 0.8rem;
          }

          .metric-description {
            text-align: center;
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .value-proposition-section .container {
            padding: 0 1.5rem;
          }

          .value-proposition-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 3rem 1rem;
          }

          .hero-banner {
            background-attachment: scroll;
            min-height: 80vh;
          }

          .value-card {
            height: 420px;
          }

          .card-image-wrapper,
          .card-image {
            height: 280px;
          }

          .card-overlay {
            padding: 1.5rem;
          }

          .card-title {
            font-size: 1.3rem;
            bottom: 1.5rem;
            padding: 0.8rem 1.5rem;
          }

          .metric-card {
            padding: 1.5rem;
          }

          .metric-image {
            width: 160px;
            height: 160px;
          }

          .slider-nav {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }

          .slider-nav.prev {
            left: 15px;
          }

          .slider-nav.next {
            right: 15px;
          }

          .slide {
            padding: 2rem 1.5rem;
          }

          .slide-image {
            height: 250px;
          }

          .testimonial-card {
            padding: 2rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .value-proposition-section .container {
            padding: 0 1rem;
          }

          .value-proposition-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cta-buttons {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .cta-button {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 2rem 0.75rem;
          }

          .hero-heading {
            font-size: 2.2rem;
            padding: 0 1rem;
          }

          .section-heading {
            font-size: 1.8rem;
            margin-bottom: 2rem;
          }

          .value-card {
            height: 380px;
            margin: 0 0.5rem;
          }

          .card-image-wrapper,
          .card-image {
            height: 240px;
          }

          .card-overlay {
            padding: 1rem;
          }

          .card-title {
            font-size: 1.2rem;
            bottom: 1rem;
            padding: 0.6rem 1rem;
          }

          .card-desc {
            font-size: 0.9rem;
          }

          .metric-card {
            padding: 1.25rem;
            margin: 0 0.5rem;
          }

          .metric-title {
            font-size: 1.4rem;
          }

          .metric-description {
            font-size: 0.9rem;
          }

          .metric-image {
            width: 140px;
            height: 140px;
          }

          .slider-nav {
            display: none;
          }

          .slide {
            padding: 1.5rem 1rem;
          }

          .slide-image {
            height: 200px;
          }

          .slide-title {
            font-size: 1.5rem;
          }

          .slide-description {
            font-size: 0.9rem;
          }

          .testimonial-card {
            padding: 1.5rem;
            margin: 0 0.5rem;
          }

          .testimonial-card p {
            font-size: 0.9rem;
          }

          .know-more-btn {
            padding: 0.8rem 2rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 320px) {
          .hero-heading {
            font-size: 1.9rem;
          }

          .section-heading {
            font-size: 1.6rem;
          }

          .value-card {
            height: 350px;
          }

          .card-image-wrapper,
          .card-image {
            height: 220px;
          }

          .metric-image {
            width: 120px;
            height: 120px;
          }

          .slide-image {
            height: 180px;
          }
        }
      `}</style>

      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-heading">Consulting Delivered. Projects Executed.</h1>
        </div>
      </div>

      {/* Value Proposition Section */}
    <ValueProposition/>
      {/* Key Metrics Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)' }}>
        <div className="container">
          <h2 className="section-heading">Key Metrics</h2>
          <div className="space-y-8">
            <div className="metric-card">
              <div className="metric-content">
                <h3 className="metric-title">50+ Projects Delivered</h3>
                <p className="metric-description">Our track record speaks for itself — over 50 successful projects completed across diverse industries, from IT infrastructure to cutting-edge software solutions. Each delivery reflects our commitment to quality, innovation, and meeting deadlines without compromise.</p>
              </div>
              <img src={Projectdelivery} alt="Projects Delivered" className="metric-image" />
            </div>

            <div className="metric-card">
              <div className="metric-content">
                <h3 className="metric-title">35+ Active Consultants</h3>
                <p className="metric-description">With over 35 active consultants, we bring deep expertise, diverse perspectives, and agile problem-solving to every client engagement. Our team spans multiple industries and specialties, enabling us to address complex challenges with innovative, tailored solutions.</p>
              </div>
              <img src={activeconsultants} alt="Active Consultants" className="metric-image" />
            </div>

            <div className="metric-card">
              <div className="metric-content">
                <h3 className="metric-title">20+ Clients Across the U.S.</h3>
                <p className="metric-description">Serving 20+ clients across the U.S., we partner with organizations of all sizes and industries to deliver tailored solutions that address unique challenges. Our nationwide reach allows us to share best practices, leverage diverse market insights, and deliver measurable results wherever our clients operate.</p>
              </div>
              <img src={usclients} alt="Clients across US" className="metric-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section" style={{ background: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <h2 className="section-heading">Industries We Serve</h2>
          <div className="slider-container">
            <div className="slider-wrapper">
              {industries.map((industry, index) => (
                <div key={index} className="slide">
                  <img src={industry.image} alt={industry.alt} className="slide-image" />
                  <h3 className="slide-title">{industry.title}</h3>
                  <p className="slide-description">{industry.description}</p>
                  <a href={industry.destination} className="know-more-btn">
                    Click here to know more
                  </a>                
              </div>
              ))}
            </div>
            
            <button className="slider-nav prev" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="slider-nav next" onClick={nextSlide}>
              &#8250;
            </button>

            <div className="slider-indicators">
              {industries.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              Exceptional service with unwavering support — the team was responsive, professional, and always went the extra mile to ensure everything ran smoothly from start to finish!
              <br /><strong>— Chaitanya</strong>
            </div>
            <div className="testimonial-card">
              They not only delivered the project on time but also went above and beyond our expectations, providing exceptional quality and attention to detail every step of the way!
              <br /><strong>— Naveen Teja</strong>
            </div>
            <div className="testimonial-card">
              I highly recommend their consulting services — their expertise, professionalism, and commitment to delivering results made a real difference to our project's success.
              <br /><strong>— Bharathi</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="section-heading" style={{ color: 'white' }}>Ready to Get Started?</h2>
          <div className="cta-buttons">
            <a href="/consultantform" className="cta-button">Request a Consultant Interest Form</a>
            <a href="#" className="cta-button">Job Description Upload</a>
            <a href="#" className="cta-button">Request a Hiring Interest Form</a>
            <a href="#" className="cta-button">Resume Upload</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;