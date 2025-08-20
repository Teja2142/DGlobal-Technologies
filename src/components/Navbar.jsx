import React, { useState, useEffect } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, 
  FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaBars, FaTimes
} from "react-icons/fa";
import { Users, PackageCheck } from "lucide-react";

const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const Navbar = () => {
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownItems = [
    { path: "/contractstaffing", name: "Contract Staffing", icon: <Users size={22} color="#0073e6" /> },
    { path: "/projectdelivery", name: "Project Delivery", icon: <PackageCheck size={22} color="#28a745" /> },
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .navbar-container { font-family: Inter, sans-serif; }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          padding: 8px 5%;
          font-size: 13px;
          font-weight: 600;
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
          position: sticky;
          top: 0;
          background: white;
          z-index: 1000;
          border-bottom: 1px solid #eee;
          transition: box-shadow 0.3s;
        }
        nav.main-navbar.scrolled {
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
          display: flex;
          align-items: center;
          font-weight: bold;
          text-decoration: none;
          color: #1e3a8a;
          font-size: 20px;
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
          position: relative;
          padding: 8px;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #0073e6; }

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

        /* Mobile */
        .mobile-button {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: #fff;
          border-top: 1px solid #eee;
        }
        .mobile-link {
          padding: 12px 0;
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }
        .mobile-link:hover { color: #0073e6; }

        .mobile-dropdown {
          padding-left: 10px;
          display: flex;
          flex-direction: column;
        }
        .mobile-dropdown-item {
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #333;
        }
        .mobile-dropdown-item:hover { color: #0073e6; }

        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-button { display: block; }
          .top-bar { flex-direction: column; font-size: 12px; text-align: center; }
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
            <Link to="/" className="logo">DGLOBAL TECH</Link>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <Link to="/" className="nav-link">Home</Link>
              <div 
                className="nav-link"
                onMouseEnter={() => setShowDesktopDropdown(true)}
                onMouseLeave={() => setShowDesktopDropdown(false)}
                style={{ position: "relative" }}
              >
                Services ▼
                {showDesktopDropdown && (
                  <div className="dropdown-menu">
                    {dropdownItems.map((item, i) => (
                      <Link key={i} to={item.path} className="dropdown-item">
                        {item.icon}{item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/Careers" className="nav-link">Careers</Link>
              <Link to="/About" className="nav-link">About Us</Link>
              <Link to="/Contact" className="nav-link">Contact Us</Link>
            </div>

            {/* Mobile Button */}
            <button className="mobile-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <button 
                className="mobile-link" 
                onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              >
                Services ▼
              </button>
              {showMobileDropdown && (
                <div className="mobile-dropdown">
                  {dropdownItems.map((item, i) => (
                    <Link 
                      key={i} 
                      to={item.path} 
                      className="mobile-dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}{item.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/Careers" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
              <Link to="/About" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/Contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
