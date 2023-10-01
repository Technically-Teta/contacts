import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {Link, useNavigate } from 'react-router-dom'; 


 function Contactlist() {
 const [contactData, setContactData] =useState([])

  const navigate=useNavigate()
  const Redirectdetail=(id) => {
    navigate('/viewcontact/' + id)

  }

 const getRequest = () => {
  fetch("http://localhost:3000/api/contacts")
  .then((response) => response.json())
  .then(contactData => {
    setContactData(contactData); 
    console.log('Events fetched...', contactData);
    });
}


  




useEffect(() => {getRequest()}, []);

  return (
    <div>
      <h3>Personal Contacts App</h3>
      <Table className='table' striped="columns">
  <thead>
    <tr>
      <th>#Id</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    {contactData.map(item =>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.fullName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.notes}</td>
        <td> <Link className="btn btn-primary" to={"/viewcontact/" + item.id}> Details</Link></td>
        <td><button className="btn btn-primary"  onClick={()=>{Redirectdetail(item.id)}}>Details</button></td>
      </tr>
    )}
  </tbody>
</Table>
</div>
  )
 


}


export default Contactlist;




