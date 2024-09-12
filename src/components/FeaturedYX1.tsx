import Button from "../UI/Button";

import yx1Earphones from "/assets/home/mobile/image-earphones-yx1.jpg";
import yx1EarphonesMD from "/assets/home/tablet/image-earphones-yx1.jpg";
import yx1EarphonesXL from "/assets/home/desktop/image-earphones-yx1.jpg";

export default function FeaturedYX1() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-6 md:gap-[11px] xl:gap-[30px] w-full max-w-[1110px] md:max-w-[689px] xl:max-w-[1110px]">
      <div className="flex md:hidden">
        <img src={yx1Earphones} alt="YX1 Earphones image" className="max-w-[360px] w-full rounded-lg" />
      </div>
      <div className="hidden md:flex w-1/2 xl:hidden">
        <img src={yx1EarphonesMD} alt="YX1 Earphones image" className="w-full rounded-lg" />
      </div>
      <div className="hidden xl:flex w-1/2">
        <img src={yx1EarphonesXL} alt="YX1 Earphones image" className="w-full rounded-lg" />
      </div>
      <div className="flex max-w-[360px] w-full md:max-w-none md:w-1/2 bg-n-grey-dark rounded-lg px-6 md:px-[41px] xl:px-0 py-[41px] md:py-[101px]">
        <div className="flex flex-col md:justify-center xl:ml-[95px]">
          <h2 className="font-manrope text-h4 mb-8">YX1 Earphones</h2>
          <Button color="clear" btnTxt="SEE PRODUCT" />
        </div>
      </div>
    </div>
  )
}