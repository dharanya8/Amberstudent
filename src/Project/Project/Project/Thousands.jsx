import React, { useState } from "react";
import "./Thousands.css";
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
import Propesties from './../Project/Properties.json'
import Carousel from 'react-bootstrap/Carousel';
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LoginModal from './../Project/Login'
function Thousands() {
  const data = {
    "United Kingdom": ["London", "Birmingham", "Leicester", "Liverpool", "Sheffield"],
    "United States": ["New York", "Boston", "San Francisco", "Chicago"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"],
    "Ireland": ["Dublin", "Cork"],
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
    const [selectedCity, setSelectedCity] = useState("London");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setOpenDropdown(false);
  };
   const navigate = useNavigate();
   const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className="thousand">
      <h2 className="properties">Thousands of properties globally</h2>
      <p className="studio">
        From studios to private rooms to shared apartments, we’ve got it all.
      </p>

      {/* Dropdown */}
      <div className="dropdown-row flex-wrap">
      {/* <div className="dropdown"> */}
        <button
          className="drop"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          {!openDropdown && (
            <img
              src={flags[selectedCountry]}
              alt={selectedCountry}
              className="flag me-2"
            />
          )}
          {selectedCountry} <HiOutlineChevronDown />
        </button>

        {openDropdown && (
          <div className="drop-content">
            {Object.keys(data).map((country) => (
              <div
                key={country}
                className={`drop-item ms-2 ${
                  selectedCountry === country ? "active" : ""
                }`}
                onClick={() =>  {
                    setSelectedCountry(country);
                    setSelectedCity(data[country][0]);
                    setOpenDropdown(false);
                  }}
              >
                 <div className="country-info">
             <img src={sqflag[country]} alt={selectedCountry} className="flag" /> 
                <span className="country-name">{country}</span>
                {selectedCountry === country && (
                  <GoCheck  className="check-icon" />
                )}
                </div>
              </div>
            ))}
          </div>
        )} 
       <div className="vertical-divider1 mt-1"></div>
      <div className="city-list">
        {data[selectedCountry].map((city) => (
          <button key={city}
          className={`city-btn ${selectedCity === city ? "active" : ""}`}
              onClick={() => setSelectedCity(city)}>
            {city}
          </button>
        ))}
      </div>
      </div>
      <div   className="property-card-section  d-flex  overflow-x-hidden">
       
        {(Propesties[selectedCity] || []).map((item, index) => (
          <div key={index} className="property-card position-relative">
            <div className="wishlist-heart position-absolute mt-3  bg-light d-flex justify-content-center align-items-center"
             onClick={() => setOpenLogin(true)}>
    <FiHeart className="heart-outline mt-1" />
  </div> 
            <div className="bg-light shadow ">
                  <Carousel className="carousel d-flex "interval={null}>
                    {item.images
    ? item.images.map((img, i) => (
        <Carousel.Item key={i}>
           
          <img src={img} alt={item.name} className="property-img" />
        </Carousel.Item>
      ))
    : (
      <Carousel.Item>
        <img src={item.image} alt={item.name} className="property-img" />
      </Carousel.Item>
    )}
    </Carousel>
            <div className="property-info ms-3 ">
              <h4 className="mt-3">{item.name}</h4>
              <p className="Location">{item.location}</p>
              <p className="">From <span className="fw-bold fs-5 ">{item.price}</span>week</p>
              <p className="rating">⭐ {item.rating}</p>
           </div> 
            </div>
          </div>
        ))}
        </div>
        <LoginModal show={openLogin} onClose={() => setOpenLogin(false)} />
    </div>
  );
}

export default Thousands;
