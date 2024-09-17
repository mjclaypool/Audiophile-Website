type shippingProps = {
  labelStyle: string,
  inputStyle: string,
}

const ShippingInfo = ( props: shippingProps ) => {
  return (
    <div className="mb-8 md:mb-[53px]">
      <h3 className="text-sub-title text-p-orange-dark mb-4">SHIPPING INFO</h3>
      <div className="flex flex-col mb-6">
        <label htmlFor="address" className={props.labelStyle}>Your Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          placeholder="1137 Williams Avenue"
          className={props.inputStyle}
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 md:mb-6">
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <label htmlFor="zip" className={props.labelStyle}>ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            required
            placeholder="10001"
            className={props.inputStyle}
          />
        </div>
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <label htmlFor="city" className={props.labelStyle}>City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            placeholder="New York"
            className={props.inputStyle}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:flex-1">
          <label htmlFor="country" className={props.labelStyle}>Country</label>
          <input
            type="text"
            id="country"
            name="country"
            required
            placeholder="United States"
            className={props.inputStyle}
          />
        </div>
        <div className="hidden md:flex flex-1" />
      </div>
    </div>
  )
}

export default ShippingInfo;