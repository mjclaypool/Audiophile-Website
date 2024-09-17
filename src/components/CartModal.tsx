import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";
import CartQuantity from '../UI/CartQuantity';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function CartModal() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  let priceFormatter = new Intl.NumberFormat('en-US');

  function handleUpdateQty(id: number, qty: number) {
    cartCtx.updateItem(id, qty);
  }

  function handleClearCart() {
    cartCtx.clearCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.hideModal();
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-[92px] md:top-[89px] xl:top-[97px] flex justify-center w-full h-full bg-n-grey-v-dark bg-opacity-60 z-40 md:px-10"
        open
      >
        <div className="flex justify-center md:justify-end w-[1110px]">
          <div className="flex flex-col bg-n-white m-6 md:mx-0 xl:my-8 px-[28px] py-[32px] w-full md:w-[377px] h-min font-manrope rounded-lg">
            <div className="flex justify-between items-center mb-[31px]">
              <h2 className="text-h6">CART ({cartCtx.cartTotalItems})</h2>
              <p className="text-body opacity-50 underline hover:text-p-orange-dark hover:opacity-100 cursor-pointer" onClick={handleClearCart}>Remove all</p>
            </div>
            {cartCtx.cartItems.length > 0 ?
              cartCtx.cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <img src={`./assets/cart/image-${item.slug}.jpg`} alt={item.name} className="h-16 rounded-lg mr-4" />
                    <div>
                      <h3 className="text-body font-bold">{item.name}</h3>
                      <p className="text-body text-[14px] font-bold opacity-50">$ {priceFormatter.format(item.price)}</p>
                    </div>
                  </div>
                  <CartQuantity id={item.id} initial={item.qty} updateQty={handleUpdateQty}/>
                </div>
              ))
            :
              <p className="text-body mb-6">Your cart is empty...</p>
            }
            <div className="flex justify-between mt-2 mb-6">
              <h4 className="text-body opacity-50">TOTAL</h4>
              <p className="text-h6 tracking-[0px]">$ {priceFormatter.format(cartCtx.cartTotalPrice)}</p>
            </div>
            {cartCtx.cartItems.length > 0 ?
              <Link to="/checkout" onClick={handleGoToCheckout}>
                <Button color="orange" btnTxt='CHECKOUT'/>
              </Link>
            :
              <div className="cursor-none">
              <Button color="disabled" btnTxt='CHECKOUT'/>
              </div>
            }
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}