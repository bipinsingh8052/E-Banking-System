import {Link, useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdLogout } from "react-icons/md";
import '../css/header.css'
export default function Header() {
  let nav=useNavigate();
  const Gologin=()=>{
    nav("/login")
  }
  return (
    <>
      <div className="subheader">
        <p>This create it only learning Perpes only </p>
      </div>

    



    <Navbar  expand="lg" className="navbarbgcolor"  data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://img.freepik.com/free-vector/modern-money-logo-concept_23-2147880106.jpg" className='logo' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            
          >
            <Nav.Link as={Link} to='/home' className='Navbtn' >Home</Nav.Link>
            <Nav.Link as={Link} to='/about' className='Navbtn'>About Us</Nav.Link>
            <Nav.Link as={Link} to='/contact' className='Navbtn'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/regstration' className='Navbtn'>Registration</Nav.Link>
            
            
          </Nav>
          <button onClick={Gologin} className=" btnlogin"><MdLogout/>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}
