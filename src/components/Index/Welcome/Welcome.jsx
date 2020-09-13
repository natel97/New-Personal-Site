import React from "react";
import nl from "../../../assets/nl.jpg";
import "./welcome.css";

const Image = ({ width, height, className = "", imgClass = "" }) => {
  return (
    <div
      className={`${className}`}
      style={{ width, height, maxWidth: "500px" }}
    >
      <img
        style={{ width: "100%", alignSelf: "center" }}
        className={imgClass}
        src={nl}
        alt="Nathanial Lubitz"
      />
    </div>
  );
};

const links = [
  {
    name: "Check out my GitHub account",
    href: "https://github.com/natel97",
  },
  {
    name: "See my resume",
    href: "https://resume.nathaniallubitz.com",
  },
];

const MainLinks = () => {
  return (
    <>
      {links.map(({ name, href }) => (
        <a
          className="link m-2"
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      ))}
    </>
  );
};

const FillerBanner = () => {
  // Might do something with a canvas later idk

  return (
    <div className="flex-col justify-center" style={{ height: "256px" }}>
      <h1>Hello, I'm Nathanial Lubitz</h1>
      <h3 className="mx-2">
        I'm a software engineer with 3 years of experience. My favorite tools
        include React, NestJS, Java, and Spring.
      </h3>
    </div>
  );
};

export default ({ mobile }) => {
  return (
    <div className="flex-col height-100">
      {!mobile && <FillerBanner />}
      <div className="flex-row justify-between">
        {!mobile && (
          <div className="flex-col flex-1 align-center my-4">
            <Image className="width-100 flex-col justify-center" />
          </div>
        )}
        <div className="height-100 flex-col flex-1">
          {mobile && (
            <>
              <Image imgClass="red-bottom" />
              <h2>Hello, I'm Nathanial Lubitz</h2>
              <p className="mx-2">
                I'm a software engineer with 3 years of experience. My favorite
                tools include React, NestJS, Java, and Spring
              </p>
            </>
          )}
          <MainLinks />
        </div>
      </div>
      {!mobile && <div style={{ width: "100%", height: "128px" }} />}
    </div>
  );
};
