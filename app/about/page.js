import Footer from '@/src/Footer/Footer';
import Navbar from '@/src/Navbar/Navbar';
import React from 'react'
import TeamImage from '../../public/images/Team/team1.png'
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" h-[40rem] bg-gradient-to-r from-blue-300 to-blue-700 ">
        <div className="mt-20">
          <h1 className="flex justify-center mt-auto">
            Who are wee and whay are wee so good ?
          </h1>
          <div>
            <p className="flex justify-center">
              Well thats a good question, wee are a small company founded buy
              two friends that hat a lot of excperience with growing and
              consulting businesses{" "}
            </p>
            <Image src={TeamImage}/>
          </div>
        </div>
      </div>
      <div className='h-[40rem]'>
        <h1 className='flex justify-center'>Where to Find us</h1>
      </div>
      <Footer/>
    </>
  );
}

export default About;