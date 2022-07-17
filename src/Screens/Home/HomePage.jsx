import React from "react";
import HomeBody from "../../Components/Body/HomeBody/HomeBody";

const HomePage = () => {
  return (

    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 xs:w-full  xs:h-hpxs  grid grid-cols-5 grid-rows-6">
        
      <main className="xs:col-start-1 xs:col-end-2 row-start-1 row-end-5 xs:-mt-20 xl:col-start-2">
        <HomeBody />
      </main>
    
    </div>
  );
};

export default HomePage;
