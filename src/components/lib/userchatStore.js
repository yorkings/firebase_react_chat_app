import { create } from 'zustand'

import {useuserStore } from './userstore'

export const usechatStore = create((set) => ({
  chatId:null,
  user:null,
  iscurrentUserBlocked:false,
  iscurrentrecieverBlocked:false,
  changeChat:(chatId,user)=>{
    const currentuser =useuserStore.getState().currentUser 
    //user blocked
    if(user.blocked.includes(currentuser.id)){
        return set({
            chatId,
            user:null,
            iscurrentUserBlocked:true,
            iscurrentrecieverBlocked:false,
        })
    }
    //reciever blocked
    else if(currentuser.blocked.includes(user.id)){
        return set({
            chatId,
            user:user,
            iscurrentUserBlocked:true,
            iscurrentrecieverBlocked:true,
        })
    }
    else{ 
      return set({
        chatId,
        user,
        iscurrentUserBlocked:false,
        iscurrentrecieverBlocked:false,
    })
    } 
 },
 
  
}))
