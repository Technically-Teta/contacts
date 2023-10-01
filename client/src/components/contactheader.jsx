

import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'

const ContactHeader = ({title}) => {
  return (
    <div className='nav-bar'>
     
    <nav className="bg-body-tertiary">
      <Container className='nav- cont'>
      <h4 className='text-light'>{title}</h4>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarNav">
      <ul className="navbar-nav text-right">
        <li className="nav-item">
        <Link className='nav-link active' to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="/addcontact">Add-New-Contact</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/contactlist">contactlist</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/createcontact3">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/viewcontact">View-Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
         
  




    </div>
  );
}

export default ContactHeader
