import React, { useState } from "react";

const ConsultantInterestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("✅ Your request has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceType: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="consultant-form">
      <style>
        {`
          .consultant-form {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            border-radius: 12px;
            background: #f9fafb;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            font-family: Arial, sans-serif;
            width: 90%;
          }

          .consultant-form h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #1f2937;
          }

          .consultant-form form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .consultant-form input,
          .consultant-form select,
          .consultant-form textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 15px;
          }

          .consultant-form button {
            background: #2563eb;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .consultant-form button:hover {
            background: #1e40af;
          }

          .status {
            text-align: center;
            margin-top: 10px;
            color: green;
            font-weight: bold;
          }

          /* Responsive tweaks */
          @media (max-width: 480px) {
            .consultant-form {
              padding: 15px;
            }
            .consultant-form h2 {
              font-size: 20px;
            }
            .consultant-form input,
            .consultant-form select,
            .consultant-form textarea {
              font-size: 14px;
              padding: 10px;
            }
            .consultant-form button {
              font-size: 15px;
              padding: 10px;
            }
          }
        `}
      </style>

      <h2>Request a Consultant</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Work Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Select Service Type</option>
          <option value="IT Staffing">IT Staffing</option>
          <option value="C2C Consulting">C2C Consulting</option>
          <option value="Project Outsourcing">Project Outsourcing</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your requirement..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default ConsultantInterestForm;
