import React from "react";
import Menu from "./Menu";
import MyLogo from "./MyLogo";
const NavBar = () => {
  return (
      
    <header className="fixed top-0 xs:w-full  h-16 bg-slate-800 flex justify-between bg-[rgba(31,41,55,0.8)] sm:w-full  ">
      
      <MyLogo />
      <Menu />

    </header>
  );
};

export default NavBar;
