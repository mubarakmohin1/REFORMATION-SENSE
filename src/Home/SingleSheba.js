import React from 'react';

const SingleSheba = ({cardTitle,bgClass}) => {
    return (
        <div class={`card bg-primary text-primary-content ${bgClass}`}>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sint reiciendis natus tempora qui aperiam amet doloribus temporibus quas recusandae ducimus, ex aspernatur sed vel necessitatibus accusantium animi! Neque.</p>
           
        </div>
      </div>
    );
};

export default SingleSheba;