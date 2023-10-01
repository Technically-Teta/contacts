
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ContactHeader = ({ title }) => {
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

export default ContactHeader;
