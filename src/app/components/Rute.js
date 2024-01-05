import Image from "next/image";
import React from "react";

function Rute() {
  return (
    <div className="w-full bg-[#2395FF] h-[200px] relative rounded-b-[30px] z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="217" height="172" viewBox="0 0 217 172" fill="none" className="absolute bottom-0 -z-10">
        <path
          d="M20.3188 166.013C22.5266 169.675 25.6273 171.752 28.8722 171.746L74.7643 171.65C78.386 171.642 81.9556 170.337 85.1844 167.838L187.473 88.8008C196.874 81.5367 205.3 71.1679 211.034 57.5872C217.471 42.3417 218.171 31.3091 215.629 23.5151C213.094 15.7157 206.932 9.98796 195.151 8.821C184.657 7.78251 174.219 11.99 164.819 19.2487L130.187 46.0086L53.3018 2.08152C52.3774 1.13327 51.3034 0.578218 50.1909 0.473756C49.0784 0.369293 47.9677 0.719211 46.9738 1.48733L23.859 19.3504C20.1079 22.2464 19.2009 29.8692 22.0414 34.6227L76.9615 87.136L40.6774 115.175L15.2424 95.6527C14.3661 94.98 13.3981 94.6304 12.4168 94.6323C11.4354 94.6341 10.4681 94.9873 9.59285 95.6634L-4.51508 106.568C-8.18533 109.405 -9.1521 116.803 -6.47325 121.599L20.3188 166.013Z"
          fill="#41A4FF"
        />
      </svg>
      <div className="rute flex justify-between items-center pt-16 gap-10 px-36">
        <div className="flex justify-center items-center gap-10">
          <Image src="/vector-2.svg" width={50} height={50}></Image>
          <div className="wrapper-detail">
            <div className="detail flex items-center gap-10">
              <div className="from">
                <p className="text-[12px] text-white mb-2">From</p>
                <h1 className="text-[16px] font-[600] text-white">Medan (IDN)</h1>
              </div>
              <div className="icon mt-6">
                <Image src="/vector-white.svg" width={20} height={20}></Image>
              </div>
              <div className="to">
                <p className="text-[12px] text-white mb-2">To</p>
                <h1 className="text-[16px] font-[600] text-white">Tokyo (JPN)</h1>
              </div>
            </div>
            <div className="date flex items-center gap-4 pt-3">
              <p className="text-[12px] font-[300] text-white">Monday, 20 July 20</p>
              <div className="passenger flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                </svg>
                <p className="text-[12px] font-[300] text-white">6 Passenger</p>
              </div>
              <div className="passenger flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                </svg>
                <p className="text-[12px] font-[300] text-white">Economy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="change">
          <h1 className="text-[16px] font-[600] text-white">Change Search</h1>
        </div>
      </div>
    </div>
  );
}

export default Rute;
