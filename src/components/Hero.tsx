// src/components/Hero.tsx
import React from "react";
import heroImage from "../assets/hero-bg.jpg"; // You'll need to download this image

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Pedal Perfect Bike Repairs
          </h1>
          <p className="mb-5">
            We fix every gear, chain, and frame with precision and care. Your
            bike deserves the best service in town!
          </p>
          <button className="btn btn-primary">Book a Service</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
