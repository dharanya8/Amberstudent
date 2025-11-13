import React, { useState, useRef,useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Popular.css";
import London from "./../assets/Popular img/UK_London.avif";
import Leicester from "./../assets/Popular img/UK_Leicester.avif";
import Liverpool from "./../assets/Popular img/UK_Liverpool.avif";
import Sheffield from "./../assets/Popular img/UK_Sheffield.avif";
import plymouth  from './../assets/Popular img/UK_Plymouth.avif'
import Cardiff from "./../assets/Popular img/UK_Cardiff.avif";
import Castal from "./../assets/Popular img/UK_Castal.avif";
import Birmingham from "./../assets/Popular img/UK_Birmingham.avif";
import Cityhall from "./../assets/Popular img/UK city hall.avif";
import Coventry from "./../assets/Popular img/UK_Coventry.avif";
import Australia1 from "./../assets/Popular img/Australia_1.avif"
import Australia2 from "./../assets/Popular img/Australia_2.avif"
import Australia3 from './../assets/Popular img/Australia_3.avif'
import Australia4 from './../assets/Popular img/Australia_4.avif'
import Australia5 from './../assets/Popular img/Australia_5.avif'
import Australia6 from './../assets/Popular img/Australia_6.avif'
import Australia7 from './../assets/Popular img/Australia_7.avif'
import Australia8 from './../assets/Popular img/Australia_8.avif'
import ireland1 from './../assets/Popular img/Ireland1.avif'
import ireland2 from './../assets/Popular img/Ireland2.avif'
import usa1 from './../assets/Popular img/USA1.avif'
import usa2 from './../assets/Popular img/USA2.avif'
import usa3 from './../assets/Popular img/USA3.avif'
import usa4 from './../assets/Popular img/USA4.avif'
import usa5 from './../assets/Popular img/USA5.avif'
import usa6 from './../assets/Popular img/USA6.avif'
import usa7 from './../assets/Popular img/USA7.avif'
import usa8 from './../assets/Popular img/USA8.avif'
import usa9 from './../assets/Popular img/USA9.avif'
import usa10 from './../assets/Popular img/USA10.avif'
import canada1  from './../assets/Popular img/Canada1.avif'
import canada2  from './../assets/Popular img/Canada2.avif'
import canada3  from './../assets/Popular img/Canada3.avif'
import canada4  from './../assets/Popular img/Canada4.avif'
import canada5  from './../assets/Popular img/Canada5.avif'
import germany1 from './../assets/Popular img/germany1.avif'
import germany2 from './../assets/Popular img/Germany2.avif'
import germany3 from './../assets/Popular img/Germany3.avif'
import germany4 from './../assets/Popular img/Germany4.avif'
import spain1 from './../assets/Popular img/Spain1.avif'
import spain2 from './../assets/Popular img/Spain2.avif'
import spain3 from './../assets/Popular img/Spain3.avif'
import spain4 from './../assets/Popular img/Spain4.avif'
import new1 from './../assets/Popular img/new1.avif'
import new2 from './../assets/Popular img/new2.avif'
import france1 from'./../assets/Popular img/france1.avif'
import singapore from './../assets/Popular img/Singapore.avif'
import uk from './../assets//Flags/flag-uk.svg';
import ire from './../assets/Flags/flag-ire.svg';
import can from './../assets/Flags/flag-can.svg';
import aus from './../assets/Flags/flag-aus.svg';
import usa from './../assets/Flags/flag-usa.svg';
import ger from './../assets/Flags/flag-ger.svg';
import esp from './../assets/Flags/flag-esp.svg';
import nz from './../assets/Flags/flag-nz.svg';
import france from './../assets/Popular img/flag-france.svg'
import sin from './../assets/Popular img/flag-singapore.svg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Popularcities() {
  const [selectedCountry, setSelectedCountry] = useState("uk");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const data = {
    uk: [
      { name: "London", img: London, link: "/uk/london" },
      { name: "Leicester", img: Leicester, link: "/uk/leicester" },
      { name: "Liverpool", img: Liverpool, link: "/uk/liverpool" },
      { name: "Sheffield", img: Sheffield, link: "/uk/sheffield" },
      { name: "Plymouth", img:plymouth, link: "/uk/bridge" },
      { name: "Cardiff", img: Cardiff, link: "/uk/cardiff" },
      { name: "Edinburgh", img: Castal, link: "/uk/castal" },
      { name: "Birmingham", img: Birmingham, link: "/uk/birmingham" },
      { name: "Nottingham", img: Cityhall, link: "/uk/cityhall" },
      { name: "Coventry", img: Coventry, link: "/uk/coventry" },
    ],
    australia: [
      { name: "Melbourne", img:Australia1 , link: "/usa/newyork" },
      { name: "Brisbane", img:Australia2 , link: "/usa/chicago" },
      { name: "Sydney", img: Australia3, link: "/usa/boston" },
      { name: "Adelaide", img: Australia4, link: "/usa/boston" },
      { name: "Perth", img: Australia5, link: "/usa/boston" },
      { name: "Camberra", img: Australia6, link: "/usa/boston" },
      { name: "Gold Coast", img: Australia7, link: "/usa/boston" },
      { name: "Coffs Harbour", img: Australia8, link: "/usa/boston" },
    ],
    ireland:[
      { name: "Dublin", img:ireland1 , link: "/usa/newyork" },
      { name: "Cork", img:ireland2 , link: "/usa/chicago" },
    ],
    usa:[
      { name: "New York", img:usa1 , link: "/usa/newyork" },
      { name: "Austin", img:usa2 , link: "/usa/chicago" },
      { name: "Francisco", img: usa3, link: "/usa/boston" },
      { name: "Dallas", img: usa4, link: "/usa/boston" },
      { name: "Philadelphia", img: usa5, link: "/usa/boston" },
      { name: "Los Angels", img: usa6, link: "/usa/boston" },
      { name: "Chicago", img: usa7, link: "/usa/boston" },
      { name: "Hourston", img: usa8, link: "/usa/boston" },
      { name: "Boston", img: usa9, link: "/usa/boston" },
      { name: "Washington", img: usa10, link: "/usa/boston"},
    ],
    canada:[
      { name: "Toronto", img:canada1 , link: "/usa/newyork" },
      { name: "Montreal", img:canada2 , link: "/usa/chicago" },
      { name: "vancouver", img: canada3, link: "/usa/boston" },
      { name: "Ottawa", img: canada4, link: "/usa/boston" },
      { name: "Waterloo", img: canada5, link: "/usa/boston" },
    ],
    germany:[
      { name: "Frankfurt", img:germany1 , link: "/usa/newyork" },
      { name: "Hamburg", img:germany2 , link: "/usa/chicago" },
      { name: "Berlin", img: germany3, link: "/usa/boston" },
      { name: "Munich", img: germany4, link: "/usa/boston" },
    ],
    spain:[
      { name: "Barcelona", img:spain1 , link: "/usa/newyork" },
      { name: "Madrid", img:spain2 , link: "/usa/chicago" },
      { name: "Valencia", img: spain3, link: "/usa/boston" },
      { name: "Seville", img: spain4, link: "/usa/boston" },
    ],
     new:[
      { name: "Auckland", img:new1 , link: "/usa/newyork" },
      { name: "Wellindton", img:new2 , link: "/usa/chicago" },
    ],
      france:[
      { name: "Paris", img:france1 , link: "/usa/newyork" },  
    ],
    singapore:[
      { name: "Singapore", img:singapore, link: "/usa/newyork" }
    ],
  };
   const handleScroll = () => {
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < maxScrollLeft - 10);
  };
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };
   useEffect(() => {
    const container = carouselRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll(); // check on load
    return () => container.removeEventListener("scroll", handleScroll);
  }, [selectedCountry]);

  const cities = data[selectedCountry];

  return (
    <div className="contain">
      <h2 className="carousel-title ms-3">Popular Cities Across the Globe</h2>
      <p className="carousel-subtitle ms-3">
        Book student accommodations near top cities and universities around the world.
      </p>
      {/* 🌍 Country Buttons */}
      <div className="button-group  ms-3">
        <div className=" popularcountry ">
          <button
          className={`filter-btn  ${selectedCountry === "uk" ? "active" : ""}`}
          onClick={() => setSelectedCountry("uk")}
        >
          <img src={uk} alt="UK" className="flag-icon me-2" />
          United Kingdom
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "australia" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("australia")}
        >
          <img src={aus} alt="UK" className="flag-icon me-2" />
          Australia
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "ireland" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("ireland")}
        >
          <img src={ire} alt="UK" className="flag-icon me-2" />
          Ireland
        </button>
       
        <button
          className={`filter-btn ${selectedCountry === "usa" ? "active" : ""}`}
          onClick={() => setSelectedCountry("usa")}
        >
          <img src={usa} alt="UK" className="flag-icon me-2" />
          United States
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "canada" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("canada")}
        >
          <img src={can} alt="UK" className="flag-icon me-2" />
          Canada
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "germany" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("germany")}
        >
          <img src={ger} alt="UK" className="flag-icon me-2" />
          Germany
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "spain" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("spain")}
        >
          <img src={esp} alt="UK" className="flag-icon me-2" />
          Spain
        </button>
        <button
          className={`filter-btn ${
          selectedCountry === "new" ? "active" : ""}`}
          onClick={() => setSelectedCountry("new")}
        >
          <img src={nz} alt="UK" className="flag-icon me-2" />
          New Zealand
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "france" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("france")}
        >
          <img src={france} alt="france" className="flag-icon me-2" />
          France
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "singapore" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("singapore")}
        >
          <img src={sin} alt="singapore" className="flag-icon me-2" />
          Singapore
        </button>
        </div>
      </div>
      {/* 🎠 Carousel */}
      <div className="carousel-wrapper">
  {/* 👇 Left Arrow — show only if more than 4 items */}
  {cities.length > 4 && showLeftArrow && (
    <button className="arrow left" onClick={scrollLeft}>
      <IoIosArrowBack className="text-dark fs-5"style={{marginBottom:"32px"}} />
    </button>
  )}

  <div className="carousel" ref={carouselRef}>
  {cities.map((city, index) => (
    <div
      key={index}
      className="image-card"
      onClick={() => navigate(city.link)} // 👈 navigate when clicked
      style={{ cursor: "pointer" }}
    >
      <div className="image-overlay">
        <img src={city.img} alt={city.name} className="carousel-image" />
        <span className="city-name ms-5">{city.name}</span>
      </div>
    </div>
  ))}
</div>

  {/* 👇 Right Arrow — show only if more than 4 items */}
  {cities.length > 4 && showRightArrow && (
    <button className="arrow right"onClick={scrollRight}>
      <IoIosArrowForward className="text-dark fs-5" style={{marginBottom:"32px"}} />
    </button>
  )}
</div>
    </div>
  );
}
export default Popularcities;
