type bannerProps = {
  txt: string
}

const Banner = (props: bannerProps) => {
  return (
    <div className="flex justify-center items-center h-[102px] md:h-[246px] xl:h-[239px] bg-n-grey-v-dark mb-[64px] md:mb-[120px] xl:mb-[160px]">
      <h2 className="font-manrope text-h4 md:text-h2 text-n-white">{props.txt}</h2>
    </div>
  )
}

export default Banner;