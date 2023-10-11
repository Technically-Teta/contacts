import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactHeader from './components/contactheader';
import Home from './components/Home';

function App() {
  




  return (
    <div className="App">
    <h1>Techtonica Contacts list</h1>
    <BrowserRouter>   
      <ContactHeader/>
 
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>component









    </Routes>


  </BrowserRouter>
  </div>

  )
  
}

export default App
