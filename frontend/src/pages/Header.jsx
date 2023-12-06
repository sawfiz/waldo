// Libraries
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Config
import image1 from '../assets/images/light1.png';
import image2 from '../assets/images/light2.png';
import image3 from '../assets/images/light3.png';
import image4 from '../assets/images/light4.png';
import image5 from '../assets/images/light5.png';
import image6 from '../assets/images/light6.png';
import image7 from '../assets/images/light7.png';
const imagesArray = [image1, image2, image3, image4, image5, image6, image7];

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
        image={imagesArray[item.index]}
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
