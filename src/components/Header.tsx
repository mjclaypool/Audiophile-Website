import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '/assets/shared/desktop/logo.svg';
import cart from '/assets/shared/desktop/icon-cart.svg'

export default function Header() {
  return (
    <header className="flex justify-center bg-n-grey-v-dark p-8 md:px-[39px]">
      <div className="flex justify-between items-center w-[1110px] h-7">
        <div className="xl:hidden">
          <FontAwesomeIcon
            icon={faBars}
            aria-label="Font Awesome Hamburger Menu Icon"
            className="text-n-white hover:text-p-orange-dark h-[18px] md:pr-[42px] cursor-pointer"
          />
        </div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex md:flex-1 justify-start">
          <img src={logo} alt="Audiophile logo" className="h-[25px] object-contain cursor-pointer" />
        </Link>
        <nav className="hidden xl:flex flex-1 justify-center gap-[34px] font-manrope text-n-white mx-8">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">HOME</Link>
          <Link to="/headphones" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">HEADPHONES</Link>
          <Link to="/speakers" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">SPEAKERS</Link>
          <Link to="/earphones" onClick={() => window.scrollTo(0, 0)} className="text-sub-title hover:text-p-orange-dark">EARPHONES</Link>
        </nav>
        <div className="flex md:flex-1 justify-end">
          <img src={cart} alt="Cart icon" className="h-5 object-contain cursor-pointer"/>
        </div>
      </div>
    </header>
  )
}