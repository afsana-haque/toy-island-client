import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen lg:ps-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="items-center lg:items-end w-1/2 ml-20">
                    <img src="https://i.ibb.co/sR8QW3L/4707071.jpg" alt="" className='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-3xl font-bold text-center'>Login</h3>
                        <form onSubmit={handleLogin}>
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
                                <input type="submit" value="Login" className="btn btn-info text-white" />
                            </div>
                        </form>
                        <p className='my-5 text-center'>New to Toy Island? Please <Link to='/signup' className='font-bold'>Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;