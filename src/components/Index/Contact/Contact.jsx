import React, { useState } from "react";
import "./contact.css";
import Email from "../../../assets/Email.svg";
import LinkedIn from "../../../assets/LinkedIn.png";
import Contact from "../../../assets/Contact.svg";
import Cancel from "../../../assets/Cancel.svg";

const links = [
  {
    name: "LinkedIn",
    image: LinkedIn,
    href: "https://www.linkedin.com/in/nathanial-lubitz",
  },
  {
    name: "Email",
    image: Email,
    href: "mailto:nate.lubitz@gmail.com",
  },
];

const LinkIcons = ({ open, mobile }) => {
  return (
    <>
      {links.map(({ name, image, href }) => (
        <a
          key={name}
          style={!open && mobile ? { right: "100px" } : {}}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt={name} />
        </a>
      ))}
    </>
  );
};


const ContactPage = ({ mobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`contact ${mobile ? "flex-col" : "flex-row"}`}>
      {isOpen && <h2>Contact Me</h2>}
      <LinkIcons open={isOpen} mobile={mobile} />
      {mobile && (
        <img
        className="toggler"
        onClick={() => setIsOpen(!isOpen)}
        alt="contact-toggle"
        src={isOpen ? Cancel : Contact}
        />
        )}
      {mobile && (
        <div
        className="tint"
        style={
          isOpen
          ? { backgroundColor: "#000C" }
          : { backgroundColor: "transparent", pointerEvents: "none" }
        }
        onTouchStart={() => setIsOpen(false)}
        />
        )}
    </div>
  );
};

export default ContactPage