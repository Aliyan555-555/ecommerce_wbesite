import React from 'react'
import Link from 'next/link'
const MainButton =({href,ButtonText,main}) => {
  return (
    <Link href={href && href} ><button className={`mt-[10px] px-[3rem] py-[1rem] sm:py-[1.10rem] md:py-[1.25rem] ${main?'bg-theme':'bg-body'} text-2xl font-bold ${main?'text-body':'text-Red'} rounded-xl`}>{ButtonText}</button></Link>
  )
}

export default MainButton
