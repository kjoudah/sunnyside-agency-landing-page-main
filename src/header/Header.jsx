import logo from './../images/logo.svg';
import menuImage from './../images/icon-hamburger.svg';
import { useEffect, useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const MobileMenu = () => {
    return (
      <nav>
        {expanded && (
          <div
            onClick={() => setExpanded(false)}
            className="inset-0 absolute w-[100vw] h-[100vh] md:hidden"
          >
            {' '}
          </div>
        )}
        <ul
          aria-expanded={String(expanded)}
          data-expanded={String(expanded)}
          className="fixed flex flex-col text-lg gap-6 justify-center items-center data-[expanded=true]:bg-white data-[expanded=true]:h-[250px] data-[expanded=true]:w-[85%] data-[expanded=true]:left-1/2 data-[expanded=true]:-translate-x-1/2 data-[expanded=true]:top-20 text-blue-500 data-[expanded=true]:before:triangle md:hidden"
        >
          <li>
            <a
              className="py-2 px-6 hover:bg-yellow-200 hover:text-black md:hover:bg-slate-400 hover:rounded-full hover:uppercase hover:font-serif"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6  hover:bg-yellow-200 hover:text-black md:hover:bg-blue-500 hover:rounded-full hover:uppercase hover:font-serif"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6  hover:bg-yellow-200 hover:text-black md:hover:bg-blue-500 hover:rounded-full hover:uppercase hover:font-serif"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6  hover:bg-yellow-200 hover:text-black md:hover:bg-blue-500 hover:rounded-full hover:uppercase hover:font-serif"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header>
      <nav className="sticky top-0 left-0 w-full bg-cyan-100 flex flex-row justify-between items-center px-4">
        <div>
          <a href="#">
            <img className="m-6" src={logo} alt="logo"></img>
          </a>
        </div>
        <ul className="hidden text-white text-md flex-row md:flex ml-auto">
          <li>
            <a
              className="py-2 px-6 hover:bg-blue-100 hover:rounded-full"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6  hover:bg-blue-100 hover:rounded-full"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6 hover:bg-blue-100 hover:rounded-full"
              href="#"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="py-2 px-6 hover:bg-blue-100 hover:rounded-full"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="absolute right-5 top-5 w-8 h-8 inline-flex items-center justify-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            aria-hidden="true"
            width="24"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <MobileMenu />
      </nav>
    </header>
  );
}
