import React from "react";

const Careers = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Careers at DGlobal Technologies</h1>
        <p style={styles.text}>We currently do not have any open positions.</p>
        <p style={styles.note}>
          However, we’re always looking for talented and passionate individuals.
          If you’d like to be considered for future opportunities, feel free to reach out to us at:
        </p>
        <p style={styles.email}>careers@dglobaltech.com</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "600px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#555555",
    marginBottom: "10px",
  },
  note: {
    fontSize: "16px",
    color: "#666666",
    marginTop: "20px",
  },
  email: {
    fontSize: "16px",
    color: "#007BFF",
    marginTop: "10px",
  },
};

export default Careers;