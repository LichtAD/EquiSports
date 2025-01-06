import React from 'react';

const SportsCategories = () => {
    return (
        <div className='my-10'>
            <h2 className='text-center text-3xl font-bold my-4'>Sports Categories</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* card-1 */}
                <div className="card card-compact bg-base-100 shadow-xl border-2 border-white/20">
                    <figure>
                        <img
                            src="/images/football.jpg"
                            alt="Football" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Football</h2>
                        <p>Two teams compete to score goals using a round ball.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

                {/* card-2 */}
                <div className="card card-compact bg-base-100 shadow-xl border-2 border-white/20">
                    <figure>
                        <img
                            src="/images/cricket.jpg"
                            alt="Cricket" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Cricket</h2>
                        <p>A bat-and-ball game played between two teams of eleven players each.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

                {/* card-3 */}
                <div className="card card-compact bg-base-100 shadow-xl border-2 border-white/20">
                    <figure>
                        <img
                            src="/images/basketball.jpg"
                            alt="Basketball" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Basketball</h2>
                        <p>Team sport played on a rectangular court by two teams of five players.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

                {/* card-4 */}
                <div className="card card-compact bg-base-100 shadow-xl border-2 border-white/20">
                    <figure>
                        <img
                            src="/images/baseball.jpg"
                            alt="Baseball" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Baseball</h2>
                        <p>Team sport played with a bat and ball, scoring runs.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

                {/* card-5 */}
                <div className="card card-compact bg-base-100 shadow-xl border-2 border-white/20">
                    <figure>
                        <img
                            src="/images/hockey.jpg"
                            alt="Hockey" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Hockey</h2>
                        <p>Team sport played between two teams of eleven players using sticks, balls, and goals.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

                {/* card-6 */}
                <div className="card card-compact bg-base-100 shadow-xl border-2 border-white/20">
                    <figure>
                        <img
                            src="/images/tennis.jpg"
                            alt="Tennis" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Tennis</h2>
                        <p>Racquet sport played between two players or two teams of two players.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SportsCategories;