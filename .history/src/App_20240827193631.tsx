import { useEffect, useState } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./components/lib/firebase";
import { useuserStore} from "./components/lib/userstore";
function App() {
  
  const {currentUser,isLoading,fetchUserInfo} =useuserStore()
  useEffect(()=>{
     const checker=onAuthStateChanged(auth,(user)=>{
       fetchUserInfo(user?.uid)
     })
     return ()=>{
       checker()
     }
  },[fetchUserInfo])
  console.log(currentUser)
  if(isLoading) return <div className="p-12 text-[2.2rem] rounded-lg">loading ...</div>
  return (
    <div className="container11 rounded-xl flex text-white bg-[rgba(17,25,40,0.75)] text-[0.875rem]"> 
      {
       currentUser? (
        <>
        <List/>
         <Chat/>
         <Detail/>
        </>
       ):(<Login />)
      }
      <Notification/>
     </div>
  )
}

export default App