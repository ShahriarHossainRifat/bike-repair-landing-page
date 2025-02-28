// src/components/Testimonials.tsx
import React from "react";
import { testimonials } from "../data";

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
  <div className="card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
    <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/10 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>

    <div className="card-body relative">
      <div className="absolute -right-2 -top-2 text-4xl text-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
        &ldquo;
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full overflow-hidden ring ring-primary/0 group-hover:ring-primary/70 transition-all duration-300 ring-offset-1">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
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
                className="mask mask-star-2 bg-orange-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                checked
                readOnly
              />
            ))}
          </div>
        </div>
      </div>
      <p className="relative z-10 transition-colors duration-300">
        "{testimonial.text}"
      </p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
