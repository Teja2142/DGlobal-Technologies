import React, { useState } from 'react';
import jobs from "../data/jobs.json";
import { useNavigate } from 'react-router-dom';

const JobSection = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(job => job.category === filter);

  return (
    <div className="job-section-wrapper">
      <style>{`
        .job-section-wrapper .jobs-section {
          margin: 80px 0;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 32px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
          animation: slideInUp 0.8s ease-out 0.4s both;
        }

        .job-section-wrapper .jobs-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 40px;
          text-align: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.01em;
        }

        .job-section-wrapper .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .job-section-wrapper .filter-buttons button {
          padding: 12px 24px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          background: #f3f4f6;
          color: #6b7280;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .job-section-wrapper .filter-buttons button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .job-section-wrapper .filter-buttons button.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .job-section-wrapper .job-cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (min-width: 1024px) {
          .job-section-wrapper .job-cards-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .job-section-wrapper .job-cards-container {
            grid-template-columns: 1fr;
          }
        }

        .job-section-wrapper .job-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          width: 100%;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .job-section-wrapper .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .job-section-wrapper .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }

        .job-section-wrapper .job-card:hover::before {
          transform: scaleY(1);
        }

        .job-section-wrapper .job-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1f2937;
        }

        .job-section-wrapper .job-card p {
          color: #6b7280;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .job-section-wrapper .job-card small {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="jobs-section">
        <h2 className="jobs-title">Available Roles</h2>

        <div className="filter-buttons">
          {['All', 'Tech', 'Healthcare', 'Finance'].map(cat => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="job-cards-container">
          {filteredJobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.location} • {job.type}</p>
              <p>Category: {job.category}</p>

              <button
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "10px 20px",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer"
                }}
                onClick={() => navigate(`/job/${job.id}`)}
              >
                View more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSection;