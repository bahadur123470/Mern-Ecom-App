import React from 'react'
import Hero from '../components/Hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'
import Collection from './Collection.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Collection/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
