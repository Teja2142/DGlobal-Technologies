import React from "react";
import about from "../../assets/logisticsfolder/about.png";
import logistics1 from "../../assets/logisticsfolder/logistics.jpeg";
import logistics2 from "../../assets/logisticsfolder/logistics.png";
const LogisticsSupplyChain = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        .logistics-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f9fafb, #f3f4f6);
          padding: 40px 20px;
        }

        .hero-section {
          text-align: center;
          padding: 60px 20px;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .image-placeholder {
  width: 100%;
  max-width: 800px;   /* keeps images centered and not too wide */
  margin: 40px auto;  /* centers horizontally */
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08); /* optional nice effect */
}

.image-placeholder img {
  width: 100%;
  height: auto;       /* keeps aspect ratio */
  border-radius: 16px;
}

        .section {
          max-width: 1200px;
          margin: 60px auto;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }

        .section h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #111827;
          text-align: center;
        }

        .section p {
          color: #4b5563;
          font-size: 1.05rem;
          line-height: 1.7;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .card {
          background: #f9fafb;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: #1f2937;
        }

        .card p {
          color: #6b7280;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .section {
            padding: 20px;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="logistics-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Logistics & Supply Chain Solutions</h1>
          <p className="hero-subtitle">
            We streamline logistics and supply chain operations with innovative technology, 
            global expertise, and efficient strategies to deliver excellence across industries.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="image-placeholder">
  <img 
    src="https://plus.unsplash.com/premium_photo-1749423089108-9ab9871fb9e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Logistics" 
  />
</div>

        {/* About Section */}
        <div className="section" >
          <h2>About Our Supply Chain Services</h2>
          <p>
            From procurement to last-mile delivery, we ensure seamless supply chain integration. 
            Our solutions optimize transportation, reduce costs, and enhance visibility across your operations.
          </p>
        </div>

        {/* Image Placeholder */}
       <div className="image-placeholder">
  <img 
    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80" 
    alt="Logistics" 
  />
</div>


        {/* Core Services */}
        <div className="section" style={{"background-color": "lightgray"}}>
          <h2>Our Core Services</h2>
          <div className="grid" >
            <div className="card">
              <h3>Transportation Management</h3>
              <p>
                Efficient road, air, and sea freight management to ensure on-time delivery worldwide.
              </p>
            </div>
            <div className="card">
              <h3>Warehouse Solutions</h3>
              <p>
                Smart warehousing and inventory control for seamless storage and distribution.
              </p>
            </div>
            <div className="card">
              <h3>Supply Chain Analytics</h3>
              <p>
                Real-time insights and data-driven decision-making for better operational efficiency.
              </p>
            </div>
            <div className="card">
              <h3>Global Trade Compliance</h3>
              <p>
                End-to-end compliance and documentation to simplify international trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogisticsSupplyChain;
