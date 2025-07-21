import { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaSun,
  FaMoon,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { BsJournalCode } from "react-icons/bs";
import profileImage from "./assets/images/profile.jpg";

const ProfileCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/B-Varunteja007",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/varun-teja-bandaru/",
      label: "LinkedIn",
    },
    {
      icon: <FaCode size={20} />,
      url: "https://leetcode.com/u/varunteja007/",
      label: "LeetCode",
    },
    {
      icon: <BsJournalCode size={20} />,
      url: "https://namastedev.com/varuntejabandaru07",
      label: "Namaste Dev",
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Dominant Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              push: {
                quantity: 6,
              },
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.8,
                },
              },
            },
          },
          particles: {
            color: {
              value: darkMode ? "#a78bfa" : "#3b82f6",
            },
            links: {
              color: darkMode ? "#c084fc" : "#2563eb",
              distance: 120,
              enable: true,
              opacity: 0.6,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 120,
            },
            opacity: {
              value: 0.7,
              random: true,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 5 },
              random: true,
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 5,
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Profile Card with stronger shadow for better visibility */}
      <div className="relative z-10 w-full max-w-md rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
        <div
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } shadow-lg`}
        >
          {/* Dark/Light mode toggle */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                darkMode
                  ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Rest of your profile card content remains the same */}
          <div className="px-6 pb-8 text-center">
            {/* Profile image */}
            <div className="flex justify-center -mt-2 mb-4">
              <div
                className={`h-28 w-28 rounded-full border-4 ${
                  darkMode ? "border-purple-500" : "border-blue-500"
                } overflow-hidden shadow-lg ${
                  darkMode ? "shadow-purple-500/20" : "shadow-blue-500/20"
                }`}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 break-words">
              Varun Teja Bandaru
            </h1>

            <h2
              className={`text-lg font-medium mb-1 ${
                darkMode ? "text-purple-400" : "text-blue-600"
              }`}
            >
              Junior Software Engineer
            </h2>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } mb-4`}
            >
              @Epam Systems
            </p>

            <p
              className={`mb-6 px-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              Curious and creative Full Stack Developer who loves turning ideas
              into responsive, scalable web apps. Big fan of React, Node.js,
              open-source projects, and being part of the tech community.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 px-4">
              <a
                href="mailto:varuntejabandaru07@gmail.com"
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white shadow-md ${
                  darkMode ? "shadow-purple-500/30" : "shadow-blue-500/30"
                } hover:shadow-lg`}
              >
                <FaEnvelope /> Contact Me
              </a>
              <a
                href="/VarunTeja%20Bandaru%20Resume.pdf"
                download="VarunTeja_Bandaru_Resume.pdf"
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                } ${darkMode ? "text-white" : "text-gray-800"} shadow-md ${
                  darkMode ? "shadow-gray-700/20" : "shadow-gray-400/20"
                } hover:shadow-lg`}
              >
                <FaFileDownload /> Download Resume
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-2">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex flex-col items-center text-xs">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    } hover:-translate-y-1`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                  <span
                    className={`mt-1 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
