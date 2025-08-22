import React from "react";

// Single-file React page using INTERNAL CSS only
// Shows a clear message that uploads are not allowed unless you are internal staff.

export default function JobDescriptionPage() {
  // Flip this to true if you ever need to preview the internal view
  const isInternalUser = false;

  return (
    <div className="page-root">
      <style>{`
        .page-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f172a; /* slate-900 */
          padding: 24px;
          box-sizing: border-box;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
            "Apple Color Emoji", "Segoe UI Emoji";
        }
        .card {
          width: 100%;
          max-width: 720px;
          background: #0b1220; /* deep slate */
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          overflow: hidden;
        }
        .card-head {
          padding: 24px 28px;
          background: linear-gradient(135deg, #111827 0%, #0b1220 40%, #0b1220 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .title {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.2px;
          color: #e5e7eb;
        }
        .subtitle {
          margin: 6px 0 0 0;
          font-size: 14px;
          color: #9ca3af;
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
          cursor: not-allowed; /* always disabled for external users */
          border: 0;
          padding: 12px 16px;
          border-radius: 12px;
          background: #1f2937;
          color: #9ca3af;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.2px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
        }
        .btn[aria-disabled="true"]:hover { filter: brightness(0.98); }

        .meta {
          margin-top: 18px;
          font-size: 12px;
          color: #9ca3af;
        }
        .divider { height: 1px; background: rgba(255,255,255,0.06); margin: 20px 0; }

        /* Internal-only form (hidden for non-internal users) */
        .internal {
          display: none;
        }
        .internal.open {
          display: block;
        }
        .label { display:block; font-size: 13px; color: #cbd5e1; margin-bottom: 6px; }
        .input, .textarea {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: #0b1220;
          color: #e5e7eb;
          outline: none;
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
                <button
                  className="btn"
                  aria-disabled="true"
                  title="Restricted: Only internal team members can upload JDs"
                >
                  Upload JD (disabled)
                </button>
                <button
                  className="btn"
                  aria-disabled="true"
                  title="Restricted: Only internal team members can create new JDs"
                >
                  Create New JD (disabled)
                </button>
              </div>

              <p className="meta">
                If you believe this is an error, please contact your administrator to request internal access.
              </p>
            </>
          )}

          {/* Internal view (for reference). Toggle isInternalUser to true to preview. */}
          <div className={`internal ${isInternalUser ? 'open' : ''}`}>
            <div className="divider" />
            <form onSubmit={(e)=>{e.preventDefault(); alert('JD submitted (internal only preview).');}}>
              <label className="label" htmlFor="jdTitle">Job Title</label>
              <input id="jdTitle" className="input" placeholder="e.g., Senior React Engineer" required />

              <label className="label" htmlFor="jdDesc" style={{marginTop:12}}>Job Description</label>
              <textarea id="jdDesc" className="textarea" placeholder="Paste or type the JD details here…" required />

              <button type="submit" className="submit-btn">Submit JD</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
