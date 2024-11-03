//import koil form './image/moon.jpg'

function Dark(){
    return (
        <div className="flex md:justify-end px-7 py-7">
            <div className="">
                <img src="image/sun.jpg" className="relative h-32 w-40 top-4 rounded-3xl w-[130px] h-[60px]"/>
                <input type="checkbox" className="bnt" id="check"/>
                <label htmlFor="check" className="absolute h-32 w-40 top-4 rounded-3xl w-[130px] h-[60px]"></label>
            </div>
        </div>              
    )
}
export default Dark