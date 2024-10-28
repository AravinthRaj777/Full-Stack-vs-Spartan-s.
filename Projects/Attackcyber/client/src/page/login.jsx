function Login(){
    return(
        <>
        <div className=" w-[500px] h-[550px] bg-pink-400 flex items-center justify-center">
            <form className="flex-col flex items-center justify-center gap-2 bg-yellow-300 w-[350px] h-full"action="">
           <h1 className="text[25px] font-bold">Login </h1>
           <input className="py-1 px-1 rounded-md outline-none" placeholder="Username" type="text" />
           <input className="py-1 px-1 rounded-md outline-none" placeholder="Password" type="password" />
           <button className="bg-blue-500 px-5 py-1 rounded-lg text-white font-bold">Submit</button>
           </form>
        </div>
        </>
    )
}
export default Login