import FormLogin from "@/app/components/FormLogin";

import LoginLeft from "@/app/components/LoginLeft";
import React from "react";

function page() {
  return (
    <div className="flex">
      <LoginLeft />
      <FormLogin />
    </div>
  );
}

export default page;
