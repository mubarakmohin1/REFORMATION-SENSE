import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    if (user) {
        console.log('success')
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">What is your email?</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required:{
                                        value:true,
                                        message: "Email is required!!"
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                            <span className="label-text">What is your password?</span>

                            </label>
                            <input
                                type="number"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required:{
                                        value:true,
                                        message: "Password is required!!"
                                    }
                                })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                               
                            </label>
                        </div>
                        <input className='btn btn-info hover:btn-success w-full font-bold text-xl' type="submit" value='Login' />
                    </form>
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