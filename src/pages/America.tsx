import { fetchCountriesByRegion } from "../state/CountrySlice/countrySlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import DropDown from "./DropDown";
import { useDebounce } from "use-debounce";


const America = () => {
  const dispatch = useAppDispatch();
  const americaCountries = useAppSelector((state) => state.countries.America);
  const loading = useAppSelector((state) => state.countries.loading);
  const error = useAppSelector((state) => state.countries.error);


  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  useEffect(() => {
    if (americaCountries.length === 0) {
      dispatch(fetchCountriesByRegion("America"));
    }
  }, [dispatch, americaCountries.length]);

  const countries = useMemo(
    () => americaCountries.filter(c => c.name.common.toLowerCase().includes(debouncedSearch.toLowerCase())),
    [americaCountries, debouncedSearch]
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
      <section className="w-full light:bg-white dark:bg-slate-800" style={{ minHeight: "calc(100vh - 64px)" }}>

        <div className="container mx-auto px-4 max-w-6xl justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2 pt-5">
          {countries.length === 0 ? <p className="text-white text-center pt-10">No countries found.</p> :
            countries.map((nation, index) => (
              <Link key={index} to={`/america/${nation.name.common}`}>


                <Card country={nation} />
              </Link>
            ))}

        </div>
      </section>
    </>
  )
}

export default America;