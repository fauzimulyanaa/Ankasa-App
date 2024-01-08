import Image from "next/image";
import React from "react";

function BookingPass() {
  return (
    <div className="bg-[#2395FF] w-full h-[650px] flex items-center justify-center">
      <div className="">
        <div className="wrappper bg-white w-[800px] h-[550px] px-20 gap-6 flex justify-center items-center flex-col">
          <div className="flex items-center justify-between w-full">
            <h1>Booking Pass</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="23" viewBox="0 0 5 23" fill="none">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#2395FF" />
              <circle cx="2.5" cy="11.5" r="2.5" fill="#2395FF" />
              <circle cx="2.5" cy="20.5" r="2.5" fill="#2395FF" />
            </svg>
          </div>
          <div className="detail w-[650px] h-[350px] border-[1px] border-[#E5E5E5] rounded-lg  relative flex justify-between">
            <div className="wrapper border-r-2 border-dashed border-[#D7D7D7] w-[70%] relative">
              <div className="logo flex items-center gap-9 p-12">
                <Image src="/garuda.png" width={100} height={57}></Image>
                <div className="tujuan flex items-center gap-7 ">
                  <h1 className="text-[26px] font-[600]">IDN</h1>
                  <Image src="/to.svg" alt="icon plane" width={19.032} height={18}></Image>
                  <h1 className="text-[26px] font-[600]">JPN</h1>
                </div>
              </div>
              <div className="code flex w-[200px] items-center justify-between mx-12">
                <div className="">
                  <p className="text-[12px] text-[#A5A5A5]">code</p>
                  <p className="text-[14px] text-[#595959] font-[500]">AB-221</p>
                </div>
                <div className="">
                  <p className="text-[12px] text-[#A5A5A5]">Class</p>
                  <p className="text-[14px] text-[#595959] font-[500]">Economy</p>
                </div>
              </div>
              <div className="mt-7 flex w-[200px] items-center justify-between mx-12">
                <div className="">
                  <p className="text-[12px] text-[#A5A5A5]">Terminal</p>
                  <p className="text-[14px] text-[#595959] font-[500]">A</p>
                </div>
                <div className="">
                  <p className="text-[12px] text-[#A5A5A5] mr-8">Gate</p>
                  <p className="text-[14px] text-[#595959] font-[500]">221</p>
                </div>
              </div>
              <div className="departure px-10 py-4">
                <p className="text-[12px] text-[#A5A5A5] mr-8">Departure</p>
                <p className="text-[14px] text-[#595959] font-[500]">Monday, 20 July ‘20 - 12:33</p>
              </div>
              <div className="barcode"></div>
            </div>
            <div className="absolute right-[183px] top-[-1px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                <circle cx="12.5" cy="-0.5" r="12" fill="white" stroke="#D7D7D7" />
              </svg>
            </div>
            <div className="absolute right-[183px] bottom-[-1px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#D7D7D7" />
              </svg>
            </div>
            <div className="barcode flex justify-center items-center flex-col">
              <Image src="/Bitmap.png" alt="barcode" width={85} height={85}></Image>
              <Image src="/Bitmap.png" alt="barcode" width={85} height={85}></Image>
              <Image src="/Bitmap.png" alt="barcode" width={85} height={85}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPass;
