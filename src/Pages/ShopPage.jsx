import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import ProductCard from '../Components/ProductCard'
import { products } from '../assets/Products'

const ShopPage = () => {

  const [priceRange, setPriceRange] = useState({
    min:300,
    max:5000
  });
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = categories.length === 0 || categories.includes(product.category);
    const sizeMatch = sizes.length === 0 || product.size.some((size) => sizes.includes(size));
    const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
  
    return categoryMatch && sizeMatch && priceMatch;
  });

  
  
  
  return (
    <div className='flex flex-col md:flex-row '>
      <SideBar 
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        categories={categories}
        setCategories={setCategories}
        sizes={sizes}
        setSizes={setSizes}
      />
      
      <div className='md:p-10 p-7 flex flex-wrap gap-5 bg-slate-500 justify-center w-full'>
        {
           filteredProducts.length>0? filteredProducts.map((product, index)=>(

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
