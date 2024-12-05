import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className="my-10 h-[448px] w-[832px] mx-auto bg-[url('/images/banner.jpg')] rounded-2xl bg-no-repeat bg-center bg-cover bg-black/40 bg-blend-overlay">
            <div className="text-white flex gap-4 flex-col justify-center items-center h-full">
                <h1 className="text-6xl font-bold text-center">
                    <Slide>Welcome to EquiSports</Slide>
                </h1>
                <p>
                    <Fade delay={1e3} cascade damping={1e-1} className="text-2xl w-[60%] text-center">
                    Discover a wide range of high-quality sports equipment for all your needs
                    </Fade>
                </p>
                <button className="px-8 py-3 bg-[#E2E8F0] rounded-full font-bold text-lg text-black hover:bg-[#ceddf0]">Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;