import { useContext } from 'react';
import { createPortal } from 'react-dom';
import CartQuantity from '../UI/CartQuantity';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';

export default function CartModal() {
  const cartCtx = useContext(CartContext);

  let priceFormatter = new Intl.NumberFormat('en-US');

  function handleUpdateQty(id: number, qty: number) {
    cartCtx.updateItem(id, qty);
  }

  function handleClearCart() {
    cartCtx.clearCart();
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-[92px] md:top-[89px] xl:top-[97px] flex justify-center w-full h-full bg-n-grey-v-dark bg-opacity-60 z-40"
        open
      >
        <div className="flex flex-col bg-n-white m-6 px-[28px] py-[32px] md:mt-[57px] w-full h-min font-manrope rounded-lg">
          <div className="flex justify-between items-center mb-[31px]">
            <h2 className="text-h6">CART ({cartCtx.cartTotalItems})</h2>
            <p className="text-body opacity-50 underline cursor-pointer" onClick={handleClearCart}>Remove all</p>
          </div>
          {cartCtx.cartItems.length > 0 ?
            cartCtx.cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <img src={`/assets/cart/image-${item.slug}.jpg`} alt={item.name} className="h-16 rounded-lg mr-4" />
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
          <Button color="orange" btnTxt='CHECKOUT'/>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}