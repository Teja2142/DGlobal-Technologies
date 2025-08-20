import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images
import Healthcare from "../assets/industries/healthcare.png";
import Finance from "../assets/industries/finance.png";
import Retail from "../assets/industries/retail.png";
import Energy from "../assets/industries/energy.png";
import Manufacturing from "../assets/industries/manufacturing.png";
import Logistics from "../assets/industries/logistics.png";

const IndustriesSwiper = () => {
  const industries = [
    {
      img: Healthcare,
      title: "Healthcare & Life Sciences",
      description:
        "We deliver secure, compliant, and innovative IT solutions that enhance patient care, optimize operations, and drive digital transformation for healthcare and life sciences organizations.",
      link: "/healthcare",
    },
    {
      img: Finance,
      title: "Finance & Banking",
      description:
        "We provide robust, secure, and scalable financial technology solutions that enable banks and financial institutions to innovate while maintaining compliance and security standards.",
      link: "/finance",
    },
    {
      img: Retail,
      title: "Retail & eCommerce",
      description:
        "We help retailers and eCommerce brands boost customer experience, streamline operations, and drive sales with scalable digital solutions, from omnichannel platforms to data-driven insights.",
      link: "/retail",
    },
    {
      img: Energy,
      title: "Energy",
      description:
        "We enable energy and utilities companies to modernize operations, improve efficiency, and meet sustainability goals through advanced IT solutions, smart data management, and automation.",
      link: "/energy",
    },
    {
      img: Manufacturing,
      title: "Manufacturing",
      description:
        "We help manufacturers enhance productivity, streamline supply chains, and adopt smart technologies with tailored IT solutions, from ERP integration to IoT-driven automation.",
      link: "/manufacturing",
    },
    {
      img: Logistics,
      title: "Logistics & Supply Chain",
      description:
        "We optimize logistics and supply chain operations with intelligent IT solutions that improve visibility, reduce costs, and enable real-time tracking from production to delivery.",
      link: "/logistics",
    },
  ];

  return (
    <section className="section industries-section">
      <div className="container">
        <h2 className="section-heading">Industries We Serve</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img
                  className="industry-image"
                  src={industry.img}
                  alt={industry.title}
                />
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                <Link to={industry.link}>
                  <button className="industry-button">
                    Click here to know more
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IndustriesSwiper;
