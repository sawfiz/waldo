// Libraries
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Config

// Contexts
import { GameContext } from '../contexts/GameContext';

// Components
import Timer from '../components/Timer';

// Styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { Button } from 'react-bootstrap';

export default function Header() {
  const navigate = useNavigate();
  const { gameStart, quitGame } = useContext(GameContext);

  const handleClick = () => {
    quitGame();
    navigate('/');
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand>Photo Tagging</NavbarBrand>
          {gameStart && (
            <>
              <Button onClick={handleClick}>Quit</Button>

              <div>
                <Timer />
              </div>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
