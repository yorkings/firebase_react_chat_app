import { signOut } from "firebase/auth"
import "./Detail.css"
import{ auth } from "../lib/firebase"
const Detail = () => {
  const handlelogout=async()=>{
    await signOut(db)
  }
  return (
    <div className="flexme overflow-scroll custom-scrollbar1">
      <div className="py-2 px-2 relative flex flex-col items-center gap-3 border-b-2 border-b-[#dddddd34]">
        <img src="./avatar.png" alt="" className="h-[5.3rem] w-[5.3rem] rounded-full object-cover" />
        <h2>Jane Doe</h2>
        <p className="flex items-center justify-center">Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="p-5 flex flex-col gap-7 overflow-x-scroll custom-scrollbar1">
        <div className="option">
          <div className="title">
            <span> Chat settings</span>
            <img src="./arrowUp.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span> Privacy & help</span>
            <img src="./arrowUp.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer"/>
          </div>
        </div>
        <div className="option flex flex-col overflow-scroll custom-scrollbar1">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer"/>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 ">
                <img src="https://earthsky.org/upl/2022/08/Milky-Way-Amr-Abdulwahab-western-desert-of-Egypt-July-8-2022-e1661981704464.jpg" alt="" className="h-10 w-10 rounded-md object-cover" />
                <span className="text-[0.875rem] text-gray-200 font-light">2024_3_21</span>
              </div>
              
              <img src="./download.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer"/>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 ">
                <img src="https://earthsky.org/upl/2022/08/Milky-Way-Amr-Abdulwahab-western-desert-of-Egypt-July-8-2022-e1661981704464.jpg" alt="" className="h-10 w-10 rounded-md object-cover" />
                <span className="text-[0.875rem] text-gray-200 font-light">2024_3_21</span>
              </div>
              
              <img src="./download.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer"/>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 ">
                <img src="https://earthsky.org/upl/2022/08/Milky-Way-Amr-Abdulwahab-western-desert-of-Egypt-July-8-2022-e1661981704464.jpg" alt="" className="h-10 w-10 rounded-md object-cover" />
                <span className="text-[0.875rem] text-gray-200 font-light">2024_3_21</span>
              </div>
              
              <img src="./download.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer"/>
              
            </div>
          
            
            
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span> shared files</span>
            <img src="./arrowUp.png" alt="" className="h-8 w-8 bg-[rgba(17,25,40,0.2)] p-3 rounded-full cursor-pointer" />
          </div>
        </div>
         <button className="text-white bg-red-800 rounded-lg py-2 px-5 border-none cursor-pointer">block user</button>

         <button className="text-white  bg-sky-600  rounded-lg p-2  px-5 border-none cursor-pointer " onClick={handlelogout}>logout</button>
      </div>
    </div>
  )
}

export default Detail
