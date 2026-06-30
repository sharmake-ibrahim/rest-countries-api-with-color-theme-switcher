import type { Country } from "../state/CountrySlice/countrySlice";

const Card = ({ country }: { country: Country }) => {
  if (!country) return null; // guard against undefined

  return (
    <div className="max-w-65 bg-white rounded overflow-hidden shadow-md dark:bg-slate-700 h-80">
      {country.flag?.url_png || country.flag?.url_svg
        ? <img className="w-full h-40 object-cover" src={country.flag.url_png || country.flag.url_svg} alt={country.names?.common} />
        : <div className="w-full h-40 bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-4xl">{country.flag?.emoji}</div>
      }
      <div className="px-6 py-4 dark:text-white">
        <div className="font-bold text-xl mb-2">{country.names?.common}</div>
        <ul className="grid gap-y-0.5">
          <li className="font-medium">Population: <span className="font-thin">{country.population?.toLocaleString()}</span></li>
          <li className="font-medium">Region: <span className="font-thin">{country.region}</span></li>
          <li className="font-medium">Capital: <span className="font-thin">{country.capitals?.[0]?.name ?? "N/A"}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Card;