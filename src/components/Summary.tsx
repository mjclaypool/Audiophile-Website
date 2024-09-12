import { Link, useParams } from "react-router-dom";
import Button from "../UI/Button";

type summaryProps = {
  name: string,
  image: {
    mobile: string,
    tablet: string,
    desktop: string
  },
  new: boolean,
  price: number,
  description: string
}

const Summary = (props: summaryProps) => {
  const params = useParams();

  return (
    <div className="flex justify-center px-6 mb-[88px] md:mb-[120px] xl:mb-[160px]">
      <div className="w-full max-w-[360px] md:max-w-[689px] xl:max-w-[1110px] font-manrope">
        <Link to={`/${params.category}`}>
          <p className="text-body opacity-50 mt-4 mb-6 xl:mt-[79px] xl:mb-[56px]">Go Back</p>
        </Link>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-center h-[327px] md:h-[480px] xl:h-[560px] w-full md:w-[281px] xl:w-[540px] bg-n-grey-dark rounded-lg mb-8 md:mb-0">
            <img src={props.image.mobile} alt={props.name} />
          </div>
          <div className="md:w-[340px] xl:w-[446px]">
            {props.new == true &&
              <p className="text-overline text-p-orange-dark mb-6 md:mb-[17px] xl:mb-4">NEW PRODUCT</p>
            }
            <h2 className="text-h4 xl:text-h2 mb-6 md:mb-8">{props.name.toUpperCase()}</h2>
            <p className="text-body opacity-50 mb-6 md:mb-8">{props.description}</p>
            <h3 className="text-h6 mb-[31px] xl:mb-[47px]">$ {props.price}</h3>
            <Button color="orange" btnTxt="ADD TO CART" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary;