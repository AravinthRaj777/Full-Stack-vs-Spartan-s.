import { useNavigate } from "react-router-dom"
import "./App.css"
import { Button } from "./Components/Button"
// import { useNavigate } from "react-router-dom"

function App() {
  const Navigate = useNavigate()
  return (
    <>
    <div className=" w-screen h-screen bg-slate-400 flex items-center justify-center ">
      <div className=" w-[500px] h-[500px] bg-blue-500 rounded-2xl flex items-center justify-center">
        <form className=" flex flex-col gap-5 items-center justify-center" action="">
          <h1 className=" text-white font-bold text-[40px]">Login</h1>
          <div className="flex flex-col gap-3  w-[250px] ">
            <input className=" py-1 px-1 rounded-md outline-none" type="text" placeholder="Username" />
            <input className=" py-1 px-1  rounded-md outline-none" type="gmail" placeholder="Email" />
            <input className=" py-1 px-1  rounded-md outline-none" type="password" placeholder="Password" />
            
            <div className="  flex items-center justify-end">
              <h1 className=" text-white cursor-pointer">forget password?</h1>
            </div>
          </div>
          <h1>Create a New accout <button onClick={()=>(Navigate('/'))} className=" bg-red-300 px-2 rounded-md"  >Sign Up</button></h1>
          {/* <button className=" bg-white px-4 py-1 rounded-md hover:bg-blue-500 font-bold border-black border" type="submit">Submit</button> */}
          <Button/>
        </form>
  

      </div>

    </div>
    </>
  )
}

export default App