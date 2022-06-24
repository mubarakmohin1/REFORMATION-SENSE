import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    if (user) {
        console.log("success")
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-96 bg-base-100  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your Name?</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required:{
                                        value:true,
                                        message: "Name is required!!"
                                    }
                                })}
                            />
                            <label class="label">
                            {errors.name?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span> }
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your email?</span>

                            </label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required:{
                                        value:true,
                                        message: "Email is required!!"
                                    }
                                })}
                            />
                            <label class="label">
                            {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span> }
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                            <span class="label-text">What is your password?</span>

                            </label>
                            <input
                                type="number"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required:{
                                        value:true,
                                        message: "Password is required!!"
                                    }
                                })}
                            />
                            <label class="label">
                            {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span> }
                               
                            </label>
                        </div>
                        <input className='btn btn-info hover:btn-accent w-full font-bold text-xl' type="submit" value='Register' />
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

export default Register;