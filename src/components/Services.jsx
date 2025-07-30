import React from "react";
import services from "../data/services.json";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
    padding: "1.5rem",
  },
  containerSm: {
    gridTemplateColumns: "1fr 1fr",
  },
  serviceItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.125rem", // 18px
  },
  description: {
    fontSize: "0.875rem", // 14px
    color: "#4B5563", // Tailwind gray-600
  },
};

const Services = () => {
  const isSmallScreen = window.innerWidth >= 640;
  const containerStyle = isSmallScreen
    ? { ...styles.container, ...styles.containerSm }
    : styles.container;

  return (
    <div style={containerStyle}>
      {services.map((service, index) => (
        <div key={index} style={styles.serviceItem}>
          <img
            src={`../assets/${service.icon}`}
            alt={service.title}
            style={styles.icon}
          />
          <div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
