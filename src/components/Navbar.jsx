import React, { useState, useEffect } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn,
  FaInstagram, FaYoutube, FaWhatsapp, FaTelegram
} from "react-icons/fa";
import { Users, PackageCheck } from "lucide-react";

// Simple <Link> wrapper
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>{children}</a>
);

const Navbar = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(window.location.pathname);

  const dropdownItems = [
    { path: "/contractstaffing", name: "Contract Staffing", icon: <Users size={20} color="#0073e6" /> },
    { path: "/projectdelivery", name: "Project Delivery", icon: <PackageCheck size={20} color="#28a745" /> },
  ];

  const socialLinks = [
    { href: "https://twitter.com/login", Icon: FaTwitter },
    { href: "https://facebook.com/login", Icon: FaFacebookF },
    { href: "https://www.linkedin.com/in/gk-technologies-20a187365/", Icon: FaLinkedinIn },
    { href: "https://www.instagram.com/gk_technologies.stl/", Icon: FaInstagram },
    { href: "https://accounts.google.com/ServiceLogin?service=youtube", Icon: FaYoutube },
    { href: "https://wa.me/13147327749", Icon: FaWhatsapp },
    { href: "https://web.telegram.org", Icon: FaTelegram }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setActive(path);
    setMobileMenuOpen(false);
    setShowMobileDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowMobileDropdown(false);
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        .navbar-container { font-family: Inter, sans-serif; }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 6px 5%;
          font-size: 13px;
          font-weight: 600;
          border-bottom: 1px solid #eee;
        }
        .contact-section span {
          margin-right: 15px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .social-section a {
          color: #006c94;
          margin-left: 10px;
          transition: transform 0.3s;
        }
        .social-section a:hover { transform: scale(1.2); }

        nav.main-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          z-index: 1000;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
          width: 100%;
        }
        nav.main-navbar.scrolled {
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          backdrop-filter: blur(10px);
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: bold;
          text-decoration: none;
          color: #1e3a8a;
          font-size: 20px;
          z-index: 1001;
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 25px;
        }
        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 8px;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #0073e6; }
        .nav-link.active {
          color: #0073e6;
          border-bottom: 2px solid #0073e6;
        }

        /* Dropdown (desktop) */
        .dropdown-menu {
          position: absolute;
          background: #fff;
          border: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 8px;
          margin-top: 8px;
          padding: 10px;
          display: grid;
          gap: 6px;
          min-width: 200px;
          z-index: 1002;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          text-decoration: none;
          color: #333;
          border-radius: 6px;
        }
        .dropdown-item:hover {
          background: #f0f4ff;
          color: #0073e6;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          width: 30px;
          height: 22px;
          position: relative;
          cursor: pointer;
          z-index: 1001;
          background: none;
          border: none;
          padding: 0;
        }
        .hamburger span {
          position: absolute;
          height: 3px;
          width: 100%;
          background: #333;
          left: 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .hamburger span:nth-child(1) { top: 0; }
        .hamburger span:nth-child(2) { top: 9px; }
        .hamburger span:nth-child(3) { top: 18px; }
        
        /* X animation when open */
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 100%;
          left: 0;
          width: 100%;
          background: #fff;
          border-top: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          z-index: 999;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }
        .mobile-menu.open {
          transform: translateY(0);
        }
        .mobile-menu-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
        }
        .mobile-link {
          padding: 12px 0;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          font-size: 16px;
        }
        .mobile-link.active { color: #0073e6; }
        .mobile-link:hover { color: #0073e6; }
        .mobile-dropdown { 
          padding-left: 20px;
          display: flex;
          flex-direction: column;
        }
        .mobile-dropdown .mobile-link {
          padding: 8px 0;
          font-size: 14px;
        }

        /* Body padding to account for fixed navbar */
        .content-spacer {
          height: 120px;
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .hamburger { display: block; }
          .top-bar { 
            flex-direction: column; 
            font-size: 12px; 
            text-align: center;
            gap: 8px;
            padding: 8px 5%;
          }
          .contact-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }
          .contact-section span {
            margin-right: 0;
          }
          .mobile-menu {
            top: 70px;
          }
          .content-spacer {
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .top-bar {
            padding: 6px 3%;
          }
          .navbar-inner {
            padding: 10px 15px;
          }
          .logo {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="navbar-container">
        {/* Top bar */}
        <div className="top-bar">
          <div className="contact-section">
            <span><FaEnvelope /> hr@dglobaltech.com</span>
            <span><FaPhoneAlt /> +1-314-732-7749</span>
          </div>
          <div className="social-section">
            {socialLinks.map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"><Icon /></a>
            ))}
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-inner">
            <Link to="/" className="logo" onClick={() => handleNavClick("/")}>DGLOBAL TECH</Link>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <Link to="/" className={`nav-link ${active === "/" ? "active" : ""}`} onClick={() => handleNavClick("/")}>Home</Link>
              <div className="nav-link"
                   onMouseEnter={() => setShowMobileDropdown(true)}
                   onMouseLeave={() => setShowMobileDropdown(false)}
                   style={{ position: "relative" }}>
                Services ▼
                {showMobileDropdown && (
                  <div className="dropdown-menu">
                    {dropdownItems.map((item, i) => (
                      <Link key={i} to={item.path}
                        className="dropdown-item"
                        onClick={() => handleNavClick(item.path)}>
                        {item.icon}{item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/About" className={`nav-link ${active === "/About" ? "active" : ""}`} onClick={() => handleNavClick("/About")}>About Us</Link>
              <Link to="/Contact" className={`nav-link ${active === "/Contact" ? "active" : ""}`} onClick={() => handleNavClick("/Contact")}>Contact Us</Link>
            </div>

            {/* Mobile Hamburger */}
            <button className={`hamburger ${mobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <Link to="/" className={`mobile-link ${active === "/" ? "active" : ""}`} onClick={() => handleNavClick("/")}>Home</Link>
            <button className="mobile-link" onClick={() => setShowMobileDropdown(!showMobileDropdown)}>
              Services {showMobileDropdown ? "▲" : "▼"}
            </button>
            {showMobileDropdown && (
              <div className="mobile-dropdown">
                {dropdownItems.map((item, i) => (
                  <Link key={i}
                    to={item.path}
                    className={`mobile-link ${active === item.path ? "active" : ""}`}
                    onClick={() => handleNavClick(item.path)}>
                    {item.icon}{item.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/About" className={`mobile-link ${active === "/About" ? "active" : ""}`} onClick={() => handleNavClick("/About")}>About Us</Link>
            <Link to="/Contact" className={`mobile-link ${active === "/Contact" ? "active" : ""}`} onClick={() => handleNavClick("/Contact")}>Contact Us</Link>
          </div>
        </div>

        {/* Content spacer to account for fixed navbar */}
        <div className="content-spacer"></div>
      </div>
    </>
  );
};

export default Navbar;