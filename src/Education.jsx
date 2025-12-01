import React, { useState } from "react";
import pic1 from "./assets/gojo.jpeg";
import { NavLink } from "react-router-dom";

const Project = () => {
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
{data &&    <div
        className="h-230 w-full bg-black sm:h-230 sm:bg-black md:bg-black lg:bg-black md:h-220  lg:h-149  bluecolor flex flex-col
                 sm:flex-col  md:flex-row lg:flex-row"
      >
        <div className="h-111 w-full   ">
          <img
            src={pic1}
            alt=""
            className="radi lg:ml-24 md:ml-18 mt-2 object-cover"
          />
        </div>

        <h1
          className="h-114 w-full ml-1.5   text-amber-50 flex flex-col 
                          pt-10 lg:mr-16 md:mr-6
                         sm:w-full sm:pl-4 sm:pt-6 lg:w-full md:w-full md:pl-10 md:pt-8"
        >
          <h2 className="techSkills mb-2.5">🎓 Education</h2>
          <div className="font-bold bluecolor mt-2.5">
            Bachelor of Computer Applications (BCA)
          </div>
          <div className="colorchange">
            Hemvati Nandan Bahuguna Garhwal University,Srinagar,Pauri Garhwal{" "}
            <br />
            2022 – Present <br />
            Focused on fullstack web development, data structures, and software
            engineering. Built multiple real-world projects including a B2B
            Project Management System and CodersCoffee web app.
          </div>

          <div className="font-bold bluecolor mt-2.5">
            Intermediate (Class 12)
          </div>
          <div className="colorchange">
            A.V.N Public School, Kotdwara HaldhuKhata <br />
            Completed in 2020 <br />
            Studied PCM with Computer Science.
          </div>

          <div className="font-bold bluecolor mt-2.5">
            High School (Class 10)
          </div>
          <div className="colorchange">
            A.V.N Public School, Kotdwara HaldhuKhata <br />
            Completed in 2018
          </div>
        </h1>
      </div>}
   
    </div>
  );
};

export default Project;
