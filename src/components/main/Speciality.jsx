import React from 'react';

const Speciality = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4 text-center my-20'>
            <div className='space-y-2'>
                <img className='mx-auto' src="/images/icons/1.png" alt="" />
                <h1 className='text-lg font-bold'>WIDEST SELECTION</h1>
                <p>Several lines of equipment for all different exercise goals</p>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto' src="/images/icons/2.png" alt="" />
                <h1 className='text-lg font-bold'>UNPARALLELED BIOMECHANICS</h1>
                <p>Unrivaled quality through research</p>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto' src="/images/icons/3.png" alt="" />
                <h1 className='text-lg font-bold'>EXPERT SERVICE</h1>
                <p>We make purchasing and delivery easy with our extensive experience</p>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto h-16 w-16' src="/images/icons/7.png" alt="" />
                <h1 className='text-lg font-bold'>CLUB PREFERRED</h1>
                <p>Trusted by clubs and teams of all levels</p>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto' src="/images/icons/5.png" alt="" />
                <h1 className='text-lg font-bold'>TRUSTED HISTORY</h1>
                <p>Built on trusted heritage and known quality</p>
            </div>
            <div className='space-y-2'>
                <img className='mx-auto' src="/images/icons/6.png" alt="" />
                <h1 className='text-lg font-bold'>PROFESSIONAL PREFERRED</h1>
                <p>Preferred in the fitness industry by trainers and athletes</p>
            </div>
        </div>
    );
};

export default Speciality;