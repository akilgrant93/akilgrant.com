import React, {useState} from "react";
import './contact.css'
import './button.css'
import { MailIcon, DocumentTextIcon } from "@heroicons/react/outline"
import Switch from "react-switch";

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto flex sm:flex-nowrap flex-wrap w-full">
        <div
          className="min-w-full md:w-1/2 flex flex-col md:ml-auto w-full">

      <div className="flex flex-col sm:flex-row justify-center mb-16 sm:mb-5 text-center sm:text-left">
			<div className="top">
				<div className="profile-pic">
				<div className="circle-1"></div>
				<div className="circle-2"></div>
					<img src="https://i.ibb.co/jhRfh0t/IMG-2301.png" alt="IMG-2301" border="0"/>
				</div>
				<span className="pb-1 color-forest-green text-xl font-black">Akil Grant</span>
				<span className="text-forest-green text-base font-semibold">UI/UX Designer & Art Director</span>
        <div className="flex justify-center ">
      <label>
      <span className="text-forest-green text-base font-bold">Short</span>
        <Switch
          onChange={handleChange}
          checked={checked}
          height={14}
          width={28}
          className="align-middle items-center mx-2"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <span className="text-forest-green text-base font-bold">Long</span>
      </label>
      </div>
			</div>
      <div className="w-10/12 mx-auto sm:mx-0 sm:w-1/3 px-5 sm:py-20 text-sm">
      {checked
      ? <p>
        I'm a UX Designer, and full stack developer with extensive experience in motion graphics and front end
development. My customer focused creativity aids in my efforts to make simple yet elegant problem solving designs
that delight users; and makes use of my wide ranging technical background in the visual arts to work in styles applicable to almost any project.
<br/>
<br/>
For a decade I’ve worked with a range of clients - from other artists and small firms to multinational corporations. Dozens of branded logos, printed material, web-pages, illustrations, videos and film are all within the realm of what I’ve been lucky enough to work on over the years.
<br/>
<br/>
That wide range of roles and products led me to have a mind for how the user interacts with them. This user centered framing in time proved truly useful in guiding the process of design itself. In time I developed a framework:
<br/><br/>
<b>Inquiry</b> about current state. <b>Development</b> of basic desired form and content. <b>Production</b>, evaluation, and tracking of metrics by which one can understand client or user satisfaction.
<br/><br/>
With this approach to the process, success tends to follow. If you think my work is cool feel free to <a href="mailto:akil.grant.93@gmail.com?subject=Hi%20Akil!" className="hover:text-laurel-green-200"target="_blank"rel="noopener noreferrer"><u>drop a line</u></a>. We'd work great together!
</p>
      : <p>
      I'm a UX Designer, and full stack developer with extensive experience in motion graphics and front end
development. My skill and experience help me strive in a range of creative environments. <br/><br/>
But I'm looking for a place to expand my knowledge and continue to grow as a developer. If you think my work is cool feel free to <a href="mailto:akil.grant.93@gmail.com?subject=Hi%20Akil!" className="hover:text-laurel-green-200"target="_blank"rel="noopener noreferrer"><u>drop a line</u></a>. We'd work great together!
</p>
      }
      </div>
      </div>

    <div className="bottom pt-16 pb-16 w-full">
      <div className="m-auto w-10/12 sm:w-1/2 flex rounded-md items-center justify-evenly">
    <a href="mailto:akil.grant.93@gmail.com?subject=Hi%20Akil!" target="_blank "className="py-2 pr-3 pl-2 flex text-center button-style2 w-full sm:w-1/2 mr-2"
    rel="noopener noreferrer" >Email
    <MailIcon className="w-4 h-4 sm:w-6 sm:h-6 ml-1 inline-block -mt-1" />
    </a>
    <a className="py-2 pr-3 pl-2 flex text-center button-style2 w-full sm:w-1/2 mr-2" href="https://akilgrant.com/s/akilgrantresume-ds2x.pdf" target="_blank"
    rel="noopener noreferrer">Resume
    <DocumentTextIcon className="w-4 h-4 sm:w-6 sm:h-6 ml-1 inline-block -mt-1" />
    </a>
    <a href="https://github.com/akilgrant93" className="py-2 pr-3 pl-2 flex text-center button-style2 w-full sm:w-1/2 mr-g" >Github
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 sm:w-6 sm:h-6 inline-block ml-1 -mt-1" id="Layer_1" data-name="Layer 1" viewBox="0 0 32.58 31.77"><defs></defs><title>GitHub-Mark</title><path fillRule="evenodd" d="M152.61,107.44a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.36,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.67-4.37,5.93,5.93,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67a5.9,5.9,0,0,1,.17,4.31,6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.79a16.3,16.3,0,0,0-5.16-31.75Z" transform="translate(-136.32 -107.44)"/></svg>
    </a>
    </div>
			</div>
                  </div>
      </div>
    </section>
  );
}
