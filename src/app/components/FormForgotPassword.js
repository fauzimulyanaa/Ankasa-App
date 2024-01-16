"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const base_url = process.env.NEXT_PUBLIC_API_LINK;

function FormForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return Swal.fire({
        title: "Failed!",
        text: "Email is required",
        icon: "error",
      });
    }
    Swal.fire({
      title: "Sending request...",
      html: "Please wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    let formInput = {
      email,
      fe_url: "http://localhost:3000/auth/forgot-password",
    };
    try {
      const res = await axios.post(base_url + "/auth/forgot_password", formInput, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log(res.data.data);
      Swal.fire({
        title: "Success!",
        text: `${res.data.message}, please check your email.`,
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Failed!",
        text: error.response.data.message,
        icon: "error",
      });
    }
  };

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="email pb-9">
              <input type="email" name="" id="" className="outline-none w-[320px] border-b-2 pb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="btn-signup">
              <button type="submit" className="bg-[#2395FF] w-[320px] py-2 rounded-lg text-white transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
                Send
              </button>
              <p className="text-[16px] text-[#595959] text-center mt-4">You’ll get message soon on your email</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormForgotPassword;
