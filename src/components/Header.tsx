import { useContext } from "react";
import { Link } from "react-router-dom";
import UserProgressContext from "../store/UserProgressContext.tsx";
import CartContext from "../store/CartContext.tsx";
import NavModal from "./NavModal.tsx";
import CartModal from "./CartModal.tsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '/assets/shared/desktop/logo.svg';
import cart from '/assets/shared/desktop/icon-cart.svg'

export default function Header() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  function handleShowNavModal() {
    if (userProgressCtx.progress !== "menu") {
      userProgressCtx.showMenu();
    } else {
      userProgressCtx.hideModal();
    }
  }

  function handleLogoClick() {
    if (userProgressCtx.progress !== "") {
      userProgressCtx.hideModal();
    }
    window.scrollTo(0, 0);
  }

  function handleShowCart() {
    if (userProgressCtx.progress !== "cart") {
      userProgressCtx.showCart();
    } else {
      userProgressCtx.hideModal();
    }
  }

  return (
    <header className="sticky top-0 z-40 flex w-[100vw] justify-center bg-transparent h-[92px] md:h-[89px] xl:h-[97px] p-8 md:px-[39px]">
      <div className="absolute z-0 top-0 w-full h-[92px] md:h-[89px] xl:h-[97px] bg-n-grey-v-dark"/>
      <div className="relative z-20 flex justify-between items-center w-[1110px] h-7">
        <div className="xl:hidden">
          <FontAwesomeIcon
            icon={faBars}
            aria-label="Font Awesome Hamburger Menu Icon"
            className="text-n-white hover:text-p-orange-dark h-[18px] md:pr-[42px] cursor-pointer"
            onClick={handleShowNavModal}
          />
        </div>
        <Link to="/" onClick={handleLogoClick} className="flex md:flex-1 justify-start">
          <img src={logo} alt="Audiophile logo" className="h-[25px] object-contain cursor-pointer" />
        </Link>
        <nav className="hidden xl:flex flex-1 justify-center gap-[34px] font-manrope text-n-white mx-8">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">HOME</Link>
          <Link to="/headphones" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">HEADPHONES</Link>
          <Link to="/speakers" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">SPEAKERS</Link>
          <Link to="/earphones" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">EARPHONES</Link>
        </nav>
        <div className="relative flex md:flex-1 justify-end pointer-events-none">
          <img
            src={cart}
            alt="Cart icon"
            className="h-5 object-contain cursor-pointer pointer-events-auto"
            onClick={handleShowCart}
          />
          {cartCtx.cartTotalItems > 0 &&
            <div className="absolute -top-[8px] -right-[12px] bg-p-orange-dark rounded-full">
              <p className="font-bold text-body text-n-white py-[0.75px] px-2 leading-none">{cartCtx.cartTotalItems}</p>
            </div>
          }
        </div>
      </div>
      {userProgressCtx.progress == "menu" && <NavModal/>}
      {userProgressCtx.progress == "cart" && <CartModal/>}
    </header>
  )
}