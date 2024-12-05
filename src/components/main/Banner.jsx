import React from 'react';

const Banner = () => {
    return (
        <div className="my-10 h-[448px] w-[832px] mx-auto bg-[url('/images/banner.jpg')] rounded-2xl bg-no-repeat bg-center bg-cover bg-black/40 bg-blend-overlay">
            <div className="text-white flex gap-4 flex-col justify-center items-center h-full">
                <h1 className="text-6xl font-bold text-center">Welcome to EquiSports</h1>
                <p className="text-2xl w-[60%] text-center">Discover a wide range of high-quality sports equipment for all your needs.</p>
                <button className="px-8 py-3 bg-[#FFC107] rounded-full font-bold text-lg hover:bg-[#ff9900]">Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;