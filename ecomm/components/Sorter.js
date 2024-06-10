import Link from 'next/link'
import React from 'react'

const Sorter = () => {
  return (
    <div className='w-[25%] h-full flex flex-col pt-[10rem] pl-[12rem] tracking-[0.020em]'>
      <p className='text-xl font-normal text-Dashboard '><Link className='text-Dashboard-border' href={'/'}>Home /</Link>Search Results</p>
      <h2 className='text-4xl text-Dashboard font-bold mt-16 mb-4'>Filter</h2>
      <div className='w-full flex flex-col'>
      <h3 className='text-[2rem] text-Dashboard font-semibold py-4'>Promotion & Services</h3>
      <div className='w-full flex flex-wrap'>

      </div>

      </div>

      <div className='w-full flex flex-col '>
        <h3 className='text-[2rem] text-Dashboard font-semibold py-4'>Catagory</h3>
       <ul className='text-[1.50rem] text-Dashboard-border gap-1 flex flex-col'>
        <li>All</li>
        <li>Clothing</li>
        <li>Electronics</li>
        <li>Home</li>
        <li>Kitchen</li>
        <li>Toys</li>
        <li>Health</li>
       </ul>

      </div>
      
    </div>
  )
}

export default Sorter
