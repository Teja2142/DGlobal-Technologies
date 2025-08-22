import React, { useState } from 'react';

// Single-file React component using INTERNAL CSS only
// "Hiring Interest Form" — responsive, accessible, and uses client-side validation.

export default function HiringInterestForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentCompany: '',
    role: '',
    experience: '',
    location: '',
    linkedin: '',
  });
  const [resumeName, setResumeName] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Please enter a valid email.';
    if (!form.phone.match(/^\+?[0-9\s-]{7,20}$/)) e.phone = 'Please enter a valid phone number.';
    if (!form.role.trim()) e.role = 'Please specify interested role.';
    if (!form.experience || isNaN(Number(form.experience)) || Number(form.experience) < 0) e.experience = 'Enter years of experience (number).';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setResumeName('');
      return;
    }
    // Allow only PDF or DOC/DOCX for resume – client-side check
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      alert('Please upload PDF or Word document only.');
      e.target.value = '';
      setResumeName('');
      return;
    }
    setResumeName(file.name);
  }

  async function handleSubmit(e) {
  e.preventDefault();
  const validation = validate();
  setErrors(validation);
  if (Object.keys(validation).length) return;

  setSubmitting(true);

  try {
    const formData = new FormData(e.target); // collects all form fields + file

    const response = await fetch("https://getform.io/f/byvplyla", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Thanks — your hiring interest has been submitted.");
      setForm({
        fullName: '',
        email: '',
        phone: '',
        currentCompany: '',
        role: '',
        experience: '',
        location: '',
        linkedin: '',
      });
      setResumeName('');
      setErrors({});
      e.target.reset(); // clear actual file input too
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error. Please try again later.");
  } finally {
    setSubmitting(false);
  }
}


  return (
    <div className="hire-root">
      <style>{`
        .hire-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          box-sizing: border-box;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          background: linear-gradient(180deg,#f8fafc 0%, #eef2f7 100%);
        }
        .hire-card {
          width: 100%;
          max-width: 860px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(16,24,40,0.08);
          overflow: hidden;
          display: flex;
          gap: 0;
        }
        .left {
          flex: 1 1 360px;
          padding: 28px;
          background: linear-gradient(135deg, #0f172a 0%, #0b1220 100%);
          color: #e6eef8;
        }
        .left h2 { margin: 0 0 8px 0; font-size: 20px; }
        .left p { margin: 0; color: #bcd0ea; font-size: 13px; line-height: 1.45 }

        .right {
          flex: 1 1 500px;
          padding: 24px 28px;
        }

        form { width: 100%; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .full { grid-column: 1 / -1; }

        label { display:block; font-size: 13px; color: #0f172a; margin-bottom: 6px; }
        .input, .select, .textarea {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #e6edf3;
          background: white;
          box-sizing: border-box;
          font-size: 14px;
          color: #0f172a;
          outline: none;
        }
        .textarea { min-height: 100px; resize: vertical }
        .hint { font-size: 12px; color: #6b7280; margin-top: 6px; }

        .file-row { display:flex; gap:10px; align-items:center; }
        .file-name { font-size: 13px; color: #374151; }

        .row { margin-top: 12px; }
        .actions { display:flex; gap:12px; margin-top: 16px; align-items:center; }
        .btn {
          padding: 10px 14px; border-radius: 10px; border:0; cursor: pointer; font-weight:700; font-size:14px;
        }
        .btn.primary { background: linear-gradient(90deg,#2563eb,#06b6d4); color: white; }
        .btn.secondary { background:#f3f4f6; color:#0f172a; }

        .error { color:#dc2626; font-size:12px; margin-top:6px; }
        .small-meta { font-size:12px; color:#6b7280 }

        @media (max-width: 820px) {
          .hire-card { flex-direction: column; }
          .left { order: 2 }
          .right { order: 1 }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="hire-card" aria-labelledby="hire-heading">
        <aside className="left">
          <h2 id="hire-heading">Request a Hiring Interest — Join Our Talent Pool</h2>
          <p>
            Share your details and the role you’re interested in. Our recruiting team will review the information and reach
            out if there’s a match.
          </p>

          <div style={{marginTop:16}}>
            <p className="small-meta"><strong>Turnaround:</strong> We typically respond within 5–7 business days.</p>
            <p className="small-meta" style={{marginTop:6}}><strong>Privacy:</strong> Your information will be used for recruitment purposes only.</p>
          </div>
        </aside>

        <div className="right">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid">
              <div>
                <label htmlFor="fullName">Full name *</label>
                <input id="fullName" name="fullName" className="input" value={form.fullName} onChange={handleChange} aria-invalid={!!errors.fullName} />
                {errors.fullName && <div className="error">{errors.fullName}</div>}
              </div>

              <div>
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" className="input" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div>
                <label htmlFor="phone">Phone *</label>
                <input id="phone" name="phone" className="input" value={form.phone} onChange={handleChange} aria-invalid={!!errors.phone} />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>

              <div>
                <label htmlFor="experience">Years of experience *</label>
                <input id="experience" name="experience" className="input" value={form.experience} onChange={handleChange} aria-invalid={!!errors.experience} />
                {errors.experience && <div className="error">{errors.experience}</div>}
              </div>

              <div className="full">
                <label htmlFor="role">Role you are interested in *</label>
                <input id="role" name="role" className="input" value={form.role} onChange={handleChange} aria-invalid={!!errors.role} />
                {errors.role && <div className="error">{errors.role}</div>}
              </div>

              <div className="full">
                <label htmlFor="currentCompany">Current company</label>
                <input id="currentCompany" name="currentCompany" className="input" value={form.currentCompany} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="location">Preferred location</label>
                <input id="location" name="location" className="input" value={form.location} onChange={handleChange} />
              </div>

              <div>
                <label htmlFor="linkedin">LinkedIn profile</label>
                <input id="linkedin" name="linkedin" className="input" value={form.linkedin} onChange={handleChange} />
              </div>

              <div className="full">
                <label htmlFor="note">Note (optional)</label>
                <textarea id="note" name="note" className="textarea" placeholder="Anything we should know?" onChange={handleChange} />
                <div className="hint">Tell us about your notice period, salary expectations, or anything else relevant.</div>
              </div>

              <div className="full">
                <label className="label">Attach resume (optional)</label>
                <div className="file-row">
                  <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
                  <div className="file-name">{resumeName || 'No file chosen'}</div>
                </div>
                <div className="hint">We accept PDF or Word documents. Max file size enforced on server-side.</div>
              </div>

            </div>

            <div className="actions">
              <button type="submit" className={`btn primary`} disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Interest'}</button>
              <button type="button" className="btn secondary" onClick={() => { setForm({ fullName:'', email:'', phone:'', currentCompany:'', role:'', experience:'', location:'', linkedin:'' }); setResumeName(''); setErrors({}); }}>Clear</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
