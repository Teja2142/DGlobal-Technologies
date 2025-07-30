import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const formWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '24px',
  };

  const inputStyle = {
    backgroundColor: '#f9f9f9',
    width: '100%',
    padding: '16px',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '6px',
    outline: 'none',
    marginTop: '10px',
    fontSize: '16px',
  };

  const inputFocusStyle = {
    borderColor: '#3b82f6', // blue-500
  };

  const buttonStyle = {
    fontSize: '18px',
    width: '100%',
    padding: '14px',
    marginTop: '20px',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#3b82f6', // blue-500
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563eb', // blue-600
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
  };

  return (
    <div style={containerStyle} id="contact">
      <div style={formWrapperStyle}>
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <form action="https://getform.io/f/byvplyla" method="POST">
            <div style={gridStyle}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
