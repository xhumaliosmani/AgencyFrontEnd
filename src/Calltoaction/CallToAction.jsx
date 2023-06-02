"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {

    const { innerWidth: width, innerHeight: height } = window;
    const ref = useRef(null);

    const isInView = useInView(ref);

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        //fire animation
        mainControls.start("visible");
      }
    }, [isInView]);


  return (
    <>
      <section class="py-20 lg:py-[50px] bg-[#e9e9e9]">
        <div class="container mx-auto">
          <div class="bg-[#5F6F94] relative z-10 overflow-hidden rounded py-12 px-8 md:p-[70px]">
            <div class="-mx-4 flex flex-wrap items-center">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -85 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.25 }}
                class="w-full px-4 lg:w-1/2"
              >
                <span class="mb-2 text-base font-semibold text-white">
                  Find the perfect team to realise your business Gols!!
                </span>
                <h2 class="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                  Get started Today and let us <br class="xs:block hidden" />
                  Take Care of the{" "}
                  <span className="text-transparent bg-gradient-to-r to-indigo-700 from-indigo-900 bg-clip-text ">
                    Rest!
                  </span>
                </h2>
              </motion.div>
              <div class="w-full px-4 lg:w-1/2">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 85 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  class="flex flex-wrap lg:justify-end"
                >
                  <Link
                    href={`/`}
                    class="hover:text-primary my-1 mr-4 inline-block rounded bg-[#4977e1] bg-opacity-[45%] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
                  >
                    Talk to a Agent
                  </Link>
                  <Link
                    href={`/`}
                    class="my-1 inline-block rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
            <div>
              <span class="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span class="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-r flex justify-end ml-[30%] from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
    </>
  );
};

export default CallToAction;
