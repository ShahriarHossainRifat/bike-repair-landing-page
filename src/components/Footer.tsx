import React from "react";
interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div>
    <span className="footer-title">{title}</span>
    {links.map((link: string, index: number) => (
      <a key={index} className="link link-hover">
        {link}
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const columns = [
    {
      title: "Services",
      links: [
        "Basic Tune-Up",
        "Premium Service",
        "Wheel Building",
        "Emergency Repair",
      ],
    },
    {
      title: "Company",
      links: ["About us", "Contact", "Jobs", "Press kit"],
    },
    {
      title: "Legal",
      links: ["Terms of use", "Privacy policy", "Cookie policy"],
    },
  ];

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      {columns.map((column, index) => (
        <FooterColumn key={index} title={column.title} links={column.links} />
      ))}

      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-neutral-content">
              Subscribe for special offers
            </span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
              aria-label="Email for newsletter"
            />
            <button
              className="btn btn-primary absolute top-0 right-0 rounded-l-none"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
