import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import Payment from "../components/Payment";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <div className="h-auto pb-20">
        <NavbarProfile />
        <Payment />
      </div>
      <Footer />
    </>
  );
}

export default page;
