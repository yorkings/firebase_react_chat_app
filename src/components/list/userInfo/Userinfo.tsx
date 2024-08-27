
import {useuserStore} from "../../lib/userstore";

const Userinfo = () => {
  const {currentUser} =useuserStore()
  return (
    <div className="p-2 flex items-center justify-between">
       <div className="flex items-center gap-3">
        <img src={currentUser.avatar ||"./avatar.png"} alt="" className="h-12 w-12 rounded-full" />
        <h2>{currentUser.username}</h2>
       </div>
       <div className="flex gap-2">
            <img src="./more.png" alt="" className="w-5 h-5 object-cover" />
            <img src="./video.png" alt="" className="w-5 h-5 object-cover"/>
            <img src="./edit.png" alt="" className="w-5 h-5 object-cover" />
       </div>
    </div>
  )
}

export default Userinfo
