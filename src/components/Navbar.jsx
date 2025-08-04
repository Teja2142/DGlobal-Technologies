import React, { useState, useEffect } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, 
  FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaBars, FaTimes
} from "react-icons/fa";

// Note: Replace Link with your router's Link component
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownItems = [
    { path: "/Web", name: "Web Development", icon: "💻" },
    { path: "/Api", name: "API Services", icon: "🔌" },
    { path: "/Cloud", name: "Cloud Services", icon: "☁️" },
    { path: "/Data", name: "Data Analytics", icon: "📊" },
    { path: "/IoT", name: "IoT Solutions", icon: "🏠" },
    { path: "/Mobile", name: "Mobile Development", icon: "📱" },
    { path: "/Digital", name: "Digital Marketing", icon: "🔍" },
    { path: "/Training", name: "Corporate Training", icon: "🏢" }
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

  const FloatingShapes = () => (
    <div className="floating-shapes">
      {[...Array(6)].map((_, i) => (
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
        
        .navbar-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          position: relative;
          z-index: 1000;
        }
        
        .floating-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          z-index: -1;
        }
        
        .floating-shape {
          position: absolute;
          width: 40px;
          height: 40px;
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
        
        .top-bar {
          display: flex;
          height: 50px;
          position: relative;
          background: linear-gradient(135deg, #764ba2 0%, #764ba2 100%);
          overflow: hidden;
        }
        
        .top-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 4s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        
        .contact-section {
          width: 60%;
          background: linear-gradient(135deg, #764ba2 100%);
          display: flex;
          align-items: center;
          padding-left: 5%;
          font-weight: 600;
          color: white;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          gap: 20px;
          font-size: 13px;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }
        
        .contact-section:hover {
          background: linear-gradient(135deg, #764ba2 100%);
        }
        
        .contact-section span {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease;
        }
        
        .contact-section span:hover {
          transform: translateY(-2px);
        }
        
        .social-section {
          width: 45%;
          background: linear-gradient(135deg, #006c94 0%, #4facfe 100%);
          display: flex;
          align-items: center;
          color: white;
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
          position: absolute;
          right: 0;
          height: 100%;
          padding-right: 5%;
          justify-content: flex-end;
          gap: 15px;
          z-index: 1;
        }
        
        .social-link {
          color: white;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-link:hover {
          transform: translateY(-3px) scale(1.2);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .main-navbar {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(102, 126, 234, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .main-navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }
        
        .navbar-container-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .logo:hover {
          transform: scale(1.05);
        }
        
        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          font-weight: bold;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .logo-icon::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: logoShimmer 3s infinite;
        }
        
        @keyframes logoShimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        .company-name {
          font-size: 20px;
          font-weight: 700;
          color: #1e3a8a;
          margin: 0;
          background: linear-gradient(135deg, #1e3a8a 0%, #667eea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tagline {
          font-size: 11px;
          color: #667eea;
          margin: 0;
          font-weight: 500;
        }
        
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 32px;
          font-weight: 600;
        }
        
        .nav-link {
          color: #1a202c;
          text-decoration: none;
          font-size: 15px;
          cursor: pointer;
          position: relative;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover {
          color: #667eea;
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }
        
        .nav-link:hover::before {
          width: 100%;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: -120px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-radius: 16px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          min-width: 420px;
          z-index: 1000;
          border: 1px solid rgba(102, 126, 234, 0.1);
          animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: top center;
        }
        
        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .dropdown-item {
          color: #1a202c;
          text-decoration: none;
          padding: 16px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
          color: #667eea;
        }
        
        .dropdown-item:hover::before {
          left: 100%;
        }
        
        .mobile-button {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #1a202c;
          display: none;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .mobile-button:hover {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          transform: scale(1.1);
        }
        
        .mobile-menu {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 24px;
          gap: 8px;
          border-top: 1px solid rgba(102, 126, 234, 0.1);
          animation: mobileSlideDown 0.3s ease-out;
        }
        
        @keyframes mobileSlideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-link {
          color: #1a202c;
          text-decoration: none;
          padding: 16px 20px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .mobile-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
          z-index: -1;
        }
        
        .mobile-link:hover {
          color: white;
          transform: translateX(8px);
        }
        
        .mobile-link:hover::before {
          width: 100%;
        }
        
        .mobile-services-btn {
          background: none;
          border: none;
          color: #1a202c;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          padding: 16px 20px;
          text-align: left;
          width: 100%;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .mobile-services-btn:hover {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
        
        .mobile-dropdown {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          animation: mobileDropdownSlide 0.3s ease-out;
        }
        
        @keyframes mobileDropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-dropdown-item {
          color: #1a202c;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          background: linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(243, 244, 246, 0.8) 100%);
          margin-bottom: 4px;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .mobile-dropdown-item:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
          transform: translateX(8px);
        }
        
        @media (max-width: 768px) {
          .desktop-menu { 
            display: none !important; 
          }
          .mobile-button { 
            display: block !important; 
          }
          .contact-section {
            font-size: 11px;
            gap: 15px;
          }
          .social-section {
            gap: 10px;
          }
          .dropdown-menu {
            grid-template-columns: 1fr;
            min-width: 300px;
            left: -100px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-section {
            font-size: 10px;
            gap: 10px;
            padding-left: 3%;
          }
          .social-section {
            gap: 8px;
            padding-right: 3%;
          }
          .social-link {
            font-size: 12px;
            padding: 6px;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-button { 
            display: none !important; 
          }
        }
      `}</style>

      <div className="navbar-container">
        <FloatingShapes />
        
        {/* Top Contact Bar */}
        <div className="top-bar">
          <div className="contact-section">
            <span><FaEnvelope /> hr@dglobaltech.com</span>
            <span><FaPhoneAlt /> +1-314-732-7749</span>
            <span><FaPhoneAlt /> +1-314-354-0634</span>
          </div>
          <div className="social-section">
            {socialLinks.map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container-inner">
            {/* Logo */}
            <Link to="/" className="logo">
              <div className="logo-icon">DG</div>
              <div>
                <h1 className="company-name">DGLOBAL TECH</h1>
                <p className="tagline">Driven. Digital. Global.</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <Link to="/" className="nav-link">Home</Link>
              
              {/* Services Dropdown */}
              <div 
                className="dropdown"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <span className="nav-link">Services ▼</span>
                {showDropdown && (
                  <div className="dropdown-menu">
                    {dropdownItems.map((item, i) => (
                      <Link key={i} to={item.path} className="dropdown-item">
                        <span style={{ fontSize: '18px' }}>{item.icon}</span> 
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/Careers" className="nav-link">Careers</Link>
              <Link to="/About" className="nav-link">About Us</Link>
              <Link to="/Contact" className="nav-link">Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/Careers" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
              <Link to="/About" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/Contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              
              {/* Mobile Services */}
              <div>
                <button 
                  className="mobile-services-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Services ▼
                </button>
                {showDropdown && (
                  <div className="mobile-dropdown">
                    {dropdownItems.map((item, i) => (
                      <Link 
                        key={i} 
                        to={item.path} 
                        className="mobile-dropdown-item"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setShowDropdown(false);
                        }}
                      >
                        <span style={{ fontSize: '16px' }}>{item.icon}</span> 
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;