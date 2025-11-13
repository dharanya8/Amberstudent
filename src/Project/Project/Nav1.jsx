import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaHeadset, FaWhatsapp, FaRegEnvelope } from "react-icons/fa6";
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { TbMessageChatbot } from "react-icons/tb";
import { LiaFacebookMessenger } from "react-icons/lia";
import { PiQuestionLight } from "react-icons/pi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import amber from './../assets/bg1/amber-logo-light (1).svg';
import './Navbar1.css';

function Nav1() {
  return (
    <div className='Nav'>
      <Navbar expand="lg" variant='dark' className="" sticky="top">
        <Navbar.Brand href="#Amber" className='d-flex align-items-center'>
          <Image src={amber} alt="Amber Logo"className='ms-4 mt-2' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Dropdown className="my-3 my-lg-0 mx-lg-2">
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  fontFamily: "'Nunito' sans-serif",
                  fontSize: "16px",
                  fontWeight: "bolder",
                  background: "none",
                  border: "none",
                  height: "35px",
                  color: "white",
                     marginTop:"1px"
                }}
              >
                <FaHeadset className="fs-5" /> Support <IoIosArrowDown />
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-dropdown-menu mt-3 ">
                <div className="dropdown-flex d-flex justify-content-between">
                  <div className="support-items">
                    <Dropdown.Header style={{ fontSize: "12px" }}>Support Now</Dropdown.Header>
                    <Dropdown.Item href="#quick-chat" className='item ms-2 pt-2'>
                      <TbMessageChatbot className="me-1 "style={{fontSize:"18px",border:"1px"}} /> Quick Chat
                      <span className="online rounded-pill fw-bold"style={{marginLeft:"70px"}}>Online</span>
                    </Dropdown.Item>
                    <Dropdown.Item href="https://wa.me/your-number"className='mt-1 ms-2 pt-2 item'>
                      <FaWhatsapp className="me-1 " style={{fontSize:"16px"}}/> Whatsapp
                    </Dropdown.Item>
                    <Dropdown.Item href="https://m.me/your-page"className='mt-1 ms-2 pt-2 item'>
                      <LiaFacebookMessenger className="me-1"style={{fontSize:"16px"}} /> Facebook Messenger
                    </Dropdown.Item>
                    <Dropdown.Divider className='mt-1'/>
                    <Dropdown.Item href="tel:+918035735724"className='item ms-2 pt-2'>
                      <BsTelephone className="me-1"style={{fontSize:"17px"}} /> +91 8035735724
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="mailto:contact@amberstudent.com"className='item ms-2 pt-2'>
                      <FaRegEnvelope className="me-1" style={{fontSize:"17px"}} /> contact@amberstudent.com
                    </Dropdown.Item>
                  </div>
                  <div className='vertical-divider'>
                    <Dropdown.Header style={{ fontSize: "12px" }}>Quick Links</Dropdown.Header>
                    <div className='me-4'></div>
                    <Dropdown.Item href="#help-center" className='help ms-2 pt-2 me-5 '>
                      <PiQuestionLight className="me-2" style={{fontSize:"19px"}}/> Help Center
                    </Dropdown.Item>
                    <Dropdown.Item href="#how-it-works" className='how  ms-2 mt-1 pt-2 me-5 '>
                      <AiOutlineInfoCircle className="me-2"style={{fontSize:"18px"}} /> How It Works
                    </Dropdown.Item>
                 </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {/* Buttons */}
            <Button
              className='text-light fw-bold mb-5 mb-lg-0 mx-lg-2 shortlist'
              variant='none'
              style={{
                fontFamily: "'Nunito' sans-serif",
                fontSize: "16px",
                height: "35px",
                background: "none"
              }}
            >
              <IoMdHeartEmpty className='me-2 mb-1 fs-5 fw-bolder' /> Shortlist
            </Button>

            <Button
              className='text-light fw-bold mb-3 mb-lg-0 mx-lg-2'
              variant='outline-light'
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                height: "35px",
                background: "none"
              }}
            >
              <LuLogIn className='fs-5 me-2 mb-1' /> Login
            </Button>

            <Button
              className='text-light fw-bold mb-3 mb-lg-0 mx-lg-2 border border-white'
              variant='none'
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                height: "40px",
                background: "none"
              }}
            >
              <IoMdContact style={{ fontSize: "30px" }} />
              <BiMenu className='fs-3 ' />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Heading below Navbar */}
      <div className='text-center mt-5'>
        <h1 className='fw-bold text-white' style={{ fontSize: "60px" }}>
          Home away from home
        </h1>
      </div>
    </div>
  );
}

export default Nav1;
