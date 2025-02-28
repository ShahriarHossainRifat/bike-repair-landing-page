import { services } from "../data";

interface ServiceCardProps {
  service: {
    image: string;
    title: string;
    description: string;
    price: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => (
  <div
    key={index}
    className="card bg-base-100 shadow-xl rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <figure className="h-48 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
    </figure>
    <div className="card-body relative">
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

      <h2 className="card-title group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h2>
      <p>{service.description}</p>
      <div className="card-actions justify-between items-center mt-4">
        <div className="text-lg font-semibold group-hover:text-primary/90 transition-colors duration-300">
          {service.price}
        </div>
        <button className="btn btn-primary btn-sm opacity-90 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
    <div className="absolute inset-0 rounded-xl pointer-events-none bg-base-100 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
