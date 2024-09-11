type btnProps = {
  color: string,
  btnTxt: string
}

const Button = (props: btnProps) => {
  type colorVars = {
    [key: string]: string
  }
  const colorVariants: colorVars = {
    orange: "bg-p-orange-dark hover:bg-p-orange-light text-n-white px-[30px] py-[15px]",
    black: "bg-n-black hover:bg-n-grey-dark text-n-white hover:text-n-black px-[30px] py-[15px]",
    clear: "bg-transparent hover:bg-n-black text-n-black hover:text-n-white border-[1px] border-n-black  px-[29px] py-[14px]",
    noBorder: "bg-n-white text-n-black hover:text-p-orange-dark px-[30px] py-[15px]"
  }

  return (
    <button className={`${colorVariants[props.color]} self-start font-manrope font-bold text-[13px] tracking-[1px] leading-[18px]`}>
      {props.btnTxt}
    </button>
  )
}

export default Button;