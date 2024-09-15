import { useState } from "react";
import { createContext } from "react";

interface UserProgressContextType {
  progress: string;
  showMenu: () => void,
  showCart: () => void,
  showCheckout: () => void,
  hideModal: () => void,
}

const UserProgressContext = createContext<UserProgressContextType>({
  progress: '',
  showMenu: () => {},
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
});

export function UserProgressContextProvider({children}: {children:any}) {
  const [userProgress, setUserProgress] = useState('');

  function showMenu() {
    setUserProgress('menu');
  }

  function showCart() {
    setUserProgress('cart');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideModal() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showMenu,
    showCart,
    showCheckout,
    hideModal,
  };

  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext;