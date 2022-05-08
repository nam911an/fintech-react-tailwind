import React from 'react'

export const Cards = () => {
  return (
   <div className='w-full py-[10rem] px-4 bg-white'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
               <h2 className='text-2xl font-bold text-center py-8'>Crypto</h2>
               <p className='text-center text-4xl font-bold'>$100</p>
               <div className='text-center font-medium'>
                <p className="py-2 border-b mx-8 mt-8">5 coins</p>
<p className="py-2 border-b mx-8 mt-8">1 month</p>
<p className="py-2 border-b mx-8 mt-8">Fixed Return</p>
<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
               </div>
               
           </div>
           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
               <h2 className='text-2xl font-bold text-center py-8'>NFT</h2>
               <p className='text-center text-4xl font-bold'>$300</p>
               <div className='text-center font-medium'>
                <p className="py-2 border-b mx-8 mt-8">5 nft</p>
<p className="py-2 border-b mx-8 mt-8">1 month</p>
<p className="py-2 border-b mx-8 mt-8">Fixed Return</p>
<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
               </div>
               
           </div>
           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
               <h2 className='text-2xl font-bold text-center py-8'>Crypto</h2>
               <p className='text-center text-4xl font-bold'>$100</p>
               <div className='text-center font-medium'>
                <p className="py-2 border-b mx-8 mt-8">5 coins</p>
<p className="py-2 border-b mx-8 mt-8">1 month</p>
<p className="py-2 border-b mx-8 mt-8">Fixed Return</p>
<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
               </div>
               
           </div>
       </div>
   </div>
  )
}
