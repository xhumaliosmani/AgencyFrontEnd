import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";


const CardComponent = ({
  image,
  userCount,
  standOutBg,
  Price,
  GBStorage,
  marginMiddle,
  userGRanted,
  sendGB,
  hoverBGButton,
  buttonBG,
  buttonTextColor,
  feature4,
  feature5,
  feature6,
  iconColor1,
  iconColor2,
  iconColor3,
  iconColor4,
  iconColor5,
  iconColor6,
}) => {


  return (
    <>

      <div
        className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
      >
        <Image
          src={image}
          alt="single"
          className="w-20 mx-auto mt-[-3rem] bg-white rounded-sm"
        />
        <h2 className="text-2xl font-bold text-center ">{userCount}</h2>
        <p className="text-center text-4xl font-bold">{Price}</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8 flex justify-between">
            {GBStorage}{" "}
            <BsFillCheckCircleFill
              size={20}
              className={`ml-2 my-auto ${iconColor1}`}
            />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {userGRanted}{" "}
            <BsFillCheckCircleFill
              size={20}
              className={`ml-2 my-auto ${iconColor2}`}
            />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {sendGB}{" "}
            <BsFillCheckCircleFill
              size={20}
              className={`ml-2 my-auto ${iconColor3}`}
            />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {feature4}{" "}
            <BsFillCheckCircleFill
              size={20}
              className={`ml-2 my-auto ${iconColor4}`}
            />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {feature5}{" "}
            <BsFillCheckCircleFill
              size={20}
              className={`ml-2 my-auto ${iconColor5}`}
            />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {feature6}{" "}
            <BsFillCheckCircleFill
              size={20}
              className={`ml-2 my-auto ${iconColor6}`}
            />
          </p>
        </div>
        <button
          className={`justify-center flex mx-auto w-[200px] ${buttonBG} ${hoverBGButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}
        >
          Contact Support
        </button>
      </div>
      
    </>
  );
};

export default CardComponent;
