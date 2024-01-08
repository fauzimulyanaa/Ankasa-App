import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import CardProfile from "../components/CardProfile";
import Footer from "../components/Footer";
import DetailBooking from "../components/DetailBooking";

function page() {
  return (
    <>
      <div className="bg-[#F5F6FA] h-auto pb-32">
        <NavbarProfile />
        <main className="flex">
          <CardProfile />
          <DetailBooking />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default page;
