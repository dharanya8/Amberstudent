import React, { useState } from "react";
import "./Thousands.css"; // styles separate la
import { HiOutlineChevronDown } from "react-icons/hi2";
import uk from './../assets/Flags/flag-uk.svg';
import ire from './../assets/Flags/flag-ire.svg';
import can from './../assets/Flags/flag-can.svg';
import aus from './../assets/Flags/flag-aus.svg';
import usa from './../assets/Flags/flag-usa.svg';
import ger from './../assets/Flags/flag-ger.svg';
import esp from './../assets/Flags/flag-esp.svg';
import squk from './../assets/Flags/Sq-flag-uk.svg'
import squs from './../assets/Flags/sq-flag-us.svg'
import sqaus from './../assets/Flags/sq-flag-aus.svg'
import sqcan from './../assets/Flags/sq-flag-can.svg'
import sqesp from './../assets/Flags/sq-flag-esp.svg'
import sqger from './../assets/Flags/sq-flag-ger.svg'
import sqire from './../assets/Flags/sq-flag-ire.svg'
import { GoCheck } from "react-icons/go";

function Thousands() {
  const data = {
    "United Kingdom": ["London", "Birmingham", "Leicester", "Liverpool", "Sheffield"],
    "United States": ["New York", "Boston", "Los Angeles", "Chicago"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"],
    "Ireland": ["Dublin", "Cork", "Galway"],
    "Canada": ["Toronto", "Vancouver", "Montreal"],
    "Germany": ["Berlin", "Munich", "Hamburg"],
    "Spain": ["Madrid", "Barcelona", "Valencia"],
  };
 const flags = {
    "United Kingdom": uk,
    "United States":usa,
    "Australia":aus,
    "Ireland": ire,
    "Canada": can,
    "Germany":ger,
    "Spain":esp ,
  };
  const sqflag ={
    "United Kingdom": squk,
    "United States":squs,
    "Australia":sqaus,
    "Ireland": sqire,
    "Canada": sqcan,
    "Germany":sqger,
    "Spain":sqesp ,
  }
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setOpenDropdown(false);
  };

  return (
    <div className="thousand">
      <h2 className="properties">Thousands of properties globally</h2>
      <p className="studio">
        From studios to private rooms to shared apartments, we’ve got it all.
      </p>

      {/* Dropdown */}
      <div className="dropdown">
        <button
          className="drop"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
            <img
            src={flags[selectedCountry]}
            alt={selectedCountry}
            className="flag me-2"
          />
         {selectedCountry} <HiOutlineChevronDown/>
        </button>

        {openDropdown && (
          <div className="drop-content">
            {Object.keys(data).map((country) => (
              <div
                key={country}
                className={`drop-item ${
                  selectedCountry === country ? "active" : ""
                }`}
                onClick={() => handleSelectCountry(country)}
              >
                <div>
             <img src={sqflag[country]} alt={selectedCountry} className="flag me-3" />
                {country}
                </div>
                {selectedCountry === country && (
                  <GoCheck  className="check-icon" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* City Filter Buttons */}
      <div className="city-list">
        {data[selectedCountry].map((city) => (
          <button key={city} className="city-btn">
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Thousands;
