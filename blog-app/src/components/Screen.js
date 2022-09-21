import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/Carousel';
import pc from '../assets/pc.jpg';
import pc2 from '../assets/pc2.jpg';


const Screen = () => {
  return (
    <div>
        <Container> 
            <Carousel> 

        <Carousel.Item>
        <img width="100%" height= "100%"
          className="d-block"
          src={pc}
          alt="First slide"
        />
        <Carousel.Caption >
          <h1>Telling Stories that Matter</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img width="100%" height= "100%"
          className="d-block"
          src={pc2}
          alt="second slide"
        />
        <Carousel.Caption >
          <h1>Telling stories by Us!</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      </Carousel>
      
        </Container>


   
   
      
      
    </div>



    
  )
}

export default Screen