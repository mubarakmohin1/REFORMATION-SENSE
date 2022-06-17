import React from 'react';

const SingleInstructor = ({ img, title, speciality, contact }) => {
    return (
        <div class="card w-96 bg-base-200 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center py-1 mt-1">
                <h2 class="card-title font-bold">Name:{title}</h2>
                <h3>Skill: <b>{speciality}</b></h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut ipsum doloribus voluptas et veritatis!</p>
                <h2>Mobile: <b>{contact}</b></h2>
            </div>
        </div >
    );
};

export default SingleInstructor;