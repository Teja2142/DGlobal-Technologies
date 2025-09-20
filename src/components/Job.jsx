import React from 'react';
import Alljobs from "../data/jobs.json";
import { useNavigate, useParams } from 'react-router-dom';

const Job = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = Alljobs.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <div className="job-wrapper">
        <style>{`
          .job-wrapper .job-error-container {
            max-width: 600px;
            margin: 100px auto;
            padding: 40px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
          }
          .job-wrapper .job-error-container h2 {
            color: #e11d48;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .job-wrapper .job-error-container p {
            color: #64748b;
            margin-bottom: 2rem;
          }
          .job-wrapper .job-back-button {
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .job-wrapper .job-back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }
        `}</style>

        <div className="job-error-container">
          <h2>Job not found</h2>
          <p>The job you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => navigate('/')} className="job-back-button">
            ← Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="job-wrapper">
      <style>{`
        .job-wrapper {
          padding: 40px 20px;
        }
        .job-wrapper .job-container {
          max-width: 900px;
          margin: 20px auto;
          padding: 30px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          position: relative;
        }
        .job-wrapper .job-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
          border-radius: 24px 24px 0 0;
        }
        .job-wrapper .job-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 30px 0 20px 0;
          color: #0f172a;
          background: linear-gradient(135deg, #1e293b, #475569);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }
        .job-wrapper .job-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 30px;
          padding: 25px;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        .job-wrapper .job-info p {
          font-size: 1rem;
          margin: 0;
          color: #334155;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .job-wrapper .job-info p:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .job-wrapper .job-section {
          margin-top: 40px;
        }
        .job-wrapper .job-section h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #0f172a;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 0;
          border-bottom: 2px solid #e2e8f0;
          position: relative;
        }
        .job-wrapper .job-section h3::before {
          content: '';
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
          position: absolute;
          left: -20px;
        }
        .job-wrapper ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }
        .job-wrapper li {
          background: white;
          padding: 16px 20px;
          border-radius: 12px;
          color: #475569;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          border-left: 4px solid transparent;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .job-wrapper li:hover { transform: translateX(8px); }
        .job-wrapper .qualifications li:hover { border-left-color: #10b981; }
        .job-wrapper .benefits li:hover { border-left-color: #8b5cf6; }
        .job-wrapper .values li:hover { border-left-color: #f59e0b; }
        .job-wrapper pre {
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          padding: 24px;
          border-radius: 16px;
          white-space: pre-wrap;
          font-size: 1rem;
          color: #334155;
          line-height: 1.7;
          border: 1px solid #e2e8f0;
          font-family: 'SF Mono', monospace;
        }
        .job-wrapper .apply-section {
          margin-top: 50px;
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 20px;
          border: 2px dashed #cbd5e1;
        }
        .job-wrapper .apply-text {
          font-size: 1.25rem;
          color: #475569;
          margin-bottom: 25px;
          font-weight: 600;
        }
        .job-wrapper .apply-button {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 16px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 700;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }
        .job-wrapper .apply-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .job-wrapper .apply-button:hover::before { left: 100%; }
        .job-wrapper .apply-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
        }
        .job-wrapper .apply-button:active { transform: translateY(-1px); }
      `}</style>

      <div className="job-container">
        <h1 className="job-title">{job.title}</h1>

        <div className="job-info">
          <p><span>📍</span><strong>Location:</strong> {job.location}</p>
          <p><span>💼</span><strong>Type:</strong> {job.type}</p>
          <p><span>🕑</span><strong>Experience:</strong> {job.experience}</p>
          <p><span>💰</span><strong>Salary:</strong> {job.salaryRange}</p>
        </div>

        <div className="job-section">
          <h3>📋 Description</h3>
          <pre>{job.description}</pre>
        </div>

        <div className="job-section">
          <h3>🎓 Qualifications</h3>
          <ul className="qualifications">
            {job.qualifications.map((q, i) => <li key={i}><span>✅</span>{q}</li>)}
          </ul>
        </div>

        <div className="job-section">
          <h3>🎁 Benefits</h3>
          <ul className="benefits">
            {job.benefits.map((b, i) => <li key={i}><span>🎯</span>{b}</li>)}
          </ul>
        </div>

        <div className="job-section">
          <h3>⭐ Values</h3>
          <ul className="values">
            {job.values.map((v, i) => <li key={i}><span>🌟</span>{v}</li>)}
          </ul>
        </div>

        <div className="apply-section">
          <p className="apply-text">Ready to join our amazing team?</p>
          <button 
            className="apply-button"
            onClick={() => navigate(`/jobapplication/${job.id}`)}
          >
            Apply Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
