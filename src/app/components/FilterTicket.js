"use client";

import React, { useState } from "react";
import RangeSlider from "./RangePrice";
import Image from "next/image";

const FilterTicket = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const { format } = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getMinPrice = (minValue) => {
    setMinPrice(minValue);
  };

  const getMaxPrice = (maxValue) => {
    setMaxPrice(maxValue);
  };
  return (
    <>
      <div className="wrapper w-[27%] relative mt-10 ">
        <div className="desc flex items-center justify-between mb-3">
          <h1 className="text-[24px] font-[600]">Filter</h1>
          <p className="text-[16px] font-[600] text-[#2395FF]">Reset</p>
        </div>
        <div className="absolute inline-block  w-full   pb-20">
          {dropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-md rounded-lg px-7 py-6 w-full">
              <div className="transit">
                <div className="logo flex items-center justify-between pr-1">
                  <h1 className="text-[16px] font-[600] pb-2">Transit</h1>
                  {dropdownOpen ? <Image src="/ar-up.svg" alt="arrow" width={20} height={20} /> : <Image src="/btnback.svg" alt="arrow" width={20} height={20} />}
                </div>
                <div className="flex items-center justify-between pt-3">
                  <label className=" text-[14px] block mb-2" id="direct">
                    Direct
                  </label>
                  <input type="checkbox" className="mr-2 " name="direct" />
                </div>
                <div className="flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    Transit
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    Transit 2+
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
              </div>
              <div className="border-b-[0.2px] border-[#E5E5E5] py-3"></div>
              <div className="facilities pt-3">
                <div className="logo flex items-center justify-between pr-1">
                  <h1 className="text-[16px] font-[600] pb-2">Facilities</h1>
                  {handleToggleDropdown ? <Image src="/ar-up.svg" alt="arrow" width={20} height={20} /> : <Image src="/btnback.svg" alt="arrow" width={20} height={20} />}
                </div>
                <div className=" flex items-center justify-between pt-2">
                  <label className=" text-[14px] block mb-2" id="direct">
                    Luggage
                  </label>
                  <input type="checkbox" className="mr-2 " name="direct" />
                </div>
                <div className="flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    In-Flight Meal
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    Wi-fi
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
              </div>
              <div className="border-b-[0.2px] border-[#E5E5E5] py-3"></div>
              <div className="facilities pt-3">
                <div className="logo flex items-center justify-between pr-1">
                  <h1 className="text-[16px] font-[600] pb-2">Departure Time</h1>
                  {handleToggleDropdown ? <Image src="/ar-up.svg" alt="arrow" width={20} height={20} /> : <Image src="/btnback.svg" alt="arrow" width={20} height={20} />}
                </div>
                <div className=" flex items-center justify-between pt-3">
                  <label className=" text-[14px] block mb-2" id="direct">
                    00:00 - 06:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="direct" />
                </div>
                <div className="flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    06:00 - 12:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    12:00 - 18:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    18:00 - 24:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
              </div>
              <div className="border-b-[0.2px] border-[#E5E5E5] py-3"></div>
              <div className="facilities pt-3">
                <div className="logo flex items-center justify-between pr-1">
                  <h1 className="text-[16px] font-[600] pb-2">Time Arrived</h1>
                  {handleToggleDropdown ? <Image src="/ar-up.svg" alt="arrow" width={20} height={20} /> : <Image src="/btnback.svg" alt="arrow" width={20} height={20} />}
                </div>
                <div className=" flex items-center justify-between pt-3">
                  <label className=" text-[14px] block mb-2" id="direct">
                    00:00 - 06:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="direct" />
                </div>
                <div className="flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    06:00 - 12:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    12:00 - 18:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    18:00 - 24:00
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
              </div>
              <div className="border-b-[0.2px] border-[#E5E5E5] py-3"></div>
              <div className="facilities pt-3">
                <div className="logo flex items-center justify-between pr-1">
                  <h1 className="text-[16px] font-[600] pb-2">Airlines</h1>
                  {handleToggleDropdown ? <Image src="/ar-up.svg" alt="arrow" width={20} height={20} /> : <Image src="/btnback.svg" alt="arrow" width={20} height={20} />}
                </div>
                <div className=" flex items-center justify-between pt-3">
                  <label className=" text-[14px] block mb-2" id="direct">
                    Garuda Indonesia
                  </label>
                  <input type="checkbox" className="mr-2 " name="direct" />
                </div>
                <div className="flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    Air Asia
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
                <div className=" flex items-center justify-between">
                  <label className=" text-[14px] block mb-2" id="transit">
                    Lion Air
                  </label>
                  <input type="checkbox" className="mr-2 " name="transit" />
                </div>
              </div>
              <div className="border-b-[0.2px] border-[#E5E5E5] py-3"></div>
              <div className="pt-3">
                <div className="logo flex items-center justify-between pr-1">
                  <h1 className="text-[16px] font-[600] pb-2">Ticket Price</h1>
                  {handleToggleDropdown ? <Image src="/ar-up.svg" alt="arrow" width={20} height={20} /> : <Image src="/btnback.svg" alt="arrow" width={20} height={20} />}
                </div>
                <div className={`justify-between items-center mb-7 flex pt-3`}>
                  <h1 className="text-[#000] text-[14px] font-normal leading-5">Lowest</h1>
                  <h1 className="text-[#000] text-[14px] font-normal leading-5">Higest</h1>
                </div>
                <div className={`justify-between items-center mb-3`}>
                  <RangeSlider initialMin={0} initialMax={1000} min={0} max={1000} step={100} priceCap={100} getMinPrice={getMinPrice} getMaxPrice={getMaxPrice} />
                </div>
                <div className={` justify-between items-center mb-5 flex`}>
                  <h1 className="text-[16px] font-semibold text-[#2395FF]">{format(minPrice)}</h1>
                  <h1 className="text-[16px] font-semibold text-[#2395FF]">{format(maxPrice)}</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterTicket;
