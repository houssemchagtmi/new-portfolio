import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "./FooterIcons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 xs:w-full xs:h-52 xl:h-48 bg-gray-900 text-white">
      <div className="xs:flex xs:justify-between xs:items-center xs:px-5  bg-[#ffffff19] xs:py-4">
        <h1
          className="lg:text-4xl xs:text-2xl md:mb-0  lg:leading-normal xs:font-semibold
         xl:w-2/5"
        >
          If you are recruiting <span className="text-blue-500 ">Positive</span>{" "}
          people, call me.
        </h1>
      </div>
      <div
        className="grid grid-cols-1 gap-1 text-center pt-2 text-gray-400 text-sm  xs:mx-6 "
      >
        <span className="xs:my-2 ">
          © 2022 designed and devloped by Houssem Eddin Chagtmi
        </span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
