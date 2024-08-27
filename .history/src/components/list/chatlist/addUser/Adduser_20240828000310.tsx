

const Adduser = () => {
  const handleSearch=async(e)=>{
    e.preventDefault()
    const formdata=new FormData()
    const username=formdata.get("username")
    try
  }
  return (
    <div className="h-max w-max p-7 rounded-lg absolute top-0 bottom-0 left-0 right-0 m-auto bg-[rgba(21,23,27,0.9)]">
      <form className="flex gap-5" onSubmit={(e)=>handleSearch(e)}>
        <input type="text" name='username' placeholder='username' className="p-5 border-none rounded-lg outline-none"/>
        <button className="p-5 border-none rounded-lg bg-[#1a73e8] cursor-pointer">Search</button>
      </form> 
      <div className="mt-12 flex items-center justify-between">
         <div className="flex items-center justify-between gap-5">
            <img src="./avatar.png" alt="" className="h-12 w-12 rounded-full object-cover" />
            <span>Jane doe</span>
         </div>
         <button>add user</button>
     </div> 
    </div>
  )
}

export default Adduser
