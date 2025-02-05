import React from 'react'

const LoginInput = ({label, value, type, onChangeHandler}) => {
  const formatLabel = (string) => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1 $2'); 
  }

  return (
    <div className="inputWrapper">
      <label htmlFor={label}>{ formatLabel(label) }</label>
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