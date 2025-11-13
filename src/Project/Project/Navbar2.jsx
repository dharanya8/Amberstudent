import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Navbar1.css';
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeadset, FaWhatsapp, FaRegEnvelope, FaRegHandshake } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDown } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";
import { LuLogIn } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { PiQuestionLight, PiCalendarStarThin } from "react-icons/pi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { BsPersonUp } from "react-icons/bs";
import amber from './../assets/bg1/amber-logo-light (1).svg';
function  Navbar2(){
  
  return(
    <div className="overflow">
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="#Amber" className="ms-5 mb-5 align">
          <Image src={amber} alt="Amber Logo" className="ms-4 mt-2 no-highlight" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="pb-5">
          <Nav className="ms-auto" style={{ marginRight: "30px" }}>
            <Dropdown className="support-btn me-auto my-3 my-lg-0 mx-lg-2">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "16px",
                  fontWeight: "bolder",
                  background: "none",
                  border: "none",
                  height: "38px",
                  color: "white",
                  // marginTop: "1px",
                }}
              >
                <div className="d-flex">
                <FaHeadset className=" fs-5" /> <span className="ms-2">Support</span> <IoIosArrowDown className="ms-2 mt-1"/></div>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" className="custom-dropdown-menu mt-3">
                <div className="dropdown-flex">
                  <div className="support-items">
                    <Dropdown.Header style={{ fontSize: "12px" }} className="text-dark">
                      Support Now
                    </Dropdown.Header>
                    <Dropdown.Item href="#quick-chat" className="item ms-2 pt-2">
                      <TbMessageChatbot className="me-1" style={{ fontSize: "18px" }} /> Quick Chat
                      <span className="online rounded-pill fw-bold" style={{ marginLeft: "70px" }}>
                        Online
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item href="https://wa.me/your-number" className="mt-1 ms-2 pt-2 item">
                      <FaWhatsapp className="me-1" style={{ fontSize: "16px" }} /> Whatsapp
                    </Dropdown.Item>
                    <Dropdown.Item href="https://m.me/your-page" className="mt-1 ms-2 pt-2 item">
                      <LiaFacebookMessenger className="me-1" style={{ fontSize: "20px" }} /> Facebook Messenger
                    </Dropdown.Item>
                    <Dropdown.Divider className="mt-1" />
                    <Dropdown.Item href="tel:+918035735724" className="item ms-2 pt-2">
                      <BsTelephone className="me-1" style={{ fontSize: "17px" }} /> +91 8035735724
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="mailto:contact@amberstudent.com" className="item ms-2 pt-2">
                      <FaRegEnvelope className="me-1" /> contact@amberstudent.com
                    </Dropdown.Item>
                  </div>
                  <div className="vertical-divider">
                    <Dropdown.Header style={{ fontSize: "12px" }} className="text-dark">
                      Quick Links
                    </Dropdown.Header>
                    <div className="me-4">
                      <Dropdown.Item href="#help-center" className="help ms-2 pt-2 me-5">
                        <PiQuestionLight style={{ fontSize: "19px" }} className="me-2" />
                        Help Center
                      </Dropdown.Item>
                      <Dropdown.Item href="#how-it-works" className="how ms-2 mt-1 pt-2 me-5">
                        <AiOutlineInfoCircle style={{ fontSize: "18px" }} className="me-2" />
                        How It Works
                      </Dropdown.Item>
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <div className="shortlist2">
            <Button
              className="text-light me-auto fw-bold mb-5 mb-lg-0 mx-lg-2 shortlist"
              variant="none"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                height: "35px",
              }}
            >
              <IoMdHeartEmpty className="fw-bolder me-2 mb-1 fs-5" /> Shortlist
            </Button></div>
            <Button
              className="text-light me-auto fw-bold mb-5 mb-lg-0 mx-lg-2 shortlist"
              variant="none"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                height: "40px",
                border: "1px solid white",
              }}
            >
              <LuLogIn className="fs-5 me-2 mb-1" /> Login
            </Button>
            <Dropdown className="mb-5 mb-lg-0 mx-lg-2 contact-btn">
              <Dropdown.Toggle
                id="contact-dropdown"
                variant="none"
                className="text-light fw-bold  toggle"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "16px",
                  height: "40px",
                  border: "1px solid white",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <IoMdContact style={{ fontSize: "30px" }} />
                <BiMenu className="fs-3" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" className="dropdown-custom mt-2" style={{ width: "280px" }}>
                <Dropdown.Header style={{ fontSize: "13px" }} className="text-dark login ms-2">
                  Login to Continue
                </Dropdown.Header>
                <Dropdown.Item href="#profile" className="mt-2 ms-2 contact">
                  <IoPersonOutline className="me-1" style={{ fontSize: "18px" }} /> Profile
                </Dropdown.Item>
                <Dropdown.Item href="#Booking" className="mt-2 ms-2 contact">
                  <PiCalendarStarThin className="me-1" style={{ fontSize: "22px" }} /> Bookings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#Groupbooking" className="mt-2 ms-2 contact">
                  <MdGroups className="me-1" style={{ fontSize: "18px" }} /> Group Booking
                  <span className="new rounded-pill fw-bold" style={{ marginLeft: "60px" }}>
                    New
                  </span>
                </Dropdown.Item>
                <Dropdown.Item href="#Refer" className="mt-2 ms-2 contact">
                  <BsPersonUp className="me-1" style={{ fontSize: "20px" }} /> Refer a Friend
                  <span className="new rounded-pill fw-bold" style={{ marginLeft: "30px" }}>
                    Get 50 GBP
                  </span>
                </Dropdown.Item>
                <Dropdown.Item href="#Partner" className="mt-2 ms-2 contact">
                  <FaRegHandshake className="me-1 text-secondary" style={{ fontSize: "18px" }} /> Partner with Us
                </Dropdown.Item>
                <Dropdown.Item href="#List" className="mt-2 ms-2 contact">
                  <CiViewList className="me-1" style={{ fontSize: "20px" }} /> List with Us
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
  );
}
export default Navbar2;