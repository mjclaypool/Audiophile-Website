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
    <div className="flex flex-col md:flex-row md:justify-center items-center text-center px-6 md:px-[39px] mb-[120px] xl:mb-[160px]">
      <div className="flex flex-col w-full md:w-[277px] xl:w-[445px] mb-5 md:mb-0">
        <div className="h-[174px] xl:h-[280px] w-full rounded-lg mb-5 md:mb-[18px] xl:mb-8">
          <img src={props.gallery.first.mobile} alt="First product image" />
        </div>
        <div className="h-[174px] xl:h-[280px] w-full rounded-lg">
          <img src={props.gallery.second.mobile} alt="Second product image" />
        </div>
      </div>
      <div className="h-[368px] xl:h-[592px] w-full md:w-[395px] xl:w-[635px] rounded-lg md:ml-[18px] xl:ml-[30px]">
        <img src={props.gallery.third.mobile} alt="Third product image" />
      </div>
    </div>
  )
}

export default Gallery;