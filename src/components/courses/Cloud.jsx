import React from "react";
import { Link } from "react-router-dom";

const Cloud = () => {
  return (
    <div style={{ 
      fontFamily: "'Poppins', Arial, sans-serif", 
      padding: 0, 
      background: "#f8f9fa",
      color: "#333",
      overflowX: "hidden",
      minHeight: "100vh"
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(135deg, #1a1a2e 0%, #764ba2 100%)", 
        padding: "120px 20px", 
        color: "#fff", 
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(118, 75, 162, 0.3)"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
          opacity: 0.15,
          zIndex: 0
        }}></div>
        <div style={{ 
          position: "relative", 
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{ 
            margin: 0, 
            fontWeight: 800, 
            fontSize: "3.8rem",
            marginBottom: "25px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
            lineHeight: 1.2
          }}>Cloud Computing Solutions</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.4rem", 
            maxWidth: "800px",
            lineHeight: 1.6,
            opacity: 0.9,
            marginBottom: "40px"
          }}>
            Secure, scalable, and reliable cloud infrastructure tailored to your business needs
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px", 
            marginTop: "20px",
            flexWrap: "wrap"
          }}>
            <Link to="/contact" style={{
              textDecoration: "none",
              background: "#764ba2",
              color: "#fff",
              padding: "18px 45px",
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
              boxShadow: "0 4px 20px rgba(118, 75, 162, 0.5)",
              border: "2px solid transparent",
              ":hover": {
                transform: "translateY(-5px) scale(1.03)",
                boxShadow: "0 12px 30px rgba(118, 75, 162, 0.7)",
                background: "#5d3a84",
                borderColor: "rgba(255,255,255,0.2)"
              }
            }}>Get Cloud Consultation</Link>
            <Link to="/case-studies" style={{
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              padding: "18px 45px",
              borderRadius: "50px",
              border: "2px solid rgba(255,255,255,0.3)",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
              ":hover": {
                background: "rgba(255,255,255,0.15)",
                transform: "translateY(-5px)",
                borderColor: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(5px)"
              }
            }}>View Case Studies</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        display: "flex", 
        padding: "50px 40px", 
        gap: "30px", 
        maxWidth: "1400px", 
        margin: "0 auto",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          padding: "30px 20px"
        }
      }}>
        {/* Left Content */}
        <div style={{ flex: 3 }}>
          {/* Cloud Overview */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "40px",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            ":hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.15)",
              borderColor: "rgba(118, 75, 162, 0.2)"
            },
            "@media (max-width: 768px)": {
              padding: "30px"
            }
          }}>
            <img 
              src="https://img.freepik.com/premium-photo/cloud-computing-technology-concept_1331575-638.jpg" 
              alt="Cloud Services" 
              style={{ 
                width: "100%", 
                borderRadius: "12px", 
                marginBottom: "30px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 12px 30px rgba(118, 75, 162, 0.2)"
                }
              }} 
            />
            <h2 style={{ 
              marginTop: 0, 
              color: "#1a1a2e", 
              fontSize: "2.4rem",
              position: "relative",
              paddingBottom: "20px",
              fontWeight: 700
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "5px",
                background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                borderRadius: "5px"
              }}></span>
              Enterprise Cloud Solutions
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.15rem",
              marginBottom: "25px"
            }}>
              At GK Technology, we offer secure and scalable cloud solutions, ensuring businesses can operate efficiently with enhanced security and reliability. Our cloud services help you reduce IT costs while improving performance and accessibility.
            </p>
            
            {/* Cloud Features Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "25px",
              margin: "40px 0"
            }}>
              {[
                {
                  icon: "☁️",
                  title: "Cloud Migration",
                  desc: "Seamless transition of your infrastructure to the cloud with zero downtime"
                },
                {
                  icon: "🛡️",
                  title: "Cloud Security",
                  desc: "Comprehensive security measures including encryption and access controls"
                },
                {
                  icon: "📈",
                  title: "Scalability",
                  desc: "Easily scale resources up or down based on your business needs"
                },
                {
                  icon: "💾",
                  title: "Data Backup",
                  desc: "Automated backup solutions to protect your critical business data"
                },
                {
                  icon: "🌐",
                  title: "Hybrid Cloud",
                  desc: "Flexible solutions combining public and private cloud environments"
                },
                {
                  icon: "⚙️",
                  title: "Managed Services",
                  desc: "24/7 monitoring and management of your cloud infrastructure"
                }
              ].map((feature, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    color: "#fff",
                    transform: "translateY(-15px)",
                    boxShadow: "0 20px 40px rgba(118, 75, 162, 0.25)",
                    borderColor: "transparent"
                  }
                }}>
                  <div style={{ 
                    fontSize: "3rem",
                    marginBottom: "25px",
                    transition: "transform 0.4s ease",
                    ":hover": {
                      transform: "scale(1.2) rotate(5deg)"
                    }
                  }}>{feature.icon}</div>
                  <h3 style={{ 
                    margin: "0 0 20px",
                    fontSize: "1.4rem",
                    fontWeight: 600
                  }}>{feature.title}</h3>
                  <p style={{ 
                    margin: 0,
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                    opacity: 0.9
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Platforms */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "40px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "all 0.4s ease",
            ":hover": {
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.12)",
              transform: "translateY(-5px)"
            }
          }}>
            <h2 style={{ 
              marginTop: 0, 
              color: "#1a1a2e", 
              fontSize: "2.2rem",
              position: "relative",
              paddingBottom: "20px",
              fontWeight: 700
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "5px",
                background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                borderRadius: "5px"
              }}></span>
              Our Cloud Platforms
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.15rem",
              marginBottom: "35px"
            }}>
              We work with all major cloud providers to deliver the best solution for your needs:
            </p>
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px"
            }}>
              {[
                {
                  name: "AWS",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
                  features: ["EC2", "S3", "RDS", "Lambda"],
                  color: "#FF9900"
                },
                {
                  name: "Google Cloud",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
                  features: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions"],
                  color: "#4285F4"
                },
                {
                  name: "Private Cloud",
                  logo: "https://cdn-icons-png.flaticon.com/512/2779/2779775.png",
                  features: ["On-premises", "Hybrid", "Custom Solutions", "Enhanced Security"],
                  color: "#764ba2"
                }
              ].map((platform, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  transition: "all 0.4s ease",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    transform: "translateY(-10px)",
                    boxShadow: `0 15px 35px ${platform.color}40`,
                    borderColor: `${platform.color}80`
                  }
                }}>
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    style={{ 
                      height: "70px", 
                      marginBottom: "25px",
                      objectFit: "contain",
                      filter: "grayscale(20%)",
                      transition: "all 0.4s ease",
                      ":hover": {
                        filter: "grayscale(0%)",
                        transform: "scale(1.1)"
                      }
                    }} 
                  />
                  <h3 style={{ 
                    margin: "0 0 20px",
                    color: platform.color,
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease"
                  }}>{platform.name}</h3>
                  <ul style={{ 
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}>
                    {platform.features.map((feature, i) => (
                      <li key={i} style={{
                        color: "#555",
                        lineHeight: 1.5,
                        transition: "all 0.3s ease",
                        padding: "8px",
                        borderRadius: "6px",
                        ":hover": {
                          background: `${platform.color}15`,
                          color: platform.color,
                          transform: "translateX(5px)"
                        }
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Security */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "40px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "all 0.4s ease",
            ":hover": {
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.12)",
              transform: "translateY(-5px)"
            }
          }}>
            <h2 style={{ 
              marginTop: 0, 
              color: "#1a1a2e", 
              fontSize: "2.2rem",
              position: "relative",
              paddingBottom: "20px",
              fontWeight: 700
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "5px",
                background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                borderRadius: "5px"
              }}></span>
              Cloud Security Solutions
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.15rem",
              marginBottom: "35px"
            }}>
              We implement enterprise-grade security measures to protect your cloud infrastructure:
            </p>
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px"
            }}>
              {[
                {
                  icon: "🔐",
                  title: "Data Encryption",
                  desc: "End-to-end encryption for data at rest and in transit"
                },
                {
                  icon: "👁️",
                  title: "Continuous Monitoring",
                  desc: "24/7 security monitoring and threat detection"
                },
                {
                  icon: "🛡️",
                  title: "Access Control",
                  desc: "Role-based access with multi-factor authentication"
                },
                {
                  icon: "📝",
                  title: "Compliance",
                  desc: "Meet industry standards like HIPAA, GDPR, and SOC 2"
                },
                {
                  icon: "🔄",
                  title: "Disaster Recovery",
                  desc: "Comprehensive backup and recovery solutions"
                },
                {
                  icon: "🔍",
                  title: "Vulnerability Testing",
                  desc: "Regular security audits and penetration testing"
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  display: "flex",
                  gap: "25px",
                  alignItems: "center",
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    color: "#fff",
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0 15px 35px rgba(118, 75, 162, 0.25)",
                    borderColor: "transparent"
                  }
                }}>
                  <div style={{ 
                    fontSize: "2.5rem",
                    flexShrink: 0,
                    transition: "transform 0.4s ease",
                    ":hover": {
                      transform: "rotate(15deg) scale(1.2)"
                    }
                  }}>{item.icon}</div>
                  <div>
                    <h3 style={{ 
                      margin: "0 0 15px",
                      fontSize: "1.3rem",
                      fontWeight: 600
                    }}>{item.title}</h3>
                    <p style={{ 
                      margin: 0,
                      lineHeight: 1.7,
                      fontSize: "1rem",
                      opacity: 0.9
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ 
            background: "linear-gradient(135deg, #1a1a2e 0%, #764ba2 100%)", 
            borderRadius: "15px", 
            padding: "80px 40px", 
            textAlign: "center",
            color: "#fff",
            marginBottom: "40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(118, 75, 162, 0.4)",
            transition: "all 0.4s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 20px 50px rgba(118, 75, 162, 0.5)"
            }
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
              opacity: 0.15,
              zIndex: 0
            }}></div>
            <div style={{ 
              position: "relative", 
              zIndex: 1,
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              <h2 style={{ 
                margin: "0 0 25px",
                fontSize: "2.5rem",
                fontWeight: 700,
                textShadow: "2px 2px 8px rgba(0,0,0,0.4)"
              }}>Ready to Move to the Cloud?</h2>
              <p style={{ 
                margin: "0 auto 40px",
                fontSize: "1.3rem",
                maxWidth: "700px",
                lineHeight: "1.7",
                opacity: 0.9
              }}>
                Let's discuss how we can help you migrate to the cloud securely and efficiently.
              </p>
              <Link to="/contact" style={{
                textDecoration: "none",
                background: "#fff",
                color: "#764ba2",
                padding: "18px 55px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "1.2rem",
                display: "inline-block",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                boxShadow: "0 5px 25px rgba(255,255,255,0.3)",
                border: "2px solid transparent",
                ":hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 15px 35px rgba(255,255,255,0.4)",
                  background: "#f8f9fa",
                  color: "#5d3a84"
                }
              }}>Schedule Consultation</Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          {/* Services Navigation */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "30px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "40px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "all 0.4s ease",
            ":hover": {
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.12)",
              transform: "translateY(-5px)"
            }
          }}>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0", 
              marginBottom: "25px", 
              fontSize: "1.4rem", 
              position: "relative", 
              paddingBottom: "15px",
              fontWeight: 600
            }}>
              <span style={{ 
                position: "absolute", 
                bottom: 0, 
                left: 0, 
                width: "50px", 
                height: "4px", 
                background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)", 
                borderRadius: "4px" 
              }}></span>
              Our Services
            </h3>
            <ul style={{ 
              listStyle: "none", 
              padding: "0", 
              margin: "0", 
              display: "flex", 
              flexDirection: "column", 
              gap: "12px" 
            }}>
              {[
                { name: "Web Development", path: "/web", icon: "🌐" },
                { name: "Mobile App Development", path: "/mobile", icon: "📱" },
                { name: "Cloud Solutions", path: "/cloud", icon: "☁️" },
                { name: "IOT Services", path: "/IoT", icon: "🔄" },
                { name: "Data Analytics", path: "/data", icon: "📊" },
                { name: "API Development", path: "/api", icon: "🔌" },
                { name: "Digital Marketing", path: "/digital", icon: "📢" },
                { name: "Corporate Training", path: "/training", icon: "🎓" }
              ].map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.path} 
                    style={{ 
                      textDecoration: "none", 
                      color: "#555", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "15px", 
                      padding: "15px 20px", 
                      borderRadius: "10px", 
                      background: "#f9f9f9", 
                      transition: "all 0.3s ease",
                      borderLeft: "4px solid transparent",
                      ":hover": { 
                        background: "linear-gradient(90deg, rgba(118, 75, 162, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)",
                        color: "#764ba2",
                        transform: "translateX(10px)",
                        borderLeft: "4px solid #764ba2",
                        boxShadow: "0 5px 15px rgba(118, 75, 162, 0.1)"
                      }
                    }}
                  >
                    <span style={{ 
                      fontSize: "1.3rem",
                      transition: "transform 0.3s ease",
                      ":hover": {
                        transform: "scale(1.2)"
                      }
                    }}>{category.icon}</span>
                    <span style={{ fontWeight: 500 }}>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud Resources */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "30px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "40px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "all 0.4s ease",
            ":hover": {
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.12)",
              transform: "translateY(-5px)"
            }
          }}>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "25px",
              fontSize: "1.4rem",
              position: "relative",
              paddingBottom: "15px",
              fontWeight: 600
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "50px",
                height: "4px",
                background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                borderRadius: "4px"
              }}></span>
              Cloud Resources
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px"
            }}>
              {[
                {
                  title: "Cloud Migration Guide",
                  type: "PDF",
                  size: "2.1 MB"
                },
                {
                  title: "Cloud Security Checklist",
                  type: "PDF",
                  size: "1.5 MB"
                },
                {
                  title: "Webinar: Cloud Cost Optimization",
                  type: "Video",
                  size: "42 min"
                },
                {
                  title: "Case Study: AWS Migration",
                  type: "PDF",
                  size: "3.2 MB"
                }
              ].map((resource, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "20px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.03)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    background: "linear-gradient(90deg, rgba(118, 75, 162, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)",
                    transform: "translateX(10px)",
                    boxShadow: "0 8px 25px rgba(118, 75, 162, 0.15)",
                    borderColor: "rgba(118, 75, 162, 0.3)"
                  }
                }}>
                  <div style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#fff",
                    flexShrink: 0,
                    boxShadow: "0 5px 15px rgba(118, 75, 162, 0.3)"
                  }}>
                    {resource.type === "PDF" ? "📄" : "🎥"}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: "#1a1a2e",
                      fontSize: "1.1rem"
                    }}>{resource.title}</div>
                    <div style={{ 
                      fontSize: "0.9rem",
                      color: "#777",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <span style={{
                        background: "#764ba220",
                        color: "#764ba2",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "0.8rem"
                      }}>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "30px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "2px solid #764ba2",
            textAlign: "center",
            transition: "all 0.4s ease",
            ":hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 20px 40px rgba(118, 75, 162, 0.25)",
              borderColor: "#5d3a84"
            }
          }}>
            <div style={{
              width: "90px",
              height: "90px",
              background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 25px",
              fontSize: "2.5rem",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(118, 75, 162, 0.4)",
              transition: "all 0.4s ease",
              ":hover": {
                transform: "rotate(15deg) scale(1.1)"
              }
            }}>📞</div>
            <h3 style={{ 
              color: "#1a1a2e", 
              marginTop: "0",
              marginBottom: "20px",
              fontSize: "1.5rem",
              fontWeight: 600
            }}>Cloud Experts Available</h3>
            <p style={{ 
              margin: "0 0 30px",
              color: "#555",
              lineHeight: "1.7",
              fontSize: "1.05rem"
            }}>
              Have questions about cloud migration or security? Our specialists are ready to help.
            </p>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "18px"
            }}>
              <a href="tel:+13147327749" style={{
                textDecoration: "none",
                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                color: "#fff",
                padding: "18px",
                borderRadius: "10px",
                fontWeight: "600",
                transition: "all 0.4s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                boxShadow: "0 5px 20px rgba(118, 75, 162, 0.3)",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(118, 75, 162, 0.4)",
                  background: "linear-gradient(135deg, #5d3a84 0%, #5a6bc1 100%)"
                }
              }}>
                <span style={{ fontSize: "1.3rem" }}>📞</span> +1-314-732-7749
              </a>
              <a href="mailto:cloud@techvyver.com" style={{
                textDecoration: "none",
                background: "#fff",
                color: "#764ba2",
                padding: "18px",
                borderRadius: "10px",
                fontWeight: "600",
                transition: "all 0.4s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                border: "2px solid #764ba2",
                boxShadow: "0 5px 15px rgba(118, 75, 162, 0.1)",
                ":hover": {
                  background: "#764ba2",
                  color: "#fff",
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 30px rgba(118, 75, 162, 0.3)"
                }
              }}>
                <span style={{ fontSize: "1.3rem" }}>✉️</span> Email Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;