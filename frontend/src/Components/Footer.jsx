import React from "react";
import logo from '../Images/logo.png'
import facebook from '../Images/facebook.svg'
import instagram from '../Images/instagram.svg'
import twitter from '../Images/twitter.svg'
import linkedin from '../Images/linkedin.svg'
import { Link } from 'react-router-dom'
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-100 pt-8 border-t border-gray-300">
        {/* <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}
        <div className="container mx-auto">
          <div className="flex flex-wrap px-4">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                <img src={logo} alt="logo" className="w-36"/>
              </h4>
              <h5 className="text-sm mt-0 mb-2 text-blue-light">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <span className="flex"><img src={facebook} alt="facebook"/></span>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <span className="flex"><img src={instagram} alt="instagram"/></span>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <span className="flex"><img src={twitter} alt="twitter"/></span>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <span className="flex"><img src={linkedin} alt="linkedin"/></span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blue-main text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link to='/' className="text-blue-light hover:text-gray-900 font-semibold block pb-2 text-sm">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="text-blue-light hover:text-gray-900 font-semibold block pb-2 text-sm">
                        Locations
                      </Link>
                    </li>
                   <li>
                      <Link to='/' className="text-blue-light hover:text-gray-900 font-semibold block pb-2 text-sm">
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blue-main text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link to='/' className="text-blue-light hover:text-gray-900 font-semibold block pb-2 text-sm">
                           Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="text-blue-light hover:text-gray-900 font-semibold block pb-2 text-sm">
                           Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className="text-blue-light hover:text-gray-900 font-semibold block pb-2 text-sm">
                           Contact Us
                      </Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="mt-6 border-gray-200 " />
          <div className="flex flex-wrap items-center py-4 bg-blue-main md:justify-between justify-center">
            <div className="w-full mx-auto text-center">
              <Copyright/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
