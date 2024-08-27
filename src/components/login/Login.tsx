import { useState } from "react";
import "./login.css"
import { doc, setDoc } from "firebase/firestore"; 
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import  {db,auth} from'../lib/firebase';
import upload from "../lib/Upload";
const Login = () => {
  const [avatar,setAvatar]=useState({
    file:null,
    url:""
  })  
  const [loading,setLoading]=useState(false)
  const handleAvatar=e=>{
    if (e.target.files[0]) 
    {
        setAvatar({
            file: e.target.files[0],
            url :URL.createObjectURL(e.target.files[0])
        })
    }
  }
  const handleRegister=async(e)=>{
    e.preventDefault()
    setLoading(true)
    const formData= new FormData(e.target)
    const {username,email,password}=Object.fromEntries(formData)

    try{
        
       

       const res= await createUserWithEmailAndPassword(auth,email,password)
       const imgUrl= await upload(avatar.file)
       await setDoc(doc(db, "users",res.user.uid ), {
        username,
        email,
        avatar:imgUrl,
        id:res.user.uid,
        blocked:[]
      });
       
      await setDoc(doc(db, "userchats",res.user.uid ), {
        chats:[]
      });
      toast.success("Account created! You can login now!")
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
    finally{
      setLoading(false)
    }
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const {email,password}=Object.fromEntries(formData)
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth,email,password); 
      toast.success("Sign in succesfully")

    } catch (error) {
       toast.error("invalid credentials!")
    }
    finally{
      setLoading(false)
    }
  }


  return (
    <div className="h-[100%] w-[100%] flex items-center gap-24">
      <div className="flexme flex flex-col items-center gap-5 ">
        <h2 className="h2">welcome back,</h2>
        <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-5">
           <input type="text" placeholder="email" name="email" className="p-5"/>
           <input type="password" placeholder="password" name="password" className="p-5"/>
           
           <button className="p-5 w-[100%] cursor-pointer bg-sky-500  border-none outline-none  rounded-lg" disabled={loading}>{loading?"loading":"Sign in"}</button>
        </form>
      </div>
      <div className="h-[80%] w-1 bg-[#dddddd34]"></div>
      <div className="flexme flex flex-col items-center gap-5">
      <h2 className="h2">Create an account ,</h2>
        <form   className="flex flex-col items-center justify-center gap-5" onSubmit={handleRegister}>
            <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt=""  className="h-12 w-12 rounded-lg object-cover opacity-60"/>
            upload an image</label>
           <input type="file"  id="file" style={{display:"none"}} onChange={handleAvatar} className="p-5"/>
           <input type="text"  placeholder="username" name="username" className="p-5"/>
           <input type="email" placeholder="email" name="email" className="p-5"/>
           <input type="password" placeholder="password" name="password" className="p-5"/>
           <button className="p-5 w-[100%] cursor-pointer bg-sky-700  border-none outline-none  rounded-lg" disabled={loading}>{loading?"loading":"Sign up"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login
