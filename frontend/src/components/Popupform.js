import React, { useState } from 'react'
import {Modal,ModalBody,ModalHeader,Row,Col} from 'reactstrap';
import "./popup.css";
const Popupform = () => {
    const [modal,setmodal] = useState(false)
    const [name,setname]  = useState("")
    const [designation,setdesignation] =useState("")
    const [company,setcompany] =useState("")
    const [industry,setindustry] =useState("")
    const [email,setemail] =useState("")
    const [phonenumber,setphonenumber] =useState("")
    const [country,setcountry] =useState("")
    // const [test,settest]  = useState()
    const onSubmits = async (e) =>{
        e.preventDefault();
        const formdata = {
            name , designation , company , industry, email, phonenumber, country
        }
        console.log(formdata)
        var res = await fetch(process.env.REACT_APP_API + "/api/v1/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : "Bearer " + localStorage.getItem("token")
             },
            body: JSON.stringify(formdata),
          });
          console.log("print res")
          console.log(res);
          console.log(res.status)
        //   settest(res.status)
        //   console.log("test",test)
        const result = await res.json()
        console.log(result)
        console.log(result.name)
        if (res.status===200){
            window.alert("register successful")
        }
        //   settest(result.name)
        //   console.log("test",test)

    }
  return (
      <>
           <div className='popup'>
            <Modal size="lg" isOpen={modal} toggle={()=>setmodal(!modal)}>
                <ModalHeader toggle={()=>setmodal(!modal)}>
                    Fill the details 
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={onSubmits}>
                    <Row>
                        <Col lg={12}>
                            <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter contact name' />
                        </Col>
                        <Col>
                            <input type="text" name="designation" value={designation} onChange={(e)=>setdesignation(e.target.value)} placeholder='Designation' />
                        </Col>
                        <Col>
                            <input type="text" name="company" value={company} onChange={(e)=>setcompany(e.target.value)} placeholder='Company' />
                        </Col>
                        <Col>
                            <input type="text" name="industry" value={industry} onChange={(e)=>setindustry(e.target.value)} placeholder='Industry' />
                        </Col>
                        <Col>
                            <input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='email' />
                        </Col>
                        <Col>
                            <input type="text" name="phonenumber" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} placeholder='Phone Number' />
                        </Col>
                        <Col>
                            <input type="text" name="country" value={country} onChange={(e)=>setcountry(e.target.value)} placeholder='Country' />
                        </Col>
                    </Row>
                    <button className='btn-form'  type='submit' >register</button>
                    </form>
                </ModalBody>
            </Modal>
            </div>
            <button className='btn-pop' onClick={()=>setmodal(true) }>Add Contact</button>
    </>
  )
}
export default Popupform










