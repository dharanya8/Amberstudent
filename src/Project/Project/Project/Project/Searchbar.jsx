import React, { useState, useEffect } from "react";
import './Navbar1.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoSearchOutline } from "react-icons/io5"; 
import { CiCircleRemove } from "react-icons/ci";
function Searchbar() {
  const staticText = "Search by";
  const words = ["City", "University","Property", "City University or Property"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (currentIndex >= words.length - 1) return; 

    const timeout = setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const wordHeight = 80; 

  return (
    <div className="d-flex justify-content-center mt-4">
       
      <div className="d-flex"style={{ position: "relative", width: "720px" }}>
        <input className="d-flex input"
          type="text"
          value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
          placeholder=""
          style={{
            width: "100%",
            height: "80px",
            paddingLeft: "33px",
            borderRadius: "50px",
            fontSize: "16px",
             border:"none"
          }}
          />
          {searchText ===  "" &&(
        <div 
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
            width:"680px",
          }}
        >
          <span style={{ fontSize: "16px" }}>{staticText}</span>
          <div style={{ display: "inline-block", height: `${wordHeight}px`, overflow: "hidden" }}>
            <div
              style={{
                transform: `translateY(-${currentIndex * wordHeight}px)`,
                transition: "transform 0.5s ease-in-out"
              }}
            >
              {words.map((word, i) => (   
                <div className="font"
                  key={i}
                  style={{
                    height: `${wordHeight}px`,
                    fontSize: "18px",
                    //  fontWeight: "bold",
                    lineHeight: `${wordHeight}px`,
                    
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        
          <div className="d-flex searchbar justify-content-center"style={{marginLeft:"333px"}}>
            <IoSearchOutline className="fs-2"style={{marginTop:"13px"}}/>
          </div>
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
            <CiCircleRemove size={56} />
          </div>
        )}
        </div>
          )}
      </div>
    </div>
    
  );
}

export default Searchbar;
