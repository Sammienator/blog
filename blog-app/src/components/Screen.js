import React from 'react';

import giraffic from '../assets/giraffic.jpeg'



const Screen = () => {
  return (
    <div>
        
        <div className='picha'>
          <img src={giraffic}  alt='this is a phots'/>
        </div>
        

        <div className='text'>
          <h1> this is my paragraph</h1>
          <p> Lorem ipsum this is my paragraph Lorem ipsum this is my paragraph Lorem ipsum this is my paragraph Lorem ipsum this is my paragraph</p>
        </div>
    </div>



    
  )
}

export default Screen