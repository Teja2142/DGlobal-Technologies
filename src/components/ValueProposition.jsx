import React, { useState } from "react";

const ValueProposition = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const metrics = [
    { value: "500+", label: "Clients Served" },
    { value: "1200+", label: "Projects Delivered" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  return (
    <section className="value-prop-section">
      <div className="container">
        <h2 className="section-heading">Our Value Proposition</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`metric-card ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="metric-value">{metric.value}</h3>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .value-prop-section {
          padding: 60px 20px;
          background: #f8f9fa;
          text-align: center;
        }

        .section-heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #222;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .metric-card {
          background: #fff;
          border-radius: 12px;
          padding: 30px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .metric-card.hovered {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: #007bff;
          margin: 0;
        }

        .metric-label {
          font-size: 1rem;
          font-weight: 500;
          color: #555;
          margin-top: 10px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .section-heading {
            font-size: 1.5rem;
          }
          .metric-value {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueProposition;
