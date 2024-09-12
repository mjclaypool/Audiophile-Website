import { Link } from "react-router-dom";
import Button from "../UI/Button";

import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function Categories() {
  type category = {
    title: string,
    thumbnail: string,
    altTxt: string,
    link: string
  };

  const cats: category[] = [
    {
      title: "HEADPHONES",
      thumbnail: headphones,
      altTxt: "Headphones thumbnail image",
      link: "/headphones"
    },
    {
      title: "SPEAKERS",
      thumbnail: speakers,
      altTxt: "Speakers thumbnail image",
      link: "/speakers"
    },
    {
      title: "EARPHONES",
      thumbnail: earphones,
      altTxt: "Earphones thumbnail image",
      link: "/earphones"
    }
  ];

  return (
    <div className="flex justify-center pt-[52px] xl:pt-[72px] mb-[120px] md:mb-[96px] xl:mb-[160px] px-6 md:px-[39px]">
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-[360px] md:max-w-[689px] xl:max-w-[1110px] gap-[68px] md:gap-[10px] xl:gap-[30px] font-manrope">
        {cats.map((cat) => (
          <div key={cat.title} className="relative flex flex-col items-center justify-end h-[165px] xl:h-[204px] w-full bg-n-grey-dark rounded-lg">
            <img src={cat.thumbnail} alt={cat.altTxt} className="absolute h-[130px] xl:h-[186px] -top-[46px] xl:-top-[66px]" />
            <h2 className="font-bold text-body">{cat.title}</h2>
            <Link to={cat.link} className="mb-1 xl:mb-3">
              <Button color="noBorder" btnTxt="SHOP" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}