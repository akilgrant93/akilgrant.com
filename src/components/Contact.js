import React from "react";
import './contact.css'
import './button.css'
export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap w-1/2">
        <div
          className="min-w-full md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

			<div className="top">
				<div className="profile-pic">
				<div className="circle-1"></div>
				<div className="circle-2"></div>
					<img src="https://i.ibb.co/jhRfh0t/IMG-2301.png" alt="IMG-2301" border="0"/>
				</div>
				<span className="pb-1 color-forest-green text-xl font-black">Akil Grant</span>
				<span className="text-forest-green text-base font-semibold">UI/UX Designer & Art Director</span>
			</div>

    <div className="bottom pt-3">
    <a href="mailto:akil.grant.93@gmail.com?subject=Hi%20Akil!" className="button-style mr-5" >Email</a>
    <a className="button-style mr-5" href="https://akilgrant.com/s/akilgrantresume-ds2x.pdf" target="_blank">Resume</a>
    <a href="https://github.com/akilgrant93" className="button-style mr-g" >Github</a>
			</div>
                  </div>
      </div>
    </section>
  );
}
