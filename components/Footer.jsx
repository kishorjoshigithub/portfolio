import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          priority
          src={isDarkMode ? assets.logo : assets.logo}
          className={`w-36 mx-auto mb-2 filter ${
            isDarkMode && "filter invert"
          }`}
          alt="footer"
        />

        <div className="flex items-center justify-center gap-2 w-max mx-auto">
          <Image
            priority
            src={isDarkMode ? assets.mail_icon : assets.mail_icon_dark}
            className="w-6"
            alt="footer"
          />
          kishorjoshiabd@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-12">
        <p>© {new Date().getFullYear()} Kishor Joshi. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/kishorjoshigithub">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kishor-joshi-16bb58256/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
