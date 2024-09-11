import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg'

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
        <div className="flex md:flex-1 justify-start">
          <img src={logo} alt="Audiophile logo" className="h-[25px] object-contain cursor-pointer" />
        </div>
        <nav className="hidden xl:flex flex-1 justify-center gap-[34px] font-manrope text-n-white mx-8">
          <button type="button" className="text-sub-title hover:text-p-orange-dark">HOME</button>
          <button type="button" className="text-sub-title hover:text-p-orange-dark">HEADPHONES</button>
          <button type="button" className="text-sub-title hover:text-p-orange-dark">SPEAKERS</button>
          <button type="button" className="text-sub-title hover:text-p-orange-dark">EARPHONES</button>
        </nav>
        <div className="flex md:flex-1 justify-end">
          <img src={cart} alt="Cart icon" className="h-5 object-contain cursor-pointer"/>
        </div>
      </div>
    </header>
  )
}