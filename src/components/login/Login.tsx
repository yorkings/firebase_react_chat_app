import { useState } from "react";
import "./login.css"

const Login = () => {
  const [avatar,setAvatar]=useState({
    file:null,
    url:""
  })  
  const handleAvatar=e=>{
    if (e.target.files[0]) 
    {
        setAvatar({
            file: e.target.files[0],
            url :URL.createObjectURL(e.target.files[0])
        })
    }
  }
  return (
    <div className="h-[100%] w-[100%] flex items-center gap-24">
      <div className="flexme flex flex-col items-center gap-5 ">
        <h2>welcome back,</h2>
        <form action="" className="flex flex-col items-center justify-center gap-5">
           <input type="text" placeholder="email" name="email"/>
           <input type="password" placeholder="password" name="password" />
           
           <button>Sign in</button>
        </form>
      </div>
      <div className="sep"></div>
      <div className="flexme flex flex-col items-center gap-5">
      <h2>Create an account ,</h2>
        <form action="" className="flex flex-col items-center justify-center gap-5">
            <label htmlFor="file">upload an image</label>
            <img src={avatar.url || "./avatar.png"} alt="" />
           <input type="file"  id="file" style={{display:"none"}} onChange={handleAvatar}/>
           <input type="text"  placeholder="username" name="username"/>
           <input type="text" placeholder="email" name="email"/>
           <input type="password" placeholder="password" name="password" />
           <button>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Login
