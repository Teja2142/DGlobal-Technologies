import React from 'react';

const About = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#2563eb', // blue-600
      marginBottom: '30px',
    },
    subHeading: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#3b82f6', // blue-500
      marginTop: '40px',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    list: {
      paddingLeft: '20px',
      fontSize: '18px',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Dglobal Technologies</h1>

      <p style={styles.paragraph}>
        Dglobal Technologies is a forward-thinking technology company dedicated to delivering
        innovative digital solutions that empower businesses across the globe. With a passion for
        excellence and a commitment to results, we help clients navigate the ever-evolving digital landscape.
      </p>

      <p style={styles.paragraph}>
        Founded with a vision to bridge the gap between cutting-edge technology and business needs,
        Dglobal Technologies offers a wide range of services including Web Development, API Integration,
        Cloud Computing, Mobile App Development, IoT Solutions, Data Analytics, and Corporate Training.
      </p>

      <p style={styles.paragraph}>
        Our team comprises experienced developers, designers, analysts, and consultants who bring
        creativity, technical expertise, and strategic thinking to every project. We believe in building
        strong partnerships with our clients, understanding their challenges, and providing tailored
        solutions that drive measurable success.
      </p>

      <h2 style={styles.subHeading}>Our Mission</h2>
      <p style={styles.paragraph}>
        To deliver impactful digital solutions that enable businesses to grow, adapt, and succeed in a digital-first world.
      </p>

      <h2 style={styles.subHeading}>Our Vision</h2>
      <p style={styles.paragraph}>
        To become a global leader in technology services by continuously innovating and staying at the forefront of digital transformation.
      </p>

      <h2 style={styles.subHeading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Client-centric approach with customized solutions</li>
        <li style={styles.listItem}>Experienced and passionate team</li>
        <li style={styles.listItem}>Proven track record of delivering quality</li>
        <li style={styles.listItem}>Latest technology stack and tools</li>
        <li style={styles.listItem}>Affordable and scalable services</li>
      </ul>
    </div>
  );
};

export default About;
