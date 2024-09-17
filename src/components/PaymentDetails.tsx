type paymentProps = {
  labelStyle: string,
  inputStyle: string,
  radioStyle: string,
}

const PaymentDetails = ( props: paymentProps ) => {
  return (
    <div>
      <h3 className="text-sub-title text-p-orange-dark mb-4">PAYMENT DETAILS</h3>
      <div className="flex flex-col md:flex-row md:gap-4 mb-8">
        <label htmlFor="payment" className={`${props.labelStyle} md:mb-0 md:flex md:flex-1`}>Payment Method</label>
        <div className="flex flex-col md:flex-1">
          <div className={`${props.radioStyle} mb-4`}>
            <input
              type="radio"
              id="payment"
              name="payment"
              value="electronic"
              defaultChecked
            />
            <label htmlFor="electronic" className="ml-4" >e-Money</label>
          </div>
          <div className={props.radioStyle}>
            <input
              type="radio"
              id="payment"
              name="payment"
              value="cash"
            />
            <label htmlFor="cash" className="ml-4" >Cash on Delivery</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <label htmlFor="e-money-num" className={props.labelStyle}>e-Money Number</label>
          <input
            type="text"
            id="e-money-num"
            name="e-money-num"
            required
            placeholder="238521993"
            className={props.inputStyle}
          />
        </div>
        <div className="flex flex-col md:flex-1">
          <label htmlFor="e-money-pin" className={props.labelStyle}>e-Money Pin</label>
          <input
            type="text"
            id="e-money-pin"
            name="e-money-pin"
            required
            placeholder="6891"
            className={`${props.inputStyle} mb-0`}
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails;