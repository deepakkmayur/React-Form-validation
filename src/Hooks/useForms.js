import React, { useState } from 'react'

const useForms = (validate) => {
   const [values,setValues]=useState({
      username:"",
      email:"",
      password:"",
      password2:""
   })
   const [error,setError]=useState({})    

   const handleChange=(event)=>{
      const {name,value}=event.target
      setValues((prev)=>{   
         return {...prev,[name]:value}
         console.log(name);
      })
    }
    const handleSubmit=(event)=>{
      event.preventDefault()
    setError(validate(values))
    }
    return {handleChange,values,handleSubmit,error}
}

export default useForms