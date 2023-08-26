import { ArrowRightIcon, HomeIcon, PencilIcon, DocumentTextIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Navbar(props) {
  console.log(useLocation())
  return (
    <header className="bg-forest-green fixed top-0 z-20 w-screen shadow-md h-24">
      <div className="mt-0 pt-3 flex md:p-7 flex-col md:flex-row justify-start items-center pb-3">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
        <Link to={`/`} className="ml-3 text-lg flex hidden sm:block flex-col">
          <HomeIcon className="w-4 h-4 ml-1 text-white hover:text-laurel-green-200" />
        </Link>
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-white text-sm md:text-base justify-center">

        {
        useLocation().pathname === '/'
        ? <Link smooth to={`/#projects`} className="mr-5 font-semibold hover:text-laurel-green-200">
            Work
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 -mt-1 inline-block">
            <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
            </svg>
        </Link>
        : null}

        {
        useLocation().pathname === '/'
        ? <Link smooth to={"/#skills"} className="mr-5 font-semibold hover:text-laurel-green-200">
            Skills
            <PencilIcon className="w-4 h-4 ml-1 inline-block -mt-1" />
        </Link>
        : null}

          <a href="https://akilgrant.com/s/akilgrantresume-ds2x.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 font-semibold hover:text-laurel-green-200">
            Resume
            <DocumentTextIcon className="w-4 h-4 ml-1 inline-block -mt-1" />
          </a>
          <button>
          <a href="https://github.com/akilgrant93" className="mr-5 font-semibold hover:text-laurel-green-200">
            Github
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 inline-block ml-1 -mt-1" id="Layer_1" data-name="Layer 1" viewBox="0 0 32.58 31.77"><defs></defs><title>GitHub-Mark</title><path fillRule="evenodd" d="M152.61,107.44a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.36,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.67-4.37,5.93,5.93,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67a5.9,5.9,0,0,1,.17,4.31,6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.79a16.3,16.3,0,0,0-5.16-31.75Z" transform="translate(-136.32 -107.44)"/></svg>
          </a>
          </button>
        </nav>
        { useLocation().pathname === '/'
        ? <Link smooth to="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 font-semibold rounded text-white mt-0 text-sm md:text-base hover:text-laurel-green-200">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
        : null }
      </div>
    </header>
  );
}
