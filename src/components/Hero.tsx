import Button from "../UI/Button";

import heroImg from "../assets/home/desktop/image-hero.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col items-center bg-n-grey-v-dark">
      <div className="self-center h-[1px] w-full max-w-[1110px] bg-n-white"/>
      <div className="flex items-center w-[1110px] overflow-clip">
        <div className="flex flex-col flex-1 font-manrope text-n-white">
          <p className="text-overline opacity-50">NEW PRODUCT</p>
          <h1 className="text-h1 my-6">XX99 MARK II HEADPHONES</h1>
          <p className="text-body opacity-75 mb-10">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button color="orange" btnTxt="SEE PRODUCT" />
        </div>
        <div className="flex flex-1 h-[633px]">
            <img src={heroImg} alt="Hero image of Mark II headphones" className="object-cover object-[80%]" />
        </div>
      </div>
    </div>
  )
}