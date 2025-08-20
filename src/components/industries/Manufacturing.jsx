import React from "react";
import aerospace from "../../assets/Manufacturing/aerospace.png";
import automative from "../../assets/Manufacturing/automative.jpeg";
import consumer from "../../assets/Manufacturing/consumer.png";
import manufacturingsolutions from "../../assets/Manufacturing/manufacturingsolutions.png";
import pharma from "../../assets/Manufacturing/pharma.png";
import quality from "../../assets/Manufacturing/quality.png";
import smartmanufacturing from "../../assets/Manufacturing/smartmanufacturing.png";
import supplychain from "../../assets/Manufacturing/supplychain.png";
const Manufacturing = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #f9fafb;
          color: #1f2937;
        }

        .manufacturing-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        .hero-section {
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(135deg, #1f2937, #374151);
          color: white;
          border-radius: 20px;
        }

        .hero-section h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 20px;
        }

        .hero-section p {
          font-size: 1.25rem;
          max-width: 700px;
          margin: auto;
          line-height: 1.6;
          color: #e5e7eb;
        }

        .image-placeholder {
          width: 100%;
          height: 280px;
          background: #e5e7eb;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          font-size: 1.2rem;
          margin: 20px 0;
        }

        .section {
          margin: 80px 0;
          text-align: center;
        }

        .section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #111827;
        }

        .section p {
          font-size: 1.1rem;
          max-width: 800px;
          margin: auto;
          line-height: 1.7;
          color: #4b5563;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          text-align: center;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 16px 0;
        }

        .card p {
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.6;
        }

        .footer {
          text-align: center;
          padding: 60px 20px;
          border-top: 1px solid #e5e7eb;
          margin-top: 80px;
        }

        .footer p {
          color: #6b7280;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 20px;
          }
          .section {
            margin: 60px 0;
          }
        }
      `}</style>

      <div className="manufacturing-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Manufacturing Solutions</h1>
          <p>
            Driving innovation, efficiency, and quality across global
            manufacturing industries with next-gen digital and operational
            excellence.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="image-placeholder"><img src={manufacturingsolutions} alt="Manufacturing"/></div>

        {/* About Section */}
        <div className="section">
          <h2>Our Expertise</h2>
          <p>
            From smart factories to supply chain optimization, we empower
            manufacturers with scalable solutions that reduce costs, improve
            productivity, and enhance sustainability.
          </p>
          <div className="grid">
            <div className="card">
              <div className="image-placeholder"><img src={smartmanufacturing} alt="Manufacturing"/></div>
              <h3>Smart Manufacturing</h3>
              <p>
                Leveraging IoT, AI, and automation to transform production lines
                into intelligent ecosystems.
              </p>
            </div>
            <div className="card">
              <div className="image-placeholder"><img src={supplychain} alt="Manufacturing"/></div>
              <h3>Supply Chain Excellence</h3>
              <p>
                End-to-end visibility and predictive analytics to streamline
                logistics and procurement.
              </p>
            </div>
            <div className="card">
              <div className="image-placeholder"><img src={quality} alt="Manufacturing"/></div>
              <h3>Quality & Compliance</h3>
              <p>
                Advanced monitoring systems to ensure product quality and meet
                global standards.
              </p>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="section">
          <h2>Industries We Serve</h2>
          <div className="grid">
            {[
              "Automotive",
              "Aerospace",
              "Electronics",
              "Pharmaceuticals",
              "Consumer Goods",
            ].map((industry, i) => (
              <div key={i} className="card">
                <div className="image-placeholder"><img src={aerospace} alt="Manufacturing"/></div>
                <h3>{industry}</h3>
                <p>
                  Tailored solutions designed to meet the unique challenges of
                  the {industry} sector.
                </p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Manufacturing;
