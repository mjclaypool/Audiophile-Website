import FeaturedZX9 from "./FeaturedZX9";
import FeaturedZX7 from "./FeaturedZX7";
import FeaturedYX1 from "./FeaturedYX1";

export default function Featured() {
  return (
    <div className="flex flex-col gap-6 xl:gap-12 items-center mb-[120px] md:mb-[96px] px-6 md:px-[39px]">
      <FeaturedZX9 />
      <FeaturedZX7 />
      <FeaturedYX1 />
    </div>
  )
}