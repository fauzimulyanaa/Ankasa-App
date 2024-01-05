import FormForgotPassword from "@/app/components/FormForgotPassword";
import LoginLeft from "@/app/components/LoginLeft";
import React from "react";

function page() {
  return (
    <div className="flex">
      <LoginLeft />
      <FormForgotPassword />
    </div>
  );
}

export default page;
