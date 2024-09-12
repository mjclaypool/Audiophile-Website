import Button from "../UI/Button";

import zx7Speaker from "/assets/home/mobile/image-speaker-zx7.jpg";
import zx7SpeakerMD from "/assets/home/tablet/image-speaker-zx7.jpg";
import zx7SpeakerXL from "/assets/home/desktop/image-speaker-zx7.jpg";

export default function FeaturedZX7() {
  return (
    <div className="relative">
      <div className="md:hidden relative z-0">
        <img src={zx7Speaker} alt="ZX7 Speaker image" className="max-w-[360px] w-full rounded-lg" />
      </div>
      <div className="hidden md:flex xl:hidden relative z-0">
        <img src={zx7SpeakerMD} alt="ZX7 Speaker image" className="rounded-lg" />
      </div>
      <div className="hidden xl:flex relative z-0">
        <img src={zx7SpeakerXL} alt="ZX7 Speaker image" className="rounded-lg" />
      </div>
      <div className="absolute z-10 top-[50%] -translate-y-[50%] left-6 xl:left-[95px]">
        <h2 className="font-manrope text-h4 mb-8">ZX7 Speaker</h2>
        <Button color="clear" btnTxt="SEE PRODUCT" />
      </div>
    </div>
  )
}