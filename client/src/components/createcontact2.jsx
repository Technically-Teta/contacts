import React, { useState, useEffect, Fragment } from "react";

function CreateContact2() {
  // Use states
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  // Function to fetch contacts
  const getRequest = () => {
    fetch(`http://localhost:3000/api/contacts`)
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
        console.log('Contacts fetched...', contacts);
      });
  };

  // Function to add a new contact
  const handlePOSTRequest = (data) => {
    fetch("http://localhost:3000/api/contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("inside the post line 30", data);
        setContacts([...contacts, data]);
      });
  }

  // Function to edit a contact
  const modContact = (contact) => {
    setEditContact(true);
    setCurrentContact(contact);
  };

  // Function to update a contact
  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)));
  };

  const handleEditSubmit = async (updatedContact) => {
    const response = await fetch(
      `http://localhost:4000/api/contacts/${updatedContact.id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedContact)
      }
    );
    const result = await response.json();

    updateContact(result.id, updatedContact);
    setCurrentContact(result);

    setEditContact(false);
  };

  // Use effect to fetch data when the component mounts
  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="app-container">
        <form onSubmit={handlePOSTRequest}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Notes</th>
                    </tr>
               </thead>
               <tbody>
                {contacts.map((contact) => (
                 <Fragment>
                    {editContact === contact.id ? (
                        <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        />
                         ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
                         
                          











      
    </div>
  )
}

export default CreateContact2
