import React, { useState } from 'react'

import "./signupModal.css"; 

import LoginInput from '../../loginInput'; 

const SignUpModal = ({closeModal, registerUser}) => {

  const [newUsername, setNewUsername] = useState(''); 
  const [newPassword, setNewPassword] = useState(''); 
  const [retypePassword, setRetypePassword] = useState('');

  return (
    <div className='signupModal'>
      <div className='modalBackground' onClick={closeModal}></div>
      <div className="modalCard">
        <form className="signupForm" onSubmit={registerUser}>
          <LoginInput
            type="text"
            label="New Password; "
            onChangeHandler={() => {}}
            value={newUsername}
          /> 

          <LoginInput
            type="password"
            label="New Password"
            onChangeHandler={() => {}}
            value={newPassword}
          /> 

          <LoginInput
            type="text"
            label="Retype Password"
            onChangeHandler={() => {}}
            value={retypePassword}
          /> 

          <div className="buttonRow">
            <button type="button" onClick={closeModal} className='closeButton'>
              Close
            </button>

            <button type="submit" disabled={retypePassword !== newPassword ? 'true' : ''} className='registerButton'> 
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpModal