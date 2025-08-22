import React, { useState } from "react";

const ConsultantInterestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    otherService: "", 
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.phone.trim()) {
      if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be 10 digits only.";
      }
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }
    if (formData.serviceType === "Other" && !formData.otherService.trim()) {
  newErrors.otherService = "Please specify your service type.";
}

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/byvplyla", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("✅ Your request has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          serviceType: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="consultant-form">
      <style>{`
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
          background: #10b981;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .consultant-form button:hover {
          background: #059669;
        }

        .status {
          text-align: center;
          margin-top: 10px;
          color: green;
          font-weight: bold;
        }

        .error {
  color: #b91c1c; /* deep red */
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
  padding: 6px 10px;
  background-color: #fee2e2; /* light red background */
  border: 1px solid #fecaca; /* subtle border */
  border-radius: 6px;
  display: inline-block;
  max-width: 95%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  animation: fadeIn 0.3s ease-in-out;
}

/* small fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-3px); }
  to { opacity: 1; transform: translateY(0); }
}

      `}</style>

      <h2>Request a Consultant</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
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
          {errors.serviceType && <p className="error">{errors.serviceType}</p>}
        </div>
        {/* Show this only if "Other" is selected */}
{formData.serviceType === "Other" && (
  <div>
    <input
      type="text"
      name="otherService"
      placeholder="Please specify your service"
      value={formData.otherService || ""}
      onChange={handleChange}
      required
    />
    {errors.otherService && <p className="error">{errors.otherService}</p>}
  </div>
)}
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
