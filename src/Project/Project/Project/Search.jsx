import React, { useState, useEffect ,useRef} from "react";
import "./Search.css";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { PiClockCounterClockwiseThin } from "react-icons/pi";
import uk from './../assets/Flags/flag-uk.svg';
import ire from './../assets/Flags/flag-ire.svg';
import can from './../assets/Flags/flag-can.svg';
import aus from './../assets/Flags/flag-aus.svg';
import usa from './../assets/Flags/flag-usa.svg';
import ger from './../assets/Flags/flag-ger.svg';
import esp from './../assets/Flags/flag-esp.svg';
import nz from './../assets/Flags/flag-nz.svg';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Search() {
  const staticText = "Search by";
  const words = ["City", "University", "Property", "City University or Property"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCountry, setActiveCountry] = useState("ALL");
 const dropdownRef = useRef(null); // 👈 reference for dropdown area
  const inputRef = useRef(null);   
  const navigate = useNavigate();
  const handleCityClick = (city) => {
  navigate(`/city/${encodeURIComponent(city)}`);
};

const handleUniversityClick = (university) => {
  navigate(`/university/${encodeURIComponent(university)}`);
};
 
  const countries = [
    { code: "ALL", },
    { code: "UK", flag: uk},
    { code: "IRE", flag: ire },
    { code: "CAN", flag: can },
    { code: "AUS", flag: aus},
    { code: "USA", flag: usa },
    { code: "GER", flag: ger },
    { code: "ESP", flag: esp },
    { code: "NZ",  flag: nz },
  ];
    const cityData = {
    ALL: [
      "London", "Dublin", "Melbourne", "Toronto", "Manchester",
      "Birmingham", "Sydney","Chicago", "Cork", "Nottingham",
    ],
    UK: ["London", "Manchester", "Birmingham", "Nottingham"],
    IRE: ["Dublin", "Cork", "Galway"],
    CAN: ["Toronto", "Vancouver", "Ottawa"],
    AUS: ["Sydney", "Melbourne", "Brisbane"],
    USA: ["Chicago", "New York", "Boston"],
    GER: ["Berlin", "Munich", "Frankfurt"],
    ESP: ["Madrid", "Barcelona", "Valencia"],
    NZ: ["Auckland", "Wellington", "Christchurch"],
  };
  const universityData = {
    ALL: [
"Coventry University ","London Coventry University", "Coventry universitat de barcelona"," Barcelona De Montfor University",
"Leicester University of Leicester", "Leicester Sheffield Hallam University", "Sheffield University of Chester", "Chestereada business school", "Barcelona"
    ],
    UK: ["University of Oxford", "University of Cambridge", "University of Manchester"],
    IRE: ["Trinity College Dublin", "University College Cork"],
    CAN: ["University of Toronto", "McGill University"],
    AUS: ["University of Melbourne", "University of Sydney"],
    USA: ["Harvard University", "MIT", "Stanford University"],
    GER: ["Technical University of Munich", "Heidelberg University"],
    ESP: ["University of Barcelona", "Complutense University of Madrid"],
    NZ: ["University of Auckland", "University of Otago"],
  };

useEffect(() => {
      function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])
useEffect(()=>{
    if (currentIndex >= words.length - 1) return; 

    const timeout = setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const wordHeight = 80; 
    return (
    <div className="d-flex justify-content-center mt-4 position-relative">
      <div
        className="d-flex"
        style={{ position: "relative", width: "720px" }}
         ref={inputRef} 
        onFocus={() => setShowDropdown(true)}
      >
        <input
          className="d-flex input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
           onFocus={() => setShowDropdown(true)}
          placeholder=""
          
        />

        {searchText === "" && (
          <div
           ref={dropdownRef} 
            style={{
              position: "absolute",
              left: "33px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              height: `${wordHeight}px`,
              overflow: "hidden",
              width: "680px",
            }}
          >
            <span style={{ fontSize: "16px" }}>{staticText}</span>
            <div style={{ display: "inline-block", height: `${wordHeight}px`, overflow: "hidden" }}>
              <div
                style={{
                  transform: `translateY(-${currentIndex * wordHeight}px)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {words.map((word, i) => (
                  <div
                    className="font"
                    key={i}
                    style={{
                      height: `${wordHeight}px`,
                      fontSize: "18px",
                      lineHeight: `${wordHeight}px`,
                    }}
                  >  
                    {word}
                  </div>
                ))}
              </div>
              
            </div>
            <div className="d-flex justify-content-center searchbar" >
               <IoSearchOutline className="" 
               style={{fontSize:"34px",color:"white",
                marginTop:"1px" 
               }}/>
              </div>
          </div>
        )}
        {searchText && (
          <div
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#666",
            }}
            onClick={() => setSearchText("")}
          >
            <CiCircleRemove size={56} style={{background:"gray"}}/>
          </div>
        )}
      </div>

      {/* Dropdown Panel */}
      {showDropdown && (
        <div
        ref={dropdownRef} 
          className="dropdown-panel"
                 >
          {/* Country Tabs */}
          <div
            style={{
              display: "flex",
              overflowX: "hidden",
              position: "sticky",
              top: "0",  
              background:"white",
              zIndex: "11",
              height:"50px",
              marginLeft:"12px"
            }}
          >
{countries.map((c) => (
  <button
    key={c.code}
    type="button"
    onClick={(e) => {
  e.stopPropagation();
  setActiveCountry(c.code);
}}
 
    style={{
      border: "none",
      borderBottom:"none",
      borderRadius: "20px",
      padding: "6px 12px", 
      fontWeight:
        c.code === "ALL"
          ? "700"
          : activeCountry === c.code
          ? "600"
          : "500",
      color:
        activeCountry === c.code
          ? "#ff4d6d"
          : "#131111ff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "7px",
      background: "transparent",
      fontSize: c.code === "ALL" ? "17px" : "15px",
       textDecoration:
      activeCountry === c.code ? "underline" : "none",
    textDecorationColor:
      activeCountry === c.code ? "#ff4d6d" : "transparent",
    textDecorationThickness: "3px",
      transition: "all 0.3s ease",
    }}
  >
    {c.flag && (
      <img
        src={c.flag}
        alt={c.code}
        style={{
          width: "24x",
          height: "24px",
          borderRadius: "3px",
          objectFit: "cover",
          marginLeft:"2px"
        }}
      />
    )}
    <span>{c.code}</span>
  </button>
))}

          </div>

          {/* Recently Searched */}
          <div style={{ marginBottom: "15px", scrollbarWidth: "thin",whiteSpace: "nowrap", }}>
            <div className="topcities p-1">
            <h6 style={{ fontWeight: "400", marginBottom: "8px",fontSize:"14px" }}className="mt-2 ms-4"><PiClockCounterClockwiseThin className="fs-5"/> RECENTLY SEARCHED</h6>
            </div>
            <div className="ms-3 city"style={{ display: "flex", flexWrap: "wrap", gap: "10px",fontWeight:"600" }}>
              {["Auckland", "Coventry", "Dublin", "London", "Melbourne"].map((city) => (
                <span
                  key={city}
                  style={{
                    padding: "8px 14px",
                    cursor: "pointer",
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <div className="topcities p-1">
            <h6 style={{ fontWeight: "400", marginBottom: "8px",}}className="mt-2 ms-4">< TfiLocationPin/> TOP CITIES</h6>
            </div>

            <div className="city ms-3"style={{ display: "flex", flexWrap: "wrap", gap: "10px",fontWeight:"600" }}>
    {(cityData[activeCountry] || []).map((city) => (
      <span key={city}     
      onClick={() => handleCityClick(city)}
 style={{ padding: "8px 14px", cursor: "pointer" }}>
        {city}
      </span>
    ))}
  </div>
 <div className="topcities p-1 mt-5 ms-4">
            <h6 style={{ fontWeight: "400", marginBottom: "8px",}}className="mt-2"> <HiOutlineAcademicCap className="me-2"/>TOP UNIVERSITY</h6>
            </div>
                    <div className="city  ms-3"style={{ display: "flex", flexWrap: "wrap", gap: "10px",fontWeight:"600" }}>
    {(universityData[activeCountry] || []).map((uni) => (
      <span key={uni}
        onClick={() => handleUniversityClick(uni)}
 style={{ padding: "8px 14px", cursor: "pointer" }}>
        {uni}
      </span>
    ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
