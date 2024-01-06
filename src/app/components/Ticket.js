"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

function Ticket() {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get("https://easy-lime-seal-toga.cyclic.app/airlines/flight");
        const data = response.data.data;
        const filteredFlights = data.filter((flight) => flight.from.location === "Paris, France" && flight.to.location === "Bali, Indonesia");
        setFlights(filteredFlights);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getTickets();
  }, []);

  const getFormattedTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  };

  const handleDropdownClick = (flight) => {
    setSelectedFlight(selectedFlight === flight ? null : flight);
  };

  return (
    <div className="mt-20">
      {flights.map((flight) => (
        <div className="bg-white  w-[878px] h-auto relative mx-20 px-8 py-4 rounded-lg shadow-md" key={flight.code}>
          <div className="logo flex items-center gap-6">
            <img src={flight.photo} alt={flight.name} width={150} height={150} />
            <p className="text-[16px] font-[500] text-[#595959]">{flight.name}</p>
          </div>
          <div className="wrapper-detail flex items-center justify-between pt-4">
            <div className="flight flex items-center gap-6 ">
              <div className="from flex flex-col items-center">
                <h1 className="text-[24px] font-[500]">{flight.from.code}</h1>
                <p className="text-[12px]">{getFormattedTime(flight.takeoff)}</p>
              </div>
              <div className="logo mb-3">
                <Image src="/to.svg" alt="icon plane" width={19.032} height={18}></Image>
              </div>
              <div className="to flex flex-col items-center">
                <h1 className="text-[24px] font-[500]">{flight.to.code}</h1>
                <p className="text-[12px]">{getFormattedTime(flight.landing)}</p>
              </div>
            </div>
            <div className="hours">
              <p className="text-[16px] text-[#595959]">{flight.interval_time}</p>
              <p className="text-[12px] text-[#6B6B6B] text-center"> ({flight.transit === 0 ? "Direct" : `${flight.transit} Transit Points`})</p>
            </div>
            <div className="facilities flex items-center gap-3">
              {flight.facilities.map((facility, index) => (
                <span key={index}>
                  <Image src={`/${facility}.svg`} alt={facility} width={26} height={26} />
                </span>
              ))}
            </div>
            <div className="price text-[16px] font-[500]">
              <p className="text-[#2395FF]">
                <span className="mr-2">$</span>
                {flight.price},00
                <span className="ml-2 text-[#979797] text-[14px]">/pax</span>
              </p>
            </div>
            <div className="btn">
              <Link href="#">
                <button className="w-[150px] bg-[#2395FF] py-2 text-white rounded-[10px] shadow-sm shadow-[#2395FF]">Select</button>
              </Link>
            </div>
          </div>
          <div className="detail">
            <button onClick={() => handleDropdownClick(flight)} className="pt-8 text-[16px] text-[#2395FF] font-[600]">
              {selectedFlight === flight ? "Hide Details" : "View Details"}
            </button>
            {selectedFlight === flight && (
              <div className="pb-10 mt-3 flex items-center justify-between px-20 bg-slate-200 py-4 rounded-md">
                <div className="form mt-3">
                  <h1>From</h1>
                  <div className="bandara mt-3 flex items-center gap-3">
                    <Image src="/plane.png" alt="plane icon" width={25} height={25}></Image>
                    <p className="font-[600]">{flight.from.name}</p>
                  </div>
                  <div className="terminal ml-9">
                    <p className="text-[12px]">Terminal : {flight.to.terminal}</p>
                  </div>
                  <div className="location flex items-center gap-3  pt-2">
                    <Image src="/map-pin.svg" alt="plane icon" width={15} height={15}></Image>
                    <p className="text-[14px]">{flight.from.location}</p>
                  </div>
                </div>

                <div className="form mt-3">
                  <h1>To</h1>
                  <div className="bandara mt-3 flex items-center gap-3">
                    <Image src="/plane.png" alt="plane icon" width={25} height={25}></Image>
                    <p className="font-[600]">{flight.to.name}</p>
                  </div>
                  <div className="terminal ml-9">
                    <p className="text-[12px]">Terminal : {flight.from.terminal}</p>
                  </div>
                  <div className="location flex items-center gap-3 pt-2">
                    <Image src="/map-pin.svg" alt="plane icon" width={15} height={15}></Image>
                    <p className="text-[14px]">{flight.to.location}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ticket;
