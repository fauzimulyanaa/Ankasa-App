import Image from "next/image";
import Link from "next/link";
import React from "react";

function FormForgotPassword() {
  return (
    <div className="sm:w-[50%] mx-auto overflow-hidden w-full">
      <div className="logo flex gap-6  items-center sm:px-44 pt-7  px-28 ">
        <Image src="/icon.png" alt="icon company" width={50} height={30}></Image>
        <h1 className="text-[#414141] font-[600] text-[24px]">Ankasa</h1>
      </div>
      <div className="wrapper-form flex flex-col  pt-32 h-full pb-8 sm:pb-0">
        <div className="from mx-auto">
          <div className="title items-start flex">
            <h1 className="text-[36px] font-[600] mb-8">Forgot Password</h1>
          </div>
          <div className="email pb-9">
            <input type="email" name="" id="" className="outline-none w-[320px] border-b-2 pb-3" placeholder="Email" />
          </div>

          <div className="btn-signup">
            <button className="bg-[#2395FF] w-[320px] py-2 rounded-lg text-white">Send</button>
            <p className="text-[16px] text-[#595959] text-center mt-4">You’ll get message soon on your email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormForgotPassword;
