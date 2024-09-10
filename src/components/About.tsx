import aboutImg from "../assets/shared/desktop/image-best-gear.jpg";

export default function About() {
  return (
    <div className="flex justify-center my-20 px-6">
      <div className="flex items-center w-[1110px]">
        <div className="flex flex-1 font-manrope">
          <div className="pr-28">
            <h2 className="text-h2 mb-8">BRINGING YOU THE <span className="text-p-orange-dark">BEST</span> AUDIO GEAR</h2>
            <p className="text-body opacity-50">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
        </div>
        <div className="flex flex-1">
          <img src={aboutImg} alt="Best audio gear image" className="w-full object-cover mx-2 rounded-lg" />
        </div>
      </div>
    </div>
  )
}