import React from 'react'
import Banner from './Banner/Banner'
import HomeNavigation from './HomeNavigation/HomeNavigation'
import Gallery from './Gallery/Gallery'

const HomePage1 = () => {
  return (
    <>
    <div className='bg-gray-200'>
    <Banner></Banner>
    <HomeNavigation/>
    <Gallery/>
    </div>
    
    </>
  )
}

export default HomePage1