import React from 'react'

const ProductCard = ({product}) => {
    const {productName,brandName,category,mainImage,price,smallImage1,smallImage2,size} = product
    
  return (
    <div className='flex flex-col bg-slate-800 w-[20rem] h-[27rem] px-6 justify-evenly py-3 rounded-xl border border-slate-400 shadow-sm shadow-white mb-4'>
        <div>
           <h2 className='text-slate-400 bold font-semibold'>{productName}</h2> 
           <p className='text-white'>{brandName}</p>
        </div>

        <div className='flex justify-center'>
            <img src={mainImage} className='w-[200px] rounded-sm' alt="mainimg" />
        </div>

        <div className='flex justify-between'>
            <div className='text-white'>
                <p className='text-slate-400 font-semibold '>Price</p>
                <p>$ {price}</p>    
            </div> 

            <div className='flex gap-4'>

               <div className=' rounded'>
                    <img src={smallImage1} alt="img1" className='w-12 h-12 bg-cover rounded-md ' />    
                </div> 
               <div className='rounded'>
                    <img src={smallImage2} alt="img2" className='w-12 h-12 rounded-md' />    
                </div> 
            </div>           
        </div>
        
    </div>
  )
}

export default ProductCard
