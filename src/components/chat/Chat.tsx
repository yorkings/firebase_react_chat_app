import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import "./chat.css";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import {db } from "../lib/firebase";
import {usechatStore} from "../lib/userchatStore";
import {useuserStore} from "../lib/userstore";
import { toast } from "react-toastify";
const Chat = () => {
  const {chatId,user} =usechatStore()
  const {currentUser}=useuserStore()
  const [chats,setChats]=useState()
  const [open,setopen]=useState(false)
  const [text,setText]=useState("")
  const endRef=useRef(null) 

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [])

  useEffect(() => {
    const onSub = onSnapshot(doc(db, 'chats',chatId), (res) => {
      setChats(res.data());
    });
  
    return () => {
      onSub(); // This should be unsubscribing, so it's better to return the unsubscribe function directly.
    };
  }, [chatId])

  const handleEmoji= e =>{
     setText(prev=>prev+e.emoji)
     setopen(false)
  }
  const handleSend=async()=>{
    if(text === "")return;
    try {
       await updateDoc(doc(db,"chats",chatId),{
        messages:arrayUnion({
          senderId:currentUser,
          text:text,
          createdAt:new Date()
        }),
       })
       const userIds=[currentUser.id,user.id]
       userIds.forEach(async(id)=>{
        const userchatRef=doc(db,'userchats',id)
       const userchatsnap=await getDoc(userchatRef)
       if(userchatsnap.exists()){
         const chatdata=userchatsnap.data()
         const chatIndex=chatdata.chats.findIndex(c => c.chatId===chatId)
         chatdata[chatIndex].lastmessage =text;
         chatdata[chatIndex].isSeen =id===currentUser.id ? true : false;
         chatdata[chatIndex].updatedAt =Date.now()
         await updateDoc(userchatRef,{
           chats:chatdata.chats,
         })
       }
       })
       

    } catch (error) {
       toast.error("unexpected error")
    }
  }
  return (
    <div className="flexme2 border-l-2 border-solid border-l-slate-400 border-r-2  border-r-slate-400 h-[100%] flex flex-col">
      <div className="p-5 flex items-center justify-between border-b-2  border-b-slate-400 ">
        <div className="flex items-center gap-5"> 
          <img src="./avatar.png" alt=""  className="h-14 w-14 rounded-full object-cover"/>
          <div className="flex flex-col gap-1">
            <span className="text-lg">joe</span>
            <p className="text-xs font-light text-[#a5a5a5]">Lorem ipsum dolor,</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src="./phone.png" alt="" className="w-5 h-5"/>
          <img src="./video.png" alt="" className="w-5 h-5"/>
          <img src="./info.png" alt="" className="w-5 h-5"/>
       </div>
      </div>
      
      <div className="p-3 flexme overflow-y-scroll flex flex-col gap-5 custom-scrollbar text-sm">
        {chats?.messages?.map(mess =>(
          <div className="max-w-[80%] flex gap-5" key={mess?.createdAt}>
          <img src={mess.img} alt=""  className="w-12 h-12 rounded-full object-cover"/>
          <div className="flexme flex flex-col gap-1">
            <p className="p-3 bg-[rgba(17,25,40,0.3)] rounded-lg">
              {mess.text}
            </p>
            <span>1 min</span>
          </div>
        </div>
        ))}
        
        <div className="" ref={endRef}></div>
      </div>

      <div className="p-5 flex items-center justify-center border-t-2 border-solid border-t-[#dddddd35] gap-4 mt-auto">
        <div className="flex gap-5">
            <img src="./img.png" alt=""  className="w-5 h-5 cursor-pointer"/>
            <img src="./camera.png" alt="" className="w-5 h-5 cursor-pointer" />
            <img src="./mic.png" alt="" className="w-5 h-5 cursor-pointer"/>
        </div>
        <input type="text" placeholder="type your message..." className="flexme bg-[rgb(17,25,40,0.5)] border-none outline-none text-white p-5 rounded-lg text-xs" value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className="relative">
          <img src="./emoji.png" alt="" className="w-5 h-5 cursor-pointer" onClick={()=>{setopen((prev)=>!prev)}}/>
         <div className="absolute bottom-12 left-0">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
         </div>
        </div>
        <button className="bg-[#5183fe] py-3 px-5 border-none rounded-md text-white" onClick={handleSend}>send</button>
      </div>
    </div>
  )
}

export default Chat