import React from 'react'

const LoginInput = ({label, value, type, onChangeHandler}) => {
  return (
    <div className="inputWrapper">
      <label htmlFor={label}>{ label }</label>
      <input
        type={type}
        value={value}
        id={label}
        name={label}
        required
        onChange={onChangeHandler}
      /> 
    </div>
  )
}

export default LoginInput