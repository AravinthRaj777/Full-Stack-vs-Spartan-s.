// import React from 'react'
import { FaEye } from "react-icons/fa";
import { Button } from "../Components/Button";
function Login() {
  return (
    <>
      <div className=" w-[450px] h-[450px] rounded-lg bg-blue-300 flex items-center justify-center  ">
         <form className="  flex-col flex items-center justify-center gap-5  w-[350px] h-full" action="">
            <h1 className=" text-[25px] font-bold">Login</h1>
            <div className=" w-full flex items-center justify-center flex-col gap-1">
            <div className=" bg-white px-2 rounded-md flex flex-row items-center justify-center gap-2">
                    <input className=" w-[270px] py-1 px-1 rounded-md outline-none" placeholder="Username" type="text" />
                    {/* <FaEye /> */}
                </div>
                <div className=" bg-white px-2 rounded-md flex flex-row items-center justify-center gap-2">
                    <input className=" w-[250px] py-1 px-1 rounded-md outline-none" placeholder="Password" type="password" />
                    <FaEye className=" cursor-pointer" />
                </div>
                    <div className="  w-full flex items-center justify-end px-10">
                        <h1 className=" cursor-pointer">forget password?</h1>
                    </div>
            </div>
            {/* <button className=" bg-blue-500 px-5 py-1 rounded-lg text-white font-bold">Submit</button> */}
            <Button/>

            {/* Sign Up */}

            <h1>Create new Account <button className=" bg-green-500 px-4 py-1 rounded-full text-white font-bold">SignUp</button></h1>
         </form>
      </div>
    </>
  )
}
export default Login
