import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className='my-10' id='contact'>
            <h2 className='text-center text-3xl font-bold'>Contact Us</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>

                {/* left side */}
                <div className='flex flex-col gap-8'>
                    <div className='flex gap-4 items-center'>
                        <div><FaLocationDot size={30} /></div>
                        <div>
                            <h1 className='text-2xl font-medium'>Our Office Address</h1>
                            <p className='text-lg'>Chittagong</p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div><IoMail size={30} /></div>
                        <div>
                            <h1 className='text-2xl font-medium'>General Inquiries</h1>
                            <p className='text-lg'>antu4939@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div><IoCall size={30} /></div>
                        <div>
                            <h1 className='text-2xl font-medium'>Call Us</h1>
                            <p className='text-lg'>+88001634216210</p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div><FaClock size={30} /></div>
                        <div>
                            <h1 className='text-2xl font-medium'>Our Timing</h1>
                            <p className='text-lg'>Monday - Sunday: 24 hours open</p>
                        </div>
                    </div>

                </div>

                {/* right side */}
                <div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Name</span> */}
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Email</span> */}
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Contact Info</span> */}
                        </label>
                        <input type="text" placeholder="Your Contact Info" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            {/* <span className="label-text">Contact Info</span> */}
                        </label>
                        <textarea className="textarea textarea-bordered h-20" placeholder="Your Message"></textarea>
                    </div>
                    <div className='mt-4'>
                        <button className="btn rounded-full px-8 py-3 bg-[#E2E8F0] text-black border-none hover:bg-[#ceddf0]">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;