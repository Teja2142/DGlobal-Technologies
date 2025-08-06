import React from "react";
import { Link } from "react-router-dom";

const Digital = () => {
  return (
    <div style={{ 
      fontFamily: "'Poppins', Arial, sans-serif", 
      padding: 0, 
      background: "#f8f9fa",
      color: "#333",
      overflowX: "hidden"
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
          opacity: 0.1,
          zIndex: 0
        }}></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ 
            margin: 0, 
            fontWeight: 800, 
            fontSize: "3.5rem",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            transition: "all 0.5s ease",
            ":hover": {
              textShadow: "4px 4px 8px rgba(0,0,0,0.4)",
              transform: "scale(1.02)"
            }
          }}>Digital Marketing Solutions</h1>
          <p style={{ 
            margin: "0 auto", 
            fontSize: "1.3rem", 
            maxWidth: "800px",
            lineHeight: 1.6,
            opacity: 0.9,
            transition: "all 0.5s ease",
            ":hover": {
              opacity: 1,
              transform: "scale(1.01)"
            }
          }}>
            Boost Visibility. Build Trust. Drive Sales.
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px", 
            marginTop: "40px",
            flexWrap: "wrap"
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
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 25px rgba(118, 75, 162, 0.6)",
                background: "#8a5cb6"
              }
            }}>Get Free Consultation</Link>
            <Link to="/portfolio" style={{
              textDecoration: "none",
              background: "transparent",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              border: "2px solid #fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              ":hover": {
                background: "rgba(255,255,255,0.2)",
                transform: "translateY(-5px)",
                boxShadow: "0 8px 15px rgba(255,255,255,0.1)"
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
          {/* Digital Marketing Overview */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)"
            }
          }}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Digital Marketing" 
              style={{ 
                width: "100%", 
                borderRadius: "8px", 
                marginBottom: "25px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "all 0.5s ease",
                ":hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 10px 20px rgba(118, 75, 162, 0.3)"
                }
              }} 
            />
            <h2 style={{ 
              marginTop: 0, 
              color: "#764ba2", 
              fontSize: "2.2rem",
              position: "relative",
              paddingBottom: "15px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#5a3a7d"
              }
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#764ba2",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                ":hover": {
                  width: "100px",
                  background: "#8a5cb6"
                }
              }}></span>
              Comprehensive Digital Marketing
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "20px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#444"
              }
            }}>
              At GK Technology, we provide data-driven digital marketing strategies to help businesses grow their online presence and attract more customers. Our experts use cutting-edge tools and techniques to maximize your digital potential.
            </p>
            
            {/* Digital Features Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "20px",
              margin: "30px 0"
            }}>
              {[
                {
                  icon: "🔍",
                  title: "Search Engine Optimization",
                  desc: "Improve your website's visibility in search results"
                },
                {
                  icon: "📱",
                  title: "Social Media Marketing",
                  desc: "Engage your audience across all major platforms"
                },
                {
                  icon: "💰",
                  title: "Pay-Per-Click Advertising",
                  desc: "Targeted ads that drive immediate results"
                },
                {
                  icon: "✉️",
                  title: "Email Marketing",
                  desc: "Nurture leads and retain customers"
                },
                {
                  icon: "📝",
                  title: "Content Marketing",
                  desc: "Create valuable content that attracts customers"
                },
                {
                  icon: "📊",
                  title: "Analytics & Reporting",
                  desc: "Measure performance and optimize campaigns"
                }
              ].map((feature, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "25px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
                    fontSize: "1.3rem",
                    transition: "all 0.3s ease",
                    ":hover": {
                      transform: "scale(1.05)"
                    }
                  }}>{feature.title}</h3>
                  <p style={{ 
                    margin: 0,
                    lineHeight: 1.6,
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
                  }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)"
            }
          }}>
            <h2 style={{ 
              marginTop: 0, 
              color: "#764ba2", 
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#5a3a7d"
              }
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#764ba2",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                ":hover": {
                  width: "100px",
                  background: "#8a5cb6"
                }
              }}></span>
              Our Digital Marketing Tools
            </h2>
            <p style={{ 
              color: "#555", 
              lineHeight: 1.8, 
              fontSize: "1.1rem",
              marginBottom: "30px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#444"
              }
            }}>
              We leverage industry-leading platforms to deliver powerful marketing solutions:
            </p>
            
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              {[
                {
                  name: "Google Ads",
                  logo: "https://lp.trafficguard.ai/hubfs/img-googleads.png",
                  features: ["Search campaigns", "Display network", "Performance tracking"]
                },
                {
                  name: "Facebook Ads",
                  logo: "https://www.logicinbound.com/wp-content/uploads/2023/11/Facebook-Ads-300x300.png",
                  features: ["Audience targeting", "Lead generation", "Retargeting"]
                },
                {
                  name: "Google Analytics",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Google-analytics.png",
                  features: ["Traffic analysis", "Conversion tracking", "User behavior"]
                },
                {
                  name: "Mailchimp",
                  logo: "https://www.macrohype.com/wp-content/uploads/2024/08/Mailchimp-1024x714.png",
                  features: ["Email campaigns", "Automation", "Audience segmentation"]
                }
              ].map((tech, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  borderRadius: "10px",
                  padding: "25px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)",
                    background: "#fff",
                    border: "2px solid #764ba2"
                  }
                }}>
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    style={{ 
                      height: "60px", 
                      marginBottom: "20px",
                      objectFit: "contain",
                      transition: "all 0.3s ease",
                      ":hover": {
                        transform: "scale(1.1)"
                      }
                    }} 
                  />
                  <h3 style={{ 
                    margin: "0 0 15px",
                    color: "#764ba2",
                    fontSize: "1.3rem",
                    transition: "all 0.3s ease",
                    ":hover": {
                      color: "#5a3a7d"
                    }
                  }}>{tech.name}</h3>
                  <ul style={{ 
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {tech.features.map((feature, i) => (
                      <li key={i} style={{
                        color: "#555",
                        lineHeight: 1.5,
                        transition: "all 0.3s ease",
                        ":hover": {
                          color: "#333",
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

          {/* Marketing Process */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "30px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)"
            }
          }}>
            <h2 style={{ 
              marginTop: 0, 
              color: "#764ba2", 
              fontSize: "2rem",
              position: "relative",
              paddingBottom: "15px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#5a3a7d"
              }
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "80px",
                height: "4px",
                background: "#764ba2",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                ":hover": {
                  width: "100px",
                  background: "#8a5cb6"
                }
              }}></span>
              Our Digital Marketing Process
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
                left: "35px",
                top: "30px",
                bottom: "30px",
                width: "4px",
                background: "linear-gradient(to bottom, #764ba2, #667eea)",
                borderRadius: "2px",
                zIndex: 1,
                transition: "all 0.5s ease",
                ":hover": {
                  background: "linear-gradient(to bottom, #8a5cb6, #7a8ff2)"
                }
              }}></div>
              
              {[
                {
                  title: "Strategy Development",
                  desc: "Define goals, target audience, and key messages",
                  icon: "🎯"
                },
                {
                  title: "Channel Selection",
                  desc: "Choose the right platforms for your business",
                  icon: "📱"
                },
                {
                  title: "Content Creation",
                  desc: "Develop engaging content for each channel",
                  icon: "✏️"
                },
                {
                  title: "Campaign Execution",
                  desc: "Launch and manage your digital campaigns",
                  icon: "🚀"
                },
                {
                  title: "Performance Analysis",
                  desc: "Track metrics and measure success",
                  icon: "📊"
                },
                {
                  title: "Optimization",
                  desc: "Refine strategies based on data insights",
                  icon: "🔄"
                }
              ].map((step, index) => (
                <div key={index} style={{ 
                  display: "flex",
                  gap: "20px",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.3s ease",
                  ":hover": {
                    transform: "translateX(10px)"
                  }
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    boxShadow: "0 5px 15px rgba(118, 75, 162, 0.3)",
                    transition: "all 0.3s ease",
                    ":hover": {
                      transform: "rotate(15deg) scale(1.1)",
                      boxShadow: "0 10px 20px rgba(118, 75, 162, 0.5)"
                    }
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ 
                    background: "#f9f9f9",
                    padding: "25px",
                    borderRadius: "8px",
                    flex: 1,
                    transition: "all 0.3s ease",
                    ":hover": {
                      boxShadow: "0 10px 25px rgba(118, 75, 162, 0.1)",
                      borderLeft: "4px solid #764ba2"
                    }
                  }}>
                    <h3 style={{ 
                      margin: "0 0 15px",
                      color: "#764ba2",
                      fontSize: "1.3rem",
                      transition: "all 0.3s ease",
                      ":hover": {
                        color: "#5a3a7d"
                      }
                    }}>{step.title}</h3>
                    <p style={{ 
                      margin: 0,
                      color: "#555",
                      lineHeight: "1.6",
                      transition: "all 0.3s ease",
                      ":hover": {
                        color: "#444"
                      }
                    }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ 
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
            borderRadius: "10px", 
            padding: "60px 40px", 
            textAlign: "center",
            color: "#fff",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(118, 75, 162, 0.4)",
            transition: "all 0.3s ease",
            ":hover": {
              boxShadow: "0 15px 40px rgba(118, 75, 162, 0.6)"
            }
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
                fontSize: "2.2rem",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "scale(1.02)"
                }
              }}>Ready to Grow Your Business Online?</h2>
              <p style={{ 
                margin: "0 auto 30px",
                fontSize: "1.2rem",
                maxWidth: "700px",
                lineHeight: "1.6",
                opacity: 0.9,
                transition: "all 0.3s ease",
                ":hover": {
                  opacity: 1,
                  transform: "scale(1.01)"
                }
              }}>
                Let's discuss how we can help you attract more customers through digital marketing.
              </p>
              <Link to="/contact" style={{
                textDecoration: "none",
                background: "#764ba2",
                color: "#fff",
                padding: "15px 50px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "1.1rem",
                display: "inline-block",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(118, 75, 162, 0.4)",
                border: "2px solid rgba(255,255,255,0.3)",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 25px rgba(118, 75, 162, 0.6)",
                  background: "#8a5cb6",
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
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
            marginBottom: "30px",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)"
            }
          }}>
            <h3 style={{ 
              color: "#764ba2", 
              marginTop: "0", 
              marginBottom: "20px", 
              fontSize: "1.3rem", 
              position: "relative", 
              paddingBottom: "10px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#5a3a7d"
              }
            }}>
              <span style={{ 
                position: "absolute", 
                bottom: 0, 
                left: 0, 
                width: "40px", 
                height: "3px", 
                background: "#764ba2", 
                borderRadius: "2px",
                transition: "all 0.3s ease",
                ":hover": {
                  width: "60px",
                  background: "#8a5cb6"
                }
              }}></span>
              Our Services
            </h3>
            <ul style={{ 
              listStyle: "none", 
              padding: "0", 
              margin: "0", 
              display: "flex", 
              flexDirection: "column", 
              gap: "10px" 
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
                      gap: "10px", 
                      padding: "12px 15px", 
                      borderRadius: "8px", 
                      background: "#f9f9f9", 
                      transition: "all 0.3s ease",
                      ":hover": {
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "#fff",
                        transform: "translateX(5px)",
                        boxShadow: "0 5px 15px rgba(118, 75, 162, 0.3)"
                      }
                    }}
                  >
                    <span style={{ 
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                      ":hover": {
                        transform: "rotate(15deg) scale(1.2)"
                      }
                    }}>{category.icon}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing Resources */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            marginBottom: "30px",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 15px 30px rgba(118, 75, 162, 0.2)"
            }
          }}>
            <h3 style={{ 
              color: "#764ba2", 
              marginTop: "0",
              marginBottom: "20px",
              fontSize: "1.3rem",
              position: "relative",
              paddingBottom: "10px",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#5a3a7d"
              }
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "40px",
                height: "3px",
                background: "#764ba2",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                ":hover": {
                  width: "60px",
                  background: "#8a5cb6"
                }
              }}></span>
              Marketing Resources
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}>
              {[
                {
                  title: "Digital Marketing Guide",
                  type: "PDF",
                  size: "2.4 MB"
                },
                {
                  title: "Case Study: E-commerce Growth",
                  type: "PDF",
                  size: "3.1 MB"
                },
                {
                  title: "Webinar: Social Media Strategies",
                  type: "Video",
                  size: "45 min"
                },
                {
                  title: "SEO Best Practices",
                  type: "PDF",
                  size: "1.8 MB"
                }
              ].map((resource, index) => (
                <div key={index} style={{ 
                  background: "#f9f9f9",
                  padding: "15px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  transition: "all 0.3s ease",
                  ":hover": {
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    transform: "translateX(5px)",
                    boxShadow: "0 10px 20px rgba(118, 75, 162, 0.3)"
                  }
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "#764ba2",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "#fff",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                    ":hover": {
                      transform: "rotate(15deg) scale(1.1)",
                      background: "#8a5cb6"
                    }
                  }}>
                    {resource.type === "PDF" ? "📄" : "🎥"}
                  </div>
                  <div>
                    <div style={{ 
                      fontWeight: "600",
                      marginBottom: "5px",
                      transition: "all 0.3s ease"
                    }}>{resource.title}</div>
                    <div style={{ 
                      fontSize: "0.8rem",
                      color: "#777",
                      transition: "all 0.3s ease",
                      ":hover": {
                        color: "#fff"
                      }
                    }}>{resource.type} • {resource.size}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div style={{ 
            background: "#fff", 
            borderRadius: "10px", 
            padding: "25px", 
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            border: "2px solid #764ba2",
            textAlign: "center",
            transition: "all 0.3s ease",
            ":hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 15px 30px rgba(118, 75, 162, 0.3)",
              borderColor: "#8a5cb6"
            }
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "2rem",
              color: "#fff",
              boxShadow: "0 5px 15px rgba(118, 75, 162, 0.3)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "rotate(15deg) scale(1.1)",
                boxShadow: "0 10px 20px rgba(118, 75, 162, 0.5)"
              }
            }}>📢</div>
            <h3 style={{ 
              color: "#764ba2", 
              marginTop: "0",
              marginBottom: "15px",
              fontSize: "1.4rem",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#5a3a7d"
              }
            }}>Marketing Experts Available</h3>
            <p style={{ 
              margin: "0 0 25px",
              color: "#555",
              lineHeight: "1.6",
              transition: "all 0.3s ease",
              ":hover": {
                color: "#444"
              }
            }}>
              Have questions about digital marketing? Our specialists are ready to help.
            </p>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              gap: "15px"
            }}>
              <a href="tel:+13147327749" style={{
                textDecoration: "none",
                background: "#764ba2",
                color: "#fff",
                padding: "15px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "2px solid rgba(255,255,255,0.2)",
                ":hover": {
                  background: "#8a5cb6",
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(118, 75, 162, 0.4)",
                  borderColor: "rgba(255,255,255,0.4)"
                }
              }}>
                <span style={{ transition: "all 0.3s ease", ":hover": { transform: "rotate(15deg) scale(1.2)" } }}>📞</span> +1-314-732-7749
              </a>
              <a href="mailto:marketing@techvyver.com" style={{
                textDecoration: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                padding: "15px",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "2px solid rgba(255,255,255,0.2)",
                ":hover": {
                  background: "linear-gradient(135deg, #7a8ff2 0%, #8a5cb6 100%)",
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(118, 75, 162, 0.4)",
                  borderColor: "rgba(255,255,255,0.4)"
                }
              }}>
                <span style={{ transition: "all 0.3s ease", ":hover": { transform: "rotate(15deg) scale(1.2)" } }}>✉️</span> Email Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;