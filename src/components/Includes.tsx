type includesProps = {
  includes: {
    quantity: number,
    item: string,
  }[]
}

const Includes = (props: includesProps) => {
  return (
    <div className="flex justify-center px-6 md:px-[39px] xl:p-0">
      <div className="flex flex-col md:flex-row xl:flex-col w-full max-w-[360px] md:max-w-[689px] xl:w-[350px] font-manrope">
        <h2 className="md:w-1/2 xl:w-full text-h5 md:text-h3 leading-9 tracking-[0.86px] mb-6">IN THE BOX</h2>
        <div className="flex flex-col md:w-1/2 xl:w-full gap-2">
          {props.includes.map((lineItem) => (
            <div key={lineItem.item} className="flex text-body text-n-black">
              <p className="font-bold text-p-orange-dark w-[39px]">{lineItem.quantity.toString()}x</p>
              <p className="opacity-50">{lineItem.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Includes;