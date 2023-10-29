import React from 'react'
import robot1 from './assets/pictures/trashHaulHeader.png';
// import robot2 from '../images/ryanh5800_robot_current_day_bd7addf9-7568-48cf-b261-27977247aeb6.png';
// import robot3 from '../images/ryanh5800_robot_current_day_9e083e76-b13d-4a6c-b01e-a6199c16fb10.png';
// import people1 from '../images/ryanh5800_people_working_on_technology_candid_4k_realistic_7e37e369-f643-40a4-9eba-e1da1bbcab34.png';
// import people2 from '../images/ryanh5800_people_working_on_technology_candid_4k_realistic_5290fb78-f32e-4f12-9363-6fd01f13b364.png';
// import laptop1 from '../images/ryanh5800_laptop_programming_79deee30-92ba-476b-b0de-86644d0cd5f3.png';
// import laptop2 from '../images/ryanh5800_laptop_programming_0e3fd6a7-8dbf-4f63-b14d-ca0e8091b454.png';
// import react1 from '../images/ryanh5800_React_icon_programming_68468fde-6f40-4320-8555-184738340d8c.png';
// import ai1 from '../images/ryanh5800_AI_technology_computer_realistic_4k_e9546bf4-882c-4417-b9b4-395e20e11fd6.png';
// import ai2 from '../images/ryanh5800_AI_technology_61ac7b13-8eeb-4d3c-a13e-597df96274bf.png';



const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full rounded-3xl h-full text-gray-200 max-h-[500px] bg-black/20 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >The Best <span className='text-yellow-400'> Trash Removal</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >in <span className='text-yellow-400'> Nashville TN</span></h1>
                </div>
                    <img className='w-full rounded-3xl max-h-[500px] object-cover' src={robot1}  alt="robot1" />
            </div>
        </div>
    )
}

export default Hero