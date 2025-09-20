import React, { useState } from "react";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (isLogin) {
      if (!firstName.trim()) newErrors.firstName = "First name is required";
      else if (!/^[A-Za-z]+$/.test(firstName))
        newErrors.firstName = "Only alphabets allowed";

      if (!lastName.trim()) newErrors.lastName = "Last name is required";
      else if (!/^[A-Za-z]+$/.test(lastName))
        newErrors.lastName = "Only alphabets allowed";

      if (!/^\d{10}$/.test(phone))
        newErrors.phone = "Phone must be 10 digits";
    }

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (
      password.length < 6 ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    )
      newErrors.password =
        "Password must be at least 6 characters, contain a number and special character";

    if (isLogin && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      let url = "";
      let body = {};

      if (isAdmin && !isLogin) {
        url = "/api/auth/admin/login";
        body = { email, password };
      } else if (!isAdmin && !isLogin) {
        url = "/api/auth/login";
        body = { email, password };
      } else {
        url = "/api/auth/signup";
        body = { firstName, lastName, phone, email, password };
      }

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("✅ Success:", data);
        alert("Login successful!");
      } else {
        console.error("❌ Error:", data.message || "Something went wrong");
        alert("Login failed: " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error("⚠️ Network error:", error);
      alert("Network error occurred");
    }
  };

  const handleLoginSignup = () => {
    setIsLogin((prev) => !prev);
    setErrors({});
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    mainWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '450px',
      margin: '0 auto'
    },
    card: {
      background: '#f8fafc',
      border: '2px solid #e2e8f0',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease'
    },
    header: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    iconContainer: {
      width: '80px',
      height: '80px',
      margin: '0 auto 16px',
      background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
    },
    icon: {
      width: '40px',
      height: '40px',
      color: 'white'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1a202c',
      margin: '0 0 8px 0'
    },
    subtitle: {
      fontSize: '14px',
      color: '#4a5568',
      margin: 0
    },
    toggleButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '24px'
    },
    toggleButton: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 24px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#2d3748',
      background: '#f7fafc',
      border: '2px solid #e2e8f0',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none'
    },
    toggleButtonHover: {
      background: '#edf2f7',
      transform: 'translateY(-1px)'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    nameRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1a202c',
      margin: 0
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      background: 'white',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      color: '#1a202c',
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box'
    },
    inputFocus: {
      borderColor: '#22d3ee',
      boxShadow: '0 0 0 3px rgba(34, 211, 238, 0.1)'
    },
    error: {
      color: '#e53e3e',
      fontSize: '12px',
      margin: '4px 0 0 0'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      padding: '14px 24px',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      outline: 'none'
    },
    submitButtonHover: {
      background: 'linear-gradient(135deg, #0891b2, #2563eb)',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
    },
    linkButton: {
      background: 'none',
      border: 'none',
      color: '#2d3748',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'underline',
      textDecorationStyle: 'dotted',
      textUnderlineOffset: '4px',
      transition: 'color 0.2s ease',
      outline: 'none'
    },
    linkButtonHover: {
      color: '#1a202c'
    },
    footer: {
      textAlign: 'center',
      marginTop: '32px',
      fontSize: '12px',
      color: '#4a5568'
    },
    // Media queries for responsive design
    '@media (max-width: 640px)': {
      card: {
        padding: '32px 24px'
      },
      nameRow: {
        gridTemplateColumns: '1fr',
        gap: '16px'
      },
      title: {
        fontSize: '28px'
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.header}>
            <div >
              {!isLogin ? <img src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-126999474.jpg" style={{"width": "80px", "height": "80px"}}/> : <img src="https://cdn-icons-png.flaticon.com/512/6159/6159448.png" style={{"width": "70px", "height": "70px"}}/>}
              {/*<svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg> */}
            </div>
            <h1 style={styles.title}>
              {isLogin ? "Create Account" : isAdmin ? "Admin Portal" : "Welcome Back"}
            </h1>
            <p style={styles.subtitle}>
              {isLogin ? "Join us today and get started" : "Sign in to continue to your account"}
            </p>
          </div>

          {/* Toggle button for admin/user */}
          {!isLogin && (
            <div style={styles.toggleButtonContainer}>
              <button
                type="button"
                onClick={() => setIsAdmin((prev) => !prev)}
                style={styles.toggleButton}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.toggleButtonHover);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.toggleButton);
                }}
              >
                <span style={{ marginRight: '8px' }}>🔄</span>
                {isAdmin ? "Switch to User Login" : "Switch to Admin Login"}
              </button>
            </div>
          )}

          <div style={styles.formContainer}>
            {/* Name fields for signup */}
            {isLogin && (
              <div style={window.innerWidth <= 640 ? { ...styles.nameRow, gridTemplateColumns: '1fr' } : styles.nameRow}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  />
                  {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  />
                  {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
                </div>
              </div>
            )}

            {/* Phone field for signup */}
            {isLogin && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="1234567890"
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                />
                {errors.phone && <p style={styles.error}>{errors.phone}</p>}
              </div>
            )}

            {/* Email field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
              {errors.email && <p style={styles.error}>{errors.email}</p>}
            </div>

            {/* Password field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={styles.input}
                onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
              />
              {errors.password && <p style={styles.error}>{errors.password}</p>}
            </div>

            {/* Confirm password field for signup */}
            {isLogin && (
              <div style={styles.inputGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                />
                {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
              </div>
            )}

            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              style={styles.submitButton}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.submitButtonHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, styles.submitButton);
              }}
            >
              {isLogin ? (
                <>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                  Create Account
                </>
              ) : (
                <>
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  Sign In
                </>
              )}
            </button>

            {/* Toggle login/signup */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button
                type="button"
                onClick={handleLoginSignup}
                style={styles.linkButton}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, styles.linkButtonHover);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, styles.linkButton);
                }}
              >
                {!isLogin ? "Don't have an account? Create one" : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={{ margin: 0 }}>© 2024 D-Global Tech. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;