import React from "react";
import Lottie from "lottie-react";
import meAnimated from "../myself.json";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-16 md:py-0 md:flex-row flex-col items-center">
        <div className="lg:flex-grow w-8/10 flex flex-col items-center text-center">
          <div className="flex items-center inline-block">
          <h2 className="text-base inline-block ml-1 text-forest-green font-black">
            UX Designer & Art Director.
          </h2>
          </div>
          <p className="leading-relaxed">
          I'm based in New York and I love design.
          </p>

        </div>
        <div className="w-full pt-9 md:pt-0 md:w-3/5">
          <Lottie className="object-cover object-center rounded" animationData={meAnimated} />
        </div>
      </div>
    </section>
  );
}
