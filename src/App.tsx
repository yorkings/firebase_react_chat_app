import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login";
function App() {
  const user=false;
  return (
    <div className="container11 rounded-xl flex text-white bg-[rgba(17,25,40,0.75)] text-[0.875rem]"> 
      {
        user ? (
          <>
           <List/>
            <Chat/>
            <Detail/>
          </>
        ):
        (<Login/>

        )
      }
      
     </div>
  )
}

export default App
