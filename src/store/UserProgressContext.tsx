import { useState, useEffect } from "react";
import { createContext } from "react";

type inputState = {
  name: string,
  email: string,
  phone: string,
  address: string,
  zip: string,
  city: string,
  country: string,
  number: string,
  pin: string
}

interface UserProgressContextType {
  progress: string,
  inputs: inputState,
  pymtMethod: string,
  formIsValid: boolean,
  showMenu: () => void,
  showCart: () => void,
  showCheckout: () => void,
  hideModal: () => void,
  updateInputs: (name: string, value: string) => void,
  updatePymtMethod: (method: string) => void
}

const UserProgressContext = createContext<UserProgressContextType>({
  progress: "",
  inputs: {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    number: "",
    pin: "",
  },
  pymtMethod: "",
  formIsValid: false,
  showMenu: () => {},
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
  updateInputs: () => {},
  updatePymtMethod: () => {}
});

export function UserProgressContextProvider({children}: {children:any}) {
  const [userProgress, setUserProgress] = useState('');
  const [selectedMethod, setSelectedMethod] = useState("electronic")
  const [formIsComplete, setFormIsComplete] = useState(false);
  const [userInput, setUserInput] = useState<inputState>(
    {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      number: "",
      pin: "",
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
      if (selectedMethod == "cash") {
        setFormIsComplete(true);
      } else if (selectedMethod == "electronic" && userInput.number !== "" && userInput.pin !== "") {
        setFormIsComplete(true);
      } else {
        setFormIsComplete(false);
      }
    } else {
      setFormIsComplete(false)
    }
  }, [userInput, selectedMethod])

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

  function updatePymtMethod(method: string) {
    setSelectedMethod(method);
  }

  const userProgressCtx = {
    progress: userProgress,
    inputs: userInput,
    formIsValid: formIsComplete,
    pymtMethod: selectedMethod,
    showMenu,
    showCart,
    showCheckout,
    hideModal,
    updateInputs,
    updatePymtMethod
  };

  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext;