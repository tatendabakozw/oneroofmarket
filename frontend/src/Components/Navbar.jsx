import React, { useState } from "react";
import logo from '../Images/logo.png'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav
        className={(props.transparent ? "top-0 absolute z-50 w-full" : "relative bg-white shadow") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to='/'
              className={
                (props.transparent ? "text-white" : "text-gray-800") + " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"}>
              {/* <img src={logo} alt="logo" className="w-16" /> */}
              logo
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span
                className={(props.transparent ? "text-white" : "text-gray-800")}>
                <MenuRoundedIcon />
              </span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link to='/'
                  className={( props.transparent ? "lg:text-white lg:hover:text-gray-200 text-white hover:text-gray-200" : "lg:text-blue-main lg:hover:text-blue-light text-blue-main hover:text-blue-light") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase transition duration-100 transform hover:scale-125 font-semibold"}
                  >
                  home
                </Link>
              </li>
              <li className="flex items-center">
                <Link to='/about'
                  className={( props.transparent ? "lg:text-white lg:hover:text-gray-200 text-white hover:text-gray-200" : "lg:text-blue-main lg:hover:text-blue-light text-blue-main hover:text-blue-light") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase transition duration-100 transform hover:scale-125 font-semibold"}
                  >
                  about
                </Link>
              </li>
              <li className="flex items-center">
                <Link to='/contact'
                  className={( props.transparent ? "lg:text-white lg:hover:text-gray-200 text-white hover:text-gray-200" : "lg:text-blue-main lg:hover:text-blue-light text-blue-main hover:text-blue-light") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase transition duration-100 transform hover:scale-125 font-semibold"}
                  >
                  Contact
                </Link>
              </li>
              <li className="flex items-center">
                <Link to='/login'
                  className={
                    (props.transparent
                      ? "bg-blue-dark text-white active:bg-gray-100"
                      : "bg-white border-blue-light border-2 text-blue-light active:bg-blue-main") + " text-xs font-bold uppercase px-4 py-2 rounded hover:bg-blue-main hover:text-white outline-none hover:border-blue-dark focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
