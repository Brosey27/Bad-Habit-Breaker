import React, { useState } from "react";
import HabitGrid from "../components/HabitGrid";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import smoking from "../public/smokevape.svg";



const Home = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <main>
    {/* Nav */}
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      
     
      <div
      className={`fixed top-0 right-0 z-50 p-4 cursor-pointer ${
        !nav ? "bg-[#000300]" : "" 
      }`}
      onClick={handleNav}
    >
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-2xl font-bold text-purple-300 m-4">Breaking The Habits</h1>
        <ul className="uppercase p-4">
        <a href="#internet">
            <li className="p-4 border-b border-gray-600">Smoking</li>
          </a>
          
        </ul>
      </div>
    </div>
    {/* Hero */}
    <div className="text-white">
          <div className="maxw-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className='text-gra-300 md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>Break your <span className="text-red-500">Bad</span> Habits</h1>
        <p className='md:text-2xl sm:text-4xl text-xl font-bold py-4'>This interactive application will help you visualise your bad habit breaking journey.</p>
        
      </div>
      </div>
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">Smoking/Vaping</h1>
      <Image alt="smoking" src={smoking} className='w-[300px] mx-auto my-10' />
      <HabitGrid />
    </div>
    </main>
  );
};

export default Home;
