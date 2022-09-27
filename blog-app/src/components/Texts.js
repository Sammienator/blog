import Container from 'react-bootstrap/Container';

import pc3 from '../assets/pc3.jpg';

function Texts () {
  return (
   
    <div>
      <div className='text'>
        <h1>Lorem ipsum this is my paragraph   </h1>
      </div>
      <Container className='mpya'>
        <img src={pc3} alt='my poster' />
        
        <p> lorem Aut deserunt optio tempore et eaque. Exercitationem velit et consectetur. Iusto voluptas aut molestias minima. Provident laudantium sed porro eos consequuntur vitae doloribus explicabo. Recusandae enim aut voluptas et reprehenderit. Enim ex at sit dolores voluptas aut.</p>
      </Container>
    </div>
    
    
  );
}

export default Texts;