
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'

function ContactHeader() {
  return (
    <div className='nav-bar'>
     
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav- cont'>
        <Navbar.Brand href="#home">Personal Contacts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">View Contact</Nav.Link>
            <li className="nav-item">
          <Link className='nav-link' to="/createcontact3">Employee</Link>
          </li>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  




    </div>
  )
}

export default ContactHeader
