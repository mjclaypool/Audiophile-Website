import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

type qtyProps = {
  id: number,
  initial: number,
  updateQty: (id: number, qty: number) => void
}

const CartQuantity = (props: qtyProps) => {
  const [qty, setQty] = useState(props.initial);

  function handleIncrease() {
    setQty(qty + 1);
    props.updateQty(props.id, qty + 1);
  }

  function handleDecrease() {
    if (qty !== 0) {
      setQty(qty - 1);
      props.updateQty(props.id, qty - 1);
    }
  }

  return (
    <div className="w-[96px] h-8 flex items-center justify-between bg-n-grey-dark">
      <button type="button" onClick={handleDecrease} className="flex justify-center w-10">
        <FontAwesomeIcon
          icon={faMinus}
          aria-label="Decrease quantity, Font Awesome Minus Icon"
          className="w-2 opacity-25 px-4 py-2"
        />
      </button>
      <p className="text-sub-title">{qty}</p>
      <button type="button" onClick={handleIncrease} className="flex justify-center w-10">
        <FontAwesomeIcon
          icon={faPlus}
          aria-label="Increase quantity, Font Awesome Plus Icon"
          className="w-2 opacity-25 px-4 py-2"
        />
      </button>
    </div>
  )
}

export default CartQuantity;