import { create } from 'zustand'
import { getDoc,doc } from 'firebase/firestore';
import { db } from "./firebase";

export const useuserStore = create((set) => ({
  chatId:null,
  user:null,
  iscurrentUserBlocked:false,
  iscurrentrecieverBlocked:false,
  changeChat:(chatId,user)=>{
    const currentUser=useuserStore.getState().currentUser
    //user blocked
    if(user.blocked.includes(currentUser.id)){
        return set({
            chatId:null,
            user:null,
            iscurrentUserBlocked:true,
            iscurrentrecieverBlocked:false,
        })
    }
    //reciever blocked
    if(currentuser.blocked.includes(user.id)){
        return set({
            chatId:null,
            user:user,
            iscurrentUserBlocked:true,
            iscurrentrecieverBlocked:true,
        })
    }
  },
  changeBlock:()=>{
    set(state=>({...state,iscurrentrecieverBlocked:!state.iscurrentrecieverBlocked}))
  }
  
}))
