import React from "react";
import Lottie from "lottie-react";
import meAnimated from "../myself.json";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-1/5 flex flex-col mb-16 md:mb-0 items-center text-center">
          <div className="text-xl text-forest-green flex items-center inline-block font-black">
            Akil |
          <h2 className="text-lg inline-block ml-1 text-forest-green  font-black">
            UX Designer & Art Director.
          </h2>
          </div>
          <p className="mb-8 leading-relaxed">
          I'm based in New York and I love design.
          </p>

        </div>
        <div className="w-3/5">
          <Lottie className="object-cover object-center rounded" animationData={meAnimated} />
        </div>
      </div>
    </section>
  );
}
