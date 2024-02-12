function Nav() {
    return(
        <div className=" bg-red-400 p-5 flex justify-between items-center text-white font-bold">
        <div className=" flex justify-evenly">
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="logo"/>
            <div className=" m-4"><h2>Home</h2></div>
            <div className=" m-4"><h2>About</h2></div>
            <div className=" m-4"><h2>Contact</h2></div>
        </div>
        <div>
            <button className=" border-2 rounded-xl text-white h-11 w-20">Login</button>
        </div>
        </div>
    )
    
}
export default Nav