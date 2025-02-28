import { Service, Testimonial } from "../types";

export const services: Service[] = [
  {
    title: "Basic Tune-Up",
    description:
      "Comprehensive inspection, adjustment of gears and brakes, tire inflation check.",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Premium Service",
    description:
      "Complete disassembly, thorough cleaning, bearing service, and complete tune-up.",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Wheel Building",
    description:
      "Custom wheel building and truing services for all types of bikes.",
    price: "$85+",
    image:
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    title: "Emergency Repair",
    description:
      "Quick repairs when you need them most. Available 7 days a week.",
    price: "$65+",
    image:
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah J.",
    text: "My mountain bike has never felt better after their premium service. Smooth shifting and perfect brakes!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Mike T.",
    text: "Quick emergency repair when I broke my chain on a trail. They had me back riding within an hour!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Emma L.",
    text: "The wheel they built for me has stayed true for over 1,000 miles. Great craftsmanship and attention to detail.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
];

export const COMPANY_NAME = "Pedal Perfect";
export const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
