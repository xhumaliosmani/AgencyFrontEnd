import Link from "next/link";
import React from "react";
import heroImage from "../../public/images/heroImage.jpg";
import stars from "../../public/images/stars.png";
import Image from "next/image";



const HeroSection = () => {
  return (
    <>
      <section className="">
        <div class="relative px-6  sm:px-14 bg-[#e0e0e0] pt-[120px] pb-[110px] lg:pt-[150px]">
          <div class="container mx-auto">
            <div class="-mr-4  flex flex-wrap">
              <div class="w-full px-4 lg:w-5/12">
                <div class="">
                  <h1 class="text-transparent font-extrabold bg-clip-text bg-gradient-to-r to-emerald-600 from-blue-400 text-[3rem]">
                    Here you can <br />{" "}
                    <span className="text-8xl">Level Up Your Business</span>
                  </h1>

                  <p class="text-body-color mb-8 max-w-[480px] text-base pt-8">
                    Welcome and thank you for taking your time to take a look at
                    our solutions, wee can ensure you that wee will take your
                    Business to the next level, so hang in tight and lets Level
                    UP!
                  </p>
                  <ul class="flex flex-wrap items-center">
                    <li>
                      <Link
                        href={`/posts`}
                        className="bg-blue-500  inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Take a Look
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/posts`}
                        className="bg-blue-100 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base  text-black hover:bg-blue-300 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Take a Look
                      </Link>
                    </li>
                  </ul>
                  <div class="clients pt-16">
                    <h6 class="text-body-color mb-2 flex items-center text-xs font-normal">
                      Some Of Our Clients
                      <span class="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                    </h6>
                    <div class="flex items-center">
                      <div class="mr-4 w-full py-3">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                          alt="ayroui"
                        />
                      </div>
                      <div class="mr-4 w-full py-3">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                          alt="graygrids"
                        />
                      </div>
                      <div class="mr-4 w-full py-3">
                        <img
                          src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                          alt="uideck"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden px-4 lg:block lg:w-1/12"></div>
              <div class="w-full px-4 lg:w-6/12">
                <div class="lg:ml-auto lg:text-right">
                  <div class="relative z-10 inline-block pt-11 lg:pt-0">
                    <Image
                      src={heroImage}
                      alt="hero"
                      class="mt-10 max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[5%]"
                    />
                    <Image
                      src={stars}
                      alt="hero"
                      class="absolute w-28 opacity-70 hover:opacity-100 mt-[-105%] right-[-8%]"
                    />
                    <span class="absolute -left-8 -bottom-8 z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
