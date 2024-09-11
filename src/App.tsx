import { createHashRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import Homepage from './pages/Homepage';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';

import './index.css'

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/headphones', element: <Headphones /> },
      { path: '/speakers', element: <Speakers /> },
      { path: '/earphones', element: <Earphones /> }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
