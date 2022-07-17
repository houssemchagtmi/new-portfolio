import React from "react";
import css from "../../../images/css.png";
import html from "../../../images/html.png";
import js from "../../../images/JS.png";
import react from "../../../images/react.png";
import node from "../../../images/node.png";
import mongoDB from "../../../images/mongoDB.png";

const AboutBody = () => {
  return (
    <main className="xl:w-full  overflow-hidden xs:flex-col  xs:overflow-visible ">
      {/* Left */}
      <section className="xl:w-1/2 xl:flex xl:justify-center xl:items-center xs:w-64 md:w-mdw  xs:justify-start  ">
        {/* Front */}
        <div className="relative z-10 bg-gray-800 rounded-lg xl:h-96 custom-shadow md:h-96 ">
          <div className="flex item-center">
            <div className="flex items-center space-x-2 p-3">
              <div className="bg-red-500 rounded-full w-3 h-3"></div>
              <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
              <h1 className="text-blue-500">About me</h1>
            </div>
          </div>
          <div className="text-white ">
            <h1 className="text-center xl:text-xl xs:text-xs xs:mx-0 md:font-extrabold md:text-lg">
              I'm a Tunisian Junior FullStack JavaScript web developer.
            </h1>
            <br />
            <p className="md:text-base ml-8 xs:-mt-5 md:font-medium xs:text-xs ">
              These days my time is spent researching, designing and coding. I
              also help developers get started with their careers.
            </p>
            <br />
            <p className="md:text-base ml-8 xs:-mt-1   md:font-medium xs:text-xs">
              I’ve always been someone who has both a creative and a logical
              side. When I discovered web development in a research for a good
              job for me , I realized it would be the perfect fit. I could use
              my creative side to design and my logical side to code. As a
              bonus, being both designer and developer allows me to make sure no
              detail is lost in translation.
            </p>
            <br />
            <p className="md:text-base ml-7 md:font-medium xs:text-xs">
              Out of the office you’ll find me dreaming of kickboxing, playing
              piano, and petting all the cats.
            </p>
          </div>
        </div>

        {/*Back*/}
        <div className="absolute z-0 bg-gray-800 rounded-lg xl:w-terminal xs:h-96 xl:h-96 transform xl:rotate-6 xl:translate-x-2 xl:-translate-y-2 opacity-75 xs:w-64 xs:-translate-y-96 xs:-mt-7 xs:rotate-0 md:w-mdw md:-translate-y-96 md:h-96">
          <div className="flex item-center">
            <div className="flex items-center space-x-2 p-3">
              <div className="bg-red-500 rounded-full w-3 h-3"></div>
              <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
          </div>
        </div>
      </section>
      {/* End Left*/}

      {/* -------------------------------------////////////////////////////////////////////////////////////////////////------------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------////////////////////////////////////////////////////////////////////////------------------------------------------------------------- */}

      {/*Right */}
      
      <section className="xl:w-1/2 xl:ml-96 xl:translate-x-96 xl:-mt-80 md:ml-52 flex justify-center items-center xs:w-64 xs:mt-16  ">
        <div className=" xs:w-40 xs:h-40 xl:w-80 xl:h-80  ">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_Yiahbq.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        {/*Inner */}
        <div className=" xl:hw-inner flex justify-between items-center absolute  xl:animate-spin-slow xl:anim-8s xs:animate-none border border-gray-800 rounded-full   xs:h-52 xs:w-52">
          <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10 transform -translate-x-5   ">
            <img
              className="h-9 w-9 object-center animate-rotate-img anim-8s"
              src={html}
              alt="html"
            />
          </div>
          <div className="bg-white overflow-hidden  rounded-full custom-shadow h-10 w-10 transform translate-x-5 ">
            <img
              className="h-9 w-9 object-center animate-rotate-img anim-8s"
              src={css}
              alt="css"
            />
          </div>
        </div>

        {/*Outer */}
        <div className=" xl:hw-outer flex justify-between items-center absolute  border border-gray-800 rounded-full xl:animate-spin-slow xs:h-72 xs:w-72 xs:animate-none ">
          <div className="flex justify-between items-center h-full w-full">
            <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10 transform xl:translate-x-20 xl:-translate-y-56 xs:translate-x-10 xs:-translate-y-28">
              <img
                className="h-9 w-9 object-center animate-rotate-img anim-8s"
                src={js}
                alt="js"
              />
            </div>
            <div className="bg-white overflow-hidden p-1 rounded-full custom-shadow h-10 w-10 transform xl:-translate-x-32 xl:translate-y-48 xs:-translate-x-10 xs:translate-y-28">
              <img
                className="h-9 w-9 object-center animate-rotate-img anim-8s"
                src={react}
                alt="react"
              />
            </div>
            <div className="absolute flex justify-between items-center w-full h-full "></div>
            <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10 transform  xl:translate-x-24 xl:-translate-y-56 xs:translate-x-10 xs:-translate-y-28">
              <img
                className="h-10 w-10 object-center animate-rotate-img anim-8s"
                src={node}
                alt="node"
              />
            </div>
            <div className="bg-white overflow-hidden p-1 rounded-full custom-shadow h-10 w-10 transform xl:-translate-x-20 xl:translate-y-56 xs:-translate-x-12 xs:translate-y-28">
              <img
                className="h-9 w-9 object-center animate-rotate-img anim-8s"
                src={mongoDB}
                alt="mongoDB"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutBody;
