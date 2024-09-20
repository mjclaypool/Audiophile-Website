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
  inputError: inputState,
  showMenu: () => void,
  showCart: () => void,
  showCheckout: () => void,
  hideModal: () => void,
  updateInputs: (name: string, value: string) => void,
  updateErrors: (name: string, value: string) => void,
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
    pin: ""
  },
  pymtMethod: "",
  formIsValid: false,
  inputError: {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    number: "",
    pin: ""
  },
  showMenu: () => {},
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
  updateInputs: () => {},
  updateErrors: () => {},
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
  const [error, setError] = useState<inputState>(
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
    console.log(error)
    if (error.name == ""
      && error.email == ""
      && error.phone == ""
      && error.address == ""
      && error.zip == ""
      && error.city == ""
      && error.country == ""
    ){
      if (selectedMethod == "cash") {
        setFormIsComplete(true);
      } else if (selectedMethod == "electronic" && error.number == "" && error.pin == "") {
        setFormIsComplete(true);
      } else {
        setFormIsComplete(false);
      }
    } else {
      setFormIsComplete(false)
    }
  }, [error, selectedMethod])

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

  function updateErrors(name: string, value: string) {
    setError( prevError => ({...prevError, [name]: value}) )
  }

  function updatePymtMethod(method: string) {
    setSelectedMethod(method);
  }

  const userProgressCtx = {
    progress: userProgress,
    inputs: userInput,
    formIsValid: formIsComplete,
    pymtMethod: selectedMethod,
    inputError: error,
    showMenu,
    showCart,
    showCheckout,
    hideModal,
    updateInputs,
    updateErrors,
    updatePymtMethod
  };

  return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
}

export default UserProgressContext;