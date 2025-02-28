import React from "react";

const ContactForm = () => (
  <div className="card bg-base-100 shadow-xl flex-1">
    <div className="card-body">
      <h2 className="card-title">Send us a message</h2>
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="card bg-base-100 shadow-xl flex-1">
    <div className="card-body">
      <h2 className="card-title">Our Location</h2>
      <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-300 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1614352437539!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Bike repair shop location"
        ></iframe>
      </div>
      <div className="space-y-4">
        <InfoItem
          icon="location"
          text="123 Bike Street, Cycle City, CC 12345"
        />
        <InfoItem icon="phone" text="(555) 123-4567" />
        <InfoItem icon="email" text="info@pedalperfect.com" />
        <InfoItem icon="hours">
          <p>Monday-Friday: 9am-7pm</p>
          <p>Saturday: 10am-5pm</p>
          <p>Sunday: 11am-4pm</p>
        </InfoItem>
      </div>
    </div>
  </div>
);

interface InfoItemProps {
  icon: "location" | "phone" | "email" | "hours";
  text?: string;
  children?: React.ReactNode;
}

const InfoItem = ({ icon, text, children }: InfoItemProps) => {
  const icons = {
    location: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    email: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    hours: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  };

  return (
    <div className="flex items-start gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icons[icon]}
      </svg>
      {text ? <span>{text}</span> : children}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
