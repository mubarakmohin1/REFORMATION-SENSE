import React from 'react';
import SingleSheba from './SingleSheba';
 

const Sheba = () => {
    return (
        <div>
            <h2 className='text-center text-xl mt-5 font-bold'>আমাদের একাডেমিক সেবাসমূহ</h2>
            <div className=' mt-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5'>

                
                    <SingleSheba cardTitle="গনিত" bgclassName="bg-gradient-to-r from-secondary to-primary" ></SingleSheba>
                    <SingleSheba cardTitle="ইংরেজি" bgclassName="bg-gradient-to-r from-accent to-secondary" ></SingleSheba>
                    <SingleSheba cardTitle="রসায়ন" bgclassName="bg-gradient-to-r from-info to-success" ></SingleSheba>
                    <SingleSheba cardTitle="পদার্থ" bgclassName="bg-gradient-to-r from-primary to-error" ></SingleSheba>
                    <SingleSheba cardTitle="জীব বিজ্ঞান" bgclassName="bg-gradient-to-r from-neutral to-warning" ></SingleSheba>
                    <SingleSheba cardTitle="আইসিটি" bgclassName="bg-gradient-to-r from-accent to-danger" ></SingleSheba>
  
                
            </div>
        </div>
    );
};

export default Sheba;