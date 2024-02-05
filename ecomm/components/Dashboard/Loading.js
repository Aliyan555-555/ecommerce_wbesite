import Image from 'next/image'
import React from 'react'

const Loading = ({loading}) => {
  return (
    <div
        style={{ display: loading ? "flex" : "none" }}
        className="w-full bg-[#ffffffbe] h-full flex items-center justify-center fixed top-0 left-0  z-[2000]"
      >
        <Image
          width={300}
          height={300}
          src={"/Svg/Dashboard.svg"}
          alt="Loading"
        />
      </div>
  )
}

export default Loading