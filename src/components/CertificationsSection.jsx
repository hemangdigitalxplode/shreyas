import React from "react";

const certifications = [
  {
    id: 1,
    name: "FSSAI",
    image: "/images/certifications/fssai.png",
  },
  {
    id: 2,
    name: "ISO 22000",
    image: "/images/certifications/iso-22000.png",
  },
  {
    id: 3,
    name: "ISO 9001",
    image: "/images/certifications/iso-9001.png",
  },
  {
    id: 4,
    name: "HACCP",
    image: "/images/certifications/haccp.png",
  },
  {
    id: 5,
    name: "APEDA",
    image: "/images/certifications/apeda.png",
  },
  {
    id: 6,
    name: "GMP",
    image: "/images/certifications/gmp.png",
  },
  {
    id: 7,
    name: "Halal",
    image: "/images/certifications/halal.png",
  },
  {
    id: 8,
    name: "AIREA",
    image: "/images/certifications/airea.png",
  },
];

const CertificationsSection = () => {
  return (
    <section className="cert-section container">
      <div className="cert-container">
        {/* Left Content */}
        <div className="cert-content">
          <h2 className="cert-heading">
            Certified for Global <br /> Food Safety & Quality
          </h2>

          <p className="cert-text">
            Every batch is tested internally and verified by international
            agencies such as SGS, Intertek, and Bureau Veritas.
          </p>

          <button className="cert-btn">Our Quality Commitment</button>
        </div>

        {/* Right Logos */}
        <div className="cert-logos">
          {certifications.map((item) => (
            <div className="cert-logo-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
