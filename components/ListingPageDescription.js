import React from 'react'
import Image from 'next/image'

export default function ListingPageDescription({roomData}) {

    const amenityList = roomData.amenities.split(',')

    console.log(amenityList)

  return (
    <div className='w-full'>
        {/* Title + number of rooms/guests */}
        <div className='flex justify-between py-8 border-b '>
            <div>
                <div className=' font-bold'>{ roomData.room_type + ' by ' + roomData.host_name }</div>
                <div className=''>
                    <span>{ roomData.guests_included + ' guests' } </span>
                    <span>{ roomData.bedrooms + ' bedrooms' }</span>
                    <span>{ roomData.beds + ' beds'}</span>
                    <span>{ roomData.bathrooms + ' baths'}</span>
                </div>
            </div>
            <div className='h-14 w-14' >
                <Image 
                    src={roomData.host_thumbnail_url}
                    layout='responsive'
                    objectFit="cover"
                    width={50}
                    height={50}
                    priority={true}
                    className='rounded-full'
                />
            </div>
        </div>
        
        {/* Room description  */}
        <div className='py-8 border-b'>
            <p>
                {roomData.description}
            </p>
        </div>

        {/* Amenities */}
        <div className='py-8 border-b'>
            <div className='font-bold'>What this place offers</div>
            <div className='py-4' >
                <ul className='grid md:grid-cols-2'>
                    { amenityList.map( (item) => {
                        return <li key={'amenity' + item } className='py-2'>{item}</li>
                    }) }
                </ul>
            </div>
        </div>
    </div>
  )
}