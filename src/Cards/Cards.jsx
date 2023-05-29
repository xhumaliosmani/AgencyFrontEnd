import React from "react";
import Single from "../../public/images/single.png";
import Double from "../../public/images/double.png";
import Tripple from "../../public/images/triple.png";
import CardComponent from "../Cards/CardComponent";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <CardComponent
          buttonTextColor={"text-white"}
          image={Single}
          buttonBG={"bg-[#4D4D4D]"}
          userCount={"Single User"}
          Price={"$30"}
          GBStorage={"500 GB Storage"}
          sendGB={"Send up to 2GB"}
          userGRanted={"1 User GRanted"}
          hoverBGButton={"hover:bg-[#454545]"}
        />
        <CardComponent
          standOutBg={"bg-[#FEFBF6]"}
          marginMiddle={"md:my-0"}
          buttonBG={"bg-[#00df9a]"}
          image={Single}
          userCount={"Single User"}
          Price={"$50"}
          GBStorage={"500 GB Storage"}
          sendGB={"Send up to 2GB"}
          userGRanted={"1 User GRanted"}
          hoverBGButton={"hover:bg-[#00f2a5]"}
        />
        <CardComponent
          buttonTextColor={"text-white"}
          buttonBG={"bg-[#4D4D4D]"}
          image={Single}
          userCount={"Single User"}
          Price={"$80"}
          GBStorage={"500 GB Storage"}
          sendGB={"Send up to 2GB"}
          userGRanted={"1 User GRanted"}
          hoverBGButton={"hover:bg-[#454545]"}
        />
      </div>
    </div>
  );
};

export default Cards;
