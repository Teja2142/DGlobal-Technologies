import React from "react";

const CloudTechMarquee = () => {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg", alt: "Azure" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg", alt: "GCP" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", alt: "Kubernetes" },
    { src: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", alt: "Docker" },
    { src: "https://miro.medium.com/v2/resize:fit:400/1*Sw3pSkeYMt2rtI8BGG99Jg.png", alt: "Microservices" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", alt: "Python" },
    { src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", alt: "Java" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "Angular" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Power_BI_logo.svg", alt: "Power BI" },
    { src: "https://companieslogo.com/img/orig/INFA_BIG-c0b021e6.png?t=1720244491", alt: "Informatica" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg", alt: "Snowflake" },
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
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{
              maxHeight: "60px", // fit height
              width: "auto", // keep aspect ratio
              margin: "0 40px",
              verticalAlign: "middle",
              objectFit: "contain", // prevent cropping
            }}
          />
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
