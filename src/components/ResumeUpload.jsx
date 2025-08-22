import React, { useState, useRef } from 'react';

export default function ResumeUpload({ maxSizeMB = 5 }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef(null);

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const bytesToMB = (bytes) => +(bytes / (1024 * 1024)).toFixed(2);

  function validateAndSet(file) {
    setError('');
    if (!file) return;
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload a PDF or Word document.');
      return;
    }
    if (bytesToMB(file.size) > maxSizeMB) {
      setError(`File is too large. Maximum allowed size is ${maxSizeMB} MB.`);
      return;
    }
    setFile(file);
  }

  function handleSelect(e) {
    const f = e.target.files && e.target.files[0];
    validateAndSet(f);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    validateAndSet(f);
  }

  async function handleSubmit() {
    if (!file) {
      setError("Please select a resume before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("resume", file); // field name = "resume"

      const response = await fetch("https://getform.io/f/byvplyla", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert(`File '${file.name}' submitted successfully!`);
        setFile(null);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Error submitting form. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleRemove() {
    setFile(null);
    setError('');
  }

  return (
    <div className="ru-root">
      <style>{`
        .ru-root { font-family: Inter, ui-sans-serif, system-ui; padding-top: 80px; }
        .ru-card { max-width: 720px; margin: 18px auto; background: #fff; border-radius: 14px; padding: 24px; box-shadow: 0 12px 30px rgba(16,24,40,0.08); }
        .ru-title { margin:0; font-size:20px; font-weight:700; color:#0f172a }
        .ru-sub { margin:0; color:#6b7280; font-size:14px; line-height:1.5 }
        .dropzone { margin-top:18px; border:2px dashed #e6edf3; border-radius:10px; padding:22px; display:flex; align-items:center; gap:14px; cursor:pointer; transition: background .15s, border-color .15s; background:#f9fafb; }
        .dropzone.dragover { background:#f1f5f9; border-color:#60a5fa }
        .dz-icon { font-size:28px }
        .dz-text { color:#0f172a; font-weight:500 }
        .dz-hint { font-size:13px; color:#6b7280; margin-top:2px }
        .file-info { margin-top:16px; display:flex; align-items:center; justify-content:space-between; gap:12px }
        .file-meta { display:flex; align-items:center; gap:12px }
        .file-name { font-weight:600; color:#0f172a }
        .file-size { font-size:13px; color:#6b7280 }
        .controls { display:flex; gap:10px }
        .btn { padding:10px 16px; border-radius:10px; border:0; cursor:pointer; font-weight:700 }
        .btn.primary { background: linear-gradient(90deg,#2563eb,#06b6d4); color:#fff; transition: transform .15s; }
        .btn.primary:hover { transform: scale(1.05); }
        .btn.ghost { background:#f3f4f6; color:#0f172a; }
        .btn.submit { margin-top:20px; width:100%; background:#16a34a; color:white; }
        .error { color:#dc2626; margin-top:10px; font-size:13px }
      `}</style>

      <section className="ru-card">
        <h3 className="ru-title">Upload Your Resume</h3>
        <p className="ru-sub">Drag & drop your resume here, or click to select a file. Accepted: PDF or Word (Max {maxSizeMB} MB).</p>

        <div
          className={`dropzone ${dragOver ? 'dragover' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current && inputRef.current.click()}
        >
          <div className="dz-icon">📄</div>
          <div>
            <div className="dz-text">Click or drag & drop your resume</div>
            <div className="dz-hint">Accepted: .pdf, .doc, .docx</div>
          </div>
          <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} onChange={handleSelect} />
        </div>

        {error && <div className="error">{error}</div>}

        {file && (
          <div className="file-info">
            <div className="file-meta">
              <div className="file-name">{file.name}</div>
              <div className="file-size">{bytesToMB(file.size)} MB</div>
            </div>
            <div className="controls">
              <button className="btn ghost" onClick={handleRemove}>Remove</button>
            </div>
          </div>
        )}

        <button className="btn submit" onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Resume"}
        </button>
      </section>
    </div>
  );
}
