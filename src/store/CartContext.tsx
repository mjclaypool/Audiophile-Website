import { createContext, useState, useEffect } from "react";

type cartItem = {
  id: number,
  slug: string,
  name: string,
  qty: number,
  price: number
}

type CartContextType = {
  cartItems: cartItem[];
  cartTotalItems: number;
  cartTotalPrice: number;
  addItem: (item: cartItem) => void;
  updateItem: (id: number, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
  addItem: () => {},
  updateItem: () => {},
  clearCart: () => {}
});

export function CartContextProvider( {children} : {children: any} ) {
  const [ cart, setCart ] = useState<cartItem[]>([]);
  const [ totalItems, setTotalItems ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);

  useEffect(() => {
    let cartTotal = 0;
    let itemTotal = 0;
    for (let i=0; i<cart.length; i++) {
      cartTotal = cartTotal + (cart[i].price * cart[i].qty);
      itemTotal = itemTotal + cart[i].qty;
    }
    setTotalPrice(cartTotal);
    setTotalItems(itemTotal);
  }, [cart])

  function addItem(item: cartItem) {
    const updatedItems: cartItem[] = [...cart];
    const existingCartItemIndex = cart.findIndex(
      (cartItem: cartItem) => item.id === cartItem.id
    );

    if (existingCartItemIndex > -1) {
      const existingItem: cartItem = cart[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        qty: existingItem.qty + item.qty,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({...item});
    }
    setCart(updatedItems);
  }

  function updateItem(id: number, qty: number) {
    const updatedItems: cartItem[] = [...cart];
    const existingCartItemIndex = cart.findIndex(
      (cartItem: cartItem) => id === cartItem.id
    );

    const existingItem: cartItem = cart[existingCartItemIndex];
    if (qty == 0) {
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      const updatedItem = {
        ...existingItem,
        qty: qty,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    setCart(updatedItems);
  }

  function clearCart() {
    setCart([])
  }

  const cartCtx = {
    cartItems: cart,
    cartTotalItems: totalItems,
    cartTotalPrice: totalPrice,
    addItem,
    updateItem,
    clearCart
  };

  return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
}

export default CartContext;