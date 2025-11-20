import React, { useState } from "react";
import "./Popular.css";
import uk from './../assets/flag-uk.svg';
import ire from './../assets/flag-ire.svg';
import can from './../assets/flag-can.svg';
import aus from './../assets/flag-aus.svg';
import usa from './../assets/flag-usa.svg';
import ger from './../assets/flag-ger.svg';
import esp from './../assets/flag-esp.svg';
import nz from './../assets/flag-nz.svg';
 import Image from 'react-bootstrap/Image';
import Leicester from './../assets/UK_Leicester.avif';
import Liverpool from './../assets/UK_Liverpool.avif';
import London from './../assets/UK_London.avif';
import Container from 'react-bootstrap/Container';

function Popularcities() {
  const [selectedCountry, setSelectedCountry] = useState("uk");

  const data = {
    uk: [
      London,Leicester,Liverpool, ],
    australia: [
      "/images/sydney.jpg",
      "/images/melbourne.jpg",
      "/images/brisbane.jpg",
    ],
    usa: [
      "/images/newyork.jpg",
      "/images/chicago.jpg",
      "/images/boston.jpg",
    ],
    ireland: [
      "/images/dublin.jpg",
      "/images/cork.jpg",
      "/images/galway.jpg",
    ],
    canada: [
      "/images/toronto.jpg",
      "/images/vancouver.jpg",
      "/images/montreal.jpg",
    ],
    germany: [
      "/images/berlin.jpg",
      "/images/hamburg.jpg",
      "/images/munich.jpg",
    ],
    france: [
      "/images/paris.jpg",
      "/images/lyon.jpg",
      "/images/nice.jpg",
    ],
    italy: [
      "/images/rome.jpg",
      "/images/milan.jpg",
      "/images/florence.jpg",
    ],
    spain: [
      "/images/madrid.jpg",
      "/images/barcelona.jpg",
      "/images/seville.jpg",
    ],
    uae: [
      "/images/dubai.jpg",
      "/images/abu_dhabi.jpg",
      "/images/sharjah.jpg",
    ],
  };

  return (
    <div className="carousel-container">
        <Container>
      <h2 className="carousel-title">Popular Cities Across the Globe</h2>
      <p className="carousel-subtitle">Click a country to see related cities</p>

      {/* 10 individual buttons */}
      <div className="button-group">
        <button
          className={`filter-btn ${selectedCountry === "uk" ? "active" : ""}`}
          onClick={() => setSelectedCountry("uk")}
        >
          United Kingdom
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "australia" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("australia")}
        >
          Australia
        </button>
        <button
          className={`filter-btn ${selectedCountry === "usa" ? "active" : ""}`}
          onClick={() => setSelectedCountry("usa")}
        >
          United States
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "ireland" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("ireland")}
        >
          Ireland
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "canada" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("canada")}
        >
          Canada
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "germany" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("germany")}
        >
          Germany
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "france" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("france")}
        >
          France
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "italy" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("italy")}
        >
          Italy
        </button>
        <button
          className={`filter-btn ${
            selectedCountry === "spain" ? "active" : ""
          }`}
          onClick={() => setSelectedCountry("spain")}
        >
          Spain
        </button>
        <button
          className={`filter-btn ${selectedCountry === "uae" ? "active" : ""}`}
          onClick={() => setSelectedCountry("uae")}
        >
          UAE
        </button>
      </div>

      {/* Carousel */}
      <div className="carousel mt-1">
        {data[selectedCountry].map((image, index) => (
          <img key={index} src={image} alt={selectedCountry} />
        ))}
      </div>
      </Container>
    </div>
  );
}

export default Popularcities;
