export default function validate(values){
   let error={} 

   if(!values.username.trim()){
      error.username="Username required"
   }
   if(!values.password.trim()){
      error.password="Password required"
   }
       
   if(!values.email.trim()){
      error.email="email required"
   }else if(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(values.email)){
      error.email="Email address is invalid "
   }

   if(!values.password.trim()){
      error.password="Password required"
   }else if(values.password.length<6){
      error.password="Password lenth is too short"
   }

   if(!values.password2.trim()){
      error.password2="Confirm password required"
   }else if(values.password2!=values.password){
      error.password2=" password do not match"
   }

   return error
}