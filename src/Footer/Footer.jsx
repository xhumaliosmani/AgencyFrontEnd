import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="sm:flex justify-between py-10 px-8 grid bg-[#5F6F94]">
        <div className="text-white ">
          <h1 className="w-full text-3xl font-bold cursor-pointer text-[#0c427b]">
            BloggApp WoW.
          </h1>
          <p className="py-4 ">
            {" "}
            Welcome to our data analytics company, where we transform raw
            information into actionable insights. With cutting-edge technology
            and a team of skilled analysts, we specialize in deciphering complex
            data sets to uncover valuable patterns and trends.
          </p>
          <div className="flex md:w-[75%] justify-between my-6">
            <FaFacebookSquare className="cursor-pointer  " size={30} />
            <FaInstagram className="cursor-pointer " size={30} />
            <FaTwitterSquare className="cursor-pointer " size={30} />
            <FaDribbbleSquare className="cursor-pointer " size={30} />
            <FaGithubSquare className="cursor-pointer " size={30} />
          </div>
        </div>
        <div className="text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] pt-10 sm:pt-0">
          <div className="">
            <h1 className="sm:w-[30rem] md:text4xl sm:text-3xl text-center text-2xl font-bold py-2">
              Want tips & Tricks to optimize your flow?
            </h1>
            <p className=" sm:pl-16 text-center sm:ml-[-9%] pb-4">
              Sign up to our newsletter and stay up to date.
            </p>
          </div>
          <div className="my-4 ">
            <div className="justify-center flex ">
              <input
                className="placeholder:pl-2 flex mr-[-50px] h-10  sm:w-[50%] sm:h-[35px] mx-auto rounded-md text-black "
                type="email"
                placeholder="Enter your E-Mail"
              />
              <button className="bg-[#0c427b] mx-auto w-28 hover:bg-[#0e4f94] rounded-md font-medium">
                Sign Up
              </button>
            </div>
            <p className="text-sm mx-10 flex-col text-center pt-4">
              Wee care about the protection of your data. Read our{" "}
              <span className="underline cursor-pointer text-[#0c427b]">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto py-16 px-24 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#5F6F90]">
        {/* <div>
          <div className="flex justify-between">
            <div>
              <h1 className="w-full text-3xl font-bold cursor-pointer text-[#00df9a]">
                REACT.
              </h1>
              <p className="py-4 ">
                {" "}
                Welcome to our data analytics company, where we transform raw
                information into actionable insights. With cutting-edge
                technology and a team of skilled analysts, we specialize in
                deciphering complex data sets to uncover valuable patterns and
                trends.
              </p>
              <div className="flex md:w-[75%] justify-between my-6">
                <FaFacebookSquare className="cursor-pointer  " size={30} />
                <FaInstagram className="cursor-pointer " size={30} />
                <FaTwitterSquare className="cursor-pointer " size={30} />
                <FaDribbbleSquare className="cursor-pointer " size={30} />
                <FaGithubSquare className="cursor-pointer " size={30} />
              </div>
            </div>
          </div>
        </div> */}
        <div className="lg:col-span-3 flex justify-between ">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Analytics
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Marketing
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Commerce
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Insights
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Pricing
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Documentation
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Guides
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">API</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                About
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Blog
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Jobs
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Careers
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Press
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Claim
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Policy
              </li>
              <li className="py-2 text-sm cursor-pointer font-semibold">
                Terms
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
