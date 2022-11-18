import React from 'react'
import FormSignup from './FormSignup'
import './Form.css'

const Form = () => {
  return (
    <div className='form-container'>
      <div className='close-btn'>x</div>
      <FormSignup/>
    </div>
  )
}

export default Form