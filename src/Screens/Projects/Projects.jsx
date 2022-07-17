import React from "react";
import BigProjects from "../../Components/Body/ProjectBody/BigProjects";
import Miniprojects from "../../Components/Body/ProjectBody/Miniprojects";

const Projects = () => {
    return(
      <div className="grid grid-cols-20 grid-rows-20 ">
   
      <section className=" col-start-2 col-end-13 row-start-2 row-end-4  ">
        <BigProjects />

      </section>
      <section className="col-start-2 col-end-13 row-start-6  ">
        <Miniprojects/>
      </section>
      
     

      
    </div>
        
    );
  
  
};

export default Projects;
