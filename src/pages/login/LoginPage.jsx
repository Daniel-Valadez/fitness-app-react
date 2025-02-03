import React, {useState, useEffect} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./login.css"; 


const LoginPage = () => {
  const [userName, setUserName] = useState(''); 
  const [password, setPassword] = useState(''); 

  return (
    <div className="loginPage">
      <div className="loginHeader">
        <FontAwesomeIcon icon="fa-solid fa-heart-pulse" />
        <h1>Workouts Built For You, By You</h1>
      </div>
    </div>
  )
}

export default LoginPage