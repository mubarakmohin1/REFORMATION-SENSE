import React from 'react';
import SingleInstructor from './SingleInstructor';
import reform4 from '../Image/reform4.jpg'
import reform5 from '../Image/reform5.jpg'
import reform6 from '../Image/reform6.jpg'

const Instructor = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-center my-4'>আমাদের শিক্ষকমন্ডলি</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <SingleInstructor title="Mubarak Hosen" speciality="ICT Teacher" contact="01853909088" img={reform5}></SingleInstructor>
                <SingleInstructor title="Raihan Uddin" speciality="Physics Teacher" contact="01868285928" img={reform4}></SingleInstructor>
                <SingleInstructor title="Fahim Hasan" speciality="Math Teacher" contact="01739430595" img={reform6}></SingleInstructor>
            </div>
        </div>
    );
};

export default Instructor;