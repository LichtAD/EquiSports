import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {

    const { createNewUser, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({ name, email, photo, password });

        createNewUser(email, password)
            .then(result => {
                setUser(result.user);
                // console.log(result.user);
                Swal.fire({
                    title: "Congratulations!",
                    text: "You have successfully registered!",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/')
                    }
                })
                form.reset();
            })
            .catch(err => {
                const errorMessage = err.message;
                console.log({ errorMessage });
            })
    }

    // ! toggle password
    const [showPassword, setShowPassword] = useState(false);
    const handleShowHidePassword = (event) => {
        event.stopPropagation();
        event.preventDefault();
        return setShowPassword(prev => !prev);
    }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                    <h1 className="text-center text-3xl font-bold my-4">Register Now</h1>
                    <form onSubmit={handleRegistration} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />

                            <button onClick={handleShowHidePassword} className='absolute right-3 top-12 btn btn-xs'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>

                        </div>

                        {/* {
                            error && <p className='text-red-600'>{error}</p>
                        } */}

                        <div className="form-control mt-1">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <div className='my-2'>
                            <h1>Already have an account? <Link to={'/login'} className='text-primary link link-hover'>Login</Link></h1>
                        </div>

                        <div className='text-center'>
                            <button className="btn btn-primary btn-outline rounded-full">
                                <IoLogoGoogle size={20} /> Login with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;