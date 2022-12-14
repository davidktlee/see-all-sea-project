import React from 'react'
import Antd from 'carousel/Antd'

function AreaList() {
  return (
    <>
      <div className=" h-[800px] container mx-auto  relative z-10 flex flex-col justify-center items-center py-2 ">
        <div className="z-10 relative">
          <h1 className="font-bold text-4xl sm:text-6xl text-cyan-800 line animate-bounce ">
            원하는 지역을 선택 해!
            <br />
          </h1>
        </div>
        <Antd />
      </div>
    </>
  )
}

export default AreaList
