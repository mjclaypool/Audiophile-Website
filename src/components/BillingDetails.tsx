import { useState, useEffect, useContext } from "react";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgressContext";

type billingProps = {
  labelStyle: string,
  inputStyle: string,
}

const BillingDetails = ( props: billingProps ) => {
  const userProgressCtx = useContext(UserProgressContext);
  const [didEdit, setDidEdit] = useState<{name: boolean, email: boolean, phone: boolean}>(
    {
      name: false,
      email: false,
      phone: false
    }
  )

  useEffect(() => {
    if (userProgressCtx.inputs.name == "") {
      userProgressCtx.updateErrors("name", "Required");
    } else if (userProgressCtx.inputs.name.length < 2) {
      userProgressCtx.updateErrors("name", "Name must be at least 2 characters");
    } else {
      userProgressCtx.updateErrors("name", "");
    }

    if (userProgressCtx.inputs.email == "") {
      userProgressCtx.updateErrors("email", "Required");
    } else if (userProgressCtx.inputs.email.length > 0) {
      let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (regex.test(userProgressCtx.inputs.email) == false) {
        userProgressCtx.updateErrors("email", "Invalid email address");
      } else {
        userProgressCtx.updateErrors("email", "");
      }
    }

    if (userProgressCtx.inputs.phone == "") {
      userProgressCtx.updateErrors("phone", "Required");
    } else if (userProgressCtx.inputs.phone.length > 0) {
      let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
      if (regex.test(userProgressCtx.inputs.phone) == false) {
        userProgressCtx.updateErrors("phone", "Invalid phone number");
      } else {
        userProgressCtx.updateErrors("phone", "");
      }
    }
  }, [didEdit])

  function handleInputBlur(id: string) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [id]: true
    }))
  }

  function handleChange(id: string, name: string, value: string) {
    userProgressCtx.updateInputs(name, value)
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [id]: false
    }))
  }

  return (
    <div className="mb-8 md:mb-[53px]">
      <h3 className="text-sub-title text-p-orange-dark mb-4">BILLING DETAILS</h3>
      <div className="flex flex-col md:flex-row md:gap-4 md:mb-6">
        <Input
          type="text"
          id="name"
          name="Name"
          value={userProgressCtx.inputs.name}
          placeholder="Alexei Ward"
          labelStyle={props.labelStyle}
          inputStyle={props.inputStyle}
          error={didEdit.name == true && userProgressCtx.inputError.name !== ""}
          errorMsg={userProgressCtx.inputError.name}
          didEdit={() => handleInputBlur('name')}
          didChange={handleChange}
        />
        <Input
          type="email"
          id="email"
          name="Email Address"
          value={userProgressCtx.inputs.email}
          placeholder="alexei@mail.com"
          labelStyle={props.labelStyle}
          inputStyle={props.inputStyle}
          error={didEdit.email == true && userProgressCtx.inputError.email !== ""}
          errorMsg={userProgressCtx.inputError.email}
          didEdit={() => handleInputBlur('email')}
          didChange={handleChange}
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:flex-1">
          <Input
            type="tel"
            id="phone"
            name="Phone Number"
            value={userProgressCtx.inputs.phone}
            placeholder="+1 202-555-0136"
            labelStyle={props.labelStyle}
            inputStyle={props.inputStyle}
            error={didEdit.phone == true && userProgressCtx.inputError.phone !== ""}
            errorMsg={userProgressCtx.inputError.phone}
            didEdit={() => handleInputBlur('phone')}
            didChange={handleChange}
          />
        </div>
        <div className="hidden md:flex flex-1" />
      </div>
    </div>
  )
}

export default BillingDetails;