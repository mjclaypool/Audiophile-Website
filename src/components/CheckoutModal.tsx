import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

import checkMark from "/assets/checkout/icon-order-confirmation.svg";

export default function CheckoutModal() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const priceFormatter = new Intl.NumberFormat('en-US');
  const grandTot: number = cartCtx.cartTotalPrice + 50;
  const formattedGrandTot: string = priceFormatter.format(grandTot);

  const items: number = cartCtx.cartItems.length;
  console.log(items);

  function handleGoToCheckout() {
    userProgressCtx.hideModal();
    window.scrollTo(0, 0);
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-[92px] md:top-[89px] xl:top-[97px] flex justify-center w-full h-full bg-n-grey-v-dark bg-opacity-60 z-40 md:px-10"
        open
      >
        <div className="flex justify-center items-center w-[540px]">
          <div className="flex flex-col bg-n-white m-6 md:mx-0 px-[28px] py-[32px] md:p-[48px] w-full h-min font-manrope rounded-lg">
            <img src={checkMark} alt="Check icon" className="h-16 w-16 mb-[23px] md:mb-[33px]" />
            <h2 className="text-h5 md:text-h3 tracking-[0.86px] leading-[28px]">THANK YOU</h2>
            <h2 className="text-h5 md:text-h3 tracking-[0.86px] leading-[28px] mb-4 md:mb-6">FOR YOUR ORDER</h2>
            <p className="text-body opacity-50 mb-6 md:mb-[33px]">You will receive an email confirmation shortly.</p>
            <div className="flex flex-col md:flex-row md:justify-between bg-n-grey-dark rounded-lg mb-[23px] md:mb-[46px]">
              <div className="flex flex-col flex-1">
                <div className="flex items-center px-6 pt-6">
                  <img src={`/assets/cart/image-${cartCtx.cartItems[0].slug}.jpg`} alt={cartCtx.cartItems[0].name} className="h-[50px] rounded-lg mr-4" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h3 className="text-body font-bold">{cartCtx.cartItems[0].name}</h3>
                      <p className="text-body font-bold opacity-50">x{cartCtx.cartItems[0].qty}</p>
                    </div>
                    <p className="text-body text-[14px] font-bold opacity-50">$ {priceFormatter.format(cartCtx.cartItems[0].price)}</p>
                  </div>
                </div>
                {items > 1 &&
                  <div>
                    <div className="h-[1px] bg-n-black opacity-[8%] mx-6 my-3" />
                    <p className="text-center text-[12px] font-bold opacity-50 mb-[25px]">and {items - 1} other item(s)</p>
                  </div>
                }
              </div>
              <div className="flex flex-col md:w-[198px] md:justify-center bg-n-black px-6 py-[15px] rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                <h4 className="text-n-grey-light text-body opacity-50 mb-2">GRAND TOTAL</h4>
                <p className="text-n-white text-h6">$ {formattedGrandTot}</p>
              </div>
            </div>
            <Link to="/" onClick={handleGoToCheckout}>
              <Button color="orange" btnTxt='BACK TO HOME'/>
            </Link>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}