import React from "react";
import AboutMe from "../../Components/Body/AboutBody/AboutMe";
import Technologie from "../../Components/Body/AboutBody/Technologie";
import HowMe from "../../Components/Body/AboutBody/HowMe";


const AboutPage = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-16 bg-red-200 md:w-full">
   
      <section className=" col-start-2 col-end-13 row-start-3 row-end-4 xs:row-start-2 ">
        
        <HowMe/>
      </section>
      <section className="xl:col-end-13 xl:row-start-6 xl:row-end-9 col-start-2 xs:row-start-4   ">
      <AboutMe />
        
      </section>

      <section className="xs:col-start-1 xs:col-end-13 xl:row-start-9 xs:row-start-9 ">
      <Technologie/>
      </section>

      
    </div>
  );
}; 

export default AboutPage;
