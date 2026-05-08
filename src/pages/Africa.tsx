import { fetchCountriesByRegion } from "../state/CountrySlice/countrySlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
const Africa = ()=> {
const dispatch = useAppDispatch();
const africaCountries = useAppSelector((state) => state.countries.Africa);
const loading = useAppSelector((state) => state.countries.loading);
const error = useAppSelector((state) => state.countries.error);

useEffect(() => {
  if (africaCountries.length === 0) {
    dispatch(fetchCountriesByRegion("Africa"));
  }
}, [dispatch, africaCountries.length]);

    if (loading) return (
    <section className="w-full bg-slate-800 flex items-center justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
      <p className="text-white text-xl">Loading...</p>
    </section>
  );

  if (error) return (
    <section className="w-full bg-slate-800 flex items-center justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
      <p className="text-red-400 text-xl">{error}</p>
    </section>
  );
    return(
        <>
        <Header/>
         <section className="w-full bg-slate-800" style={{ minHeight: "calc(100vh - 64px)" }}>
   
        <div className="container mx-auto px-4 max-w-6xl justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 pt-5">
                    {africaCountries.map((nation, index)=>(
                      <Link to={`/${nation.name.common}`}>

                     
                         <Card key={index} country={nation}/>
                          </Link>
                    ))}
                   
        </div>
        </section>
        </>
    )
}

export default Africa;