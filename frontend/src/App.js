import './App.css';
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import TotalContacts from "./pages/TotalContacts.js";
import Upload from './components/Upload';
import { useState } from 'react';

function App() {
  const [token,settoken] = useState()
  const gettoken =(gentoken) =>{
    settoken(gentoken)
    console.log("gentoken",gentoken)
  }
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Signin signintoken={gettoken} />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/contact" element = {<TotalContacts sendtoken={token} />} />
        <Route path='/upload' element={<Upload sendtoken={token}/>}/>
      </Routes>
    </>
  );
}

export default App;
