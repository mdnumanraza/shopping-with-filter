import React from 'react'
import SideBar from '../Components/SideBar'
import ProductCard from '../Components/ProductCard'
import { products } from '../assets/Products'

const ShopPage = () => {
  return (
    <div className='flex '>
      <SideBar/>
      
      <div className='p-10 flex flex-wrap gap-5 bg-slate-500 justify-center w-full'>
        {
           products? products.map((product, index)=>(

                <ProductCard product={product} key={index}/>
            )):
            <div className='flex justify-center items-center flex-col h-[100vh]'>
                <p className='text-slate-800 font-bold text-2xl'>Result not found</p>
                <p className='text-slate-900 text-lg font-semibold '>Sorry. the shoes you’re looking for doesn’t exist.</p>
            </div>
        }
      </div>
    </div>
  )
}

export default ShopPage
