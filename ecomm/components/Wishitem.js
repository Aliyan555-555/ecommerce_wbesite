import React from 'react'
const Wishitem = ({data}) => {
  return (
    
    <div key={data._id} className="flex w-[100%] h-[8rem] p-2  rounded-xl">
      <div className="w-[27%] h-full flex items-center justify-center">
        <img
          className="bg-hover rounded-xl object-contain w-full h-full"
          src={data.images[0].src}
          alt={data.title}
        />
      </div>

      <div className="w-[70%] h-full justify-between flex flex-col py-2">
        <div className="flex flex-row h-[60%] items-start justify-between px-2">
          <h3 className="text-2xl font-semibold text-[black]">{data.title}</h3>
          <h3 className="text-2xl font-semibold text-[black]">${data.price}</h3>
        </div>
        <button className='self-end w-[50%] whitespace-nowrap px-[1rem] py-[.5rem] sm:py-[.7rem] md:py-[1rem] bg-theme text-xl font-semibold text-[#ffff] rounded-xl'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Wishitem
