import { useContext } from 'react';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

const CheckoutSummary = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)

  const tot: number = cartCtx.cartTotalPrice;
  let shipping: number = 50;
  if (tot == 0) {
    shipping = 0;
  }
  const vat: number = cartCtx.cartTotalPrice * 0.2;
  const grandTot: number = tot + shipping;

  const priceFormatter = new Intl.NumberFormat('en-US');

  const formattedTot: string = priceFormatter.format(tot);
  let formattedVat: string = priceFormatter.format(vat);
  if (formattedVat.charAt(formattedVat.length - 2) == ".") {
    formattedVat = formattedVat.substring(0, formattedVat.length - 2);
  }
  const formattedGrandTot: string = priceFormatter.format(grandTot);

  function handlePay() {
    userProgressCtx.showCheckout();
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-n-white px-[28px] py-[32px] mx-6 md:mx-[39px] xl:m-0 w-full xl:w-[350px] h-min font-manrope rounded-lg">
        <div className="flex justify-between items-center mb-[31px]">
          <h2 className="text-h6">SUMMARY</h2>
        </div>
        {cartCtx.cartItems.length > 0 ?
          cartCtx.cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-6">
              <img src={`/assets/cart/image-${item.slug}.jpg`} alt={item.name} className="h-16 rounded-lg mr-4" />
              <div className="w-full">
                <div className="flex justify-between">
                  <h3 className="text-body font-bold">{item.name}</h3>
                  <p className="text-body font-bold opacity-50">x{item.qty}</p>
                </div>
                <p className="text-body text-[14px] font-bold opacity-50">$ {priceFormatter.format(item.price)}</p>
              </div>
            </div>
          ))
        :
          <p className="text-body mb-6">Your cart is empty...</p>
        }
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex justify-between">
            <h4 className="text-body opacity-50">TOTAL</h4>
            <p className="text-h6 tracking-[0px]">$ {formattedTot}</p>
          </div>
          <div className="flex justify-between">
            <h4 className="text-body opacity-50">SHIPPING</h4>
            <p className="text-h6 tracking-[0px]">$ {shipping}</p>
          </div>
          <div className="flex justify-between">
            <h4 className="text-body opacity-50">VAT (INCLUDED)</h4>
            <p className="text-h6 tracking-[0px]">$ {formattedVat}</p>
          </div>
        </div>
        <div className="flex justify-between mt-2 mb-8">
          <h4 className="text-body opacity-50">GRAND TOTAL</h4>
          <p className="text-h6 text-p-orange-dark tracking-[0px]">$ {formattedGrandTot}</p>
        </div>
        {cartCtx.cartItems.length > 0 && userProgressCtx.formIsValid ?
          <div onClick={handlePay}>
            <Button color="orange" btnTxt='CONTINUE & PAY'/>
          </div>
        :
          <div className="cursor-none">
          <Button color="disabled" btnTxt='CONTINUE & PAY'/>
          </div>
        }
      </div>
    </div>
  )
}

export default CheckoutSummary;