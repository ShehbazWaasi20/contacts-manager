import React from 'react'
import './sidebar.css'
import signout from "../utils/signOut.svg";
// import totalContact from "../utils/totalContact.svg"
import dashboard from "../utils/dashbord.svg"
import Popupform from './Popupform';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const deletetoken = () =>{
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("email")
  }
  return (
    <div className='asidebar'>
        <b>Logo</b>
        <span className='dashboard'><img src={dashboard} alt="dashboard" /></span>
        {/* <span className='Totalcontact'><img src={totalContact} alt="totalcontacts" /> </span> */}
        <Popupform className="popup-component"/>
        <Link to="/"><button className='logout'  onClick={deletetoken}>
            <img src={signout} alt="signout" />
        </button></Link>
      
    </div>
  )
}

export default Sidebar;

