import React from 'react'

const Header = ({type,name}) => {
  return (
    <div className='p-[2rem]'>
    <h2 className="text-4xl text-Dashboard font-extrabold ">{name}</h2>
    <h6 className="text-xl text-hover mb-8 px-[1px] ">{type}</h6>
    </div>
  )
}

export default Header
