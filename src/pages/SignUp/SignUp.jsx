import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault()
    }

    return (
        <div className="hero min-h-screen lg:ps-24 my-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="items-center lg:items-end  ml-16">
                <img src="https://i.ibb.co/Sdc084x/4957136.jpg" alt="" className='' />
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 p">
                <div className="card-body ">
                    <h3 className='text-3xl font-bold text-center'>Sign Up</h3>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-info text-white" />
                        </div>
                    </form>
                    <p className='my-5 text-center'>Already Have a Account? Please <Link to='/login' className='font-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;