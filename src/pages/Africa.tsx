import { fetchCountriesByRegion } from "../state/CountrySlice/countrySlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import DropDown from "./DropDown";
import { useDebounce } from "use-debounce";


const Africa = () => {
  const dispatch = useAppDispatch();
  const africaCountries = useAppSelector((state) => state.countries.byRegion["Africa"]);
  const loading = useAppSelector((state) => state.countries.loading);
  const error = useAppSelector((state) => state.countries.error);


  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    if (africaCountries.length === 0) {
      dispatch(fetchCountriesByRegion("Africa"));
    }
  }, [dispatch, africaCountries.length]);

  const countries = useMemo(
    () => africaCountries.filter(c => c.names.common.toLowerCase().includes(debouncedSearch.toLowerCase())),
    [africaCountries, debouncedSearch]
  );

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
  return (
    <>
  
      <DropDown onSearch={setSearch} />
      <section className="w-full light:bg-white dark:bg-slate-800" style={{ minHeight: "calc(100vh - 64px)" }}>

        <div className="container mx-auto px-4 max-w-6xl justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 pt-5">
          {countries.length === 0 ? <p className="text-slate-800 dark:text-white text-center pt-10">No countries found.</p> :
            countries.map((nation, index) => (
              <Link key={index} to={`/africa/${nation.names.common}`}>


                <Card country={nation} />
              </Link>
            ))}

        </div>
      </section>
    </>
  )
}

export default Africa;