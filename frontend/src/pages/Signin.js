import "./signin.css";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useStateValue } from "../content/StateProvider";
import dot from "../utils/dot.svg";
import bigCircleL from "../utils/bigCircleL.svg";
import bigCircleR from "../utils/bigCircleR.svg";
import eye from "../utils/eye.svg";
import { motion } from "framer-motion";
// import Cookies from "js-cookie";

const Signin = ({signintoken}) => {
  // const [token,settoken] = useState()
  const navigate = useNavigate();
  const passRef = useRef();
  // const [state, dispatch] = useStateValue();
  const SubmitLogin = async (e) => {
    try {
      console.log(e)
      e.preventDefault();
      const data = {
        email: e.target.elements.log_email.value,
        password: e.target.elements.log_password.value,
      };
      console.log(data)
      console.log(data.email)
      const proRes = await fetch(process.env.REACT_APP_API+ "/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(proRes)
      console.log(proRes.status)
    
     

      // const accessToken = res.token
      // console.log(accessToken) 
      // Cookies.set("access", accessToken)
     
      
      if (proRes.status === 400 || !data){
        window.alert("User not found")
      }if(proRes.status === 404){
        window.alert("Invalid password")
      }
      if(proRes.status===200){
        const res =await proRes.json()
        console.log(res)
        console.log(res.token)
        console.log("uselrname is", res.useremail)
        window.localStorage.setItem('email',res.useremail)
        window.localStorage.setItem('token',res.token )
        window.alert("signin successfull")
        navigate("/contact")
      }
    }
     catch (error) {
      console.log("error", error)
    }
  }

  // const refreshUser  = async () => {
  //   const jsonData = await fetch("", {
  //     method: "GET",
  //     headers: {
  //       authorization: state.user.token,
  //     },
  //   });
  //   const data = await jsonData.json();
  //   if (data.status === "sucess") {
  //     navigate("/contact");
  //   }
  // };
  // useEffect(() => {
  //   refreshUser ();
  // }, []);
  function showPassword(e) {
    var x = passRef.current;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  return (
    <section className="loginContainer">
      <img src={bigCircleL} alt="bigCircle" className="bigCircle left" />
      <div className="mainLogIn">
        <img src={dot} alt="dotLeft" className="dotLeft" />
        <form method="POST" className="signForm" onSubmit={SubmitLogin}>
          <div className="logo">Logo</div>
          <div className="detail">
            Enter your credentials to access your account
          </div>
          <input
            type="email"
            placeholder="User Id"
            id="log_email"
            className="inputauth"
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="log_password"
            className="inputauth"
            required
            ref={passRef}
          />
          <motion.img
            whileTap={{ scale: 0.95 }}
            src={eye}
            alt="eye"
            onClick={showPassword}
            className="signineye"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn"
            // onClick={() => signintoken(signtoken)}
          >
            Sign In
          </motion.button>
          <Link to="/signup" className="linkLogin">
            Sign up
          </Link>
        </form>
        <img src={dot} alt="dotRight" className="dotRight" />
      </div>
      <img src={bigCircleR} alt="bigCircle" className="bigCircle right" />
    </section>
  );
};
export default Signin;




