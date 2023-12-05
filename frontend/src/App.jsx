// Libraries
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Config
import router from './routing/Router';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Canvas from './components/Canvas'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
