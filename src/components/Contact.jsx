import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://getform.io/f/byvplyla', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', inquiryType: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="contact-container">
      <div className="content-wrapper">
        <h1 className="main-title">Contact Us</h1>
        <p className="subtitle">Let’s start a conversation and explore how we can work together</p>

        <div className="cards-container">
          {/* Contact Info */}
          <div className="contact-info-card">
            <h2 className="card-title">D-Global Technologies</h2>
            <div className="info-box">
              <div className="info-item">
                <p className="label">📍 Our Location</p>
                <p>5900 Balcones Drive #26584<br />Austin, TX, 78731, US</p>
              </div>
              <div className="info-item">
                <p className="label">✉️ Email Us</p>
                <p>hr@dglobaltech.com</p>
              </div>
              <div className="info-item">
                <p className="label">🕒 Business Hours</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM CST</p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.431732916665!2d-97.75649542436082!3d30.34503580447932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca6dfd91a553%3A0x582fa418eb2c86c!2s5900%20Balcones%20Dr%20%2326584%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2sin!4v1691919999999!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-card">
            <h2 className="form-title">Send Us a Message</h2>
            <p className="form-subtitle">We’d love to hear from you. Drop a message and we’ll reply shortly.</p>

            {submitStatus && (
              <div className={`status-message ${submitStatus}`}>
                {submitStatus === 'success' ? '✨ Message sent successfully!' : '⚠️ Failed to send message.'}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>👤 Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label>🏢 Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="form-group">
                <label>📋 Type of Inquiry</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="General">💬 General</option>
                  <option value="Partnership">🤝 Partnership</option>
                  <option value="Support">🛠️ Support</option>
                  <option value="Careers">💼 Careers</option>
                </select>
              </div>

              <div className="form-group">
                <label>💬 Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-button">
                {isSubmitting ? 'Sending...' : '🚀 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .contact-container {
          background-color: #f9fafb;
          font-family: 'Open Sans', sans-serif;
          padding: 3rem 1rem;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .main-title {
          text-align: center;
          font-size: 3rem;
          color: #1e3a8a;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #4b5563;
          margin-bottom: 2.5rem;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .contact-info-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .card-title {
          font-size: 1.5rem;
          color: #111827;
          margin-bottom: 1.5rem;
        }

        .info-box {
          margin-bottom: 1.5rem;
        }

        .info-item {
          margin-bottom: 1rem;
        }

        .label {
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 0.25rem;
        }

        .map-container iframe {
          width: 100%;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
        }

        .form-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .form-title {
          font-size: 1.5rem;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .form-subtitle {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        input, select, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          background: #fff;
          color: #111827;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }

        .submit-button {
          background-color: #10b981;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background 0.3s ease;
        }

        .submit-button:hover {
          background-color: #059669;
        }

        .status-message {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .status-message.success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #10b981;
        }

        .status-message.error {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #ef4444;
        }

        @media (max-width: 600px) {
          .form-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
