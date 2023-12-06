// Libraries
import { useContext, useEffect } from 'react';

import { GameContext } from '../contexts/GameContext';

// Components
import Game from '../components/Game';
import HighScore from '../components/HighScore';

// Background images
import room from '../assets/images/room.png';
import beach from '../assets/images/beach.jpg';
import dragons from '../assets/images/dragons.webp';

export default function Home() {
  const { quitGame } = useContext(GameContext);

  useEffect(() => {
    // In case user use browser backbutton go back to the home page, quit the current game
    quitGame();
  }, []);

  return (
    <main>
      <div className="mt-20 flex justify-center items-center gap-4">
        <Game gameId={1} imageSrc={room} />
        <Game gameId={2} imageSrc={beach} />
        <Game gameId={3} imageSrc={dragons} />
      </div>

      <div className="mt-20 flex justify-center items-center gap-4">
        <HighScore gameId={1} />
        <HighScore gameId={2} />
        <HighScore gameId={3} />
      </div>
    </main>
  );
}
