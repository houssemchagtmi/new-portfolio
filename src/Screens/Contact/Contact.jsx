import React from "react";
import ContactBody from "../../Components/Body/Contact/ContactBody";

const Contact = () => {
  return (
    <div className="grid xs:grid-cols-13 xs:grid-rows-12 bg-red-200  ">
      <section className=" col-start-1 col-end-13 xl:row-start-3  xs:row-start-1 ">
        <ContactBody />
      </section>
    </div>
  );
};

export default Contact;
