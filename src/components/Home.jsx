import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// Mock images for demo
const slide1 = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop";
const slide2 = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop";
const slide3 = "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7bb?w=800&h=400&fit=crop";
const bg="https://images.unsplash.com/photo-1675434301763-594b4d0c5819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8";

const Healthcare = "https://media.istockphoto.com/id/842465448/photo/indian-new-five-hundred-rupees-bills-and-stethoscope.webp?a=1&b=1&s=612x612&w=0&k=20&c=EbFoy72dpnHETf_WReuKhgKAQ-Tu-bJmZFXCEK27YRw=";
const Finance = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop";
const retail = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop";
const energy = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop";
const manufacturing = "https://images.unsplash.com/photo-1610891015188-5369212db097?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const logistics = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleReadMore = () => setExpanded(!expanded);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero-banner {
          background-image: var(--bg-url);
          background-repeat: no-repeat;  /* prevents tiling */
          background-size: cover;       /* makes image cover the whole area */
          background-position: center;  /* centers the image */
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:%23ffffff;stop-opacity:0.1"/><stop offset="100%" style="stop-color:%23ffffff;stop-opacity:0"/></radialGradient></defs><circle cx="200" cy="300" r="100" fill="url(%23a)"/><circle cx="800" cy="200" r="150" fill="url(%23a)"/><circle cx="600" cy="700" r="80" fill="url(%23a)"/></svg>');
          opacity: 0.3;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hero-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 1s ease-out 0.5s forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section {
          padding: 80px 20px;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .value-proposition-section {
          background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
        }

        .value-proposition-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
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

        .grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        }

        .card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .card:hover::before {
          transform: scaleX(1);
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .card p {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a5568;
        }

        .key-metrics-section {
          background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
        }

        .metric-card {
          background: linear-gradient(145deg, #e2e8f0 0%, #cbd5e0 100%);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        .metric-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s ease;
        }

        .metric-card:hover::before {
          transform: rotate(45deg) translateX(100%);
        }

        .metric-card:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 50px rgba(102, 126, 234, 0.15);
        }

        .metric-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .industries-section {
          background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
        }

        .swiper-slide-content {
          text-align: center;
          padding: 2rem;
        }

        .industry-image {
          width: 100%;
          max-width: 500px;
          height: 300px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
          transition: transform 0.4s ease;
        }

        .industry-image:hover {
          transform: scale(1.05);
        }

        .industry-title {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .industry-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }

        .testimonials-section {
          background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
        }

        .testimonial-card {
          background: linear-gradient(145deg, #e2e8f0 0%, #cbd5e0 100%);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          font-style: italic;
          font-size: 1rem;
          line-height: 1.6;
          color: #2d3748;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 4rem;
          color: #667eea;
          opacity: 0.3;
          font-family: Georgia, serif;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="b" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:%23ffffff;stop-opacity:0.05"/><stop offset="100%" style="stop-color:%23ffffff;stop-opacity:0"/></radialGradient></defs><circle cx="100" cy="100" r="50" fill="url(%23b)"/><circle cx="900" cy="200" r="80" fill="url(%23b)"/><circle cx="300" cy="800" r="60" fill="url(%23b)"/><circle cx="700" cy="900" r="70" fill="url(%23b)"/></svg>');
          opacity: 0.5;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          color: #2d3748;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          min-width: 220px;
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #667eea !important;
        }

        .swiper-pagination-bullet-active {
          background: #667eea !important;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* Hero Banner */}
      <div className="hero-banner" style={{ "--bg-url": `url(${bg})` }}>
        <div className="container">
          <h1 className="hero-heading">Consulting Delivered. Projects Executed.</h1>
        </div>
      </div>

      {/* Value Proposition Blocks */}
      <section className="section value-proposition-section">
        <div className="container">
          <h2 className="section-heading">Powering Business Growth with Expertise & Innovation</h2>
          <div className="grid">
            <div className="card">
              <h3>Hire C2C Consultants</h3>
              <p>Connect with top-tier, pre-vetted consultants to drive your projects forward with expertise and efficiency. Whether you need short-term specialists or long-term partners, we help you find professionals who deliver results, meet deadlines, and align with your business goals.</p>
            </div>
            <div className="card">
              <h3>Outsource Your Projects</h3>
              <p>Let us manage your project execution from start to finish with precision, expertise, and a commitment to excellence. We ensure timely delivery, cost efficiency, and high-quality results—so you can focus on growing your business while we take care of the rest.</p>
            </div>
            <div className="card">
              <h3>Join Our Team</h3>
              <p>Be part of a dynamic and innovative team where your ideas are valued, your skills are sharpened, and your career can thrive. Together, we create solutions that make an impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="section key-metrics-section">
        <div className="container">
          <h2 className="section-heading">Key Metrics</h2>
          <div className="grid">
            <div className="metric-card">
              <h3>50+ Projects Delivered</h3>
              <p>Our track record speaks for itself — over 50 successful projects completed across diverse industries, from IT infrastructure to cutting-edge software solutions. Each delivery reflects our commitment to quality, innovation, and meeting deadlines without compromise.</p>
            </div>
            <div className="metric-card">
              <h3>35+ Active Consultants</h3>
              <p>With over 35 active consultants, we bring deep expertise, diverse perspectives, and agile problem-solving to every client engagement. Our team spans multiple industries and specialties, enabling us to address complex challenges with innovative, tailored solutions.</p>
            </div>
            <div className="metric-card">
              <h3>20+ Clients Across the U.S.</h3>
              <p>Serving 20+ clients across the U.S., we partner with organizations of all sizes and industries to deliver tailored solutions that address unique challenges. Our nationwide reach allows us to share best practices, leverage diverse market insights, and deliver measurable results wherever our clients operate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Carousel */}
      <section className="section industries-section">
        <div className="container">
          <h2 className="section-heading">Industries We Serve</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img className="industry-image" src={Healthcare} alt="Healthcare" />
                <h3 className="industry-title">Healthcare & Life Sciences</h3>
                <p className="industry-description">We deliver secure, compliant, and innovative IT solutions that enhance patient care, optimize operations, and drive digital transformation for healthcare and life sciences organizations.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img className="industry-image" src={Finance} alt="Finance" />
                <h3 className="industry-title">Finance & Banking</h3>
                <p className="industry-description">We provide robust, secure, and scalable financial technology solutions that enable banks and financial institutions to innovate while maintaining compliance and security standards.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img className="industry-image" src={retail} alt="Retail" />
                <h3 className="industry-title">Retail & eCommerce</h3>
                <p className="industry-description">We help retailers and eCommerce brands boost customer experience, streamline operations, and drive sales with scalable digital solutions, from omnichannel platforms to data-driven insights.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img className="industry-image" src={energy} alt="Energy" />
                <h3 className="industry-title">Energy</h3>
                <p className="industry-description">We enable energy and utilities companies to modernize operations, improve efficiency, and meet sustainability goals through advanced IT solutions, smart data management, and automation.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img className="industry-image" src={manufacturing} alt="Manufacturing" />
                <h3 className="industry-title">Manufacturing</h3>
                <p className="industry-description">We help manufacturers enhance productivity, streamline supply chains, and adopt smart technologies with tailored IT solutions, from ERP integration to IoT-driven automation.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img className="industry-image" src={logistics} alt="Logistics" />
                <h3 className="industry-title">Logistics & Supply Chain</h3>
                <p className="industry-description">We optimize logistics and supply chain operations with intelligent IT solutions that improve visibility, reduce costs, and enable real-time tracking from production to delivery.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="grid">
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

      {/* CTA Buttons */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-buttons">
            <Link to="/consultant-request" className="cta-button">Request a Consultant Interest Form</Link>
            <Link to="/job-upload" className="cta-button">Job Description Upload</Link>
            <Link to="/hiring-request" className="cta-button">Request a Hiring Interest Form</Link>
            <Link to="/resume-upload" className="cta-button">Resume Upload</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;