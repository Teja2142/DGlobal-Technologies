import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaJava,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaSalesforce,
  FaDocker,
  FaDatabase,
  FaCloud,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiGraphql,
  SiRedis,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";

const TechLogosMarquee = () => {
  const items = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaGoogle />, name: "Google Cloud" },
    { icon: <FaMicrosoft />, name: "Azure" }, // instead of SiAzuredevops
    { icon: <FaSalesforce />, name: "Salesforce" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiRedis />, name: "Redis" },
  ];

  const loopItems = [...items, ...items]; // Duplicate for seamless scroll

  return (
    <div className="marquee" aria-label="Technology stack logos">
      <div className="track">
        {loopItems.map((t, i) => (
          <div className="icon-box" key={i} title={t.name} aria-label={t.name}>
            <div className="icon">{t.icon}</div>
            <span className="label">{t.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .track {
          display: flex;
          align-items: center;
          gap: 44px;
          width: max-content;
          animation: scroll-left 28s linear infinite;
          will-change: transform;
          padding: 8px 6px;
        }

        .icon-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 110px;
          user-select: none;
          transition: transform 0.2s ease;
        }

        .icon-box:hover {
          transform: translateY(-4px) scale(1.04);
        }

        .icon :global(svg) {
          width: 44px;
          height: 44px;
        }

        .label {
          margin-top: 8px;
          font-size: 13px;
          color: #475569;
          text-align: center;
          white-space: nowrap;
        }

        /* Default icon color */
        .icon-box { color: #1e40af; }
        .icon-box:hover { color: #0ea5e9; }

        .marquee:hover .track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .track { animation: none; }
        }

        @media (max-width: 1024px) {
          .icon :global(svg) { width: 38px; height: 38px; }
          .icon-box { min-width: 96px; }
        }

        @media (max-width: 640px) {
          .icon :global(svg) { width: 32px; height: 32px; }
          .icon-box { min-width: 88px; }
          .label { font-size: 12px; }
        }
      `}</style>
    </div>
  );
};

export default TechLogosMarquee;
