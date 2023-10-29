import React, { useRef, useState, useEffect } from 'react';
import RealEstateBanner from './assets/pictures/trashHaulFooter.png';
import { StarIcon } from "@heroicons/react/solid"

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
        <div className="flex justify-center">
            <div className={`md:w-[80%] sm:w-[95%] ${animationClasses(isVisible)}`} ref={divRef}>
                <div className='max-h-[500px] relative'>
                    {/* overlay */}
                    <div className='absolute w-full h-full rounded-3xl text-gray-200 max-h-[250px] bg-black/40 flex flex-col justify-center z-0'>
                        <h3 className="text-2xl text-start font-semibold pb-6 pl-4">Get in Touch</h3>
                        <p className="text-lg font-bold pl-4">Ready to rent a dumpster for your construction site or have questions about our services?</p>
                        <p className="mt-6 text-lg font-bold pl-4">Contact us today to discuss your requirements, get a quote, or schedule a rental. Our team is here to assist you!</p>
                        <div className='flex justify-end pr-4'>
                            <StarIcon className="h-5 text-yellow-400"></StarIcon>
                            <StarIcon className="h-5 text-yellow-400"></StarIcon>
                            <StarIcon className="h-5 text-yellow-400"></StarIcon>
                            <StarIcon className="h-5 text-yellow-400"></StarIcon>
                            <StarIcon className="h-5 text-yellow-400"></StarIcon>
                        </div>
                        <p className="flex justify-end pr-4 h-5 font-bold text-white">5 Star Yard Bin Rentals</p>
                    </div>
                    <img className='w-full h-[250px] object-fit' src={RealEstateBanner} alt="robot1" />
                </div>
            </div>
        </div>
    )
}

export default OtherHero;
