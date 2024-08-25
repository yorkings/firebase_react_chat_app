import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import "./chat.css"
const Chat = () => {
  const [open,setopen]=useState(false)
  const [text,setText]=useState("")
  const handleEmoji=e=>{
     setText(prev=>prev+e.emoji)
     setopen(false)
  }
  return (
    <div className="flex-auto border-l-2 border-solid border-l-slate-400 border-r-2  border-r-slate-400 h-[100%] flex flex-col">
      <div className="p-5 flex items-center justify-between border-b-2  border-b-slate-400 ">
        <div className="flex items-center gap-5"> 
          <img src="./avatar.png" alt=""  className="h-14 w-14 rounded-full object-cover"/>
          <div className="flex flex-col gap-1">
            <span className="text-lg">Jane doe</span>
            <p className="text-xs font-light text-[#a5a5a5]">Lorem ipsum dolor,</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src="./phone.png" alt="" className="w-5 h-5"/>
          <img src="./video.png" alt="" className="w-5 h-5"/>
          <img src="./info.png" alt="" className="w-5 h-5"/>
       </div>
      </div>
      
      <div className="p-3 flex-1 overflow-y-scroll flex flex-col gap-5 custom-scrollbar text-sm">
        <div className="max-w-[80%] flex gap-5">
          <img src="./avatar.png" alt=""  className="w-12 h-12 rounded-full object-cover"/>
          <div className="flex-1 flex flex-col gap-1">
            <p className="p-3 bg-[rgba(17,25,40,0.3)] rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore facilis porro voluptatibus fugit unde incidunt amet, tempore odio minima nihil! Ut neque maiores voluptatem in fugiat nam soluta nesciunt?
            </p>
            <span>1 min</span>
          </div>
        </div>
        <div className="max-w-[80%] flex gap-5 self-end">
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-[#5138fe]  p-3 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore facilis porro voluptatibus fugit unde incidunt amet, tempore odio minima nihil! Ut neque maiores voluptatem in fugiat nam soluta nesciunt?
            </p>
            <span>1 min</span>
          </div>
        </div>
        <div className="max-w-[80%] flex gap-5">
          <img src="./avatar.png" alt=""  className="w-12 h-12 rounded-full object-cover"/>
          <div className="flex-1 flex flex-col gap-1">
            <p className="p-3 bg-[rgba(17,25,40,0.3)] rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore facilis porro voluptatibus fugit unde incidunt amet, tempore odio minima nihil! Ut neque maiores voluptatem in fugiat nam soluta nesciunt?
            </p>
            <span>1 min</span>
          </div>
        </div>
        <div className="max-w-[80%] flex gap-5 self-end">
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-[#5138fe] p-3 rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore facilis porro voluptatibus fugit unde incidunt amet, tempore odio minima nihil! Ut neque maiores voluptatem in fugiat nam soluta nesciunt?
            </p>
            <span>1 min</span>
          </div>
        </div>
        <div className="max-w-[80%] flex gap-5">
          <img src="./avatar.png" alt=""  className="w-12 h-12 rounded-full object-cover"/>
          <div className="flex-1 flex flex-col gap-1">
            <p className="p-3 bg-[rgba(17,25,40,0.3)] rounded-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore facilis porro voluptatibus fugit unde incidunt amet, tempore odio minima nihil! Ut neque maiores voluptatem in fugiat nam soluta nesciunt?
            </p>
            <span>1 min</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex items-center justify-center border-t-2 border-solid border-t-[#dddddd35] gap-4 mt-auto">
        <div className="flex gap-5">
            <img src="./img.png" alt=""  className="w-5 h-5 cursor-pointer"/>
            <img src="./camera.png" alt="" className="w-5 h-5 cursor-pointer" />
            <img src="./mic.png" alt="" className="w-5 h-5 cursor-pointer"/>
        </div>
        <input type="text" placeholder="type your message..." className="flex-1 bg-[rgb(17,25,40,0.5)] border-none outline-none text-white p-5 rounded-lg text-xs" value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className="relative">
          <img src="./emoji.png" alt="" className="w-5 h-5 cursor-pointer" onClick={()=>{setopen((prev)=>!prev)}}/>
         <div className="absolute bottom-12 left-0">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
         </div>
        </div>
        <button className="bg-[#5183fe] py-3 px-5 border-none rounded-md text-white">send</button>
      </div>
    </div>
  )
}

export default Chat