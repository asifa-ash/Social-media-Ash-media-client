import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validate from "../../util/validate";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({})

  const [confirmPass, setConfirmPass] = useState(true);

  // const dispatch = useDispatch()

 
  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {

    setConfirmPass(true);
    setErrors(validate(data))
    e.preventDefault();
    
    // if (isSignUp) {
      //   data.password === data.confirmpass
      //     ? dispatch(signUp(data, navigate))
      //     : setConfirmPass(false);
      // } else {
        //   dispatch(logIn(data, navigate));
        // }
        
        setErrors(validate(data))
        if (isSignUp&&data.password!=="") {
      data.password === data.confirmpass
      ? dispatch(signUp(data, navigate))
      : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate))
      
    }
  };


   // Reset Form
   const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };


  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>Ash Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
            
              <input
                
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p style={{color:"red"}}>{errors.firstname}</p>}
              <input
                
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
               {errors.lastname && <p style={{color:"red"}}>{errors.lastname}</p>}
            </div>
          )}

          <div>
            <input
             
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
            {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
          </div>
          <div>
            <input
             
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            {isSignUp && (
              <input
                
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
               
              />
            )}
              {isSignUp?errors.confirmpass && <p style={{color:"red"}}>{errors.confirmpass}</p>:""}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
