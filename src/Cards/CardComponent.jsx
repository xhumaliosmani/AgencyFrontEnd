import React from "react";

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
}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
    >
      <img
        src={image}
        alt="single"
        className="w-20 mx-auto mt-[-3rem] bg-white rounded-sm"
      />
      <h2 className="text-2xl font-bold text-center ">{userCount}</h2>
      <p className="text-center text-4xl font-bold">{Price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{GBStorage}</p>
        <p className="py-2 border-b mx-8">{userGRanted}</p>
        <p className="py-2 border-b mx-8">{sendGB}</p>
      </div>
      <button
        className={`justify-center flex mx-auto w-[200px] ${buttonBG} ${hoverBGButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default CardComponent;
