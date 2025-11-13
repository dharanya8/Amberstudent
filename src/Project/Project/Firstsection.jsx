import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar1.css';
import { FaHeadset,} from "react-icons/fa6";
import { GoCheckCircle } from "react-icons/go";
import { GrCurrency } from "react-icons/gr";
import Search from './Search';
import { GoChevronRight } from "react-icons/go";
import Navbar2 from "./Navbar2";

function Firstsection1() {
     const [recent, setRecent] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches"));
    if (saved && saved.length > 0) {
      setRecent(saved);
    } else {
     
      setRecent(defaultSearches);
      localStorage.setItem("recentSearches", JSON.stringify(defaultSearches));
    }
  }, []);

  const handleSearch = (term) => {
    const updated = [term, ...recent.filter((item) => item !== term)];
    setRecent(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  return (
    <div className="Nav">
     <Navbar2/>
      <div className="header">
        <h2 className="fw-bold" style={{ fontSize: "56px", color: "white" }}>
          Home away from home
        </h2>
        <div>
          <h1 className="text-light fs-5">
            Book student accommodations near top universities and cities across the globe
          </h1>
        </div>
      </div>
      <div className="d-flex flex-wrap verified gap-3 mt-3 text-light">
        <div className="d-flex bg" style={{ width: "165px" }}>
          <GoCheckCircle className="mt-1 me-2 fs-5" /> Verified Properties
        </div>
        <div className="d-flex bg" style={{ width: "145px" }}>
          <FaHeadset className="mt-1 me-2 fs-5" /> 24x7 Assistance
        </div>
        <div className="d-flex bg" style={{ width: "200px" }}>
          <GrCurrency className="mt-1 me-2 fs-5" /> Lowest Price Guarantee
        </div>
      </div>
      <div>
        <Search />
      </div>
      <div className="d-flex  text-light  justify-content-center mt-3"
      > 
      <div className="d-flex recent">
             <div style={{fontSize:"14px",whiteSpace: "nowrap", }}className=""> Recent Searches</div>
        {recent.length === 0 ? (
          <p className="text-light ms-2">No recent searches</p>
        ) : (
          recent.map((item, i) => (
            <a
              key={i}
              href={`/search.html`}
              onClick={() => handleSearch(item)}
              style={{ textDecoration: "none" }}
            >
              <button
                className="country ms-2 rounded-pill"
                style={{
                  padding: "10px 15px",
                  borderRadius: "50px",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                 whiteSpace: "nowrap",         

                }}
              >
                {item} <GoChevronRight />
              </button>
            </a>
          ))
        )}
      </div>
      </div>
      </div>
      
  );
}

export default Firstsection1;