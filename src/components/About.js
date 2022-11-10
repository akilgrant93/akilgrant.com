import React from "react";
import Lottie from "lottie-react";
import meAnimated from "../myself.json";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-xl mb-4 text-forest-green font-black">
            Hey, I'm Akil!
            <br className="hidden lg:inline-block" />I'm a UX Designer and Art Director.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm based in New York and I love design.
          </p>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            className=""
            alt="hero"
            src="./coding.svg"
          /> */}
          <Lottie className="object-cover object-center rounded" animationData={meAnimated} />;
        </div>
      </div>
    </section>
  );
}
