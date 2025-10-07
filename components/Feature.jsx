import React from 'react'

const Feature = () => {
  return (
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>
      <div className='max-w-11/12 text-center text-white flex-center flex-col gap-10'>
        <h2 className='font-bold text-5xl'>Trusted by Millions, Built for You</h2>

        <div className="flex-center gap-20">
          <div className="flex-center flex-col gap-4">
            <p>Total Downloads</p>
            <h4 className='font-extrabold text-6xl'>29.6M</h4>
            <p>21% more than last month</p>
          </div>
          <div className="flex-center flex-col gap-4">
            <p>Total Reviews</p>
            <h4 className='font-extrabold text-6xl'>906K</h4>
            <p>46% more than last month</p>
          </div>
          <div className="flex-center flex-col gap-4">
            <p>Active Apps</p>
            <h4 className='font-extrabold text-6xl'>132+</h4>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature