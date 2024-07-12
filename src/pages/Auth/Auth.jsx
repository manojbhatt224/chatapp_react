import React, {useState, useEffect} from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch=useDispatch()
  
  const [confirmPass, setConfirmPass] = useState(true);
  const [isSignUp,setIsSignUp] = useState(false);
  const [userData, setUserData]=useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  })
  const handleChange=(e)=>{
   setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isSignUp){
      console.log("Sign Up Section")
      userData.password=== userData.confirmPass? dispatch(signUp(userData)) : setConfirmPass(false)
    }
    else{
      dispatch(logIn(userData))
    }
   
  }
  const resetForm=()=>{
    setConfirmPass(true);
    setUserData(
      {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass: "",
      }  
    )
  }
  
  //   useEffect(() => {
  //   console.log(userData); // Log the updated userData after state has been updated
  // }, [userData]);


  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Rocket Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>


      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname" value={userData.firstname}
                onChange={handleChange}

              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname" value={userData.lastname}
                onChange={handleChange}

              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Email"
              className="infoInput"
              name="email" value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password" value={userData.password}
              onChange={handleChange}

            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass" value={userData.confirmpass}
                placeholder="Confirm Password" 
                onChange={handleChange}

              />
            )}
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
            <span onClick={()=>{setIsSignUp((prev)=>!prev); resetForm()}}
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
            // disabled={loading}
            >
              {isSignUp ? "SignUp" : "Login"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
