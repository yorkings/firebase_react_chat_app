import { useEffect, useState } from "react"
import Adduser from "./addUser/Adduser";
import { db} from "../../lib/firebase";
import { useuserStore } from "../../lib/userstore";
import { usechatStore } from "../../lib/userchatStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
const Chatlist = () => {
  const [chats,setChats]=useState([])
  const [addMode,setaddMode]=useState(false)
  const { currentUser}=useuserStore()
  const{chatId,changeChat} =usechatStore()
  console.log(chatId)
  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id),async (res) => {
        const items =res.data().chats;
        const promises=items.map(async(item) => {
           const userDocref=doc(db,'users',item.recieverId);
           const usersnap=await getDoc(userDocref);
           const user=usersnap.data()
           return { ...item,user}
    });
    const chatdata= await Promise.all(promises)
    setChats(chatdata.sort((a,b)=>b.updatedAt - a.updatedAt));
});
    return ()=>{
      unSub();
    }
  },[currentUser.id])
  
  const handlechat=async(chat)=>{
      changeChat(chat.chatId,chat.user)
    }
    
  
 
  return (
    <div className="flex-1 flex flex-col ">
      <div className="flex items-center gap-5 p-5">
        <div className="flex-1 bg-blue-950 flex items-center gap-5 rounded-lg ">
          <img src="./search.png" alt="" className="h-10 md:h-5"/>
          <input type="text" placeholder="search" className="bg-transparent border-none outline-none text-white flex-1"/>
          </div>
          <img src={addMode?"./minus.png":"./plus.png"} alt="" className="h-8 w-8 cursor-pointer bg-blue-950 p-3" onClick={()=>setaddMode((prev) =>!prev)}/>
      </div>
     {chats.map(chat=>(
      <div className="flex items-center p-5 gap-5 cursor-pointer  border-b-2 border-solid  border-b-white " key={chat.chatId} onClick={()=>handlechat(chat)} style={{
        backgroundColor:chat.isSeen ? "transparent":"#5183fe"
      }}>
        <img src={chat.user.avatar ||"./avatar.png"} alt="" className="h-12 w-12 rounded-full object-cover"/>
        <div className="flex flex-col">
          <span className="font-medium">{chat.user.username}</span>
          <p className="text-xs font-light">{chat.lastmessage}</p>
        </div>
      </div>
     ))}
      
      
      {addMode && <Adduser/>}
    </div>
  )
}

export default Chatlist

