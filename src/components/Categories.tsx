import Button from "../UI/Button";

import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function Categories() {
  type category = {
    title: string,
    thumbnail: string,
    altTxt: string
  };

  const cats: category[] = [
    {
      title: "HEADPHONES",
      thumbnail: headphones,
      altTxt: "Headphones thumbnail image"
    },
    {
      title: "SPEAKERS",
      thumbnail: speakers,
      altTxt: "Speakers thumbnail image"
    },
    {
      title: "EARPHONES",
      thumbnail: earphones,
      altTxt: "Earphones thumbnail image"
    }
  ];

  return (
    <div className="flex justify-center mb-[120px] md:mb-[96px] px-6 md:px-[39px]">
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-[360px] md:max-w-[689px] xl:max-w-[1110px] gap-[68px] md:gap-[10px] xl:gap-[30px] font-manrope">
        {cats.map((cat) => (
          <div key={cat.title} className="relative flex flex-col items-center justify-end h-[165px] xl:h-[204px] w-full bg-n-grey-dark rounded-lg">
            <img src={cat.thumbnail} alt={cat.altTxt} className="absolute h-[130px] xl:h-[186px] -top-[46px] xl:-top-[66px]" />
            <h2 className="font-bold text-body">{cat.title}</h2>
            <div className="mb-1 xl:mb-3">
              <Button color="noBorder" btnTxt="SHOP" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}