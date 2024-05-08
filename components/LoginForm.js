import React from 'react'
import axios from "axios";
const LoginForm = ({handleSignup , loginInfo }) => {
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        const {email, password} = data;
        console.log(email, password)

        try {
           const response =  await axios.post('/api/login',{
                email,
                password
            })
            console.log("working")

            console.log(response);

            if(response.data.status === 'success'){

                loginInfo(response.data)
            }
            
        } catch (error) {
            console.error(error)
        } finally{
            event.target.reset()
        }
    }
  return (
     <form onSubmit={handleSubmit} className="flex justify-center mt-10">
    <div className="flex flex-col text-center w-fit px-2 py-4 bg-slate-400">
    <h1>Login</h1>
     <div>
         <p className="flex justify-between text-left w-fit p-2 gap-1">
             <label className="w-[15rem]">Enter your email address</label>
             <input required name="email" className="rounded-md p-1 " type="email"/>
         </p>
         <p className="flex justify-between text-left  w-fit p-2 gap-1">
             <label className="w-[15rem]" >Enter your Password</label>
             <input required name="password" className="rounded-md p-1" type="password"/>
         </p>
         
     </div>

    <div className="flex gap-4 justify-end "><button className="py-2 px-6 rounded-md bg-slate-500" type="button" onClick={handleSignup}>signup</button> <button type="submit" className="px-6 py-2 border border-slate-700 rounded-md">login</button></div>

    </div>
</form>
  )
}

export default LoginForm