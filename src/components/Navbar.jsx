import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  // helper to handle closing menus
  const handleMenuClose = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        .nav-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #2563eb;
        }
        .nav-links {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li {
          position: relative;
        }
        .nav-links a, .nav-links span {
          text-decoration: none;
          color: #333;
          font-size: 16px;
          transition: color 0.3s;
        }
        .nav-links a:hover, .nav-links span:hover {
          color: #2563eb;
        }
        .nav-links .active {
          color: #2563eb;
          font-weight: bold;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 2px;
        }

        /* Dropdown (desktop hover) */
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          display: none;
          flex-direction: column;
          min-width: 200px;
        }
        .dropdown a {
          padding: 10px 15px;
          font-size: 15px;
          white-space: nowrap;
        }
        @media (min-width: 769px) {
          .nav-links li:hover .dropdown {
            display: flex;
          }
        }

        .menu-icon {
          display: none;
          font-size: 28px;
          cursor: pointer;
          color: #333;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            background: white;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .nav-links.open {
            display: flex;
          }
          .menu-icon {
            display: block;
          }
          .dropdown {
            position: static;
            box-shadow: none;
            display: none;
          }
          .dropdown.open {
            display: flex;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">DGlobal</div>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={handleMenuClose}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setServicesOpen(!servicesOpen);
                }
              }}
            >
              <span
                className={`${
                  location.pathname.includes("/services") ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                Services ▾
              </span>
              <div className={`dropdown ${servicesOpen ? "open" : ""}`}>
                <Link
                  to="/contractstaffing"
                  className={
                    location.pathname === "/contractstaffing"
                      ? "active"
                      : ""
                  }
                  onClick={handleMenuClose}
                >
                  Contract Staffing
                </Link>
                <Link
                  to="/projectdelivery"
                  className={
                    location.pathname === "/projectdelivery"
                      ? "active"
                      : ""
                  }
                  onClick={handleMenuClose}
                >
                  Project Delivery
                </Link>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setIndustriesOpen(!industriesOpen);
                }
              }}
            >
              <span
                className={`${
                  location.pathname.includes("/industries") ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                Industries ▾
              </span>
              <div className={`dropdown ${industriesOpen ? "open" : ""}`}>
                <Link
                  to="/healthcare"
                  className={
                    location.pathname === "/healthcare"
                      ? "active"
                      : ""
                  }
                  onClick={handleMenuClose}
                >
                  Healthcare
                </Link>
                <Link
                  to="/finance"
                  className={
                    location.pathname === "/industries/finance"
                      ? "active"
                      : ""
                  }
                  onClick={handleMenuClose}
                >
                  Finance
                </Link>
                <Link
                  to="/retail"
                  className={
                    location.pathname === "/industries/retail"
                      ? "active"
                      : ""
                  }
                  onClick={handleMenuClose}
                >
                  Retail
                </Link>
                <Link
                  to="/energy"
                  className={
                    location.pathname === "/industries/energy" ? "active" : ""
                  }
                  onClick={handleMenuClose}
                >
                  Energy
                </Link>
                <Link
                  to="/manufacturing"
                  className={
                    location.pathname === "/industries/manufacturing"
                      ? "active"
                      : ""
                  }
                  onClick={handleMenuClose}
                >
                  Manufacturing
                </Link>
                <Link
                  to="/logistics"
                  className={
                    location.pathname === "/industries/logistics" ? "active" : ""
                  }
                  onClick={handleMenuClose}
                >
                  Logistics
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={handleMenuClose}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className={location.pathname === "/careers" ? "active" : ""}
                onClick={handleMenuClose}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={handleMenuClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
