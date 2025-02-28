// src/components/Services.tsx
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Basic Tune-Up",
      description:
        "Comprehensive inspection, adjustment of gears and brakes, tire inflation check.",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Premium Service",
      description:
        "Complete disassembly, thorough cleaning, bearing service, and complete tune-up.",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Wheel Building",
      description:
        "Custom wheel building and truing services for all types of bikes.",
      price: "$85+",
      image:
        "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      title: "Emergency Repair",
      description:
        "Quick repairs when you need them most. Available 7 days a week.",
      price: "$65+",
      image:
        "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    },
  ];

  return (
    <div id="services" className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <div className="text-lg font-semibold">{service.price}</div>
                  <button className="btn btn-primary btn-sm">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
