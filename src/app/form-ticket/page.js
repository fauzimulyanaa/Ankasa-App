import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import FormTicket from "../components/FormTicket";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <div className="h-[1800px] pb-20 bg-[#F5F6FA]">
        <NavbarProfile />
        <FormTicket />
      </div>
      <Footer />
    </>
  );
}

export default page;
