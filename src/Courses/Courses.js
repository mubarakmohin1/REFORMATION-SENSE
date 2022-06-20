import React from 'react';
import reformV1 from '../Image/reformV1.mp4'

const Courses = () => {
    return (
        <div className=' m-2 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className="card bg-base-200 shadow-xl">
                <figure className="px-5 py-5">
                    <video controls>
                        <source src={reformV1} type="video/mp4"/>
                    </video>
                </figure>
                
                </div>
            
        </div>
    );
};

export default Courses;