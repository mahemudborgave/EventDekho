import React from 'react'

function MainSearch() {
  return (
    <div className='text-center py-10'>
      <p className='text-7xl px-[200px] font-medium' style={{ fontFamily: "'Source Serif 4', sans-serif" }}>Discover the india's <br/>top events</p>
      <p className='py-10'>Explore work from the most talented and accomplished designers   <br/>ready to take on your next project</p>

      <div className='py-2 px-4 bg-[#e7e7e7ad] w-[750px] m-auto rounded-full flex'>
        <input type="text" placeholder="what's on your mind ?" className='focus:outline-none outline-0 flex-grow ml-2 text-md'/>
        <i className="fa-solid fa-magnifying-glass p-4 bg-amber-300 rounded-full"></i>
      </div>

      <div className='flex justify-center gap-2 py-6 text-sm text-[#535353]'>
        <p className='py-1 px-6 bg-[#e7e7e7ad] rounded-full border'>Technical</p>
        <p className='py-1 px-6 bg-[#e7e7e7ad] rounded-full'>Nontechnical</p>
        <p className='py-1 px-6 bg-[#e7e7e7ad] rounded-full'>social</p>
      </div>
    </div>
  )
}

export default MainSearch