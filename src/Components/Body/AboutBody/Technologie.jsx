import React from "react";
import css from "../../../images/css.png";
import TS from "../../../images/ts";
import react from "../../../images/react.png";
import express from "../../../images/express.png";
import mongoDB from "../../../images/mongoDB.png";
import bootstrap from "../../../images/bootstrap.png";
import tailcss from "../../../images/tailcss.png";
import jQuery from "../../../images/jquery";
import Sass from "../../../images/sass.png";
import Less from "../../../images/less";
const Language = () => {
  return (
    <div className="w-full flex flex-col items-center h-screen     ">
      <div className="text-center relative text-7xl  text-slate-700 font-bold mb-20 xs:text-4xl ">
        Technical Competence :
      </div>
      <div className="flex justify-between content-between flex-wrap relative w-2xw  h-full xs:w-full ">
         {/* first class */}
        <div className="flex  justify-between items-center w-full  xs:items-start xs:justify-evenly xs:flex-wrap xs:h-52">
          <div className="HTML xl:w-60 xl:h-60 xs:w-32 xs:h-32">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_sexoc4iw.json"
              background="transparent"
              speed="1.5"
              loop
              autoplay
            ></lottie-player>
          </div>
          <img src={css} alt="CSS" className="  xl:w-40 xl:h-40  xs:w-20 xs:h-20  " />
          <img
            src={bootstrap}
            alt="Bootstrap"
            className=" xl:w-40 xl:h-40  xs:w-20 xs:h-20 animate-bounce "
          />
          <img
            src={tailcss}
            alt="tailwindcss"
            className=" xl:w-40 xl:h-40  xs:w-20 xs:h-20 animate-pulse"
          />
          <img src={jQuery} alt="jQuery" className=" xl:w-40 xl:h-40  xs:w-20 xs:h-20 " />
        </div>
        {/* second class */}
        <div className="flex  justify-between items-center w-full xs:items-start xs:justify-evenly xs:flex-wrap xs:h-52">
          <img src={Sass} alt="Sass" className=" xl:w-40 xl:h-40  xs:w-20 xs:h-20 " />
          <img src={Less} alt="Less" className=" xl:w-40 xl:h-40  xs:w-20 xs:h-20 " />
          <div className="JavaScript xl:w-40 xl:h-40 xs:w-20 xs:h-20 ">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_rgrylcip.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <img src={TS} alt="TypeScript" className="xl:w-40 xl:h-40 xs:w-20 xs:h-20 " />
          <img src={react} alt="React" className=" animate-spin xl:w-40 xl:h-40 xs:w-20 xs:h-20   " />
        </div>
        {/* third class */}
        <div className="flex  justify-between items-center w-full xs:items-start xs:justify-evenly xs:flex-wrap xs:h-52">
          <div className="NodeJS xl:w-40 xl:h-40 xs:w-20 xs:h-20  ">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_dmbcqvqn.json"
              background="transparent"
              speed="0.75"
              loop
              autoplay
            ></lottie-player>
          </div>
          <img src={express} alt="Express.js" className=" xl:w-40 xl:h-40 xs:w-20 xs:h-20    " />
          <img src={mongoDB} alt="MongoDB" className=" xl:w-40 xl:h-40 xs:w-20 xs:h-20   " />
          <div className="Firebase w-52 xs:w-24 ">
            <lottie-player
              src="https://assets7.lottiefiles.com/private_files/lf30_52jsgl4a.json"
              background="transparent"
              speed="2"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="SocketIO w-52  xs:w-24">
            <lottie-player
              src="https://assets2.lottiefiles.com/private_files/lf30_zdr6ab0o.json"
              background="transparent"
              speed="2"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        {/* fourth class */}
        <div className="flex justify-between items-center xs:items-start xs:justify-evenly xs:flex-wrap xs:w-full  ">
          <div className="Figma xl:w-40 xl:h-40  xs:w-20 xs:h-20 ">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_xx5oa49z.json"
              background="transparent"
              speed="2"
              loop
              autoplay
            ></lottie-player>
          </div>
          <video
            className=" AdobeXD xl:w-52 xl:h-52 -mt-6 xs:w-24 xs:h-24 border-black border-4 xs:mt-6"
            src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/adobe-xd-app-5261571-4420506.mp4"
            autoPlay="autoplay"
            loop="loop"
            playsInline
            type="video/mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Language;
