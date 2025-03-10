import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdLogout } from "react-icons/md";
import '../css/header.css'
export default function Header() {
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
            <Nav.Link as={Link} to='/home' className='Navbtn'>About Us</Nav.Link>
            <Nav.Link as={Link} to='/home' className='Navbtn'>ContactUs</Nav.Link>
            <Nav.Link as={Link} to='/home' className='Navbtn'>About</Nav.Link>
            
            
          </Nav>
          <button  className=" btnlogin"><MdLogout/>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}
