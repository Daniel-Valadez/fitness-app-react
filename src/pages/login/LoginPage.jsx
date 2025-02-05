import React, {useState, useEffect} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./login.css"; 

//Functional Components
import LoginInput from '../../components/loginInput';

//Modals
import SignUpModal from '../../components/modals/signup/SignUpModal';


const LoginPage = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showSignup, setShowSignup] = useState(false); 

  const updateUsername = ({target}) => {
    setUsername(target.value); 
  }

  const updatePassword = ({target}) => {
    setPassword(target.value); 
  }

  const toggleModal = () => {
    setShowSignup(!showSignup); 
  }

  const validateCredentials = async (event) => {
    event.preventDefault(); 
    try {
      let url = `/api/users?username=${username}&password=${password}`; 
      const response = await fetch(url)
      const data = await response.json(); 

      console.log("This is the data"); 
    } catch (error) {
      console.log("this is the error", error) ; 
    } finally {
      console.log("finally"); 
    }
  }

  /* const submitForm = () => {
  }*/ 

  return (
    <div className="loginPage">
      <div className="loginHeader">
        <FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
        <h1>Workouts Built For You, By You</h1>
      </div>

      <div className="loginPageInner">
        <form className="userCredentials" onSubmit={validateCredentials}>
          <p>
            <em>Please enter your account details.</em> 
          </p>

          <LoginInput 
            label="Username"
            type="text"
            value={username}
            onChangeHandler={updateUsername}
          />

          <LoginInput
            label="Password"
            type="password" 
            value={password}
            onChangeHandler={updatePassword}
          /> 

          <button
            type="button"
            className="modalButton"
          >
            Forgot Password
          </button>

          <button 
            type="submit"
            className="loginButton" 
          >
            Sign In
          </button>

          <button 
            type="button"
            className="modalButton"
            onClick={toggleModal}
          >
            Create Account
          </button>
        </form> 
      </div>

      {showSignup ? <SignUpModal closeModal={toggleModal} /> : ''}
    </div>
  )
}

export default LoginPage