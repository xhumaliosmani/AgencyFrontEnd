import Footer from '@/src/Footer/Footer';
import Navbar from '@/src/Navbar/Navbar';
import React from 'react'
import TeamImage from '../../public/images/Team/team1.png'
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" h-[40rem] bg-gradient-to-r from-blue-100 to-blue-200 ">
        <div className="mt-20">
          <h1 className="flex justify-center mt-auto text-transparent font-extrabold bg-clip-text bg-gradient-to-r to-purple-900 from-blue-900 text-[3rem]">
            Who are wee and whay are wee so good ?
          </h1>
          <div>
            <div className="relative">
              <div className="absolute w-[60%] right-0 pt-10">
                <Image className="" src={TeamImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40rem]">
        <div>
          <p className="flex justify-center ">
            Well thats a good question, wee are a small company founded buy two
            friends that hat a lot of excperience with growing and consulting
            businesses{" "}
          </p>
        </div>
        <h1 className="flex justify-center">Where to Find us</h1>
      </div>
      <Footer />
    </>
  );
}

export default About;