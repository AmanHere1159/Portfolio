import React from "react";
import pic1 from "./assets/gojo.jpeg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-128 w-full ">
      <header className="w-full h-14 addingweight flex justify-between">
        <div className="h-14 w-130 bg-black flex flex-col items-center text-amber-50 ">
          <p className="mt-auto mr-34 namestyle">Aman Rawat</p>
        </div>
         <div className="h-14 text-amber-50 w-full bg-black flex pl-14 flex-row justify-center  gap-10 ">
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
      </header>
      <div className="h-114 w-full bluecolor bg-amber-300 flex flex-row">
        <div className="h-114 w-130 bg-black">
          <img src={pic1} alt="" className="radi" />
        </div>
        <div
          className="h-114 w-172 bg-black text-amber-50 flex flex-col 
            pl-20 pt-10"
        >
          <h1 className="flex flex-col  h-90 gap-2">
            <div className="techSkills"> Contact Me</div>
            <div className="font-bold bluecolor ">
              Let’s connect and build something amazing!
            </div>
            <div className="font16">
              If you’d like to collaborate, discuss a project, or just say hi —
              feel free to reach out.
            </div>

            <div>
              📧 Email:
              <a href="mailto:sakrwt4@gmail.com" target="blank"className="colorchange">
                {" "}
                amnrwt4@gmail.com
              </a>
            </div>
            <div>
              📞 Phone:{" "}
              <a href="" className="colorchange">
                {" "}
                +91 7247887624
              </a>
            </div>
            <div>
              🌐 Location:{" "}
              <a href="https://maps.app.goo.gl/AZw8iBfqpm2yaWDo7 "target="blank" className="colorchange">
                {" "}
                Kotwara,Pauri Garhwal,Uttarakhand, India
              </a>
            </div>
            <div>
              💼 LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/aman-rawat-414436377" target="blank" className="colorchange">
                {" "}
                https://www.linkedin.com/in/aman-rawat-414436377
              </a>
            </div>
            <div>
              💻 GitHub:{" "}
              <a href="https://github.com/AmanHere1159/CodersCoffee" target="blank" className="colorchange">
                {" "}
                https://github.com/AmanHere1159/CodersCoffee
              </a>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
