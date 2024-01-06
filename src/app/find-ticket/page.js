import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import Rute from "../components/Rute";
import Ticket from "../components/Ticket";

function page() {
  return (
    <div className="bg-[#F5F6FA] h-auto pb-20">
      <NavbarProfile />
      <Rute />
      {/* <Ticket /> */}
    </div>
  );
}

export default page;
