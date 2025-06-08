import React from 'react'
import MainSearch from '../components/MainSearch'
import { Carousel } from 'flowbite-react'
import i1 from '../assets/images/illustration1.svg'
import i2 from '../assets/images/illustration2.svg'
import i3 from '../assets/images/illustration3.svg'
import i4 from '../assets/images/illustration4.svg'
import CompaniesCoro from '../components/CompaniesCoro'
import FooterComp from '../components/FooterComp'

function Home() {
    return (
        <>
            <div className='grid grid-cols-2 px-[200px] pt-10 items-center'>
                <div className='w-full px-10 h-[500px] overflow-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                    <Carousel slideInterval={1000} className="overflow-hidden">
                        <div className='flex justify-center'>
                            {/* <p className='absolute top-10 right-0 z-999 text-amber-300 text-2xl' 
                    style={{ fontFamily: '"Indie Flower", cursive' }}>Hey, we are the largest event hub</p> */}
                            <img src={i1} alt="..." className='w-[500px] h-[500px]' />
                        </div>
                        <div className='flex justify-center'>
                            {/* <p className='absolute top-10 right-0 z-999 text-amber-300 text-2xl' 
                    style={{ fontFamily: '"Indie Flower", cursive' }}>Hey, we are the largest event hub</p> */}
                            <img src={i2} alt="..." className='w-[500px] h-[500px]' />
                        </div>
                        <div className='flex justify-center'>
                            {/* <p className='absolute top-10 right-0 z-999 text-amber-300 text-2xl' 
                    style={{ fontFamily: '"Indie Flower", cursive' }}>Hey, we are the largest event hub</p> */}
                            <img src={i4} alt="..." className='w-[500px] h-[500px]' />
                        </div>
                    </Carousel>
                </div>
                <div className='px-10'><MainSearch /></div>
            </div>
            <div className='mx-[200px] my-20 block'>
                <CompaniesCoro />
            </div>
        </>
    )
}



export default Home