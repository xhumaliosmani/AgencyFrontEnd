"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Icon from '../../public/images/level.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav class="bg-white dark:bg-gray-900 fixed sm:w-full w-screen z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <a href="/" class="flex items-center">
            <Image
              sizes={2}
              src={Icon}
              class="sm:h-[35px] sm:w-[35px] sm:mr-2 w-10 mr-[-10px] h-10 ml-4 mt-auto hidden sm:block"
              alt="Flowbite Logo"
            />
            <span class="self-center ml-4 sm:ml-0 text-2xl font-semibold pt-4 sm:pt-0 whitespace-nowrap dark:text-white">
              LevelUP Solutions
            </span>
          </a>
          <div class="flex md:order-2 m-[3px]">
            <button
              type="button"
              class="text-white hidden sm:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              type="button"
              class="hidden sm:block text-white border font-medium rounded-lg ml-4 text-sm px-4 hover:bg-blue-300/10 text-center "
            >
              Login
            </button>
            <button
              onClick={() => setOpen(!open)}
              type="button"
              class="inline-flex mr-6   sm:mr-0 mt-[10px] sm:mt-0 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="features"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile drawer */}

        <div className={`${open ? null : "hidden"}  h-[21rem]`}>
          <ul>
            <li className="text-white hover:text-blue-500/60 font-semibold pl-8 cursor-pointer pb-4 pt-6">
              <a href="/">Home</a>
            </li>
            <li className="text-white hover:text-blue-500/60 font-semibold pl-8 cursor-pointer pb-4 ">
              <a href="/about">About</a>
            </li>
            <li className="text-white hover:text-blue-500/60 font-semibold pl-8 cursor-pointer pb-4">
              <a href="/services">Services</a>
            </li>
            <li className="text-white hover:text-blue-500/60 font-semibold pl-8 cursor-pointer pb-4">
              <a href="contact">Contact</a>
            </li>
            <li className="text-white hover:text-blue-500/60 font-semibold pl-8 cursor-pointer pb-4">
              <a href="features">Features</a>
            </li>
          </ul>
          <div className="bg-gray-200 h-[1px] w-[87%] ml-4 "></div>
          {/* profile */}
          <div className="">
            <div className=" flex cursor-pointer">
              <Image className="w-14 ml-8 mt-4 flex" src={profileImage} />

              <p className="my-auto ml-4 text-white font-semibold ">Sam</p>
              <p className="my-auto ml-2 text-white font-semibold ">Smith</p>
            </div>
            <p className="my-auto ml-[103px] mt-[-27px] text-xs font-light text-gray-200/60 ">
              Samsmith@email.com
            </p>
          </div>
          <div className="flex justify-end">
            <div className="mt-[-42px]">
              <button className="text-white font-semibold border rounded-xl py-2 px-4 mr-16 hover:bg-gray-100/10 hover:border-blue-300">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <p
            className={`${
              open ? null : "hidden"
            } text-xs font-light text-gray-200/40`}
          >
            All Rights Reserved - LevelUpSolutions 2023
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
