
import Card from "./Card";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Right — points to store/hooks
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchAllCountries } from "../state/CountrySlice/countrySlice";
import DropDown from "./DropDown";
import { useDebounce } from "use-debounce";
const Home = () => {

  const dispatch = useAppDispatch();
  const all = useAppSelector((state) => state.countries.all);
  const loading = useAppSelector((state) => state.countries.loading);
  const error = useAppSelector((state) => state.countries.error);



  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  // console.log(all);
  const countries = useMemo(
    () => all.filter(c => c.names.common.toLowerCase().includes(debouncedSearch.toLowerCase())),
    [all, debouncedSearch]
  );
  
  if (loading) return (
    <section className="w-full light:bg-white dark:bg-slate-800 flex items-center justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
      <p className="text-white text-xl">Loading...</p>
    </section>
  );

  if (error) return (
    <section className="w-full light:bg-white dark:bg-slate-800 flex items-center justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
      <p className="text-red-400 text-xl">{error}</p>
    </section>
  );
  return (

    <>
      <DropDown onSearch={setSearch} />
      <section className="w-full light:bg-white dark:bg-slate-800 min-h-screen" >

        <div className="container mx-auto px-4 max-w-6xl justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 pt-5">

          {countries.length === 0 ? <p className="text-slate-800 dark:text-white text-center pt-10">No countries found.</p>
            : countries.map((nation, index) => (
              <Link key={index} to={`/${nation.names.common}`}>


                <Card country={nation} />
              </Link>
            ))}

        </div>
      </section>

    </>



  )
}

export default Home;