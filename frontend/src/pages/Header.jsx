// Libraries
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Contexts
import { GameContext } from '../contexts/GameContext';

// Components
import Timer from '../components/Timer';

// Vite handles .env differently from create-react-app
const BASE_URL = import.meta.env.VITE_BASE_URL; // Set the base URL

// Styling
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import GridItem from '../components/GridItem';

export default function Header() {
  const navigate = useNavigate();
  const { gameStart, quitGame, items, itemsFound, time, imageArray, game } =
    useContext(GameContext);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (itemsFound >= 3) {
      quitGame();
      setShowModal(true);
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
        image={imageArray[item.index]}
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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    setShowModal(false)
    try {
      const response = await axios.post(`${BASE_URL}/submit`, {
        game,
        name,
        time,
        date: new Date(),
      });

    } catch (err) {
      console.log(err);
    }
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>You win!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You did it in {time} seconds!
          <div>
            Please enter your name
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                name="mobile"
                value={name}
                onChange={handleChange}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
