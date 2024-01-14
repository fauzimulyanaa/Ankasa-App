// Facilities.js

import React from "react";
import Image from "next/image";

function Facilities({ selectedAirlines, onCheckboxChange }) {
  return (
    <div className="facilities pt-3">
      <div className="flex items-center justify-between pr-1">
        <h1 className="text-[16px] font-[600] pb-2">Airlines</h1>
      </div>
      {Object.keys(selectedAirlines).map((airline) => (
        <div key={airline} className="flex items-center justify-between">
          <label className="text-[14px] block mb-2" id={airline}>
            {airline}
          </label>
          <input type="checkbox" className="mr-2" name={airline} checked={selectedAirlines[airline]} onChange={() => onCheckboxChange(airline)} />
        </div>
      ))}
    </div>
  );
}

export default Facilities;
