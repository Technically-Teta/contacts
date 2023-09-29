import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact3() {
// HANDLES THE FORM TO SUBMIT THE EDIT REQUEST       
    // Use states
    const [contacts, setContacts] = useState([]);
    const [id, idchange] = useState(0);
    const [fullname, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [notes, noteschange] = useState('');
    const navigate = useNavigate();


  
    // Function to fetch contacts
    const getRequest = () => {
      fetch(`http://localhost:3000/api/contacts`)
        .then((response) => response.json())
        .then((contacts) => {
          setContacts(contacts);
          console.log('Contacts fetched...', contacts);
        });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const contactInfo = { id, fullname, email, notes };

       fetch(`http://localhost:4000/api/contacts/` +id,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactInfo)
        }
      
    ).then(() => {
        //console.log("data added");
        navigate(-1);
    }).catch((err) => {
        console.log(err.message);
    })
}



    // Use effect to fetch data when the component mounts
    useEffect(() => {
      getRequest();
    }, []);
  
    return (
        <div>
          
        </div>
      )
    }
    
    export default CreateContact3
    