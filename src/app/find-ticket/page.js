import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import Rute from "../components/Rute";
import Footer from "../components/Footer";

function page() {
  return (
    <div className="h-auto  bg-[#F5F6FA]">
      <div className="relative">
        <NavbarProfile />
        <Rute />
      </div>
      <Footer />
    </div>
  );
}

export default page;
