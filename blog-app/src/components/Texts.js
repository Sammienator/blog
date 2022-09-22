import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pc3 from '../assets/pc3.jpg';

function Texts () {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width  */}
      <Row>
        <Col xs={12}  >
         <h1 className='heading' textAlign={'center'}> Lorem ipsum dolor sit aliqua. </h1>
        </Col>
        
      </Row>

  

      {/* Columns are always 50% wide, on mobile and desktop */}
      
      <Container>
      <Row>


<Col xs={6}>
  <div>
      <img src={pc3} alt='pics' width={"100%"} height={"600px"}/>
  </div>
 
  </Col>



  
  <Col xs={6} className='my-3'>
  <h2 className='text'>Lorem ipsum dolor sit amet </h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consect. </p>
  </Col>
  
</Row>

      </Container>
    
    </Container>
  );
}

export default Texts;