import React from 'react'
import CategoryCarousel from './CategoryCarousel'
import FilterButton from './common/FilterButton'

export default function Category({ carouselFocus, setCarouselFocus, searchLocation, setResults, setShowFilterModal}) {
  return (
    <div className='flex gap-4 w-full pt-8 pb-2 px-8 lg:px-24 2xl:px-44 '  >
        <CategoryCarousel carouselFocus={carouselFocus} setCarouselFocus={setCarouselFocus} searchLocation={searchLocation} setResults={setResults} />
        {/* <button className='hidden md:flex p-4 border '>Filter</button> */}
        <FilterButton setShowFilterModal={setShowFilterModal} />
    </div>
  )
}
