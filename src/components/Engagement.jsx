import React, { useRef, useState, useEffect } from "react";
import DumpsterImage from "./assets/pictures/trashDumpster.png";
import NashMap from './assets/pictures/NashMap1.png';
import { useNavigate } from 'react-router-dom';

const DumpsterRentalCompany = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        const divRef = document.querySelector(".animation-container");

        if (divRef) {
            observer.observe(divRef);
        }

        return () => {
            if (divRef) {
                observer.unobserve(divRef);
            }
        };
    }, []);

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    const handleContactUs = () => {
        const newsletterRef = document.querySelector(".newsletter-section");
        if (newsletterRef) {
            newsletterRef.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              
                <div className={`animation-container ${animationClasses(isVisible)}`}>
                    <p className="text-green-700 text-xl font-bold">Nashville Dumpster Rentals</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Your Trusted Dumpster Rental Solution</h1>
                    <p className="text-xl"> 
                        Nashville Dumpster Rentals specializes in providing high-quality dumpster containers primarily for construction sites. We offer a wide range of container sizes to meet your project's needs, along with reliable delivery and pickup services.
                    </p>
                    <p className="text-green-600 text-lg">Contact us today to discuss your dumpster rental requirements.</p>
                    <button onClick={handleContactUs} className="bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-green-600">Contact Us</button>
                </div>

                <div className={`animation-container ${animationClasses(isVisible)}`}>
                    <img className="w-full rounded-3xl border-black border-solid" src={DumpsterImage} alt="Dumpster" />
                </div>

            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className={`animation-container ${animationClasses(isVisible)}`}>
                    <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2">Our Dumpster Services</h1>
                    <p className="text-center md:text-xl sm:text-xl text-xl justify-center  font-semibold">
                        Discover our comprehensive dumpster rental services:
                    </p>
                    <div className="flex flex-wrap justify-center py-4">
                        <ul className="font-semibold text-2xl grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-green-700">
                            <li className="flex items-center">
                                <span className="mr-2">Construction Site Rentals</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Various Container Sizes</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Flexible Rental Periods</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Prompt Delivery & Pickup</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Affordable Pricing</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Dedicated Customer Support</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">Environmentally Friendly Practices</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`animation-container ${animationClasses(isVisible)}`}>
                    <div className="flex items-center justify-center h-full">
                        <img className="w-full rounded-3xl" src={NashMap} alt="Dumpster" />
                    </div>
                    </div>

            </div>

            <div className="max-w-[1240px] mx-auto py-16 px-4">
                <p className="text-center text-2xl font-semibold pb-6">Why Choose Nashville Dumpster Rentals</p>
                <div className="flex flex-col justify-center text-lg">
                    <p className="text-lg font-bold">At Nashville Dumpster Rentals, we take pride in our commitment to serving construction sites with reliable and efficient dumpster rental solutions. Here's why you should choose us:</p>
                    <ul className="list-disc list-inside pl-6 mt-2">
                        <li className="mb-2">Experience and Expertise in Construction Site Rentals</li>
                        <li className="mb-2">Wide Range of Container Sizes to Fit Your Needs</li>
                        <li className="mb-2">Flexible Rental Options to Suit Your Schedule</li>
                        <li className="mb-2">Timely Delivery and Pickup Services</li>
                        <li className="mb-2">Competitive and Transparent Pricing</li>
                        <li className="mb-2">Dedicated Customer Support Team</li>
                        <li className="mb-2">Environmentally Conscious Practices</li>
                    </ul>
                </div>
            </div>

         
        </div>
    )
}

export default DumpsterRentalCompany;
