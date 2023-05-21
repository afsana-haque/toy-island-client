import React from 'react';
import { useContext } from 'react';
import { FaGoogle} from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleSingIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSingIn()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='divider'>OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn  btn-outline btn-info'><FaGoogle/><span className='pl-2 '>SignIn with Google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;