import React from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaEnvelope } from "react-icons/fa";

function Dropdown1() {
  return (
    <div className='Nav'>
      <Navbar expand="lg" className="" variant='dark'>
      
          <Navbar.Brand href="#Amber" className='ms-5 mb-5 align'><Image src={amber}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div>
             <DropdownButton className='d-flex btn-primary' id="dropdown-basic-button" title={<span 
             style={{
              fontFamily:"'Nunito' sans-serif",
              fontSize:"16px",fontWeight:"bolder",
              }}><FaHeadset className=' fw-bolder me-2 mb-1 fs-5'/>Support <IoIosArrowDown/></span>}>
                <div>
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item></div>
    </DropdownButton></div>
             <Button  className=' ms-2 text-light fw-bold mb-5 'variant='none' style={{fontFamily:"'Nunito' sans-serif",fontSize:"16px"}}><IoMdHeartEmpty className=' fw-bolder me-2 mb-1 fs-5'/>Shortlist
</Button>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
       </div>
  );
}

export default Dropdown1;
