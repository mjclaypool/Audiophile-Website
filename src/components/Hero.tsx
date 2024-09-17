import { Link } from "react-router-dom";
import Button from "../UI/Button";

import heroImg from "/assets/home/mobile/image-header.jpg";
import heroImgMD from "/assets/home/tablet/image-header.jpg";
import heroImgXL from "/assets/home/desktop/image-hero.jpg";

export default function Hero() {
  return (
    <div className="flex justify-center bg-n-grey-v-dark h-[508px] md:h-[640px] xl:h-[632px] mb-[40px] md:mb-[96px] xl:mb-[120px]">
      <div className="absolute z-20 h-[1px] w-[100vw] max-w-[1110px] bg-n-white opacity-10"/>
      <div className="absolute z-10 top-[0px] h-[600px] md:h-[729px] w-[100vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent from-[30%] to-n-grey-v-dark to-[60%]"/>
      <div className="relative flex text-center xl:text-start w-full max-w-[375px] md:max-w-[689px] xl:max-w-[1110px]">
        <div className="relative z-30 flex flex-col font-manrope xl:w-[1110px] text-n-white px-6 ">
          <p className="text-overline opacity-50 mt-[108px] md:mt-[126px] mb-4 md:mb-6">NEW PRODUCT</p>
          <h1 className="text-h2-5 md:text-h1 xl:w-[400px] mb-6">XX99 MARK II HEADPHONES</h1>
          <p className="text-body opacity-75 xl:w-[350px] mb-[28px] md:mb-10 md:px-40 xl:px-0">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to="/headphones/xx99-mark-two-headphones" onClick={() => window.scrollTo(0, 0)} className="self-center text-nowrap w-min mb-[112px] md:mb-[167px]">
            <Button color="orange" btnTxt="SEE PRODUCT" />
          </Link>
        </div>
        <div className="flex md:hidden absolute z-0 -top-[92px] left-0 h-[600px]">
            <img src={heroImg} alt="Hero image of Mark II headphones" className="w-full object-cover" />
        </div>
        <div className="hidden md:flex xl:hidden absolute z-0 -top-[89px] left-0 h-[729px]">
            <img src={heroImgMD} alt="Hero image of Mark II headphones" className="w-full object-cover" />
        </div>
        <div className="hidden xl:flex absolute z-0 -top-[97px] right-0 h-[729px]">
            <img src={heroImgXL} alt="Hero image of Mark II headphones" className="w-full object-cover" />
        </div>
      </div>
    </div>
  )
}