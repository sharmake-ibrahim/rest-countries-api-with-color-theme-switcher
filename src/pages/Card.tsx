import type { Country } from "../state/CountrySlice/countrySlice";


const Card = ({ country }: { country: Country }) => {
    return (
        <div className="max-w-65 bg-white rounded overflow-hidden shadow-md dark:bg-slate-700 text-slate-800 h-80">
            <img className="w-full" src={country?.flags?.svg ?? country?.flags?.png} />
            <div className="px-6 py-4 text-slate-800 dark:text-white">
                <div className="font-bold text-xl mb-2">{country?.name.common}</div>
                <ul className="grid gap-y-0.5">
                    <li className="font-medium">Population: <span className="font-thin">{country?.population}</span></li>
                    <li className="font-medium">Region: <span className="font-thin">{country?.region}</span></li>
                    <li className="font-medium">Capital: <span className="font-thin">{country?.capital[0]}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default Card;