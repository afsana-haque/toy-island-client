import React from 'react';
import { useContext } from 'react';
import { FaGoogle} from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {

    const {googleSingIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSingIn()
        .then(result => {
            console.log(result.user)
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