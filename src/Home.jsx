import React, { useState } from "react";
import pic1 from "./assets/img.jpeg";
import pic2 from "./assets/facebook.png";
import pic3 from "./assets/instagram.png";
import pic4 from "./assets/linkedin.png";
import pic5 from "./assets/twitter.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(true);
  function handleClick() {
    setOpen(!open);
    setdata(!data);
  }
  return (
    <div className="h-full w-full  sm:h-190 sm:bg-black md:h-149.5  lg:h-149">
      {/* HEADER */}
      <header className="w-full h-14 addingweight flex justify-between items-center bg-black md:pl-20 lg:pl-20">
        {/* LEFT NAME */}
        <div className="h-14 w-50  bg-black flex  flex-row items-center text-amber-50 md:ml-2 lg:ml-30 sm:w-66 sm:items-center md:w-90 lg:w-60">
          <p className="namestyle text-2xl flex flex-row ml-8 mt-3 md:text-3xl ">
            Aman Rawat
          </p>
        </div>

        {/* DESKTOP NAVBAR */}
        <div
          className="h-14 text-amber-50 w-full bg-black hidden pl-14 flex-row justify-center gap-10
             md:flex "
        >
          <div className="mt-auto bluecolor underlineborder">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="mt-auto bluecolor underlineborder">
            <NavLink to="/Skills"> Skills</NavLink>
          </div>
          <div className="mt-auto bluecolor underlineborder">
            <NavLink to="/Projects"> Projects</NavLink>
          </div>
          <div className="mt-auto bluecolor underlineborder">
            <NavLink to="/Education"> Education</NavLink>
          </div>
          <div className="mt-auto bluecolor underlineborder">
            <NavLink to="/Contact">Contact</NavLink>
          </div>
        </div>

        {/* HAMBURGER ICON – SHOWS ON MOBILE */}
        <button
          className="text-amber-50 text-3xl mr-4 md:hidden"
          onClick={handleClick}
        >
          ☰
        </button>
      </header>

      {/* MOBILE DROPDOWN MENU */}
    {open && (
           <div className="w-full h-135.5 bg-black text-amber-50  flex flex-col gap-4 py-4 items-end md:hidden">
             <div className="h-14 w-full self-start">
               <img
                 src={pic1}
                 alt=""
                 className="radi  lg:ml-24 md:ml-18 mt-2 object-cover"
               />
             </div>
             <div className="bluecolor mr-4 underlineborder">
               <NavLink to="/">Home</NavLink>
             </div>
             <div className="bluecolor mr-4 underlineborder">
               <NavLink to="/Skills"> Skills</NavLink>
             </div>
             <div className="bluecolor mr-4 underlineborder">
                <NavLink to="/Projects"> Projects</NavLink>
             </div>
             <div className="bluecolor mr-4 underlineborder">
                 <NavLink to="/Education"> Education</NavLink>
             </div>
             <div className="bluecolor mr-4 underlineborder">
               <NavLink to="/Contact">Contact</NavLink>
             </div>
           </div>
         )}

      {/* MAIN SECTION */}
      {data && (
        <div
          className="h-200 w-full bg-black  bluecolor flex flex-col
           sm:flex-col sm:h-120 md:h-80 lg:h-70 md:flex-row lg:flex-row"
        >
          <div className="h-111 w-full   ">
            <img
              src={pic1}
              alt=""
              className="radi lg:ml-24 md:ml-18 mt-2 object-cover"
            />
          </div>

          <div
            className="h-114 w-full ml-1.5  text-amber-50 flex flex-col 
                       pt-10 lg:mr-16 md:mr-6
                      sm:w-full sm:pl-4 sm:pt-6 md:pl-10 md:pt-8"
          >
            <h1 className="flex flex-col gap-2">
              <p className="text-4xl font-bold flex sm:text-3xl">
                Hi, It's&nbsp;
                <p className="text-4xl font-bold bluecolor sm:text-3xl">
                  Aman Rawat
                </p>
              </p>

              <p className="text-2xl mt-3 font-bold flex sm:text-xl">
                I'm a&nbsp;
                <p className="text-2xl font-bold  bluecolor animation sm:text-xl"></p>
              </p>

              <p className="sm:text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                vel ipsam quidem nam porro molestias autem tempora explicabo
                culpa distinctio?
              </p>
            </h1>

            {/* SOCIAL ICONS */}
            <div
              className="h-12 w-52 flex flex-row gap-3.5 justify-center
                         items-center
                        sm:gap-2 sm:w-full sm:justify-start"
            >
              <a href="" className="iconsize">
                <img src={pic5} alt="" className="imgsize" />
              </a>

              <a
                href="https://www.linkedin.com/in/aman-rawat-414436377"
                target="blank"
                className="iconsize"
              >
                <img src={pic4} alt="" className="imgsize" />
              </a>

              <a
                href="https://www.instagram.com/amanrawat1159?igsh=MW1vMDg4eWhwbXV1ZQ=="
                target="blank"
                className="iconsize"
              >
                <img src={pic3} alt="" className="imgsize" />
              </a>

              <a
                href="https://www.facebook.com/aman.rawat.614693"
                target="blank"
                className="iconsize"
              >
                <img src={pic2} alt="" className="imgsize" />
              </a>
            </div>

            {/* HIRE BUTTON */}
            <div
              className="border-2 h-12 w-26 btnradi
                        sm:w-28 sm:h-10 sm:text-sm md:w-32 md:h-12 trans"
            >
              Hire me
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
