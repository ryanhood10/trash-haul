import React, { useRef, useState, useEffect } from 'react';
import RealEstateBanner from './assets/pictures/trashHaulHeader.png';

const OtherHero = () => {
    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div className={`w-full mx-auto p-4 ${animationClasses(isVisible)}`} ref={divRef}>
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[250px] bg-black/20 flex flex-col justify-center z-0'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text-blue-700' >Your<span className='text-white'> Trusted Partner</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold text-blue-700' >in <span className='text-white'> Commercial Real Estate</span></h1>
                </div>
                <img className='w-full h-[250px] object-contain' src={RealEstateBanner} alt="robot1" />
            </div>
        </div>
    )
}

export default OtherHero;
