import { useState, useContext } from "react";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgressContext";

import cashIcon from "/assets/checkout/icon-cash-on-delivery.svg";

type paymentProps = {
  labelStyle: string,
  inputStyle: string,
  radioStyle: string,
}

type blurState = {
  number: boolean,
  pin: boolean,
}

const PaymentDetails = ( props: paymentProps ) => {
  const userProgressCtx = useContext(UserProgressContext);
  const [didEdit, setDidEdit] = useState<blurState>(
    {
      number: false,
      pin: false
    }
  );

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
    <div>
      <h3 className="text-sub-title text-p-orange-dark mb-4">PAYMENT DETAILS</h3>
      <div className="flex flex-col md:flex-row md:gap-4 mb-8 xl:mb-6">
        <label htmlFor="payment" className={`${props.labelStyle} md:mb-0 md:flex md:flex-1`}>Payment Method</label>
        <div className="flex flex-col md:flex-1">
          <div className={`${props.radioStyle} mb-4`}>
            <input
              type="radio"
              id="payment"
              name="payment"
              value="electronic"
              defaultChecked
              onClick={() => {userProgressCtx.updatePymtMethod("electronic")}}
            />
            <label htmlFor="electronic" className="ml-4" >e-Money</label>
          </div>
          <div className={props.radioStyle}>
            <input
              type="radio"
              id="payment"
              name="payment"
              value="cash"
              onClick={() => {userProgressCtx.updatePymtMethod("cash")}}
            />
            <label htmlFor="cash" className="ml-4" >Cash on Delivery</label>
          </div>
        </div>
      </div>
      {userProgressCtx.pymtMethod == "electronic" ?
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
            <Input
              type="text"
              id="number"
              name="e-Money Number"
              value={userProgressCtx.inputs.number}
              placeholder="238521993"
              labelStyle={props.labelStyle}
              inputStyle={props.inputStyle}
              error={didEdit.number == true && userProgressCtx.inputs.number == ""}
              didEdit={() => handleInputBlur('number')}
              didChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-1">
            <Input
              type="text"
              id="pin"
              name="e-Money Pin"
              value={userProgressCtx.inputs.pin}
              placeholder="6891"
              labelStyle={props.labelStyle}
              inputStyle={props.inputStyle}
              error={didEdit.pin == true && userProgressCtx.inputs.pin == ""}
              didEdit={() => handleInputBlur('pin')}
              didChange={handleChange}
            />
          </div>
        </div>
      :
        <div className="flex items-center gap-8">
          <img src={cashIcon} alt="Cash on delivery icon" />
          <p className="text-body opacity-50 pb-[6px]">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
        </div>
      }
    </div>
  )
}

export default PaymentDetails;