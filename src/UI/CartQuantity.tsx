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
      <FontAwesomeIcon
        icon={faMinus}
        aria-label="Decrease quantity, Font Awesome Minus Icon"
        className="w-2 opacity-25 p-4 cursor-pointer"
        onClick={handleDecrease}
      />
      <p className="text-sub-title">{qty}</p>
      <FontAwesomeIcon
        icon={faPlus}
        aria-label="Increase quantity, Font Awesome Plus Icon"
        className="w-2 opacity-25 p-4 cursor-pointer"
        onClick={handleIncrease}
      />
    </div>
  )
}

export default CartQuantity;