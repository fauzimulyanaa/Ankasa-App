import Image from "next/image";
import React from "react";

function DetailBooking() {
  return (
    <div>
      <div className="my-booking bg-white rounded-lg w-[806px] mt-10 h-[115px] p-5 shadow-lg">
        <h1 className="text-[14px] text-[#2395FF] font-[600] tracking-[4.2px]">MY BOOKING</h1>
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-[24px] font-[600]">My Booking</h1>
          <p className="text-[16px] text-[#2395FF] font-[600]">Order History</p>
        </div>
      </div>
      <div className="status bg-white rounded-lg w-[806px] mt-10 h-[223px]  py-6 shadow-lg">
        <div className="wrapper px-10">
          <p className="text-[14px]">Monday, 20 July ‘20 - 12:33</p>
          <div className="tujuan flex items-center gap-7 pt-5 mb-3">
            <h1 className="text-[18px] font-[500]">IDN</h1>
            <Image src="/to.svg" alt="icon plane" width={19.032} height={18}></Image>
            <h1 className="text-[18px] font-[500]">JPN</h1>
          </div>
          <p className="text-[14px] text-[#979797]">Garuda Indonesia, AB-221</p>
        </div>
        <div className="border-t-2 border-slate-300 mt-7"></div>
        <div className="status px-10 pt-4 flex items-center gap-12 pb-5">
          <p className="text-[14px] text-[#7A7A7A] font-[600] ">Status</p>
          <div className="">
            <p className="w-[184px] h-[36px] bg-[#FF7F23] rounded-md flex items-center justify-center text-white text-[14px] font-[600]">Waiting for payment</p>
          </div>
          <div className="view flex items-center gap-5 ml-[280px]">
            <p className="text-[16px] font-[600] text-[#2395FF]">View Detail</p>
            <Image src="/btnback.svg" alt="icon plane" width={19.032} height={18}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBooking;
