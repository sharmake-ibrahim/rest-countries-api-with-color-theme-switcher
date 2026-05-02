import { Link, useParams } from "react-router-dom";
import somalia from "../assets/download.png";

const Detail = ()=> {
    return(
    

          <section className="w-full bg-slate-800 p-7 h-full" style={{ minHeight: "calc(100vh - 64px)" }}>
                  <Link to="/" className="flex items-center p-5 gap-2 px-6 py-2 bg-slate-700 rounded shadow text-sm font-medium text-white transition-colors mb-14 border border-white/10 w-[120px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-7 max-w-7xl justify-center place-items-center">
                
                 <img className="w-75 md:w-125  lg:w-135 rounded-md" src={somalia} alt="" />
            
                <div className="flex-1 flex flex-col justify-center m-2">
                <h1 className="text-3xl font-bold mb-8 text-white">Belgium</h1>

                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-10 text-white">
                    <div className="flex flex-col gap-2">
                    <p className="text-sm"><span className="font-semibold">Native Name:</span> België</p>
                    <p className="text-sm"><span className="font-semibold">Population:</span> 11,319,511</p>
                    <p className="text-sm"><span className="font-semibold">Region:</span> Europe</p>
                    <p className="text-sm"><span className="font-semibold">Sub Region:</span> Western Europe</p>
                    <p className="text-sm"><span className="font-semibold">Capital:</span> Brussels</p>
                    </div>
                    <div className="flex flex-col gap-2">
                    <p className="text-sm"><span className="font-semibold">Top Level Domain:</span> .be</p>
                    <p className="text-sm"><span className="font-semibold">Currencies:</span> Euro</p>
                    <p className="text-sm"><span className="font-semibold">Languages:</span> Dutch, French, German</p>
                    </div>
  </div>

  <div className="flex flex-wrap items-center gap-3">
    <span className="font-semibold text-sm text-white whitespace-nowrap">Border Countries:</span>
    <div className="flex flex-wrap gap-2 text-white">
      <span className="px-4 py-1 text-sm bg-slate-700 border border-white/10 rounded">France</span>
      <span className="px-4 py-1 text-sm bg-slate-700 border border-white/10 rounded">Germany</span>
      <span className="px-4 py-1 text-sm bg-slate-700 border border-white/10 rounded">Netherlands</span>
    </div>
  </div>
</div>
            </section>
        </section>
    )
}

export default Detail;