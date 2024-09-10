type btnProps = {
  color: string,
  prodLabel: string
}

const Button = (props: btnProps) => {
  type colorVars = {
    [key: string]: string
  }
  const colorVariants: colorVars = {
    orange: "bg-p-orange-dark hover:bg-p-orange-light text-n-white px-[30px] py-[15px]",
    white: "bg-n-white hover:bg-n-black text-n-black hover:text-n-white border-[1px] border-n-black  px-[29px] py-[14px]",
    noBorder: "bg-n-white text-n-black hover:text-p-orange-dark px-[30px] py-[15px]"
  }

  return (
    <button className={`${colorVariants[props.color]} self-start font-manrope font-bold text-[13px] tracking-[1px] leading-[18px]`}>
      {props.prodLabel}
    </button>
  )
}

export default Button;