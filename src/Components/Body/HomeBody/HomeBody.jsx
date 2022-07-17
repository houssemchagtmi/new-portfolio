import React from "react";
import "./HomeBody.css";
import ImageHome from "./ImageHome";
const HomeBody = () => {
  return (
    <div className="   md:w-mdw xl:w-full  h-full grid grid-cols-20 grid-rows-6 xs:w-80 ">
      <div className="container col-start-1 col-end-8  row-start-2 row-end-6 grid grid-cols-12 grid-rows-12 xs:w-80 md:mt-14 xl:col-start-2">
        <h1 className="  text-indigo-900 xl:text-2xl font-extrabold  whitespace-nowrap overflow-hidden w-60 h-10 col-start-4 row-start-2  xs:col-start-2 xs:row-start-3 xs:text-sm xs:h-7 xs:w-40  md:text-xl md:w-48 xl:w-64">
          Hello, my name is
        </h1>

        <div className="  xs:row-start-4 xs:col-start-2 xs:col-end-4 xs:w-64 xs:h-24 md:w-80 md:row-start-4 xl:col-start-5 xl:row-start-5">
          <h2 className=" opacity-0 font-extrabold md:text-6xl xs:text-3xl xl:text-7xl xl:w-96 ">
            {" "} 
            Houssem Eddin Chagtmi
          </h2>
        </div>

        <div className=" col-start-2 row-start-2  xs:row-start-7  xs:w-64 md:row-start-12 md:w-80  xl:col-start-8 xl:mt-28 ">
          <p className="  opacity-0 bg-indigo-900 text-white font-extrabold md:text-xl overflow-hidden xs:text-sm xl:text-2xl    ">
            This is my Portfolio, I put everything I know here, I hope you like
            it. Have a nice visit.
          </p>
        </div>
      </div>
      <div className="opacity-95 xs:row-start-5 xs:col-start-3 md:col-start-12 md:row-start-5 xl:row-start-3 xl:mt-2  xl:ml-xlm lg:col-start-11 lg:row-start-4  ">
        <ImageHome />
      </div>
    </div>
  );
};

export default HomeBody;
