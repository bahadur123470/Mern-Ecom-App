import React, { useContext,useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/assets.js';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false) 
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item)=>{
      if (item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=> {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Product Data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mt-3 flex-shrink-0 cursor-pointer' alt="Separate product page" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] '>
            <img src={image} className='w-full h-auto' alt="product main-image" />
          </div>
        </div>

        {/* Products Info */}
        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} className='w-3.5' alt="rating-star-icon" />
              <img src={assets.star_icon} className='w-3.5' alt="rating-star-icon" />
              <img src={assets.star_icon} className='w-3.5' alt="rating-star-icon" />
              <img src={assets.star_icon} className='w-3.5' alt="rating-star-icon" />
              <img src={assets.star_dull_icon} className='w-3.5' alt="rating-star-icon" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item,index)=>(
                    <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500 border-2' : ''}`} key={index}>{item}</button> 
                  ))
                }
              </div>
            </div >
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5 ' />
            <div className='text-gray-500 text-sm mt-8 flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Seamless payment methods, COD available.</p>
              <p>Easy exchange policy within 7 days.</p>
            </div>
        </div>

      </div>

      {/* Description & reviews sections */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Discover a wide range of quality products at unbeatable prices. Shop with confidence and enjoy fast delivery, secure payments, and excellent customer service—all in one place designed to make your shopping experience seamless</p>
          <p>We design with high-quality fabrics that feel soft, stay strong, and breathe easily—perfectly balancing comfort, durability, and style for your everyday wardrobe.</p>
        </div>
      </div>

      {/* displayed related products */}

    </div>
  ) : <div className='opacity-4'></div>
}

export default Product