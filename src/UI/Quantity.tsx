import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

type qtyProps = {
  size: string,
}

const Quantity = (props: qtyProps) => {
  const [qty, setQty] = useState(1);

  type sizeVars = {
    [key: string]: string
  }
  const sizeVariants: sizeVars = {
    lg: "w-[120px]",
    sm: "w-[96px] h-8",
  }

  function handleIncrease() {
    setQty(qty + 1);
  }

  function handleDecrease() {
    if (qty !== 0) {
      setQty(qty - 1);
    }
  }

  return (
    <div className={`${sizeVariants[props.size]} flex items-center justify-between bg-n-grey-dark`}>
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

export default Quantity;