import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/shared/desktop/logo.svg';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 md:gap-8 xl:gap-9 items-center md:items-start text-center md:text-start font-manrope text-n-white bg-n-grey-v-dark pt-[52px] md:pt-[60px] xl:pt-[75px] pb-[38px] md:pb-[46px] px-7 md:px-[39px] xl:px-[165px]">
      <div className="flex flex-col xl:flex-row xl:justify-between items-center md:items-start w-full gap-12 md:gap-8">
        <Link to="/">
          <img src={logo} alt="Audiophile logo" />
        </Link>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[34px]">
          <Link to="/" className="text-sub-title hover:text-p-orange-dark">HOME</Link>
          <Link to="/headphones" className="text-sub-title hover:text-p-orange-dark">HEADPHONES</Link>
          <Link to="/speakers" className="text-sub-title hover:text-p-orange-dark">SPEAKERS</Link>
          <Link to="/earphones" className="text-sub-title hover:text-p-orange-dark">EARPHONES</Link>
        </div>
      </div>
      <div className="md:mb-12 xl:mb-5 xl:w-1/2 xl:pr-6">
        <p className="text-body opacity-50">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      </div>
      <div className="xl:relative flex flex-col md:flex-row gap-12 items-center w-full md:justify-between">
        <div>
          <p className="text-body font-bold opacity-50">Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="xl:absolute xl:right-0 xl:-top-[86px] flex gap-4">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            aria-label="Font Awesome Facebook Icon"
            className="text-n-white hover:text-p-orange-dark h-6 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            aria-label="Font Awesome Twitter Icon"
            className="text-n-white hover:text-p-orange-dark h-6 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            aria-label="Font Awesome Instagram Icon"
            className="text-n-white hover:text-p-orange-dark h-6 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  )
}