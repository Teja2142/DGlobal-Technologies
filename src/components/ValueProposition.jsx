import React from "react";
import c2cImage from "../assets/Home/hirec2c.jpeg";
import outsourceImage from "../assets/Home/outsource.jpeg";
import teamImage from "../assets/Home/joinourteam.jpeg";

const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <style>
        {`
          .value-proposition {
            text-align: center;
            padding: 20px 20px;
          }

          .main-heading {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 40px;
          }

         .value-heading {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #667eea;
          position: relative;
        }

          /* Container for all 3 sections */
          .value-container {
            display: flex;
            flex-direction: column; /* Default (mobile) */
            gap: 30px;
            align-items: center;
          }

          /* Section styling */
          .value-item {
            flex: 1;
            max-width: 400px;
          }

          .image-container {
            position: relative;
            width: 100%;
            height: 400px;
            display: flex;
            margin: 0 auto;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
          }

          .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            transition: 0.3s ease;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: bold;
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 10px;
            padding: 0;
            text-align: center;
            line-height: 1.6;
            flex-direction: column;
          }

          .image-container:hover .overlay {
            opacity: 1;
          }

          /* Medium and larger screens → row layout */
          @media (min-width: 768px) {
            .value-container {
              flex-direction: row;
              justify-content: center;
            }
            .value-item {
              max-width: 350px;
            }
          }

          /* Large screens */
          @media (min-width: 1200px) {
            .value-item {
              max-width: 400px;
            }
          }
        `}
      </style>

      {/* Heading on top */}
      <h2 className="section-heading">Powering Business Growth with Expertise & Innovation</h2>

      <div className="value-container">
        {/* Section 1 */}
        <div className="value-item">
          <h2 className="value-heading">Hire C2C Clients</h2>
          <div className="image-container">
            <img src={c2cImage} alt="Hire C2C Clients" />
            <div className="overlay">
              Connect with top-tier, pre-vetted consultants to drive your projects forward with expertise and efficiency. Whether you need short-term specialists or long-term partners, we help you find professionals who deliver results, meet deadlines, and align with your business goals.
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="value-item">
          <h2 className="value-heading">Outsource Projects</h2>
          <div className="image-container">
            <img src={outsourceImage} alt="Outsource Projects" />
            <div className="overlay">
              Let us manage your project execution from start to finish with precision, expertise, and a commitment to excellence. We ensure timely delivery, cost efficiency, and high-quality results—so you can focus on growing your business while we take care of the rest.
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="value-item">
          <h2 className="value-heading">Join Our Team</h2>
          <div className="image-container">
            <img src={teamImage} alt="Join Our Team" />
            <div className="overlay">
              Be part of a dynamic and innovative team where your ideas are valued, your skills are sharpened, and your career can thrive. Together, we create solutions that make an impact.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
