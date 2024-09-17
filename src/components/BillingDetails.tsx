type billingProps = {
  labelStyle: string,
  inputStyle: string,
}

const BillingDetails = ( props: billingProps ) => {
  return (
    <div className="mb-8 md:mb-[53px]">
      <h3 className="text-sub-title text-p-orange-dark mb-4">BILLING DETAILS</h3>
      <div className="flex flex-col md:flex-row md:gap-4 md:mb-6">
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <label htmlFor="name" className={props.labelStyle}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Alexei Ward"
            className={props.inputStyle}
          />
        </div>
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <label htmlFor="email" className={props.labelStyle}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="alexei@mail.com"
            className={props.inputStyle}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:flex-1">
          <label htmlFor="phone" className={props.labelStyle}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+1 202-555-0136"
            className={props.inputStyle}
          />
        </div>
        <div className="hidden md:flex flex-1" />
      </div>
    </div>
  )
}

export default BillingDetails;