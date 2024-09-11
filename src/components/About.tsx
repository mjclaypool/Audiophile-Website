import aboutImgLg from "../assets/shared/desktop/image-best-gear.jpg";
import aboutImgSm from "../assets/shared/tablet/image-best-gear.jpg";

export default function About() {
  return (
    <div className="flex justify-center mb-[120px] px-6 md:px-[39px]">
      <div className="flex flex-col-reverse xl:flex-row items-center xl:w-[1110px]">
        <div className="flex xl:flex-1 font-manrope">
          <div className="text-center md:px-[58px] xl:text-start xl:pl-0 xl:pr-28">
            <h2 className="text-h2 mb-8">BRINGING YOU THE <span className="text-p-orange-dark">BEST</span> AUDIO GEAR</h2>
            <p className="text-body opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>
        <div className="hidden xl:flex flex-1 justify-end mb-10">
          <img src={aboutImgLg} alt="Best audio gear image" className="h-[588px] w-[540] object-cover rounded-lg" />
        </div>
        <div className="xl:hidden mb-10 md:mb-[63px]">
          <img src={aboutImgSm} alt="Best audio gear image" className="h-[300px] object-cover rounded-lg" />
        </div>
      </div>
    </div>
  )
}