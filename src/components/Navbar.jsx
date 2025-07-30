import React, { useState } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaLinkedinIn, 
  FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaBars, FaTimes
} from "react-icons/fa";
// Note: Replace Link with your router's Link component
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      {/* Top Contact Bar */}
      <div style={styles.topBar}>
        <div style={styles.contactSection}>
          <span><FaEnvelope /> hr@dglobaltech.com</span>
          <span><FaPhoneAlt /> +1-314-732-7749</span>
          <span><FaPhoneAlt /> +1-314-354-0634</span>
        </div>
        <div style={styles.socialSection}>
          {socialLinks.map(({ href, Icon }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.container}>
          {/* Logo */}
          <Link to="/" style={styles.logo}>
            <div style={styles.logoIcon}>DG</div>
            <div>
              <h1 style={styles.companyName}>DGLOBAL TECH</h1>
              <p style={styles.tagline}>Driven. Digital. Global.</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div style={styles.desktopMenu}>
            <Link to="/" style={styles.navLink}>Home</Link>
            
            {/* Services Dropdown */}
            <div 
              style={styles.dropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span style={styles.navLink}>Services ▼</span>
              {showDropdown && (
                <div style={styles.dropdownMenu}>
                  {dropdownItems.map((item, i) => (
                    <Link key={i} to={item.path} style={styles.dropdownItem}>
                      <span>{item.icon}</span> {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/Careers" style={styles.navLink}>Careers</Link>
            <Link to="/About" style={styles.navLink}>About Us</Link>
            <Link to="/Contact" style={styles.navLink}>Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <Link to="/" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/Careers" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link to="/About" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/Contact" style={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            
            {/* Mobile Services */}
            <div>
              <button 
                style={styles.mobileServicesBtn}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Services ▼
              </button>
              {showDropdown && (
                <div style={styles.mobileDropdown}>
                  {dropdownItems.map((item, i) => (
                    <Link 
                      key={i} 
                      to={item.path} 
                      style={styles.mobileDropdownItem}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowDropdown(false);
                      }}
                    >
                      <span>{item.icon}</span> {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-button { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-button { display: none !important; }
        }
      `}</style>
    </>
  );
};

const styles = {
  topBar: {
    display: "flex",
    height: "50px",
    position: "relative"
  },
  contactSection: {
    width: "60%",
    backgroundColor: "#f7941d",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    fontWeight: "600",
    color: "white",
    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
    gap: "20px",
    fontSize: "13px"
  },
  socialSection: {
    width: "45%",
    backgroundColor: "#006c94",
    display: "flex",
    alignItems: "center",
    color: "white",
    clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
    position: "absolute",
    right: 0,
    height: "100%",
    paddingRight: "5%",
    justifyContent: "flex-end",
    gap: "15px"
  },
  socialLink: {
    color: "white",
    fontSize: "14px",
    transition: "transform 0.3s ease"
  },
  navbar: {
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none"
  },
  logoIcon: {
    width: "48px",
    height: "48px",
    background: "linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold"
  },
  companyName: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1e3a8a",
    margin: 0
  },
  tagline: {
    fontSize: "11px",
    color: "#6e48aa",
    margin: 0,
    fontWeight: "500"
  },
  desktopMenu: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    fontWeight: "600"
  },
  navLink: {
    color: "#1a1a2e",
    textDecoration: "none",
    fontSize: "15px",
    cursor: "pointer",
    transition: "color 0.3s ease"
  },
  dropdown: {
    position: "relative"
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "-120px",
    background: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    borderRadius: "12px",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    minWidth: "400px",
    marginTop: "8px",
    zIndex: 1000
  },
  dropdownItem: {
    color: "#1a1a2e",
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    transition: "all 0.3s ease"
  },
  mobileButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#1a1a2e",
    display: "none"
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "20px 24px",
    gap: "16px",
    borderTop: "1px solid #e5e7eb"
  },
  mobileLink: {
    color: "#1a1a2e",
    textDecoration: "none",
    padding: "12px 0",
    fontSize: "16px",
    fontWeight: "500",
    borderBottom: "1px solid #f3f4f6"
  },
  mobileServicesBtn: {
    background: "none",
    border: "none",
    color: "#1a1a2e",
    fontWeight: "500",
    fontSize: "16px",
    cursor: "pointer",
    padding: "12px 0",
    textAlign: "left",
    width: "100%",
    borderBottom: "1px solid #f3f4f6"
  },
  mobileDropdown: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    paddingTop: "12px"
  },
  mobileDropdownItem: {
    color: "#1a1a2e",
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    backgroundColor: "#f8f9fa",
    marginBottom: "4px"
  }
};

export default Navbar;