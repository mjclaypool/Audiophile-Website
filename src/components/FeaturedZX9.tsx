import { Link } from "react-router-dom";
import Button from "../UI/Button";

import zx9Speaker from "/assets/home/mobile/image-speaker-zx9.png";
import zx9SpeakerMD from "/assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerXL from "/assets/home/desktop/image-speaker-zx9.png";
import circles from "/assets/home/desktop/pattern-circles.svg";

export default function FeaturedZX9() {
  return (
    <div className="relative w-full max-w-[360px] md:max-w-[689px] xl:max-w-[1110px] h-[600px] md:h-[720px] xl:h-[560px] bg-p-orange-dark overflow-clip rounded-lg">
      <div className="absolute z-0 -top-[124px] left-[50%] -translate-x-[50%] w-full md:-top-72 xl:-top-8 xl:-left-32">
        <img src={circles} alt="Background circles" className="h-[560px] md:h-[960px] w-full object-cover" />
      </div>
      <div className="md:hidden absolute z-0 top-[55px] left-[50%] -translate-x-[50%]">
        <img src={zx9Speaker} alt="ZX9 Speaker image" className="h-[200px] object-contain" />
      </div>
      <div className="hidden md:flex xl:hidden absolute z-0 top-[52px] left-[50%] -translate-x-[50%]">
        <img src={zx9SpeakerMD} alt="ZX9 Speaker image" className="h-[234px] object-contain" />
      </div>
      <div className="hidden xl:flex absolute z-0 -bottom-4 left-36">
        <img src={zx9SpeakerXL} alt="ZX9 Speaker image" className="h-[493px] object-contain" />
      </div>
      <div className="relative z-10 flex font-manrope h-full px-6 md:px-44 xl:px-0">
        <div className="flex flex-col justify-end items-center text-center w-full xl:justify-center xl:items-start xl:text-start xl:ml-[666px]">
          <h2 className="text-h3 md:text-h1 text-n-white mx-10 mb-6 md:w-[340px] xl:mx-0">ZX9 SPEAKER</h2>
          <p className="text-body text-n-white opacity-75 mb-8 md:w-[340px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <div className="mb-[55px] xl:mb-0">
          <Link to="/speakers/zx9-speaker">
            <Button color="black" btnTxt="SEE PRODUCT" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}