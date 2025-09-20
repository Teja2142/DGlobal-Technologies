import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobs from "../data/jobs.json";

const JobApplication = () => { 
  const { id } = useParams();
  const job = jobs.find(j => j.id.toString() === id);
  const jobtitle = job ? job.title : "";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    position: '',
    workAuth: '',
    location: '',
    availability: '',
    comments: '',
    resume: null
  });

  useEffect(() => {
    if (jobtitle) {
      setFormData(prev => ({ ...prev, position: jobtitle }));
    }
  }, [jobtitle]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      const backendFieldMap = {
        fullName: 'full_name',
        email: 'email',
        phone: 'phone',
        linkedIn: 'linkedin',
        position: jobtitle,
        workAuth: 'work_auth_status',
        location: 'preferred_location',
        availability: 'availability',
        comments: 'comments'
      };

      Object.keys(formData).forEach(key => {
        if (key !== 'resume' && formData[key]) {
          formDataToSend.append(backendFieldMap[key], formData[key]);
        }
      });

      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('https://jenkins-server.kgktechnologies.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) throw new Error('Network response was not ok');
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit your information. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #f3f4f6;
        }

        .form-wrapper {
          max-width: 900px;
          margin: 60px auto;
          padding: 40px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }

        .form-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 40px;
        }

        .error-banner {
          background: #ef4444;
          color: white;
          padding: 14px 20px;
          margin-bottom: 24px;
          border-radius: 12px;
          text-align: center;
          font-weight: 500;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          margin-bottom: 6px;
          color: #374151;
        }

        .form-input, .form-select, .form-textarea, .file-input {
          padding: 14px 18px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus, .file-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .file-input {
          border: 2px dashed #d1d5db;
          background: #fafafa;
          cursor: pointer;
        }

        .file-input:hover {
          border-color: #667eea;
          background: #f8faff;
        }

        .submit-button {
          width: 100%;
          padding: 16px 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .success-container {
          text-align: center;
          padding: 60px 30px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          max-width: 600px;
          margin: 60px auto;
        }

        .success-icon {
          font-size: 3rem;
          color: #10b981;
          margin-bottom: 20px;
          display: inline-block;
        }

        .success-container h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .success-container p {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 20px;
        }

        @media(max-width: 768px){
          .form-wrapper {
            margin: 40px 20px;
            padding: 30px;
          }

          .form-title {
            font-size: 2rem;
          }

          .submit-button {
            font-size: 1rem;
            padding: 14px 0;
          }
        }
      `}</style>

      {!submitted ? (
        <div className="form-wrapper">
          <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Applying for: {jobtitle}</h3>
          <h2 className="form-title">Submit Your Resume</h2>
          {error && <div className="error-banner">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input"/>
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input"/>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-input"/>
              </div>
              <div className="form-group">
                <label className="form-label">LinkedIn</label>
                <input type="url" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className="form-input"/>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Position *</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} readOnly required className="form-input"/>
              </div>
              <div className="form-group">
                <label className="form-label">Work Authorization *</label>
                <select name="workAuth" value={formData.workAuth} onChange={handleChange} required className="form-select">
                  <option value="">Select...</option>
                  <option>OPT</option>
                  <option>CPT</option>
                  <option>H1B</option>
                  <option>Green Card</option>
                  <option>US Citizen</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Preferred Location *</label>
                <select name="location" value={formData.location} onChange={handleChange} required className="form-select">
                  <option value="">Select...</option>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Availability *</label>
                <input type="text" name="availability" value={formData.availability} onChange={handleChange} required className="form-input"/>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Resume *</label>
              <input type="file" name="resume" onChange={handleFileChange} required accept=".pdf,.doc,.docx" className="file-input"/>
            </div>

            <div className="form-group">
              <label className="form-label">Comments</label>
              <textarea name="comments" value={formData.comments} onChange={handleChange} className="form-textarea" placeholder="Tell us about yourself, your experience, or any specific interests..."/>
            </div>

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? <div className="spinner"></div> : 'Submit Application'}
            </button>
          </form>
        </div>
      ) : (
        <div className="success-container">
          <div className="success-icon">✔</div>
          <h2>Thank You!</h2>
          <p>We've received your application and will be in touch when we have a matching opportunity.</p>
          <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', linkedIn: '', position: '', workAuth: '', location: '', availability: '', comments: '', resume: null }); }} className="submit-button">
            Submit Another Application
          </button>
        </div>
      )}
    </>
  );
}

export default JobApplication;
