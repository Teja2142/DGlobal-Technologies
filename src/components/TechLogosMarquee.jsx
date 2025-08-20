import React from "react";

const TechLogosMarquee = () => {
  const logos = [
    // Java (OpenJDK public domain SVG)
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/OpenJDK_logo.svg", alt: "Java (OpenJDK)" }, // :contentReference[oaicite:0]{index=0}
    // .NET Core (SVG)
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg", alt: ".NET Core" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", alt: "Python" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "Angular" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", alt: "Oracle" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", alt: "SAP" },
    // Salesforce logo (SVG from Wikimedia)
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Salesforce_logo.svg", alt: "Salesforce" }, // :contentReference[oaicite:1]{index=1}
    // Informatica logo (SVG from CDN)
    { src: "https://static.cdnlogo.com/logos/i/69/informatica.svg", alt: "Informatica" }, // :contentReference[oaicite:2]{index=2}
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg", alt: "Snowflake" },
  ];

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", background: "#fff", padding: "20px 0" }}>
      <div style={{ display: "inline-block", animation: "scroll 25s linear infinite" }}>
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{ height: "60px", margin: "0 40px", verticalAlign: "middle" }}
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TechLogosMarquee;
