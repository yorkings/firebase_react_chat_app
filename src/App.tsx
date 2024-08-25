import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

function App() {

  return (
    <div className="container11 rounded-xl flex text-white bg-[rgba(17,25,40,0.75)]"> 
      <List/>
      <Chat/>
      <Detail/>
     </div>
  )
}

export default App
