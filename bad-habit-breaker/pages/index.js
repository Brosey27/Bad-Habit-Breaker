import React, { useState } from "react";
import HabitGrid from "../components/HabitGrid";
import EarningsGraph from "../components/EarningsGraph";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import smoking from "../public/smokevape.svg";
import alcohol from "../public/alcohol2.png";
import screentime from "../public/screentime.png";
import fastfood from "../public/fastfood.svg";





const Home = () => {
  const [nav, setNav] = useState(true);
  const [earningsSmoking, setEarningsSmoking] = useState(0);
const [earningsDrinking, setEarningsDrinking] = useState(0);
const [completedCount, setCompletedCount] = useState(0); // Add this state

// Update the corresponding earnings state in the updateEarnings function
const updateEarnings = (totalEarnings, section) => {
  if (section === "Smoking") {
    setEarningsSmoking(totalEarnings);
  } else if (section === "Drinking") {
    setEarningsDrinking(totalEarnings);
  }
};


  const handleNav = () => {
    setNav(!nav);
    
  };
 
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
        <a href="#Smoking">
            <li className="p-4 border-b border-gray-600">Smoking/Vaping</li>
          </a>
          <a href="#Drinking">
            <li className="p-4 border-b border-gray-600">Binge Drinking</li>
          </a>
          
        </ul>
      </div>
    </div>
    {/* Hero */}
    <div className="text-white">
          <div className="maxw-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className='text-gra-300 md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>Break your <span className="text-red-500">Bad</span> Habits</h1>
        <p className='md:text-2xl sm:text-4xl text-xl font-bold py-4'>This interactive application will help you visualise your bad habit breaking journey.</p>
        <p>According to the internet it can take an average of 30 to 60 days to actually break a habit. Lets put this to the test shall we? For each section you will see 60 squares symbolising each day, everytime you abstain from the corresponding bad habit of each section click the square and do not break the pattern. Consistency is key, you got this!</p>
      </div>
      </div>
       {/* Smoking/Vaping */}
  <div id="Smoking" className="container mx-auto mt-8 mb-96">
    <h1 className="text-2xl font-semibold mb-4 text-center">Smoking/Vaping</h1>
    <Image alt="smoking" src={smoking} className='w-[200px] mx-auto my-10' />
    
    <HabitGrid section="Smoking" updateEarnings={(totalEarnings) => updateEarnings(totalEarnings, "Smoking")} />
     {/* Earnings Graph */}
     <EarningsGraph
        earningsSmoking={earningsSmoking}
        section="Smoking"
        completedCount={completedCount} // Pass completedCount
      />

  </div>
  
  
  {/* Alcohol */}
  <div id="Drinking" className="container mx-auto mb-96">
    <h1 className="text-2xl font-semibold mb-4 text-center">Binge Drinking</h1>
    <Image alt="smoking" src={alcohol} className='w-[200px] mx-auto my-10' />
    
    <HabitGrid section="Drinking" updateEarnings={(totalEarnings) => updateEarnings(totalEarnings, "Drinking")} />
      {/* Earnings Graph */}
      <EarningsGraph earningsDrinking={earningsDrinking} section="Drinking" />

  </div>

   {/* ScreenTime */}
   <div id="Drinking" className="container mx-auto mb-96">
    <h1 className="text-2xl font-semibold mb-4 text-center">Excessive Screen Time</h1>
    <Image alt="screentime" src={screentime} className='w-[200px] mx-auto my-10' />
    
    <HabitGrid section="Drinking" updateEarnings={(totalEarnings) => updateEarnings(totalEarnings, "Drinking")} />
      {/* Earnings Graph */}
      <EarningsGraph earningsDrinking={earningsDrinking} section="Drinking" />

  </div>

  {/* Fastfood */}
  <div id="Drinking" className="container mx-auto mb-96">
    <h1 className="text-2xl font-semibold mb-4 text-center">Fast Food</h1>
    <Image alt="fastfood" src={fastfood} className='w-[200px] mx-auto my-10' />
    
    <HabitGrid section="Drinking" updateEarnings={(totalEarnings) => updateEarnings(totalEarnings, "Drinking")} />
      {/* Earnings Graph */}
      <EarningsGraph earningsDrinking={earningsDrinking} section="Drinking" />

  </div>
  
 

    </main>
  );
};

export default Home;