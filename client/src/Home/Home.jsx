import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'

const Home = () => {
  return (
    <div className='h-screen'>
      <Banner/>
      <FavoriteBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBook/>
      <Review/>
    </div>
  )
}

export default Home
