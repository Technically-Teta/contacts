
 import { Link } from 'react-router-dom';

 // eslint-disable-next-line react/prop-types
const AppHeader = ({ title }) => {

  // import Navbar from 'react-bootstrap/Navbar';
  // import Form from 'react-bootstrap/Form';
  // import Button from 'react-bootstrap/Button';
  // import InputGroup from 'react-bootstrap/InputGroup';
  // import Row from 'react-bootstrap/Row';
  // import Col from 'react-bootstrap/Col';
  
  // function ContactHeader() {
  //   return (
  //     <Navbar className="bg-body-tertiary justify-content-between">
  //       <Form inline>
  //         <InputGroup>
  //           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
  //           <Form.Control
  //             placeholder="Username"
  //             aria-label="Username"
  //             aria-describedby="basic-addon1"
  //           />
  //         </InputGroup>
  //         <Navbar.Text>
  //           Signed in as: <a href="#login">Samelia Quioh</a>
  //         </Navbar.Text>
  //       </Form>
  //       <Form inline>
  //         <Row>
  //           <Col xs="auto">
  //             <Form.Control
  //               type="text"
  //               placeholder="Search"
  //               className=" mr-sm-2"
  //             />
  //           </Col>
  //           <Col xs="auto">
  //             <Button type="submit">Submit</Button>
  //           </Col>
  //         </Row>
  //       </Form>
  //     </Navbar>
  //   );
  // }
  
 



  return (
    <div className="contactheader">
      <nav className="bg-body-tertiary">
        <h4 className="text-light">{title}</h4>
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-right">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactlist">
                contactlist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createcontact3">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewcontact">
                View-Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addcontact">
                Add-New-Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactlist">
                contactlist
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;
