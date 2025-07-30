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

  const gradientBg = "linear-gradient(to right, #f7e8ff, #ffe3ed)";
  const themeColor = "#c9184a";

  return (
    <>
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        style={{ width: "100%", height: "80vh" }}
      >
        {[slide1, slide2, slide3].map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div style={{ position: "relative", height: "80vh" }}>
              <img src={slide} alt={`Slide ${idx + 1}`} style={styles.slideImage} />
              <div style={styles.overlay} />
              <div style={styles.slideText}>
                <h2 style={styles.heroHeading}>
                  Welcome to <span style={{ color: "#ffcc00" }}>DGlobal Technology</span>
                </h2>
                <Link to="/about" style={{ ...styles.readMoreBtn, textDecoration: "none" }}>
                  Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mission Section */}
      <section style={{ ...styles.section, background: "#fff" }}>
        <div style={styles.flexContainer}>
          <div style={styles.imageWrap}>
            <img
              src="https://www.shutterstock.com/image-photo/ai-big-data-business-analytics-600nw-2462546293.jpg"
              alt="Tech Illustration"
              style={styles.missionImage}
            />
          </div>
          <div style={styles.textContent}>
            <h2 style={styles.sectionHeading}>
              Mission of <span style={{ color: themeColor }}>DGLOBAL Technology</span>
            </h2>
            <p style={styles.paragraph}>
              We’re working behind the scenes to build something great. D-GLOBAL Technologies is preparing to launch its full digital presence — delivering cutting-edge solutions and global talent, everywhere.
              {expanded && (
                <>
                  <br /><br />
                  We deliver digital transformation through cutting-edge software and AI. Our goal is to enable startups and enterprises to reach new heights with scalable, secure, and cost-effective solutions.
                  <br/><strong>Stay tuned as we redefine innovation, one line of code at a time.</strong>
                </>
              )}
            </p>
            <button onClick={toggleReadMore} style={styles.blackBtn}>
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section style={{ ...styles.banner, backgroundImage: "url('https://img.freepik.com/premium-photo/technology-background-design-by-using-digital-elements_221397-38.jpg')" }}>
        <h2 style={styles.bannerHeading}>Sharing Expertise. Building Relationships.</h2>
        <div style={styles.contactDetails}>
          <p style={styles.contactText}>+1-314-732-7749, +1-314-354-0634</p>
          <p style={styles.contactText}>hr@dglobaltech.com</p>
          <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer">
            <button style={styles.whatsappBtn}>WhatsApp</button>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ ...styles.section, background: gradientBg }}>
        <h2 style={styles.sectionHeading}>
          Our <span style={{ color: themeColor }}>Services</span>
        </h2>
        <div style={styles.grid}>
          {[
            { img: "https://fuestech.com/wp-content/uploads/2024/07/KT-CC-10.jpg", title: "Mobile Development", link: "/Mobile" },
            { img: "https://www.techfunnel.com/wp-content/uploads/2021/10/web-application.png", title: "Web Applications", link: "/Web" },
            { img: "https://media.excellentwebworld.com/wp-content/uploads/2022/03/17091451/best-api-development-services.webp", title: "API Services", link: "/Api" },
            { img: "https://blog.1byte.com/wp-content/uploads/2023/04/overview-4-1024x683.jpg", title: "Cloud Infrastructure", link: "/Cloud" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCuL1Lm8-i23sX4lGnDgmV6SE3JA1VquVOA&s", title: "IoT Solutions", link: "/IoT" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl905190f3d3rw6d_uA5wKInZMfLMSAhIvfg&s", title: "Data Analytics", link: "/Data" },
            { img: "https://www.macrohype.com/wp-content/uploads/2024/08/Digital-Marketing.png", title: "Digital Marketing", link: "/digital" },
            { img: "https://www.adaptiveus.com/hubfs/AI%20Analysis.jpg", title: "Corporate Training", link: "/training" },
          ].map((s, idx) => (
            <Link key={idx} to={s.link} style={{ textDecoration: "none" }}>
              <div style={styles.card}>
                <img src={s.img} alt={s.title} style={styles.cardImage} />
                <div style={styles.cardTitle}>{s.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

const themeColor = "#0ea5e9"; // Sky Blue

const styles = {
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  slideText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 2,
    color: "white",
  },
  heroHeading: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  readMoreBtn: {
    backgroundColor: themeColor,
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  section: {
    padding: "60px 30px",
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrap: {
    flex: "1 1 40%",
    textAlign: "center",
  },
  missionImage: {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "15px",
  },
  textContent: {
    flex: "1 1 50%",
  },
  sectionHeading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0f172a", // Dark Blue
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#1f2937", // Charcoal
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  blackBtn: {
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  banner: {
    padding: "40px 30px",
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#0f172a",
  },
  bannerHeading: {
    fontSize: "28px",
    fontWeight: "bold",
    flex: "1 1 300px",
  },
  contactDetails: {
    flex: "1 1 300px",
    textAlign: "right",
  },
  contactText: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  whatsappBtn: {
    backgroundColor: "#22c55e",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "40px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },
  cardTitle: {
    backgroundColor: themeColor,
    color: "#fff",
    padding: "14px",
    fontWeight: "bold",
    fontSize: "1rem",
    textAlign: "center",
  },
};

export default Home;