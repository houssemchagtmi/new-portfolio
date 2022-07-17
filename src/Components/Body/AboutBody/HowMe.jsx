import React from "react";
const Howme = () => {
  return (
    <div className="">
      <div className="  flex items-center justify-center    ">
        <div className="relative xl:w-44 xs:w-5   ">
          <div className="absolute -top-10 left-5 xl:w-96 xl:h-96 bg-purple-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000  xs:w-32 xs:h-32  xs:-top-5 xs:-left-5  "></div>
          <div className="absolute top-3 -right-12 xl:w-96 xl:h-96 bg-pink-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 xs:w-32 xs:h-32 xs:top-3 xs:right-2"></div>
          <div className="absolute top-20 left-20 xl:w-96 xl:h-96 bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-70 animate-blob animation-delay-2000 xs:w-32 xs:h-32 xs:top-20 xs:-left-10 "></div>
          <div className="mt-64 relative space-y-10"></div>
        </div>
        <h4 className="absolute xl:mt-48 ml-32 text-xl text-slate-600 xs:text-sm xs:m-0 xl:text-2xl">
          <p>JavaScript Object Notation</p>
          <br />
          {"{"} <br />
          "fullname":"Houssem Eddin Chagtmi",
          <br />
          "age":null,
          <br />
          "gender":"male",
          <br />
          "from":"Raoued,Ariana,Tunis"
          <br />
          {"}"}
        </h4>
      </div>
    </div>
  );
};

export default Howme;
