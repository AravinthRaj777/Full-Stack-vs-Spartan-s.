import sun from '../assets/sun2.jpg'
import moon from '../assets/moon2.jpg'

const Toggle = () => {
  return (
    <>
        <div>
            <div className='absolute z-40 w-screen h-screen flex justify-center items-center bg-purple-600'>
                <div className=' w-[400px] h-[200px] bg-white rounded-full flex items-center justify-end px-3 border-black border-2'> 
                    <div className=' w-[180px] h-[180px] bg-blue-500 rounded-full border-black border-2 cursor-pointer'>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


function handleClick(){
    <Toggle/>
}

function Dark(){
    return (
        <div className=" bg-purple-600 w-screen h-screen">
            <div className=" relative z-0 w-screen h-screen inline-block">
                <img src={sun} className=" absolute z-10  w-screen h-screen"/>
                <img src={moon} className="absolute z-20  w-screen h-screen"/>
                
                <div>
                    <div className='absolute z-30 w-screen h-screen flex justify-center items-center bg-purple-600'>
                        <div className=' w-[400px] h-[200px] bg-white rounded-full flex items-center justify-start px-3 border-black border-2'> 
                            <button onClick={handleClick} className=' w-[180px] h-[180px] bg-blue-500 rounded-full border-black border-2 cursor-pointer'>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>              
    )
}
export default Dark