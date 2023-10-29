import React, { useRef, useState, useEffect } from 'react';
import RealEstateBanner from './assets/pictures/trashHaulFooter.png';

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
                <div className='absolute w-full h-full text-gray-200 max-h-[250px] bg-black/40 flex flex-col justify-center z-0'>


                <p className="text-center text-2xl font-semibold pb-6">Get in Touch</p>
                    <p className="text-lg font-bold">Ready to rent a dumpster for your construction site or have questions about our services?</p>
                    <p className="mt-6 font-bold">Contact us today to discuss your requirements, get a quote, or schedule a rental. Our team is here to assist you!</p>
                </div>
                <img className='w-full h-[250px] object-contain' src={RealEstateBanner} alt="robot1" />
                
            </div>
            
            
        </div>
    )
}

export default OtherHero;
