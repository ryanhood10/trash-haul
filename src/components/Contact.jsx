import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { validateEmail } from '../utils/validators';

const Contact = () => {
    // State for form data and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    // State and ref for the animation
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedErrors = { ...errors, [name]: value.trim() === '' ? 'Input is required.' : null };
        setErrors(updatedErrors);
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = Object.keys(formData).reduce((acc, key) => {
            if (formData[key].trim() === '') {
                acc[key] = 'Input field is required.';
            } else if (key === 'email' && !validateEmail(formData[key])) {
                acc[key] = 'Invalid email address.';
            }
            return acc;
        }, {});
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const emailData = {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                };
                const response = await axios.post('https://ryans-portfolio.herokuapp.com/contact', emailData);
                alert(response.data.message);
            } catch (error) {
                console.error(error);
                alert('Failed to send email.');
            }
        }
    };

    return(
        <div ref={ref} className={`${animationClasses(isVisible)} w-full py-16 text-white px-4 bg-blue-900`}>
            <div className="max-w-[1240px] mx-auto grid"> 
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold-py-2"> Lets work together! </h1>
                    <br></br>
                    <p>Email us!</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col items-center">
                        <form className="w-full" onSubmit={handleSubmit}>
                            {['name', 'email', 'message'].map((field) => (
                                <div key={field}>
                                    <p>{field[0].toUpperCase() + field.slice(1)}:</p>
                                    {field !== 'message' ? (
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            placeholder={field[0].toUpperCase() + field.slice(1)}
                                            className='p-3 flex w-full rounded-md text-black'
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    ) : (
                                        <textarea
                                            placeholder="Message"
                                            className='p-3 min-h-[200px] flex w-full rounded-md text-black'
                                            name="message"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    )}
                                    {errors[field] && <span className="error">{errors[field]}</span>}
                                </div>
                            ))}
                            <button type="submit" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Send Email</button>
                        </form>
                    </div>
                    <p>By phone, you can Contact Steve Kroeger at<a href="tel:6153779779" className='w-full  font-bold text-white m-4 hover:text-blue-200 hover:font-underline'>615.377.9779</a>
</p>
                </div>
            </div>
        </div>
    )
} 

export default Contact;
