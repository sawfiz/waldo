// Libraries
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Config
import { lightImagesArray, beachImagesArray, dragonImagesArray } from '../assets/images';

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
import GridItem from '../components/GridItem';

export default function Header() {
  const navigate = useNavigate();
  const { gameStart, quitGame, items, itemsFound, time } = useContext(GameContext);

  useEffect(() => {
    if (itemsFound >= 3) {
      quitGame();
      alert(`You win! You did it in ${time} seconds!`);
      navigate('/');
    }
  }, [itemsFound, time, quitGame, navigate]);

  const handleClick = () => {
    quitGame();
    navigate('/');
  };

  // Create an array of GridItem components mapped from randomImages
  const gridItems = items
    .filter((item) => !item.found)
    .map((item, index) => (
      <GridItem
        key={index}
        image={dragonImagesArray[item.index]}
        index={item.index}
        alt={`Image ${index + 1}`}
        clickPosition={{ x: 0, y: 0 }}
      />
    ));

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    gap: '5px',
    marginLeft: '40px', // Adjust margin for the grid
    // Disable pointer events for all elements within the grid
    pointerEvents: 'none',
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand>Photo Tagging</NavbarBrand>
          {gameStart && (
            <>
              <Button onClick={handleClick}>Quit</Button>
              <div style={gridStyle}>{gridItems}</div>
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
