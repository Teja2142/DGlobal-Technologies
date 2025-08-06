import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleReadMore = () => setExpanded(!expanded);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 900);
  }, []);

  const gradientBg = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  const themeColor = "#6366f1";

  return (
    <>
      {/* Hero Slider */}
      <div style={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          style={{ width: "100%", height: "100vh" }}
        >
          {[slide1, slide2, slide3].map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div style={styles.slideWrapper}>
                <img src={slide} alt={`Slide ${idx + 1}`} style={styles.slideImage} />
                <div style={styles.overlay} />
                <div style={styles.slideText}>
                  <h2 style={styles.heroHeading}>
                    Welcome to{" "}
                    <span style={styles.heroHighlight}>DGlobal Technology</span>
                  </h2>
                  <p style={styles.heroSubtext}>
                    Transforming businesses through innovative technology solutions
                  </p>
                  <Link to="/about" style={styles.heroBtn}>
                    Discover More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <div style={styles.container}>
          <div style={styles.flexContainer}>
            <div style={styles.imageWrap}>
              <div style={styles.imageContainer}>
                <img
                  src="https://www.shutterstock.com/image-photo/ai-big-data-business-analytics-600nw-2462546293.jpg"
                  alt="Tech Illustration"
                  style={styles.missionImage}
                />
                <div style={styles.imageOverlay}></div>
              </div>
            </div>
            <div style={styles.textContent}>
              <div style={styles.sectionBadge}>Our Mission</div>
              <h2 style={styles.sectionHeading}>
                Empowering Innovation with{" "}
                <span style={styles.headingHighlight}>DGLOBAL Technology</span>
              </h2>
              <p style={styles.paragraph}>
                We're working behind the scenes to build something extraordinary. D-GLOBAL 
                Technologies is preparing to launch its full digital presence — delivering 
                cutting-edge solutions and global talent, everywhere.
                {expanded && (
                  <span style={styles.expandedText}>
                    <br /><br />
                    We deliver digital transformation through cutting-edge software and AI. 
                    Our goal is to enable startups and enterprises to reach new heights with 
                    scalable, secure, and cost-effective solutions.
                    <br /><br />
                    <strong style={styles.strongText}>
                      Stay tuned as we redefine innovation, one line of code at a time.
                    </strong>
                  </span>
                )}
              </p>
              <button onClick={toggleReadMore} style={styles.modernBtn}>
                {expanded ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section style={styles.contactBanner}>
        <div style={styles.container}>
          <div style={styles.bannerContent}>
            <div style={styles.bannerText}>
              <h2 style={styles.bannerHeading}>Let's Build Something Amazing Together</h2>
              <p style={styles.bannerSubtext}>
                Ready to transform your business? Get in touch with our experts today.
              </p>
            </div>
            <div style={styles.contactDetails}>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>📞</span>
                  <div>
                    <p style={styles.contactText}>+1-314-732-7749</p>
                    <p style={styles.contactText}>+1-314-354-0634</p>
                  </div>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>✉️</span>
                  <p style={styles.contactText}>hr@dglobaltech.com</p>
                </div>
              </div>
              <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer">
                <button style={styles.whatsappBtn}>
                  <span style={styles.whatsappIcon}>💬</span>
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={styles.servicesSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>What We Do</div>
            <h2 style={styles.sectionHeading}>
              Our <span style={styles.headingHighlight}>Services</span>
            </h2>
            <p style={styles.sectionSubtext}>
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div style={styles.servicesGrid}>
            {[
              { 
                img: "https://fuestech.com/wp-content/uploads/2024/07/KT-CC-10.jpg", 
                title: "Mobile Development", 
                link: "/Mobile",
                desc: "Native & cross-platform apps"
              },
              { 
                img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png", 
                title: "Web Applications", 
                link: "/Web",
                desc: "Modern, responsive web solutions"
              },
              { 
                img: "https://media.excellentwebworld.com/wp-content/uploads/2022/03/17091451/best-api-development-services.webp", 
                title: "API Services", 
                link: "/Api",
                desc: "Scalable backend architecture"
              },
              { 
                img: "https://blog.1byte.com/wp-content/uploads/2023/04/overview-4-1024x683.jpg", 
                title: "Cloud Infrastructure", 
                link: "/Cloud",
                desc: "Secure cloud deployment"
              },
              { 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCuL1Lm8-i23sX4lGnDgmV6SE3JA1VquVOA&s", 
                title: "IoT Solutions", 
                link: "/IoT",
                desc: "Connected device ecosystems"
              },
              { 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl905190f3d3rw6d_uA5wKInZMfLMSAhIvfg&s", 
                title: "Data Analytics", 
                link: "/Data",
                desc: "Insights-driven decisions"
              },
              { 
                img: "https://www.macrohype.com/wp-content/uploads/2024/08/Digital-Marketing.png", 
                title: "Digital Marketing", 
                link: "/digital",
                desc: "Growth-focused strategies"
              },
              { 
                img: "https://www.adaptiveus.com/hubfs/AI%20Analysis.jpg", 
                title: "Corporate Training", 
                link: "/training",
                desc: "Skill development programs"
              },
            ].map((service, idx) => (
              <Link key={idx} to={service.link} style={styles.cardLink}>
                <div style={styles.serviceCard}>
                  <div style={styles.cardImageContainer}>
                    <img src={service.img} alt={service.title} style={styles.cardImage} />
                    <div style={styles.cardOverlay}></div>
                  </div>
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>{service.title}</h3>
                    <p style={styles.cardDesc}>{service.desc}</p>
                    <div style={styles.cardArrow}>→</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  // Container
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },

  // Hero Slider Styles
  sliderContainer: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  slideWrapper: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slideImage: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.7)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.6) 100%)",
    zIndex: 1,
  },
  slideText: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "white",
    maxWidth: "800px",
    padding: "0 20px",
  },
  heroHeading: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    marginBottom: "20px",
    lineHeight: "1.2",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  heroHighlight: {
    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtext: {
    fontSize: "1.25rem",
    marginBottom: "30px",
    opacity: "0.95",
    fontWeight: "300",
  },
  heroBtn: {
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "#1f2937",
    padding: "16px 32px",
    fontWeight: "600",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    transform: "translateY(0)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    }
  },

  // Mission Section
  missionSection: {
    padding: "100px 0",
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrap: {
    flex: "1 1 45%",
    minWidth: "300px",
  },
  imageContainer: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
  },
  missionImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  imageOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
  },
  textContent: {
    flex: "1 1 45%",
    minWidth: "300px",
  },
  sectionBadge: {
    display: "inline-block",
    backgroundColor: "#6366f1",
    color: "white",
    padding: "8px 20px",
    borderRadius: "25px",
    fontSize: "0.875rem",
    fontWeight: "600",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  sectionHeading: {
    fontSize: "clamp(2rem, 4vw, 2.75rem)",
    fontWeight: "800",
    color: "#1f2937",
    marginBottom: "24px",
    lineHeight: "1.2",
  },
  headingHighlight: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#4b5563",
    lineHeight: "1.7",
    marginBottom: "30px",
  },
  expandedText: {
    animation: "fadeIn 0.5s ease-in-out",
  },
  strongText: {
    color: "#6366f1",
    fontWeight: "700",
  },
  modernBtn: {
    backgroundColor: "#1f2937",
    color: "#ffffff",
    padding: "14px 28px",
    border: "none",
    borderRadius: "50px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 15px rgba(31, 41, 55, 0.2)",
    transform: "translateY(0)",
  },

  // Contact Banner
  contactBanner: {
    padding: "80px 0",
    background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  bannerContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
  },
  bannerText: {
    flex: "1 1 400px",
  },
  bannerHeading: {
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
    fontWeight: "700",
    marginBottom: "16px",
    lineHeight: "1.3",
  },
  bannerSubtext: {
    fontSize: "1.125rem",
    opacity: "0.9",
    fontWeight: "300",
    marginBottom: "0",
  },
  contactDetails: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "24px",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  contactIcon: {
    fontSize: "1.25rem",
    width: "24px",
    textAlign: "center",
  },
  contactText: {
    fontSize: "1rem",
    margin: "0",
    opacity: "0.9",
  },
  whatsappBtn: {
    backgroundColor: "#25d366",
    color: "white",
    padding: "14px 24px",
    border: "none",
    borderRadius: "50px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
    transform: "translateY(0)",
  },
  whatsappIcon: {
    fontSize: "1.125rem",
  },

  // Services Section
  servicesSection: {
    padding: "100px 0",
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "80px",
  },
  sectionSubtext: {
    fontSize: "1.125rem",
    color: "#6b7280",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
  },
  serviceCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid #e5e7eb",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    ":hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    }
  },
  cardImageContainer: {
    position: "relative",
    height: "200px",
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
    opacity: "0",
    transition: "opacity 0.3s ease",
  },
  cardContent: {
    padding: "24px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "8px",
  },
  cardDesc: {
    fontSize: "0.975rem",
    color: "#6b7280",
    lineHeight: "1.5",
    flex: "1",
    margin: "0",
  },
  cardArrow: {
    position: "absolute",
    top: "24px",
    right: "24px",
    fontSize: "1.25rem",
    color: "#6366f1",
    fontWeight: "700",
    opacity: "0",
    transform: "translateX(-10px)",
    transition: "all 0.3s ease",
  },

  // Responsive adjustments
  "@media (max-width: 768px)": {
    flexContainer: {
      flexDirection: "column",
      textAlign: "center",
    },
    bannerContent: {
      flexDirection: "column",
      textAlign: "center",
    },
    contactDetails: {
      alignItems: "center",
    },
    servicesGrid: {
      gridTemplateColumns: "1fr",
    },
  },
};

// Add hover effects via CSS-in-JS simulation
const addHoverStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .service-card:hover .card-image {
      transform: scale(1.05);
    }
    
    .service-card:hover .card-overlay {
      opacity: 1;
    }
    
    .service-card:hover .card-arrow {
      opacity: 1;
      transform: translateX(0);
    }
    
    .modern-btn:hover {
      background-color: #6366f1;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }
    
    .whatsapp-btn:hover {
      background-color: #20ba5a;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    }
    
    .mission-image:hover {
      transform: scale(1.02);
    }
  `;
  document.head.appendChild(style);
};

// Call this when component mounts
if (typeof document !== 'undefined') {
  addHoverStyles();
}

export default Home;