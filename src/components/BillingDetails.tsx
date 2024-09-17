import { useState, useContext } from "react";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgressContext";

type billingProps = {
  labelStyle: string,
  inputStyle: string,
}

type blurState = {
  name: boolean,
  email: boolean,
  phone: boolean
}

const BillingDetails = ( props: billingProps ) => {
  const userProgressCtx = useContext(UserProgressContext);
  const [didEdit, setDidEdit] = useState<blurState>(
    {
      name: false,
      email: false,
      phone: false
    }
  )

  function handleInputBlur(id: string) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [id]: true
    }))
  }

  function handleChange(name: string, value: string) {
    userProgressCtx.updateInputs(name, value)
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
          error={didEdit.name == true && userProgressCtx.inputs.name == ""}
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
          error={didEdit.email == true && userProgressCtx.inputs.email == ""}
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
            error={didEdit.phone == true && userProgressCtx.inputs.phone == ""}
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