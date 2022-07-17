import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FileUpload = () => {
  return (
    <>
      <div className=" p-4 flex flex-col justify-center items-center border-dashed border-4 border-slate-300 bg-slate-100 w-96 h-60">
        <div className="relative mb-6 ">
            <input type="file"  className="relative text-right opacity-0 z-20 cursor-pointer h-12 w-52"/>
          <button className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center text-white bg-teal-500 text-lg cursor-pointer rounded border-none outline-none  transition-colors shadow-lg ">
            <i className=" w-6 h-6 p-2 bg-white text-teal-500 rounded-full flex justify-center items-center mr-3 text-xs">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            <p> Upload </p>
          </button>
        </div>

        <p className=" font-bold mb-2">Supported files</p>
        <p className="text-sm">JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
