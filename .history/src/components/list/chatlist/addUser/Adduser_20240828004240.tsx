import { collection, doc, getDocs, query, queryEqual, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../lib/firebase";
import { useState } from "react";

const Adduser = () =>{
  const [user,setUser]=useState(null)
  const handleSearch=async(e)=>{
    e.preventDefault()
    const formdata=new FormData(e.target)
    const username=formdata.get("username")
    try { 
        const citiesRef = collection(db, "users");
        const q = query(citiesRef, where("username", "==", username));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
          setUser(querySnapshot.docs[0].data())
        }
    } catch (err) {
      toast.error(err)
    }
  } 
  const handleAdd=async()=>{
    const chatRef=collection(db,"chats")
    const userchatRef=collection(db,"userchats")
    try {
       await setDoc(doc(d))
     }catch (err) {
      
     }
  }
  return (
    <div className="h-max w-max p-7 rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto bg-[rgba(21,23,27,0.9)]">
      <form className="flex gap-5" onSubmit={(e)=>handleSearch(e)}>
        <input type="text" name='username' placeholder='username' className="p-5 border-none rounded-lg outline-none"/>
        <button className="p-5 border-none rounded-lg bg-[#1a73e8] cursor-pointer">Search</button>
      </form> 
      {user && 
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center justify-between gap-5">
          <img src={user.avatar ||"./avatar.png"} alt="" className="h-12 w-12 rounded-full object-cover" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>add user</button>
      </div> }
      
    </div>
  )
}

export default Adduser
