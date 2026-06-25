import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import searchIcon from "../assets/search-icon.svg";
import { NavLink } from 'react-router-dom';


interface DropDownProps {
  onSearch: (query: string) => void;
}
export default function DropDown({ onSearch }: DropDownProps) {
  return (
    <div className='w-full h-17 flex justify-between px-9 py-4 bg-stone-50 dark:bg-slate-800 gap-y-1.5 max-sm:block max-h-50'>

      <div className='flex justify-center items-center max-w-125 text-slate-800 dark:text-white bg-white dark:bg-slate-700 rounded-md p-2.5 shadow-sm'>
        <img className='w-5 h-5 m-1' src={searchIcon} alt="search icon" />
        <input
          className='py-3 text-slate-800 dark:text-white bg-transparent border-none outline-none max-w-125 h-5 placeholder:text-gray-400'
          type="text"
          placeholder='Search for a country…'
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <Menu as="div" className="relative inline-block w-30">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-white/20">
          Filter by Region
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {["africa", "america", "asia", "europe", "oceania"].map((region) => (
              <MenuItem key={region}>
                <NavLink
                  to={`/${region}`}
                  className="block px-4 py-2 text-sm text-slate-800 dark:text-white data-focus:bg-gray-100 dark:data-focus:bg-white/10 data-focus:outline-hidden capitalize"
                >
                  {region.charAt(0).toUpperCase() + region.slice(1)}
                </NavLink>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}