import { useState } from "react";
import { createContext } from "react";

interface UserProgressContextType {
  progress: string;
  showMenu: () => void,
  hideMenu: () => void,
  showCart: () => void,
  hideCart: () => void,
  showCheckout: () => void,
  hideCheckout: () => void,
}

const UserProgressContext = createContext<UserProgressContextType>({
  progress: '', //'menu', 'cart' or 'checkout'
  showMenu: () => {},
  hideMenu: () => {},
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({children}: {children:any}) {
  const [userProgress, setUserProgress] = useState('');

  function showMenu() {
    setUserProgress('menu');
  }

  function hideMenu() {
    setUserProgress('');
  }

  function showCart() {
    setUserProgress('cart');
  }

  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideCheckout() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showMenu,
    hideMenu,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext;