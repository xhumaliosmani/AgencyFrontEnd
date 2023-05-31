"use client";
import React, { useEffect, useRef } from "react";
import Growth from "../../public/images/Price/1.png";
import Standard from "../../public/images/Price/2.png";
import Enterprise from "../../public/images/Price/3.png";
import CardComponent from "../Cards/CardComponent";

import { motion, useInView, useAnimation } from "framer-motion";

const Cards = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    useEffect(() => {
      if (isInView) {
        //fire animation
        mainControls.start("visible");
      }
    }, [isInView]);
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white ">
        <div className="flex justify-center ">
          <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl mt-[-6%] text-black">
            Some of our Packages
          </h2>
        </div>
        <p class=" text-xl  justify-center flex text-black  pb-24">
          Find your Package that fits your needs, weather your a new company or
          a Enterprise wee got you covered!
        </p>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <CardComponent
              buttonTextColor={"text-white"}
              image={Growth}
              buttonBG={"bg-[#4D4D4D]"}
              userCount={"Growth Package"}
              Price={"$350"}
              GBStorage={"Advanced Algorithmic Solutions"}
              sendGB={"Innovative Technology Integration"}
              userGRanted={"Trained Personnel Support"}
              hoverBGButton={"hover:bg-[#454545]"}
              feature4={"Powerful Analytics Capabilities"}
              feature5={"Personalized Solutions"}
              feature6={"Continuous Innovation"}
              iconColor1={"text-green-500"}
              iconColor2={"text-green-500"}
              iconColor3={"text-green-200"}
              iconColor4={"text-green-200"}
              iconColor5={"text-green-200"}
              iconColor6={"text-green-200"}
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <CardComponent
              standOutBg={"bg-blue-100/20"}
              marginMiddle={"md:my-6"}
              buttonBG={"bg-blue-400"}
              image={Standard}
              userCount={"Standard Package"}
              Price={"$1200"}
              GBStorage={"Advanced Algorithmic Solutions"}
              sendGB={"Innovative Technology Integration"}
              userGRanted={"Trained Personnel Support"}
              hoverBGButton={"hover:bg-blue-500"}
              feature4={"Powerful Analytics Capabilities"}
              feature5={"Personalized Solutions"}
              feature6={"Continuous Innovation"}
              iconColor1={"text-green-500"}
              iconColor2={"text-green-500"}
              iconColor3={"text-green-500"}
              iconColor4={"text-green-500"}
              iconColor5={"text-green-200"}
              iconColor6={"text-green-200"}
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <CardComponent
              buttonTextColor={"text-white"}
              buttonBG={"bg-[#4D4D4D]"}
              image={Enterprise}
              userCount={"Enterprise Package"}
              Price={"$7500"}
              GBStorage={"Advanced Algorithmic Solutions"}
              sendGB={"Innovative Technology Integration"}
              userGRanted={"Trained Personnel Support"}
              hoverBGButton={"hover:bg-[#454545]"}
              feature4={"Powerful Analytics Capabilities"}
              feature5={"Personalized Solutions"}
              feature6={"Continuous Innovation"}
              iconColor1={"text-green-500"}
              iconColor2={"text-green-500"}
              iconColor3={"text-green-500"}
              iconColor4={"text-green-500"}
              iconColor5={"text-green-500"}
              iconColor6={"text-green-500"}
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-[2px] w-[70%]"></div>
    </>
  );
};

export default Cards;
