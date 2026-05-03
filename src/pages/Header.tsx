import moon from "../assets/moon.svg";
import bordedMoon from "../assets/moon-light-mode.svg";
// import DropDown from "./DropDown";
const Header = ()=> {
    return(
    <>

        <header className="dark:bg-slate-700 text-white flex justify-between px-9 items-center h-22.5 w-full">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Where in the world?</h1>
         <div className="flex justify-center items-center gap-2">
            <img src={moon} className="h-9 dark:hidden" alt="" />
            <img src={bordedMoon} className="h-9 hidden dark:block" alt="" />
            <h5>Dark Mode</h5>
            </div>
        </header>
        {/* <DropDown/> */}
        </>

    )
}


export default Header;