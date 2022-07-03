import React from 'react';
import profile from "../Image/profile.jpg"
 

const Profile = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src= {profile} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Mubarak Hosen Mohin</h1>
                    <p className='pt-6'>Founder and CEO(Reformation sense)</p>
                    <p>B.Sc.(Chemistry), Chittagong University</p>
                    <p>Web Developer(JS,React)</p>
                    <p>Teaching(Mathematics,Physics,Chemistry,Ict), HSC level</p>
                    <a className='font-bold text hover:text-secondary-focus underline' href="https://app.netlify.com/teams/mubarakmohin1/sites">Netlify Profile</a>
                    <a className=' ml-2 font-bold text hover:text-secondary-focus underline' href=" https://github.com/mubarakmohin1?tab=repositories">Github Profile</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;