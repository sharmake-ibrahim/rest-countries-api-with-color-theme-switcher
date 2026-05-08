import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import searchIcon from "../assets/search-icon.svg";
import { NavLink } from 'react-router-dom';


interface DropDownProps {
  onSearch: (query: string) => void;
}
export default function DropDown({onSearch}:DropDownProps) {
  return (
    <div className='w-full h-17 flex justify-between px-9 py-4 bg-slate-800 gap-y-1.5 max-sm:block max-h-50'>

        <div className='flex justify-center items-center  max-w-125 text-white bg-slate-700 rounded-md p-2.5'>
            <img className='fill-white  dark:fill-white w-5 h-5 m-1 ' src={searchIcon} alt="search icon" />
            <input className='py-3 text-white border-none outline-none max-w-125 h-5' type="text"placeholder='Search for a country…'
            onChange={(e)=>onSearch(e.target.value)}
            />
        </div>

         <Menu as="div" className="relative inline-block w-30 ">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
       Filter by Region
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink to="/africa"
              className="block px-4 py-2 text-sm text-white data-focus:bg-white/10  data-focus:outline-hidden "
            >
              Africa
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/america"
              className="block px-4 py-2 text-sm text-white data-focus:bg-white/10 data-focus:outline-hidden "
            >
              America
            </NavLink>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-focus:bg-white/10  data-focus:outline-hidden "
            >
              Asia
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-focus:bg-white/10  data-focus:outline-hidden "
            >
              Europe
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-focus:bg-white/10  data-focus:outline-hidden "
            >
              Oceania
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
    </div>
  )
}