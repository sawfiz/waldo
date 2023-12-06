// Library
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Routing
import RootLayout from './RootLayout';

// Page components
import Home from '../pages/Home';
import Canvas from '../components/Canvas';

// Background images
import room from '../assets/images/room.png';
import beach from '../assets/images/beach.jpg';
import dragons from '../assets/images/dragons.webp';

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/game1" element={<Canvas backgroundImg={room} />} />
    <Route path="/game2" element={<Canvas backgroundImg={beach} />} />
    <Route path="/game3" element={<Canvas backgroundImg={dragons} />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
