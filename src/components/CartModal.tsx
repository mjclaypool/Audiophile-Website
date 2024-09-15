import { createPortal } from 'react-dom';
import Quantity from '../UI/Quantity';
import Button from '../UI/Button';

import tempImg from "/assets/cart/image-xx99-mark-two-headphones.jpg"

export default function CartModal() {
  return createPortal(
    <>
      <dialog
        className="fixed top-[92px] md:top-[89px] xl:top-[97px] flex justify-center w-full h-full bg-n-grey-v-dark bg-opacity-60 z-40"
        open
      >
        <div className="flex flex-col bg-n-white m-6 px-[28px] py-[32px] md:mt-[57px] w-full h-min font-manrope rounded-lg">
          <div className="flex justify-between items-center mb-[31px]">
            <h2 className="text-h6">CART (3)</h2>
            <p className="text-body opacity-50 underline">Remove all</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={tempImg} alt="" className="h-16 rounded-lg mr-4" />
              <div>
                <h3 className="text-body font-bold">XX99 MK II</h3>
                <p className="text-body text-[14px] font-bold opacity-50">$ 2,999</p>
              </div>
            </div>
            <Quantity size="sm"/>
          </div>
          <div className="flex justify-between mt-8 mb-6">
            <h4 className="text-body opacity-50">TOTAL</h4>
            <p className="text-h6 tracking-[0px]">$ 5,396</p>
          </div>
          <Button color="orange" btnTxt='CHECKOUT'/>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}