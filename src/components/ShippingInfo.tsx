import { useState, useContext } from "react";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgressContext";

type shippingProps = {
  labelStyle: string,
  inputStyle: string,
}

type blurState = {
  address: boolean,
  zip: boolean,
  city: boolean,
  country: boolean
}

const ShippingInfo = ( props: shippingProps ) => {
  const userProgressCtx = useContext(UserProgressContext);
  const [didEdit, setDidEdit] = useState<blurState>(
    {
      address: false,
      zip: false,
      city: false,
      country: false
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
      <h3 className="text-sub-title text-p-orange-dark mb-4">SHIPPING INFO</h3>
      <div className="flex flex-col mb-6">
        <Input
          type="text"
          id="address"
          name="Address"
          value={userProgressCtx.inputs.address}
          placeholder="1137 Williams Avenue"
          labelStyle={props.labelStyle}
          inputStyle={props.inputStyle}
          error={didEdit.address == true && userProgressCtx.inputs.address == ""}
          didEdit={() => handleInputBlur('address')}
          didChange={handleChange}
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 md:mb-6">
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <Input
            type="text"
            id="zip"
            name="ZIP Code"
            value={userProgressCtx.inputs.zip}
            placeholder="10001"
            labelStyle={props.labelStyle}
            inputStyle={props.inputStyle}
            error={didEdit.zip == true && userProgressCtx.inputs.zip == ""}
            didEdit={() => handleInputBlur('zip')}
            didChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <Input
            type="text"
            id="city"
            name="City"
            value={userProgressCtx.inputs.city}
            placeholder="New York"
            labelStyle={props.labelStyle}
            inputStyle={props.inputStyle}
            error={didEdit.city == true && userProgressCtx.inputs.city == ""}
            didEdit={() => handleInputBlur('city')}
            didChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:flex-1">
          <Input
            type="text"
            id="country"
            name="Country"
            value={userProgressCtx.inputs.country}
            placeholder="United States"
            labelStyle={props.labelStyle}
            inputStyle={props.inputStyle}
            error={didEdit.country == true && userProgressCtx.inputs.country == ""}
            didEdit={() => handleInputBlur('country')}
            didChange={handleChange}
          />
        </div>
        <div className="hidden md:flex flex-1" />
      </div>
    </div>
  )
}

export default ShippingInfo;