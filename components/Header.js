import React, {useRef, useState, useEffect} from "react";
import Image from 'next/image'
import Link from 'next/link'

import { Autocomplete } from "@react-google-maps/api";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {  faUser } from '@fortawesome/free-regular-svg-icons'


export default function Header({ setSearchLocation, favorites, setShowFavorites }) {
  // google's autocomplete options. limiting results to city names only
  let searchOptions = { types: ["(cities)"] };

  const [showMenu,  setShowMenu] = useState(false)
  const searchInputValue = useRef();
  const userMenu = useRef()

  // Submit handler for search input 
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchLocation(searchInputValue.current.value);
  } 
  // Close User Menu when user clicks outside the bounds of the menu options or on another target
  const closeUserMenu = (e) => {
    if(userMenu.current && showMenu && !userMenu.current.contains(e.target)){
      setShowMenu(false)
    }
  }
  // Event listener that determines when user menu is closed
  useEffect(()=> {
    document.addEventListener('mousedown', closeUserMenu)
    
    return() => { removeEventListener('mousedown', closeUserMenu) }
  })

  return (
    <div className="text-xs py-4 px-8 pb-5 lg:px-24 2xl:px-44 border-b">
      <header className="flex flex-1 justify-between  items-center h-auto">
        <div className="w-full hidden md:flex sm:pr-4">
          <Link href={{ pathname: '/' }} >
            <a>
              <Image width={102} height={32} src='/airbnb.svg' alt="airbnb brand image"  />
            </a>
          </Link>
        </div>
        <form className="search-container flex items-center w-full md:max-w-xs hover:shadow-lg" onSubmit={(e) => handleSearchSubmit(e)}>
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <Autocomplete options={searchOptions} onPlaceChanged={(e)=>handleSearchSubmit(e)} >
              <input type="text" id="simple-search" 
                className="bg-gray-50 border border-gray-300 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" 
                placeholder="Start your search" 
                ref={searchInputValue}
                required 
              />
            </Autocomplete>
            {/* Search Button */}
            <button className="flex absolute inset-y-0 right-0 items-center pr-2 text-center  ">
              <div className=" bg-brand-color rounded-3xl px-2 py-1.5">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='m-auto text-white text-lg' />
              </div>
            </button>
          </div>
        </form>
        <div className="hidden w-full md:flex md:justify-end md:items-center gap-1 " >
          {/* 'Become a Host link */}
          <div className="hidden text-center lg:flex py-3 px-4 hover:bg-gray-100 rounded-full text-sm font-semibold ">Become a Host</div>
          {/* Globe Icon */}
          <button className="p-3 flex hover:bg-gray-100 rounded-full text-base">
            <FontAwesomeIcon icon={faGlobe} />
          </button>
          {/* favorites Button. Only visible when favorites has items */}
          { (favorites && favorites.length > 0) && 
            <button className="p-3 flex hover:bg-gray-100 rounded-full text-base" onClick={() => setShowFavorites(true)}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          }
          {/* Bars + User Icon */}
          <div className="relative p-2 ml-2 border hover:shadow-xl rounded-full" ref={userMenu} onClick={(e)=> {setShowMenu(!showMenu)} }>
            <span className="flex px-2 py-1 align-baseline  gap-3 ">
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </span>
            {/* Expanded onclick menu for bars + user */}
            { showMenu &&
              <div className="absolute mt-5 right-0 w-64 py-2 text-base z-50 bg-white shadow-[0_0px_16px_rgba(0,0,0,0.1)] rounded-lg">  
                  <div className="px-4 py-2 hover:bg-gray-100">Sign Up</div>
                  <div className="px-4 py-2 hover:bg-gray-100">Log in</div>
                  <div className="w-full my-2 border-b"></div>
                  <div className="px-4 py-2 hover:bg-gray-100">Host your home</div>
                  <div className="px-4 py-2 hover:bg-gray-100">Host an experience</div>
                  <div className="px-4 py-2 hover:bg-gray-100">Help</div>
              </div>
            }
          </div>
        </div> 
      </header>
    </div>
  );
}

