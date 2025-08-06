import React from "react";
import { Link } from "react-router-dom";

const Data = () => {
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
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
          background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
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
            fontSize: "3.5rem",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            lineHeight: 1.2,
            animation: "fadeInUp 0.8s ease"
          }}>Data Analytics Solutions</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.3rem", 
            maxWidth: "800px",
            lineHeight: 1.6,
            opacity: 0.9,
            animation: "fadeInUp 0.8s ease 0.2s forwards",
            opacity: 0
          }}>
            Transform raw data into actionable insights that drive business growth
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px", 
            marginTop: "40px",
            flexWrap: "wrap",
            animation: "fadeInUp 0.8s ease 0.4s forwards",
            opacity: 0
          }}>
            <Link to="/contact" style={{
              textDecoration: "none",
              background: "#764ba2",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(118, 75, 162, 0.4)",
              border: "2px solid transparent",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(118, 75, 162, 0.6)",
                background: "#8a5cb6",
                borderColor: "rgba(255,255,255,0.3)"
              }
            }}>Get Data Consultation</Link>
            <Link to="/case-studies" style={{
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              border: "2px solid #fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              backdropFilter: "blur(5px)",
              ":hover": {
                background: "rgba(255,255,255,0.2)",
                transform: "translateY(-5px)",
                boxShadow: "0 5px 20px rgba(255,255,255,0.2)"
              }
            }}>View Case Studies</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        display: "flex", 
        padding: "40px", 
        gap: "30px", 
        maxWidth: "1400px", 
        margin: "0 auto",
        "@media (max-width: 768px)": {
          flexDirection: "column"
        }
      }}>
        {/* Left Content */}
        <div style={{ flex: 3 }}>
          {/* Data Analytics Overview */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            ":hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.15)"
            }
          }}>
            <img 
              src="https://www.shutterstock.com/shutterstock/videos/1030097900/thumb/7.jpg?ip=x480" 
              alt="Data Analytics" 
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
              color: "#333", 
              fontSize: "2.2rem",
              position: "relative",
              paddingBottom: "15px",
              fontWeight: 700
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #764ba2, #667eea)",
                borderRadius: "2px"
              }}></span>
              Advanced Data Analytics
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "20px"
            }}>
              At GK Technology, we provide data-driven insights to help businesses optimize performance and make informed decisions. Our experts use cutting-edge analytics tools to process, visualize, and interpret large datasets.
            </p>
            
            {/* Data Features Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "25px",
              margin: "40px 0"
            }}>
              {[
                {
                  icon: "📊",
                  title: "Business Intelligence",
                  desc: "Interactive dashboards and reports for real-time decision making"
                },
                {
                  icon: "🤖",
                  title: "Predictive Analytics",
                  desc: "Machine learning models to forecast trends and behaviors"
                },
                {
                  icon: "🔍",
                  title: "Data Mining",
                  desc: "Discover hidden patterns in large datasets"
                },
                {
                  icon: "📈",
                  title: "Performance Analytics",
                  desc: "Track and optimize business KPIs and metrics"
                },
                {
                  icon: "🔄",
                  title: "Data Integration",
                  desc: "Combine data from multiple sources for unified insights"
                },
                {
                  icon: "🛡️",
                  title: "Data Governance",
                  desc: "Ensure data quality, security, and compliance"
                }
              ].map((feature, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    color: "#fff",
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(118, 75, 162, 0.3)"
                  }
                }}>
                  <div style={{ 
                    fontSize: "2.5rem",
                    marginBottom: "20px",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.2) rotate(10deg)"
                    }
                  }}>{feature.icon}</div>
                  <h3 style={{ 
                    margin: "0 0 15px",
                    fontSize: "1.4rem",
                    fontWeight: 600
                  }}>{feature.title}</h3>
                  <p style={{ 
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "1rem",
                    opacity: 0.9
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "transform 0.4s ease",
            ":hover": {
              transform: "translateY(-5px)"
            }
          }}>
            <h2 style={{ 
              marginTop: 0, 
              color: "#333", 
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px",
              fontWeight: 700
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #764ba2, #667eea)",
                borderRadius: "2px"
              }}></span>
              Our Analytics Technology Stack
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "30px"
            }}>
              We leverage industry-leading technologies to deliver powerful analytics solutions:
            </p>
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px"
            }}>
              {[
                {
                  name: "Power BI",
                  logo: "https://upload.wikimedia.org/wikipedia/he/6/6d/PowerBI_Logo.png",
                  features: ["Interactive dashboards", "Data visualization", "Real-time analytics"]
                },
                {
                  name: "Tableau",
                  logo: "https://live.staticflickr.com/974/41425693524_d73d3db449_w.jpg",
                  features: ["Advanced visualizations", "Data storytelling", "Predictive modeling"]
                },
                {
                  name: "Python",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                  features: ["Pandas, NumPy", "Machine learning", "Data processing"]
                },
                {
                  name: "SQL",
                  logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
                  features: ["Database querying", "Data manipulation", "ETL processes"]
                }
              ].map((tech, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  transition: "all 0.4s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)",
                    borderColor: "rgba(118, 75, 162, 0.3)"
                  }
                }}>
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    style={{ 
                      height: "70px", 
                      marginBottom: "25px",
                      objectFit: "contain",
                      transition: "transform 0.4s ease",
                      ":hover": {
                        transform: "scale(1.1)"
                      }
                    }} 
                  />
                  <h3 style={{ 
                    margin: "0 0 20px",
                    color: "#333",
                    fontSize: "1.4rem",
                    fontWeight: 600
                  }}>{tech.name}</h3>
                  <ul style={{ 
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}>
                    {tech.features.map((feature, i) => (
                      <li key={i} style={{
                        color: "#555",
                        lineHeight: 1.5,
                        position: "relative",
                        paddingLeft: "20px",
                        ":before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "10px",
                          width: "8px",
                          height: "8px",
                          background: "#764ba2",
                          borderRadius: "50%"
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

          {/* Data Process */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "40px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
            border: "1px solid rgba(118, 75, 162, 0.1)"
          }}>
            <h2 style={{ 
              marginTop: 0, 
              color: "#333", 
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px",
              fontWeight: 700
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #764ba2, #667eea)",
                borderRadius: "2px"
              }}></span>
              Our Data Analytics Process
            </h2>
            
            <div style={{ 
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              marginTop: "30px",
              position: "relative"
            }}>
              {/* Timeline connector */}
              <div style={{
                position: "absolute",
                left: "40px",
                top: "30px",
                bottom: "30px",
                width: "4px",
                background: "linear-gradient(to bottom, #764ba2, #667eea)",
                borderRadius: "2px",
                zIndex: 1
              }}></div>
              
              {[
                {
                  title: "Data Discovery",
                  desc: "Identify data sources and business objectives",
                  icon: "🔍"
                },
                {
                  title: "Data Preparation",
                  desc: "Clean, transform, and structure raw data",
                  icon: "🧹"
                },
                {
                  title: "Model Development",
                  desc: "Build analytical models and algorithms",
                  icon: "⚙️"
                },
                {
                  title: "Data Visualization",
                  desc: "Create interactive dashboards and reports",
                  icon: "📊"
                },
                {
                  title: "Insight Delivery",
                  desc: "Present actionable findings to stakeholders",
                  icon: "📝"
                },
                {
                  title: "Ongoing Optimization",
                  desc: "Continuously refine models and reports",
                  icon: "🔄"
                }
              ].map((step, index) => (
                <div key={index} style={{ 
                  display: "flex",
                  gap: "25px",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.4s ease",
                  ":hover": {
                    transform: "translateX(10px)"
                  }
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    boxShadow: "0 8px 25px rgba(118, 75, 162, 0.3)",
                    transition: "all 0.4s ease",
                    ":hover": {
                      transform: "rotate(15deg) scale(1.1)",
                      boxShadow: "0 12px 30px rgba(118, 75, 162, 0.4)"
                    }
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ 
                    background: "#fff",
                    padding: "30px",
                    borderRadius: "12px",
                    flex: 1,
                    transition: "all 0.4s ease",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(118, 75, 162, 0.1)",
                    ":hover": {
                      boxShadow: "0 15px 30px rgba(118, 75, 162, 0.15)",
                      borderColor: "rgba(118, 75, 162, 0.3)"
                    }
                  }}>
                    <h3 style={{ 
                      margin: "0 0 15px",
                      color: "#333",
                      fontSize: "1.4rem",
                      fontWeight: 600
                    }}>{step.title}</h3>
                    <p style={{ 
                      margin: 0,
                      color: "#555",
                      lineHeight: "1.6"
                    }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ 
            background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)", 
            borderRadius: "15px", 
            padding: "80px 40px", 
            textAlign: "center",
            color: "#fff",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(118, 75, 162, 0.4)"
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover",
              opacity: 0.1,
              zIndex: 0
            }}></div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ 
                margin: "0 0 20px",
                fontSize: "2.5rem",
                fontWeight: 700,
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)"
              }}>Ready to Unlock Your Data's Potential?</h2>
              <p style={{ 
                margin: "0 auto 40px",
                fontSize: "1.3rem",
                maxWidth: "700px",
                lineHeight: "1.6",
                opacity: 0.9
              }}>
                Let's discuss how we can help you transform data into business growth.
              </p>
              <Link to="/contact" style={{
                textDecoration: "none",
                background: "#fff",
                color: "#764ba2",
                padding: "18px 60px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "1.2rem",
                display: "inline-block",
                transition: "all 0.4s ease",
                boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                border: "2px solid transparent",
                ":hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
                  background: "rgba(255,255,255,0.9)",
                  color: "#5a3d82",
                  borderColor: "rgba(255,255,255,0.5)"
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
            marginBottom: "30px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "transform 0.4s ease",
            ":hover": {
              transform: "translateY(-5px)"
            }
          }}>
            <h3 style={{ 
              color: "#333", 
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
                background: "linear-gradient(to right, #764ba2, #667eea)", 
                borderRadius: "2px" 
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
                      borderLeft: "4px solid transparent"
                    }}
                    onMouseEnter={e => { 
                      e.currentTarget.style.background = "linear-gradient(to right, rgba(118, 75, 162, 0.1), transparent)"; 
                      e.currentTarget.style.color = "#764ba2"; 
                      e.currentTarget.style.transform = "translateX(8px)"; 
                      e.currentTarget.style.borderLeft = "4px solid #764ba2";
                      e.currentTarget.style.boxShadow = "0 5px 15px rgba(118, 75, 162, 0.1)";
                    }}
                    onMouseLeave={e => { 
                      e.currentTarget.style.background = "#f9f9f9"; 
                      e.currentTarget.style.color = "#555"; 
                      e.currentTarget.style.transform = "translateX(0)"; 
                      e.currentTarget.style.borderLeft = "4px solid transparent";
                      e.currentTarget.style.boxShadow = "none";
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
          

          {/* Data Resources */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "15px", 
            padding: "30px", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px",
            border: "1px solid rgba(118, 75, 162, 0.1)",
            transition: "transform 0.4s ease",
            ":hover": {
              transform: "translateY(-5px)"
            }
          }}>
            <h3 style={{ 
              color: "#333", 
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
                background: "linear-gradient(to right, #764ba2, #667eea)",
                borderRadius: "2px"
              }}></span>
              Data Resources
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              {[
                {
                  title: "Data Analytics Guide",
                  type: "PDF",
                  size: "2.4 MB"
                },
                {
                  title: "Case Study: Retail Analytics",
                  type: "PDF",
                  size: "3.1 MB"
                },
                {
                  title: "Webinar: Predictive Modeling",
                  type: "Video",
                  size: "45 min"
                },
                {
                  title: "Data Visualization Best Practices",
                  type: "PDF",
                  size: "1.8 MB"
                }
              ].map((resource, index) => (
                <div key={index} style={{ 
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(118, 75, 162, 0.1)",
                  ":hover": {
                    background: "linear-gradient(to right, rgba(118, 75, 162, 0.1), transparent)",
                    transform: "translateX(10px)",
                    boxShadow: "0 10px 25px rgba(118, 75, 162, 0.15)",
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
                      color: "#333",
                      fontSize: "1.1rem"
                    }}>{resource.title}</div>
                    <div style={{ 
                      fontSize: "0.9rem",
                      color: "#777",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <span style={{
                        background: resource.type === "PDF" ? "rgba(118, 75, 162, 0.1)" : "rgba(102, 126, 234, 0.1)",
                        color: resource.type === "PDF" ? "#764ba2" : "#667eea",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                        fontWeight: 500
                      }}>
                        {resource.type}
                      </span>
                      • {resource.size}
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
            boxShadow: "0 10px 30px rgba(118, 75, 162, 0.2)",
            border: "2px solid rgba(118, 75, 162, 0.3)",
            textAlign: "center",
            transition: "all 0.4s ease",
            ":hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.3)"
            }
          }}>
            <div style={{
              width: "100px",
              height: "100px",
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
            }}>📊</div>
            <h3 style={{ 
              color: "#333", 
              marginTop: "0",
              marginBottom: "20px",
              fontSize: "1.5rem",
              fontWeight: 600
            }}>Data Experts Available</h3>
            <p style={{ 
              margin: "0 0 30px",
              color: "#555",
              lineHeight: "1.6",
              fontSize: "1.05rem"
            }}>
              Have questions about data analytics? Our specialists are ready to help.
            </p>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "20px"
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
                boxShadow: "0 5px 15px rgba(118, 75, 162, 0.3)",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(118, 75, 162, 0.5)",
                  background: "linear-gradient(135deg, #8a5cb6 0%, #768aed 100%)"
                }
              }}>
                <span style={{ fontSize: "1.3rem" }}>📞</span> +1-314-732-7749
              </a>
              <a href="mailto:data@techvyver.com" style={{
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
                  boxShadow: "0 10px 25px rgba(118, 75, 162, 0.3)"
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

export default Data;