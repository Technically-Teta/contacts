const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db/db-connection.js'); 

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());



// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json("Hello I am your contacts project!");
  });

//first test with postman: 
app.get('/api/contacts', async (req, res) =>{
    //real connection with the DB 
    try{
        const { rows: contacts } = await db.query('SELECT * FROM contacts');
        console.log("In the server", contacts)
        res.send(contacts);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});

    }

})

app.post('/api/contacts', async (req, res) =>{
//ADDS INFO TO TABLE    
const contactInfo ={
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    notes: req.body.notes
};
 console.log("In the server", contactInfo)
    try {   
        const contactResult = await db.query(
        "INSERT INTO contacts (name, email, phone, notes) VALUES ($1, $2, $3, $4) RETURNING *",
            [contactInfo.name,contactInfo.email,contactInfo.phone, contactInfo.notes]
        );
       // console.log(contactResult)
        let dbResponse = contactResult.rows[0];
        //console.log(dbResponse)
        res.json(dbResponse);
    } catch(error){
        console.log(error);
        res.status(400).json({error});
    }
})



//DELETE FROM events WHERE id=5;
app.delete('/api/contacts/:id', async (req, res) =>{
    try{
    const { id } = req.params;
    const deleteOperation = await db.query("DELETE FROM contacts WHERE id=$1", [id]);
    console.log(deleteOperation);   
    res.json("The contact was deleted!");
    res.status(200).end()

    } catch(error){
        console.log(error);
        res.status(400).json({error});
    }
})

//UPDATING something in the DB
app.put('/api/contacts/:id', async (req, res) =>{

    try{
    const { id } = req.params;
    const { name, email, phone, notes }  = req.body;
    const editedContacts = await db.query("UPDATE contacts SET  name =$1, email=$2, phone=$3, notes=$4 WHERE id = $5 RETURNING *", [name, email, phone, notes, id]);
    res.json(editedContacts.rows[0])
    
   } catch(error){
    console.log(error);
    res.status(400).json({error});
   }

    
 })


app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));

