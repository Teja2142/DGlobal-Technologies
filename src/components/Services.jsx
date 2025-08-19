import React from "react";
import servicesData from "../data/services.json";

const styles = {
  section: { marginBottom: "3rem" },
  categoryTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "1.5rem",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  icon: {
    width: "100%",
    maxWidth: "100px",
    height: "auto"
  },
  title: {
    fontSize: "1.125rem",
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: "0.875rem",
    color: "#4B5563"
  },
  tagList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.5rem"
  },
  tag: {
    backgroundColor: "#E5E7EB",
    color: "#111827",
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px"
  }
};

const Services = () => {
  if (!Array.isArray(servicesData)) {
    return <div>Loading services...</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      {servicesData.map((category, idx) => (
        <div key={idx} style={styles.section}>
          <h2 style={styles.categoryTitle}>{category.category}</h2>
          <div style={styles.grid}>
            {category.services.map((service, index) => (
              <div key={index} style={styles.card}>
                <img src={service.icon} alt={service.title} style={styles.icon} />
                <h3 style={styles.title}>{service.title}</h3>

                {/* Overview or description */}
                {service.overview && <p style={styles.paragraph}>{service.overview}</p>}
                {service.description && <p style={styles.paragraph}>{service.description}</p>}

                {/* Engagement Types */}
                {service.engagementTypes && (
                  <div>
                    <strong>Engagement Types:</strong>
                    <div style={styles.tagList}>
                      {service.engagementTypes.map((type, i) => (
                        <span key={i} style={styles.tag}>{type}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stacks */}
                {service.techStacks && (
                  <div>
                    <strong>Tech Stacks:</strong>
                    <div style={styles.tagList}>
                      {service.techStacks.map((tech, i) => (
                        <span key={i} style={styles.tag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Use Cases */}
                {service.useCases && (
                  <div>
                    <strong>Use Cases:</strong>
                    <ul style={{ paddingLeft: "1.2rem", fontSize: "0.875rem", color: "#4B5563" }}>
                      {service.useCases.map((useCase, i) => (
                        <li key={i}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
