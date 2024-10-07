import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

type btnProps = {
  color: string,
  btnTxt: string
}

const Button = (props: btnProps) => {
  type colorVars = {
    [key: string]: string
  }
  const colorVariants: colorVars = {
    orange: "bg-p-orange-dark hover:bg-p-orange-light text-n-white px-[32px] py-[15px]",
    black: "bg-n-black hover:bg-n-grey text-n-white px-[30px] py-[15px]",
    clear: "bg-transparent hover:bg-n-black text-n-black hover:text-n-white border-[1px] border-n-black px-[29px] py-[14px]",
    noBorder: "bg-transparent text-n-black opacity-50 hover:text-p-orange-dark px-[30px] py-[15px]",
    disabled: "bg-transparent text-n-black border-[1px] border-n-black px-[29px] py-[14px] cursor-default",
  }

  return (
    <div className={`${colorVariants[props.color]} w-full font-manrope font-bold text-[13px] text-center tracking-[1px] leading-[18px]`}>
      {props.btnTxt}
      {props.color == "noBorder" &&
        <FontAwesomeIcon
          icon={faAngleRight}
          aria-label="Font Awesome Angle Right Icon"
          className="text-p-orange-dark pl-2"
        />
      }
    </div>
  )
}

export default Button;