import Userinfo from "./userInfo/Userinfo";
import Chatlist from "./chatlist/Chatlist";
const List = () => {
  return (
    <div className="flex-1">
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default List
