import React from 'react';
const Web = () => {
  return (
    <>
      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', Arial, sans-serif;
            background: #764ba2;
            color: #333;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 100px 20px;
            color: #fff;
            text-align: center;
            position: relative;
            overflow: hidden;
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
            opacity: 0.1;
            z-index: 0;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            animation: fadeInUp 1s ease;
        }

        .hero h1 {
            font-weight: 800;
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            background: linear-gradient(45deg, #fff, #f7941d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            max-width: 700px;
            margin: 0 auto 40px;
            opacity: 0.95;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        .hero-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .card img {
            width: 100%;
            max-height: 700px;      /* Set your preferred max height */
            object-fit: cover;      /* Ensures the image covers the area without stretching */
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            transition: transform 0.3s ease;
        }
            
        .btn-primary, .btn-secondary {
            text-decoration: none;
            padding: 15px 35px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            border: none;
            cursor: pointer;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(45deg, #f7941d, #ffa733);
            color: #fff;
            box-shadow: 0 8px 25px rgba(247, 148, 29, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 35px rgba(247, 148, 29, 0.6);
        }

        .btn-secondary {
            background: transparent;
            color: #fff;
            border: 2px solid rgba(255,255,255,0.8);
            backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
            background: rgba(255,255,255,0.15);
            transform: translateY(-5px);
            border-color: #f7941d;
            box-shadow: 0 10px 25px rgba(255,255,255,0.2);
        }

        /* Breadcrumb */
        .breadcrumb {
            background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
            padding: 20px 40px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            border-bottom: 3px solid #764ba2;
        }

        .breadcrumb a {
            color: #764ba2;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .breadcrumb a:hover {
            color: #f7941d;
            text-shadow: 0 2px 4px rgba(247, 148, 29, 0.3);
        }

        /* Main Container */
        .container {
            display: flex;
            padding: 50px 40px;
            gap: 40px;
            max-width: 1400px;
            margin: 0 auto;
            min-height: calc(100vh - 200px);
        }

        .main-content {
            flex: 3;
        }

        .sidebar {
            flex: 1;
            min-width: 320px;
        }

        /* Card Styles */
        .card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(118, 75, 162, 0.15);
            margin-bottom: 30px;
            transition: all 0.4s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 50px rgba(118, 75, 162, 0.25);
        }

        .card img {
            width: 100%;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            transition: transform 0.3s ease;
        }

        .card img:hover {
            transform: scale(1.02);
        }

        .section-title {
            color: #764ba2;
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 15px;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(45deg, #f7941d, #764ba2);
            border-radius: 2px;
        }

        /* Feature Grid */
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin: 40px 0;
        }

        .feature-card {
            background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
            padding: 30px;
            border-radius: 15px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(247, 148, 29, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .feature-card:hover::before {
            left: 100%;
        }

        .feature-card:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            color: #fff;
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 20px 40px rgba(118, 75, 162, 0.3);
            border-color: #f7941d;
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            display: block;
            transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
            transform: scale(1.2) rotate(5deg);
        }

        .feature-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 15px;
        }

        /* Technology Stack */
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 30px 0;
        }

        .tech-tag {
            background: linear-gradient(135deg, #f5f5f5, #e9ecef);
            padding: 12px 20px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.4s ease;
            font-weight: 500;
            border: 2px solid transparent;
        }

        .tech-tag:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            color: #fff;
            transform: scale(1.1) translateY(-5px);
            box-shadow: 0 10px 20px rgba(118, 75, 162, 0.4);
            border-color: #f7941d;
        }

        .tech-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        /* Process Timeline */
        .process-timeline {
            position: relative;
            margin-top: 40px;
        }

        .timeline-connector {
            position: absolute;
            left: 35px;
            top: 30px;
            bottom: 30px;
            width: 4px;
            background: linear-gradient(to bottom, #f7941d, #764ba2);
            border-radius: 2px;
            z-index: 1;
        }

        .process-step {
            display: flex;
            gap: 25px;
            margin-bottom: 40px;
            position: relative;
            z-index: 2;
        }

        .step-icon {
            flex-shrink: 0;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            box-shadow: 0 8px 20px rgba(118, 75, 162, 0.3);
            transition: all 0.3s ease;
        }

        .step-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 30px rgba(118, 75, 162, 0.5);
        }

        .step-content {
            background: linear-gradient(135deg, #f9f9f9, #ffffff);
            padding: 25px;
            border-radius: 15px;
            flex: 1;
            transition: all 0.4s ease;
            border-left: 4px solid #764ba2;
        }

        .step-content:hover {
            transform: translateX(15px);
            box-shadow: 0 10px 25px rgba(118, 75, 162, 0.15);
            border-left-color: #f7941d;
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            padding: 50px;
            text-align: center;
            color: #fff;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }

        .cta-section::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(247, 148, 29, 0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }

        .cta-content {
            position: relative;
            z-index: 1;
        }

        .cta-section h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            opacity: 0.95;
        }

        /* Sidebar Styles */
        .sidebar-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(118, 75, 162, 0.15);
            margin-bottom: 30px;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .sidebar-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(118, 75, 162, 0.2);
        }

        .sidebar-title {
            color: #764ba2;
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 10px;
        }

        .sidebar-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(45deg, #f7941d, #764ba2);
            border-radius: 2px;
        }

        .service-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .service-item a {
            text-decoration: none;
            color: #555;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            border-radius: 12px;
            background: linear-gradient(135deg, #f9f9f9, #ffffff);
            transition: all 0.4s ease;
            border: 2px solid transparent;
        }

        .service-item a:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            color: #fff;
            transform: translateX(8px) scale(1.02);
            border-color: #f7941d;
            box-shadow: 0 8px 20px rgba(118, 75, 162, 0.3);
        }

        .service-icon {
            font-size: 1.3rem;
            transition: transform 0.3s ease;
        }

        .service-item a:hover .service-icon {
            transform: scale(1.2);
        }

        /* Help Section */
        .help-section {
            background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
            border: 3px solid #f7941d;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .help-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #f7941d, #ffa733);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 2rem;
            color: #fff;
            box-shadow: 0 8px 20px rgba(247, 148, 29, 0.4);
            transition: all 0.3s ease;
        }

        .help-icon:hover {
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 15px 30px rgba(247, 148, 29, 0.6);
        }

        .contact-buttons {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .contact-btn {
            text-decoration: none;
            padding: 15px;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.4s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            position: relative;
            overflow: hidden;
        }

        .contact-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
            transition: all 0.4s ease;
            transform: translate(-50%, -50%);
        }

        .contact-btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .contact-btn:hover {
            transform: translateY(-5px);
        }

        .phone-btn {
            background: linear-gradient(135deg, #764ba2, #667eea);
            color: #fff;
        }

        .email-btn {
            background: linear-gradient(135deg, #f9f9f9, #e9ecef);
            color: #764ba2;
            border: 2px solid #764ba2;
        }

        .email-btn:hover {
            background: linear-gradient(135deg, #764ba2, #667eea);
            color: #fff;
        }

        .whatsapp-btn {
            background: linear-gradient(135deg, #25D366, #20c053);
            color: #fff;
        }

        /* Testimonials */
        .testimonial {
            background: linear-gradient(135deg, #f9f9f9, #ffffff);
            padding: 25px;
            border-radius: 15px;
            margin-bottom: 20px;
            position: relative;
            transition: all 0.4s ease;
            border-left: 4px solid #764ba2;
        }

        .testimonial::before {
            content: '"';
            position: absolute;
            top: 15px;
            left: 20px;
            font-size: 3rem;
            color: rgba(247, 148, 29, 0.2);
            font-weight: bold;
            line-height: 1;
        }

        .testimonial:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(118, 75, 162, 0.15);
            border-left-color: #f7941d;
        }

        .testimonial-text {
            margin: 20px 0;
            font-style: italic;
            color: #555;
            line-height: 1.7;
        }

        .testimonial-author {
            border-top: 2px solid #eee;
            padding-top: 15px;
            margin-top: 20px;
        }

        .author-name {
            font-weight: 600;
            color: #764ba2;
            margin-bottom: 5px;
        }

        .author-role {
            font-size: 0.9rem;
            color: #777;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 0.3;
                transform: scale(1);
            }
            50% {
                opacity: 0.5;
                transform: scale(1.1);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
                padding: 30px 20px;
            }

            .hero {
                padding: 80px 20px;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn-primary, .btn-secondary {
                width: 100%;
                max-width: 280px;
                text-align: center;
            }

            .breadcrumb {
                padding: 15px 20px;
            }

            .card {
                padding: 25px;
            }

            .feature-grid {
                grid-template-columns: 1fr;
            }

            .section-title {
                font-size: 1.8rem;
            }

            .cta-section {
                padding: 35px 25px;
            }

            .cta-section h2 {
                font-size: 2rem;
            }

            .process-step {
                gap: 15px;
            }

            .step-icon {
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
            }

            .timeline-connector {
                left: 30px;
            }
        }

        @media (max-width: 480px) {
            .tech-stack {
                justify-content: center;
            }

            .tech-tag {
                padding: 10px 15px;
                font-size: 0.9rem;
            }

            .contact-buttons {
                gap: 12px;
            }

            .contact-btn {
                padding: 12px;
                font-size: 0.9rem;
            }
        }
      `}</style>

      <div>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Web Development Services</h1>
            <p>Crafting exceptional digital experiences with cutting-edge web technologies</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">Get Started</a>
              <a href="/" className="btn-secondary">View Portfolio</a>
            </div>
          </div>
        </section>

        <div className="container">
          <main className="main-content">
            <section className="card">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Web Development" />
              <h2 className="section-title">Web Development Services</h2>
              <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: 20 }}>
                At GK Technology, we create powerful, scalable, and user-friendly web applications
                tailored to your business needs. Our expert developers leverage the latest technologies
                to ensure high performance, security, and exceptional user experiences.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <span className="feature-icon">🚀</span>
                  <h3 className="feature-title">Custom Web Development</h3>
                  <p>Tailored solutions designed specifically for your business requirements.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">📱</span>
                  <h3 className="feature-title">Responsive Design</h3>
                  <p>Flawless performance across all devices and screen sizes.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🔍</span>
                  <h3 className="feature-title">SEO Optimization</h3>
                  <p>Built with search engine visibility in mind from the ground up.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">⚡</span>
                  <h3 className="feature-title">Performance Focused</h3>
                  <p>Lightning-fast load times and smooth interactions.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🛡️</span>
                  <h3 className="feature-title">Security First</h3>
                  <p>Enterprise-grade security measures to protect your data.</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🔄</span>
                  <h3 className="feature-title">Continuous Support</h3>
                  <p>Ongoing maintenance and updates to keep your site current.</p>
                </div>
              </div>
            </section>

            <section className="card">
              <h2 className="section-title">Our Technology Stack</h2>
              <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: 20 }}>
                We work with the most advanced and reliable technologies to deliver
                exceptional results for our clients.
              </p>

              <div className="tech-stack">
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#61DAFB' }}></div>
                  React
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#68A063' }}></div>
                  Node.js
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#000000' }}></div>
                  Express
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#47A248' }}></div>
                  MongoDB
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#336791' }}></div>
                  PostgreSQL
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#3178C6' }}></div>
                  TypeScript
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#38B2AC' }}></div>
                  Tailwind CSS
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#2496ED' }}></div>
                  Docker
                </div>
                <div className="tech-tag">
                  <div className="tech-dot" style={{ background: '#FF9900' }}></div>
                  AWS
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="card">
              <h2 className="section-title">Our Development Process</h2>

              <div className="process-timeline">
                <div className="timeline-connector"></div>

                <div className="process-step">
                  <div className="step-icon">🔍</div>
                  <div className="step-content">
                    <h3 style={{ margin: '0 0 10px', color: '#764ba2', fontSize: '1.2rem' }}>Discovery & Planning</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>We start by understanding your business goals, target audience, and project requirements.</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-icon">🎨</div>
                  <div className="step-content">
                    <h3 style={{ margin: '0 0 10px', color: '#764ba2', fontSize: '1.2rem' }}>UI/UX Design</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>Our designers create wireframes and prototypes to visualize the user experience.</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-icon">💻</div>
                  <div className="step-content">
                    <h3 style={{ margin: '0 0 10px', color: '#764ba2', fontSize: '1.2rem' }}>Development</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>Our developers build your application using agile methodologies for maximum efficiency.</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-icon">🧪</div>
                  <div className="step-content">
                    <h3 style={{ margin: '0 0 10px', color: '#764ba2', fontSize: '1.2rem' }}>Testing & QA</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>Rigorous testing ensures your application performs flawlessly across all scenarios.</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-icon">🚀</div>
                  <div className="step-content">
                    <h3 style={{ margin: '0 0 10px', color: '#764ba2', fontSize: '1.2rem' }}>Deployment</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>We handle the deployment process and ensure everything runs smoothly in production.</p>
                  </div>
                </div>

                <div className="process-step">
                  <div className="step-icon">🛠️</div>
                  <div className="step-content">
                    <h3 style={{ margin: '0 0 10px', color: '#764ba2', fontSize: '1.2rem' }}>Maintenance</h3>
                    <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>Ongoing support and updates to keep your application current and secure.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
export default Web;
// ...end of file...