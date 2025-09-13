import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'

const SearchBar = () => {

    const { search, setSearch, shopSearch, setShowSearch} = useContext(ShopContext)

    return shopSearch ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-3 mx-3 my-5 rounded-full w-3/4 sm:w-1/2 '>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search' />
            </div>
        </div>
    )
}

export default SearchBar
