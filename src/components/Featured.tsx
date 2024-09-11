import Button from "../UI/Button";

import zx9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import zx7Speaker from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1Earphones from "../assets/home/desktop/image-earphones-yx1.jpg";
import circles from "../assets/home/desktop/pattern-circles.svg";

export default function Featured() {
  return (
    <div className="flex flex-col gap-12 items-center my-20">
      <div className="relative w-full max-w-[1110px] h-[560px] bg-p-orange-dark overflow-clip rounded-lg">
        <div className="absolute z-0 -top-8 -left-32">
          <img src={circles} alt="Background circles" />
        </div>
        <div className="absolute z-0 -bottom-4 left-36">
          <img src={zx9Speaker} alt="ZX9 Speaker image" className="h-[493px] object-contain" />
        </div>
        <div className="relative z-10 flex font-manrope h-full">
          <div className="flex flex-1" />
          <div className="flex flex-1">
            <div className="flex flex-col justify-center px-28">
              <h2 className="text-h1 text-n-white mb-6">ZX9 SPEAKER</h2>
              <p className="text-body text-n-white opacity-75 mb-8">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <Button color="black" btnTxt="SEE PRODUCT" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-10 top-[50%] -translate-y-[50%] left-[95px]">
          <h2 className="font-manrope text-h4 mb-8">ZX7 Speaker</h2>
          <Button color="clear" btnTxt="SEE PRODUCT" />
        </div>
        <div className="relative z-0">
          <img src={zx7Speaker} alt="ZX7 Speaker image" className="rounded-lg" />
        </div>
      </div>
      <div className="flex gap-[30px] w-full max-w-[1110px]">
        <div className="flex flex-1">
          <img src={yx1Earphones} alt="YX1 Earphones image" className="rounded-lg" />
        </div>
        <div className="flex flex-1 bg-n-grey-dark rounded-lg">
          <div className="flex flex-col justify-center ml-[95px]">
            <h2 className="font-manrope text-h4 mb-8">YX1 Earphones</h2>
            <Button color="clear" btnTxt="SEE PRODUCT" />
          </div>
        </div>
      </div>
    </div>
  )
}