import { useEffect, useState } from "react"
import Adduser from "./addUser/Adduser";
import { db} from "../../lib/firebase";
import { useuserStore } from "../../lib/userstore";
import { doc, onSnapshot } from "firebase/firestore";
const Chatlist = () => {
  const [chats,setChats]=useState([])
  const [addMode,setaddMode]=useState(false)
  const { currentUser}=useuserStore()
  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
        setChats(doc.data());
});
    return ()=>{
      unSub();
    }
  },[currentUser.id])
  console.log(chats)
  return (
    <div className="flex-1 flex flex-col ">
      <div className="flex items-center gap-5 p-5">
        <div className="flex-1 bg-blue-950 flex items-center gap-5 rounded-lg ">
          <img src="./search.png" alt="" className="h-9 md:h-5"/>
          <input type="text" placeholder="search" className="bg-transparent border-none outline-none text-white flex-1"/>
          </div>
          <img src={addMode?"./minus.png":"./plus.png"} alt="" className="h-8 w-8 cursor-pointer bg-blue-950 p-3" onClick={()=>setaddMode((prev) =>!prev)}/>
      </div>
     {chats.map((chat)=>(

     ))}
      
      
      {addMode && <Adduser/>}
    </div>
  )
}

export default Chatlist

