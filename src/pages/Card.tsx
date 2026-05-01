import countryImg from "../assets/download.png";


const Card = ()=> {
    return(
       <div className="max-w-65 rounded overflow-hidden shadow-md bg-slate-700 h-80">
        <img className="w-full" src={countryImg} alt="Sunset in the mountains"/>
        <div className="px-6 py-4 text-white">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
           <ul className="grid gap-y-0.5">
            <li className="font-medium">Population: <span className="font-thin">32343434,33</span></li>
            <li className="font-medium">Region: <span className="font-thin">Africa</span></li>
            <li className="font-medium">Capital: <span className="font-thin">Mogadishu</span></li>
           </ul>
        </div>
       
</div>
    )
}

export default Card;