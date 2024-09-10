import logo from '../assets/shared/desktop/logo.svg';
import cart from '../assets/shared/desktop/icon-cart.svg'

export default function Header() {
  return (
    <header className="flex justify-center bg-n-grey-v-dark p-8">
      <div className="flex justify-between items-center w-[1110px] h-7">
        <div className="flex flex-1 justify-start">
          <img src={logo} alt="Audiophile logo" className="h-[25px] object-contain" />
        </div>
        <nav className="flex flex-1 justify-center gap-[34px] font-manrope mx-8">
          <button type="button" className="text-sub-title text-n-white">HOME</button>
          <button type="button" className="text-sub-title text-n-white">HEADPHONES</button>
          <button type="button" className="text-sub-title text-n-white">SPEAKERS</button>
          <button type="button" className="text-sub-title text-n-white">EARPHONES</button>
        </nav>
        <div className="flex flex-1 justify-end">
          <img src={cart} alt="Cart icon" className="h-5 object-contain"/>
        </div>
      </div>
    </header>
  )
}