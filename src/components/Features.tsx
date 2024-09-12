type featuresProps = {
  features: string
}

const Features = (props: featuresProps) => {
  return (
    <div className="flex justify-center px-6 md:px-[39px] xl:p-0 mb-[113px] xl:mb-0">
      <div className="flex flex-col w-full max-w-[360px] md:max-w-[689px] xl:w-[635px] font-manrope">
        <h2 className="md:w-1/2 xl:w-full text-h5 md:text-h3 leading-9 tracking-[0.86px] mb-6">FEATURES</h2>
        <p className="text-body opacity-50 xl:pr-1">{props.features}</p>
      </div>
    </div>
  )
}

export default Features;