import BillingDetails from "./BillingDetails";
import ShippingInfo from "./ShippingInfo";
import PaymentDetails from "./PaymentDetails";

const CheckoutForm = () => {
  const labelStyle: string = "font-bold text-[12px] leading-[16px] mb-[9px]";
  const inputStyle: string = "font-bold text-[14px] h-[56px] border-[1px] border-n-grey-form-border rounded-lg px-6 outline-none focus:border-p-orange-dark";
  const radioStyle: string = "flex items-center font-bold text-[14px] h-[56px] border-[1px] border-n-grey-form-border rounded-lg px-4 accent-p-orange-dark has-[:checked]:border-p-orange-dark";

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-n-white w-full xl:w-[730px] h-min px-[23px] xl:px-[48px] py-8 md:py-[30px] xl:py-[54px] mb-8 mx-6 md:mx-[39px] xl:m-0 font-manrope rounded-lg">
        <h2 className="text-h4 tracking-[1px] mb-8 md:mb-[41px]">CHECKOUT</h2>
        <form className="flex flex-col" noValidate>
          <BillingDetails labelStyle={labelStyle} inputStyle={inputStyle} />
          <ShippingInfo labelStyle={labelStyle} inputStyle={inputStyle} />
          <PaymentDetails labelStyle={labelStyle} inputStyle={inputStyle} radioStyle={radioStyle} />
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm;