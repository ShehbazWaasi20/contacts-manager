import React, { useState } from 'react'
import selectDate from "../utils/selectDate.svg";
import './contactlist.css';
import deleteimg from "../utils/delete.svg";
// import importbtn from "../utils/import.svg";
import exportimg from "../utils/export.svg";
import singleDelete from "../utils/singleDelete.png"
import Upload from './Upload';

function Contactlist() {
    const [contacts,setcontacts] = useState([]);
    console.log("token for sending to backend" , localStorage.getItem("token"));
    const importlist = async() =>{
        const res = await fetch(process.env.REACT_APP_API + "/api/v1/contacts",{
            method:"GET",
            headers: {
                 "Content-Type": "application/json" ,
                Authorization : "Bearer " + localStorage.getItem("token"),
            },
        })
        console.log(res.status)
        console.log(res)
        console.log(typeof(res))
        const data = await res.json();
        console.log(data)
        setcontacts(data)
    }
    const deletecontact =async (contact) =>{
        console.log(contact)
        const res = await fetch(process.env.REACT_APP_API + "/api/v1/contacts/"+contact,{
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                Authorization : "Bearer " + localStorage.getItem("token"),
             },
        })
        console.log(res.status)
        const update = await fetch(process.env.REACT_APP_API + "/api/v1/contacts",{
            method:"GET",
            headers: {
                 "Content-Type": "application/json",
                 Authorization : "Bearer " + localStorage.getItem("token"),
              },

        })
        const result = await update.json();
        setcontacts(result)
    }
    console.log("test state", contacts)
  return (
         <div className="mainpage">
             <section>
             <div className="filter">
            <div>
                   <img src={selectDate} alt="selectDate" />
            </div>
            <div>
              <img src={deleteimg} alt="deletebtn" />
              {/* <button className='importbtn' onClick={importlist}>  
                  <img src={importbtn} alt="import" />
              </button> */}
              <Upload onClick={importlist}/>
              <img src={exportimg} alt="export" />
            </div>
            </div>
             </section>
             <div className='table-div'>
             <table class="content-table">
          <thead className='table-head'>
              <th>Name</th>
              <th>Designation</th>
              <th>Company</th>
              <th>Industry</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Country</th>
              <th>Action</th>
          </thead>
          <tbody className='table-body'>
              {contacts.map((contact)=>(
                  <tr key={contact._id}>
                      {/* {Object.values(contact).map((val)=>(
                          <td>{val}</td>
                      ))} */}
                      <td>{contact.name}</td>
                      <td>{contact.designation}</td>
                      <td>{contact.company}</td>
                      <td>{contact.industry}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phonenumber}</td>
                      <td>{contact.country}</td>
                      <td><button className='deletebtn' onClick={()=>deletecontact(contact._id)}><img src={singleDelete} alt="delete"></img> </button></td>
                  </tr>
              ))}
          </tbody>
      </table>
      </div>
    </div>
  )
}

export default Contactlist



