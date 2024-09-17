import { createHashRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import Homepage from './pages/Homepage';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import { UserProgressContextProvider } from './store/UserProgressContext';
import { CartContextProvider } from './store/CartContext';

import './index.css'

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/headphones', element: <Headphones /> },
      { path: '/speakers', element: <Speakers /> },
      { path: '/earphones', element: <Earphones /> },
      { path: '/:category/:product', element: <ProductDetail /> },
      { path: '/checkout', element: <Checkout /> }
    ]
  }
])

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <RouterProvider router={router} />
      </UserProgressContextProvider>
    </CartContextProvider>
  )
}

export default App
