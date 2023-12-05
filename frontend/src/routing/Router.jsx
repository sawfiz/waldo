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
    <Route path='/game1' element={<Canvas />} />

  </Route>
);

const router = createBrowserRouter(routes);

export default router;
