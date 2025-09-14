import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useEffect } from 'react'

const RelatedProducts = (category, subCategory) => {

    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item)=>category === item.category)
            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory)

            console.log(productsCopy.slice)
        }
    }, [products])

    return (
        <div>
        
        </div>
    )
}

export default RelatedProducts
