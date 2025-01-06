import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer2 = () => {

    const { theme } = useContext(AuthContext);

    return (
        <footer className={`footer ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-200'} p-10`}>
            <aside className='flex flex-col justify-center items-start gap-2'>
                <div>
                    {/* <img src="/images/logo.png" className='w-24' alt="" /> */}
                    <img src={theme === 'dark' ? "/images/logo-reverse.png" : "/images/logo.png"} className='w-24' alt="" />
                </div>
                <p className="font-bold">EquiSports</p>
                <p>
                    Providing reliable tech since 1992
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <div className='space-y-4'>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/antu.ad.1/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={25} />
                        </a>
                        <a href="https://discord.gg/MbGmDAMJ6Q" target="_blank" rel="noopener noreferrer">
                            <FaDiscord size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/antu-dutta-ad/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={25} />
                        </a>
                    </div>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className={`btn  ${theme === 'dark' ? 'bg-[#E2E8F0] text-slate-900' : 'bg-slate-900'} text-white join-item`}>Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>
    );
};

export default Footer2;