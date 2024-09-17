import { useState, useEffect } from "react";
import { createContext } from "react";

type inputState = {
  name: string,
  email: string,
  phone: string,
  address: string,
  zip: string,
  city: string,
  country: string
}

interface UserProgressContextType {
  progress: string,
  inputs: inputState,
  formIsValid: boolean,
  showMenu: () => void,
  showCart: () => void,
  showCheckout: () => void,
  hideModal: () => void,
  updateInputs: (name: string, value: string) => void
}

const UserProgressContext = createContext<UserProgressContextType>({
  progress: '',
  inputs: {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: ""
  },
  formIsValid: false,
  showMenu: () => {},
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
  updateInputs: () => {}
});

export function UserProgressContextProvider({children}: {children:any}) {
  const [userProgress, setUserProgress] = useState('');
  const [formIsComplete, setFormIsComplete] = useState(false);
  const [userInput, setUserInput] = useState<inputState>(
    {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: ""
    }
  );

  useEffect(() => {
    if (userInput.name !== ""
      && userInput.email !== ""
      && userInput.phone !== ""
      && userInput.address !== ""
      && userInput.zip !== ""
      && userInput.city !== ""
      && userInput.country !== ""
    ){
      setFormIsComplete(true);
    } else {
      setFormIsComplete(false)
    }
  }, [userInput])

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

  function updateInputs(name: string, value: string) {
    setUserInput( {...userInput, [name]: value} )
  }

  const userProgressCtx = {
    progress: userProgress,
    inputs: userInput,
    formIsValid: formIsComplete,
    showMenu,
    showCart,
    showCheckout,
    hideModal,
    updateInputs
  };

  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext;