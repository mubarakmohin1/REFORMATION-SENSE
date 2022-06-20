import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     
      if (user) {
        console.log('success')
      }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider font-bold">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;