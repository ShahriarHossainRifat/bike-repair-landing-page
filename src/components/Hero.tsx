import React from "react";
import { COMPANY_NAME, HERO_IMAGE_URL } from "../data";
import { scrollToSection } from "../utils/scroll";

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${HERO_IMAGE_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {COMPANY_NAME} Bike Repairs
          </h1>
          <p className="mb-5">
            We fix every gear, chain, and frame with precision and care. Your
            bike deserves the best service in town!
          </p>
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Book a Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
