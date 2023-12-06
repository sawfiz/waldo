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



const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/game1" element={<Canvas game={1} />} />
    <Route path="/game2" element={<Canvas game={2} />} />
    <Route path="/game3" element={<Canvas game={3} />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
