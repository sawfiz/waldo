// Libraries
import { RouterProvider } from 'react-router-dom';

import { GameProvider } from './contexts/GameContext';

// Config
import router from './routing/Router';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GameProvider>
      <RouterProvider router={router}></RouterProvider>
    </ GameProvider>
  );
}

export default App;
