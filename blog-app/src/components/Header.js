import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header () {
  return (
    <Navbar className='transparent'>
      <Container>
        <Navbar.Brand href="#home">Stories by Her</Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            
          </Nav>
        
      
      </Container>
    </Navbar>
  );
}

export default Header ;