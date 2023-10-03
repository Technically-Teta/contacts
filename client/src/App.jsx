import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactHeader from './components/contactheader';
import Home from './components/Home';
import ContactList from './components/contactlist';
import AddContact from './components/addcontact';
import CreateContact3 from './components/createcontact3';
import ViewContact from './components/viewcontact';


function App() {
  



  return (
    <div className="App">
    <h1>Personal Contacts App </h1>
    <BrowserRouter>   
      <ContactHeader/>
 
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contactlist/:coid' element={<ContactList/>}></Route>
      <Route path='/createcontact3/:coid' element={<CreateContact3/>}></Route>
      <Route path='/viewcontact' element={<ViewContact/>}></Route>
      <Route path='/addcontact' element={<AddContact/>}></Route>
      <Route path='/contactlist' element={<ContactList/>}></Route>

``


    </Routes>


  </BrowserRouter>
  </div>

  )
  
}

export default App
 