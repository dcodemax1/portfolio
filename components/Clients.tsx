import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

import { skills, feedback } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="feedback">
      <h1 className="heading py-10">
        Kind words from
        <span className="text-purple"> faculty and seniors </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <div className="mb-8">
          <InfiniteMovingCards
            items={feedback}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="py-10 pb-5" id="skills">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 w-full px-4">
            {skills.map(({ id, img, name, nameImg }) => (
              <div
                key={id}
                className="flex flex-row items-center gap-2 md:gap-3 basis-1/3 md:basis-1/3 lg:basis-1/6 flex-shrink-0"
              >
                <img src={img} alt={name} className="w-8 md:w-10 lg:w-12" />
                <p className="text-sm md:text-base lg:text-lg font-bold text-white whitespace-nowrap">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
