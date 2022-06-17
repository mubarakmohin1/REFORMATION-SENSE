import React from 'react';
import reform1 from '../Image/reform1.jpg'
import reform2 from '../Image/reform2.jpg'
import reform3 from '../Image/reform3.jpg'


const Banner = () => {
    return (
       <div>
         <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src= {reform1} className="w-full" alt='' />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src= {reform2} className="w-full" alt='' />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src= {reform3} className="w-full" alt=''/>
        </div> 
        
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
         
      </div>
       </div>
    );
};

export default Banner;