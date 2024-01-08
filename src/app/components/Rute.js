"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import FilterTicket from "./FilterTicket";

function Rute() {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [ticketData, setTicketData] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [displayedTicketCount, setDisplayedTicketCount] = useState(6);
  const getTickets = async () => {
    try {
      const response = await axios.get("https://easy-lime-seal-toga.cyclic.app/airlines/flight");
      const data = response.data.data;

      setTicketData(data);
      setDepartureCity(data[0]?.from.location || "");
      setDestinationCity(data[0]?.to.location || "");
      setFilteredTickets(data.slice(0, displayedTicketCount));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);
  const handleSearch = () => {
    const filtered = ticketData.filter((ticket) => ticket.from.location === departureCity && ticket.to.location === destinationCity);
    setFilteredTickets(filtered.slice(0, displayedTicketCount));
  };
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
    <>
      <div className="w-full bg-[#2395FF] h-[200px] relative rounded-b-[30px] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="217" height="172" viewBox="0 0 217 172" fill="none" className="absolute bottom-0 -z-10">
          <path
            d="M20.3188 166.013C22.5266 169.675 25.6273 171.752 28.8722 171.746L74.7643 171.65C78.386 171.642 81.9556 170.337 85.1844 167.838L187.473 88.8008C196.874 81.5367 205.3 71.1679 211.034 57.5872C217.471 42.3417 218.171 31.3091 215.629 23.5151C213.094 15.7157 206.932 9.98796 195.151 8.821C184.657 7.78251 174.219 11.99 164.819 19.2487L130.187 46.0086L53.3018 2.08152C52.3774 1.13327 51.3034 0.578218 50.1909 0.473756C49.0784 0.369293 47.9677 0.719211 46.9738 1.48733L23.859 19.3504C20.1079 22.2464 19.2009 29.8692 22.0414 34.6227L76.9615 87.136L40.6774 115.175L15.2424 95.6527C14.3661 94.98 13.3981 94.6304 12.4168 94.6323C11.4354 94.6341 10.4681 94.9873 9.59285 95.6634L-4.51508 106.568C-8.18533 109.405 -9.1521 116.803 -6.47325 121.599L20.3188 166.013Z"
            fill="#41A4FF"
          />
        </svg>
        <div className="rute flex justify-center items-center pt-16 gap-10 ">
          <div className="flex justify-center items-center gap-10">
            <Image src="/vector-2.svg" width={50} height={50}></Image>
            <div className="wrapper-detail">
              <div className="detail flex items-center justify-center gap-10">
                <div className="from">
                  <p className="text-[12px] text-white mb-2">From</p>
                  <select className="text-[16px] font-[600] text-white bg-transparent border-none focus:outline-none" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)}>
                    {ticketData.map((ticket) => (
                      <option key={ticket.from.id} value={ticket.from.location} className="text-black">
                        {ticket.from.location}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="icon mt-6">
                  <Image src="/vector-white.svg" width={20} height={20}></Image>
                </div>
                <div className="to">
                  <p className="text-[12px] text-white mb-2">To</p>
                  <select className="text-[16px] font-[600] text-white bg-transparent border-none focus:outline-none" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)}>
                    {ticketData.map((ticket) => (
                      <option key={ticket.to.id} value={ticket.to.location} className="text-black">
                        {ticket.to.location}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="bg-[#F7931E] hover:bg-[#c99356] text-white px-4 py-2 rounded-lg" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-ticket mb-32 ">
        <div className="wrapper flex justify-between relative px-10 h-[1700px] mb-20">
          <FilterTicket />
          <div className="mt-10 w-[70%] ">
            <div className="select flex items-center justify-between mb-3">
              <h1 className="text-[24px] font-[600]">
                Select Ticket <span className="text-[16px] text-[#979797] font-[500]">({filteredTickets.length} flight found)</span>
              </h1>
              <div className="sort flex items-center gap-3">
                <p>Sort by</p>
                <Image src="/transfer.svg" width={17} height={17}></Image>
              </div>
            </div>
            {filteredTickets.length > 0 ? (
              filteredTickets.map((flight) => (
                <div className="bg-white  w-[878px] h-auto relative  px-8 py-4 rounded-lg shadow-md mb-6 mt-5" key={flight.code}>
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
                      <Link href="/form-ticket">
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
              ))
            ) : (
              <p>No tickets available for the selected route.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rute;
