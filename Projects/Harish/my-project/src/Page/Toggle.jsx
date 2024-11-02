//import koil form './image/moon.jpg'

function Dark(){
    return (
        <> 
        <div className="">
            <input type="checkbox" id="toggle"/>
            <div className="check">
                <label form="toggle">
                    <div className="w-[550px] h-[550px] bg-black flex items-center justify-center">
                       
                        <img src={require('.image/sun.jpg')} height='200' width='200'/>
                   

                    </div>
                </label>
            </div>
          
          
        </div>
       
        </>
    )
}
export default Dark