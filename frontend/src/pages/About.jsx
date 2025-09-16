import React from 'react'
import { assets } from '../assets/assets.js'
import Title from '../components/Title.jsx'
import NewsletterBox from '../components/NewsletterBox.jsx'

const About = () => {
  return (
  <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At Forever, we believe fashion is more than just clothing — it’s a reflection of individuality and confidence. Our collections are thoughtfully designed to blend timeless elegance with modern trends, ensuring you always have the perfect outfit for every occasion. From premium fabrics to precise craftsmanship, we focus on delivering quality that speaks for itself.</p>
        <p>We are committed to creating a seamless shopping experience for our customers. With carefully curated styles, secure payment options, and fast delivery, we make fashion accessible without compromising on sophistication. Step into a world where style, comfort, and quality come together — because you deserve nothing less.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to inspire confidence through clothing that combines quality, comfort, and timeless design. We aim to empower individuals to express their unique style while maintaining a commitment to excellence in every piece we create. Fashion should not only look good but also feel good — and that belief drives every collection we bring to life.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>We believe that true style is built on a foundation of quality. Every garment we offer undergoes a meticulous selection process, ensuring it meets the highest standards of fabric durability, comfort, and finish. From sourcing premium materials to applying precise craftsmanship, we are committed to delivering clothing that stands the test of time.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>We are dedicated to making your shopping experience as seamless and effortless as possible. With our user-friendly website, you can browse, filter, and find your favorite styles in just a few clicks. From detailed product descriptions to high-quality images, we ensure you have all the information you need to make confident choices.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Our customers are at the heart of everything we do, and we pride ourselves on delivering exceptional support at every stage of your shopping journey. From quick responses to inquiries to personalized assistance, our team is always here to guide you and ensure your experience with us is nothing short of excellent.</p>
      </div>
    </div>

    <NewsletterBox />

  </div>
  )
}

export default About
