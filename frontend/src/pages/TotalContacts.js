import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Contactlist from '../components/Contactlist';
import "./totalcontacts.css"


function TotalContacts() {
  return (
    <div className='Totalcontacts'>
        <Sidebar/>
        <Header/>
        <Contactlist/>
    </div>
  )
}

export default TotalContacts;
