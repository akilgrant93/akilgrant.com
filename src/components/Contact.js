import React from "react";
import './contact.css'

export default function Contact() {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "test", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap w-1/2">
        <div
          className="min-w-full md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

			<div className="top">
				<div className="profile-pic">
				<div className="circle-1"></div>
				<div className="circle-2"></div>
					<img src="https://i.ibb.co/jhRfh0t/IMG-2301.png" alt="IMG-2301" border="0"/>
				</div>
				<span className="pb-1 color-forest-green font-bold">Akil Grant</span>
				<span className="career  text-forest-green text-xs">UI/UX Designer & Art Director</span>
			</div>

    <div className="bottom">
				<div className="block">
					<span className="name">523</span>
					<span className="text-xs">Email</span>
				</div>
				<div className="line">
				</div>
				<div className="block">
					<span className="name">1387</span>
					<span className="text-xs">Resume</span>
				</div>
				<div className="line">
				</div>
				<div className="block">
					<span className="name">146</span>
					<span className="text-xs">Github</span>
				</div>
			</div>
                  </div>
      </div>
    </section>
  );
}
