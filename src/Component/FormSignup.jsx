import React from 'react'
import useForms from '../Hooks/useForms'
import validate from '../Utils/validate'
import './Form.css'

const FormSignup = () => {
 
   const {handleChange,values,handleSubmit,error}=useForms(validate)

       

  return (
    <div className='form-content-right'>
      
      <form className='form'  onSubmit={handleSubmit}>
         <h1>Get started with me</h1>          
         <div className="form-inputs">
            <label className='form-label'>Username</label>
               <input type="text" name="username" className='form-input'  placeholder='Username' value={values.username} onChange={handleChange}/>
               {error.username&&<p>{error.username}</p>}
         </div>
         <div className="form-inputs">
            <label className='form-label'>Email </label>
               <input type="email" name="email" className='form-input'  placeholder='Email' value={values.email} onChange={handleChange}/>
               {error.email&&<p>{error.email}</p>}
           
         </div>
         <div className="form-inputs">
            <label className='form-label'>Password </label>
               <input type="password" name="password" className='form-input'  placeholder='Password' value={values.password} onChange={handleChange}/>
               {error.password&&<p>{error.password}</p>}
               
         </div>
         <div className="form-inputs">
            <label className='form-label'>Confirm Password </label>  
               <input type="password" name="password2" className='form-input'  placeholder='Confirm Password' value={values.password2} onChange={handleChange}/>
               {error.password2&&<p>{error.password2}</p>}
                
         </div>
         <button  className='form-input-btn' type="submit">Signup</button>
         <span className="form-input-login">Already login ? Login <a href="#">click</a></span>
              
      </form>
      </div>
  )
}

export default FormSignup