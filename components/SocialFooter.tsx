"use client";

import React from "react";
import { socialMedia } from "@/data";

const SocialFooter = () => {
  return (
    <footer className="w-full mb-10 pb-10 md:mb-5" id="footer">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-6">
        <p className="md:text-base text-sm md:font-normal font-light cursor-pointer group hover:text-purple transition-colors duration-300">
          Copyright © 2025{" "}
          <span className="group-hover:scale-105 inline-block transition-transform duration-300">
            Deepika Kumari
          </span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-100 hover:scale-110 hover:shadow-lg hover:shadow-purple transition-all duration-300"
            >
              <img
                src={profile.img}
                alt="icon"
                width={20}
                height={20}
                className="transition-transform duration-300 hover:rotate-12"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
