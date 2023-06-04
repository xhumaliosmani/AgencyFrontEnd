"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "@/src/Footer/Footer";
import Navbar from "@/src/Navbar/Navbar";
import TeamImage from "../../public/images/Team/team1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = ({props}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    useEffect(() => {
      if (isInView) {
        //fire animation
        mainControls.start("visible");
      }
    }, [isInView]);

      const router = useRouter();

      if (router.isFallback) {
        <h1>Data is loading</h1>;
      }

  return (
    <>
      <Navbar />

      <>
        {" "}
        <div className=" h-screen bg-gradient-to-b from-gray-100/10 to-gray-200/50 pt-20">
          <div className="mt-20">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex  justify-center  text-transparent font-extrabold bg-clip-text bg-gradient-to-r to-emerald-500 from-blue-500 text-[3rem]">
                Who are wee and whay are wee so good ?
              </h1>
            </motion.div>

            <div className="sm:flex sm:justify-between sm:mr-[10%] sm:ml-[10%] sm:mt-20 mt-10 ml-10 ">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-[50%] w-[90%] mb-10 sm:mb-0"
              >
                <Image
                  className="rounded-2xl sm:taos:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 hover:drop-shadow-xl sm:mx-auto z-20  shadow-lg dark:dark:bg-gray-500"
                  src={TeamImage}
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                <h1 className="text-xl sm:text-4xl sm:font-extrabold font-bold text-blue-500 ml-[-10%] sm:ml-0 mb-10 sm:mb-0">
                  "Wee are Inspired by Results and driven by Data"
                </h1>
              </motion.div>
            </div>

            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="block h-screen  sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
              <p className="sm:flex justify-center text-3xl hidden ml-[-80%] mb-[-10%]  sm:mt-24">
                About us:
              </p>
              <p className="hidden sm:flex  border-y-2 py-4  border-y-indigo-900/30 font-semibold sm:ml-[7%] w-[70%]  sm:mt-36">
                Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges.
                <br /> <br /> By leveraging the latest advancements and
                continuous innovation, we pave the way for businesses to thrive
                in today's ever-evolving landscape. At our site, we believe that
                success lies in harnessing the power of technology and data to
                drive meaningful outcomes. Whether you're a small startup or a
                large enterprise, our comprehensive range of services and
                solutions is designed to meet your unique needs. <br /> <br />
                From advanced algorithms and powerful analytics capabilities to
                seamless technology integration and ongoing support from our
                trained personnel, we are dedicated to helping businesses grow
                and succeed. Join us on this transformative journey, and
                together, we will propel your business to new heights of
                success.{" "}
              </p>
              <p className="mt-32 text-lg font-semibold sm:hidden">About us:</p>
              <p className="flex sm:hidden mt-4 mx-6 ">
                Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges.
              </p>
              <div className="sm:hidden  bg-gradient-to-r flex justify-end mt-10 from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
            </motion.div>
          </div>
        </div>
        <div className="bg-gradient-to-r flex justify-end ml-[30%] from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
        <div className="h-[40rem] sm:mt-20 mt-[120%] mb-20">
          <h1 className="flex justify-center font-extrabold text-4xl mt-10">
            Where to Find us
          </h1>
          <div className="flex justify-center mt-20" id="ieatmaps">
            <iframe
              className="w-[80%] h-[32rem]"
              src="https://maps.google.com/maps?q=Miami&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
};

// google api key : AIzaSyA5Ud0hQ6-yUdj0rde91fW5iRRL8vsszY4

export default page;
