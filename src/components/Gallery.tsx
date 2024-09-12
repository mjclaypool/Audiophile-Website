type galleryProps = {
  gallery: {
    first: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    second: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    third: {
      mobile: string,
      tablet: string,
      desktop: string
    }
  }
}

const Gallery = (props: galleryProps) => {
  return (
    <div className="flex justify-center px-6 md:px-[39px] mb-[120px] xl:mb-[160px]">
      <div className="flex flex-col md:flex-row md:justify-center items-center text-center">
        <div className="flex flex-col w-full md:w-[277px] xl:w-[445px] mb-5 md:mb-0">
          <img src={props.gallery.first.mobile} alt="First product image" className="flex md:hidden h-[174px] object-cover rounded-lg mb-5" />
          <img src={props.gallery.first.tablet} alt="First product image" className="hidden md:flex xl:hidden h-[174px] object-cover rounded-lg mb-[18px]" />
          <img src={props.gallery.first.desktop} alt="First product image" className="hidden xl:flex h-[280px] object-cover rounded-lg mb-8" />
          <img src={props.gallery.second.mobile} alt="Second product image" className="flex md:hidden h-[174px] object-cover rounded-lg" />
          <img src={props.gallery.second.tablet} alt="Second product image" className="hidden md:flex xl:hidden h-[174px] object-cover rounded-lg" />
          <img src={props.gallery.second.desktop} alt="Second product image" className="hidden xl:flex h-[280px] object-cover rounded-lg" />
        </div>
        <img src={props.gallery.third.mobile} alt="Third product image" className="flex md:hidden h-[368px] w-full object-cover rounded-lg" />
        <img src={props.gallery.third.tablet} alt="Third product image" className="hidden md:flex xl:hidden h-[368px] w-[395px] object-cover rounded-lg ml-[18px]" />
        <img src={props.gallery.third.desktop} alt="Third product image" className="hidden xl:flex h-[592px] w-[635px] object-cover rounded-lg ml-[30px]" />
      </div>
    </div>
  )
}

export default Gallery;