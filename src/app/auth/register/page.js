import FormRegister from "@/app/components/FormRegister";
import LoginLeft from "@/app/components/LoginLeft";
import React from "react";

function page() {
  return (
    <div className="flex">
      <LoginLeft />
      <FormRegister />
    </div>
  );
}

export default page;
