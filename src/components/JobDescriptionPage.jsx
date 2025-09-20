import React from "react";

export default function JobDescriptionPage() {
  const isInternalUser = false;

  return (
    <div className="page-root">
      <style>{`
        .page-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 24px;
          box-sizing: border-box;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
            "Apple Color Emoji", "Segoe UI Emoji";
        }
        .card {
          width: 100%;
          max-width: 720px;
          background: white;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          overflow: hidden;
        }
        .card-head {
          padding: 24px 28px;
          background: rgba(17,24,39,0.55);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .title {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.2px;
          color: white;
        }
        .subtitle {
          margin: 6px 0 0 0;
          font-size: 14px;
          color: white;
        }
        .card-body {
          padding: 24px 28px 28px 28px;
        }
        .notice {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 16px;
          border: 1px dashed rgba(255,255,255,0.18);
          background: rgba(17,24,39,0.55);
          border-radius: 14px;
          color: #f3f4f6;
          line-height: 1.5;
        }
        .notice-emoji { font-size: 20px; line-height: 1; }

        .actions {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn {
          appearance: none;
          cursor: not-allowed;
          border: 0;
          padding: 12px 16px;
          border-radius: 12px;
          background: #cd4c35;
          color: white;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.2px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
        }
        .btn[aria-disabled="true"]:hover { filter: brightness(0.98); }

        .meta {
          margin-top: 18px;
          font-size: 12px;
          color: #0f172a;
        }
        .divider { height: 1px; background: rgba(255,255,255,0.06); margin: 20px 0; }

        .internal {
          display: none;
        }
        .internal.open {
          display: block;
        }
        .label { display:block; font-size: 13px; color: #374151; margin-bottom: 6px; }
        .input, .textarea, .select {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          color: #111827;
          outline: none;
          font-size: 14px;
        }
        .textarea { min-height: 120px; resize: vertical; }
        .submit-btn {
          margin-top: 12px;
          cursor: pointer;
          border: 0;
          padding: 12px 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2563eb, #22d3ee);
          color: white;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.2px;
        }
      `}</style>

      <section className="card" role="region" aria-label="Job Description Access">
        <header className="card-head">
          <h1 className="title">Job Description Portal</h1>
          <p className="subtitle">Create, view, and manage job descriptions (JD)</p>
        </header>

        <div className="card-body">
          {!isInternalUser && (
            <>
              <div className="notice" role="alert" aria-live="polite">
                <span className="notice-emoji" aria-hidden>🔒</span>
                <div>
                  <strong style={{display:'block'}}>Access Restricted</strong>
                  You aren’t allowed to upload job descriptions. Only the internal team has access.
                </div>
              </div>

              <div className="actions">
                <button className="btn" aria-disabled="true">Upload JD (disabled)</button>
                <button className="btn" aria-disabled="true">Create New JD (disabled)</button>
              </div>

              <p className="meta">
                If you believe this is an error, please contact your administrator to request internal access.
              </p>
            </>
          )}

          {/* Internal form */}
          <div className={`internal ${isInternalUser ? "open" : ""}`}>
            <div className="divider" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("JD submitted (internal preview only).");
              }}
            >
              <label className="label" htmlFor="jobTitle">Job Title</label>
              <input id="jobTitle" className="input" placeholder="e.g., Senior React Engineer" required />

              <label className="label" htmlFor="category">Category</label>
              <select id="category" className="select" required>
                <option value="">--Choose--</option>
                <option value="tech">Tech</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
              </select>

              <label className="label" htmlFor="location" style={{marginTop:12}}>Location</label>
              <input id="location" className="input" placeholder="e.g., Hyderabad, India" required />

              <label className="label" htmlFor="jobType">Job Type</label>
              <input id="jobType" className="input" placeholder="e.g., Full-time / Contract" required />

              <label className="label" htmlFor="experience">Experience</label>
              <input id="experience" className="input" placeholder="e.g., 3+ years" required />

              <label className="label" htmlFor="salary">Salary Range</label>
              <input id="salary" className="input" placeholder="e.g., ₹6 LPA – ₹12 LPA" required />

              <label className="label" htmlFor="postedDate">Posted Date</label>
              <input id="postedDate" className="input" type="date" required />

              <label className="label" htmlFor="description">Description</label>
              <textarea id="description" className="textarea" placeholder="Enter job description…" required />

              <label className="label" htmlFor="qualifications">Qualifications</label>
              <textarea id="qualifications" className="textarea" placeholder="Enter required qualifications…" required />

              <label className="label" htmlFor="requirements">Requirements</label>
              <textarea id="requirements" className="textarea" placeholder="Enter job requirements…" required />

              <button type="submit" className="submit-btn">Submit JD</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
