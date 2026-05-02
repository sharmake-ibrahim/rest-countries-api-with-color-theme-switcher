import Header from "./Header";
import Card from "./Card";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// Right — points to store/hooks
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchAllCountries } from "../state/CountrySlice/countrySlice";

const Home = ()=> {

     const dispatch = useAppDispatch();
  const all = useAppSelector((state) => state.countries.all);
  const loading = useAppSelector((state) => state.countries.loading);
  const error = useAppSelector((state) => state.countries.error);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  console.log(all);
    return(
   
            <>
                  <Header/>
       <section className="w-full bg-slate-800" style={{ minHeight: "calc(100vh - 64px)" }}>
   
        <div className="container mx-auto px-4 max-w-6xl justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 pt-5">
                    {all.map((nation, index)=>(
                      <Link to={`/${nation.name.common}`}>

                     
                         <Card key={index} country={nation}/>
                          </Link>
                    ))}
                   
        </div>
        </section>
       
       </>
   
   
      
    )
}

export default Home;