// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      text: "My mountain bike has never felt better after their premium service. Smooth shifting and perfect brakes!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Mike T.",
      text: "Quick emergency repair when I broke my chain on a trail. They had me back riding within an hour!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Emma L.",
      text: "The wheel they built for me has stayed true for over 1,000 miles. Great craftsmanship and attention to detail.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="rating rating-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${index}-${i}`}
                          className="mask mask-star-2 bg-orange-400"
                          checked
                          readOnly
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p>"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
