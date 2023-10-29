import React from 'react'
import robot1 from './assets/pictures/trashHaulHeader.png';



const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full rounded-3xl text-gray-200 max-h-[500px] bg-black/20'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >The Best <span className='text-yellow-400'> Trash Removal</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >in <span className='text-yellow-400'> Nashville TN</span></h1>
                </div>
                    <img className='w-full rounded-3xl max-h-[500px] object-cover' src={robot1}  alt="robot1" />
            </div>
        </div>
    )
}

export default Hero