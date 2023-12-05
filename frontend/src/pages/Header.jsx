// Libraries
import { Link } from 'react-router-dom';
import { useContext } from 'react';

// Config

// Contexts

// Components

// Styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Timer from '../components/Timer';

export default function Header() {
  return (
    <div className='fixed top-0 w-full z-10'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand>Photo Tagging</NavbarBrand>
            <div>
              <Timer />
            </div>
        </Container>
      </Navbar>
    </div>
  );
}
