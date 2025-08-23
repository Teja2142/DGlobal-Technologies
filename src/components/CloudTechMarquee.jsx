import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiAngular,
} from "react-icons/si";
import { FaJava, FaAws, FaMicrosoft, FaGoogle, FaSnowflake } from "react-icons/fa";

const CloudTechMarquee = () => {
  const logos = [
    { icon: <FaAws />, alt: "AWS" },
    { icon: <FaMicrosoft />, alt: "Azure" },
    { icon: <FaGoogle />, alt: "GCP" },
    { icon: <SiKubernetes />, alt: "Kubernetes" },
    { icon: <SiDocker />, alt: "Docker" },
    { icon: "🧩", alt: "Microservices" }, // fallback emoji
    { icon: <SiPython />, alt: "Python" },
    { icon: <FaJava />, alt: "Java" },
    { icon: <SiReact />, alt: "React" },
    { icon: <SiAngular />, alt: "Angular" },
    { icon: "📊", alt: "Power BI" }, // fallback emoji
    { icon: "🔗", alt: "Informatica" }, // fallback emoji
    { icon: <FaSnowflake />, alt: "Snowflake" },
  ];

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        background: "#fff",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          animation: "scroll 25s linear infinite",
        }}
      >
        {logos.concat(logos).map((logo, i) => (
          <span
            key={i}
            title={logo.alt}
            style={{
              fontSize: "48px",
              margin: "0 40px",
              verticalAlign: "middle",
              display: "inline-block",
            }}
          >
            {logo.icon}
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default CloudTechMarquee;
