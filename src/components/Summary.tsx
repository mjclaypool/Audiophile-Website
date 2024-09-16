import { useState, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import Quantity from "../UI/Quantity";
import Button from "../UI/Button";
import CartContext from '../store/CartContext';

type cartItem = {
  id: number,
  slug: string,
  name: string,
  qty: number,
  price: number
}

type summaryProps = {
  id: number,
  slug: string,
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
  const [ qty, setQty ] = useState(1);
  const cartCtx = useContext(CartContext);

  let formattedPrice = new Intl.NumberFormat('en-US').format(props.price);

  function handleUpdateQty(quantity: number) {
    setQty(quantity);
  }

  function handleAddToCart() {
    let abbrName: string = "";
    if (props.name.charAt(0) == "Y" || props.name.charAt(0) == "Z") {
      abbrName = props.name.slice(0, 3);
    } else if (props.name.charAt(2) == "5") {
      abbrName = props.name.slice(0, 4);
    } else {
      abbrName = props.name.replace("Mark", "MK");
      abbrName = abbrName.replace(" Headphones", "");
    }

    let item: cartItem = {
      id: props.id,
      slug: props.slug,
      name: abbrName,
      qty: qty,
      price: props.price
    }
    cartCtx.addItem(item)
  }

  return (
    <div className="flex justify-center px-6 mb-[88px] md:mb-[120px] xl:mb-[160px]">
      <div className="w-full max-w-[360px] md:max-w-[689px] xl:max-w-[1110px] font-manrope">
        <Link to={`/${params.category}`} onClick={() => window.scrollTo(0, 0)}>
          <p className="text-body opacity-50 mt-4 mb-6 xl:mt-[79px] xl:mb-[56px]">Go Back</p>
        </Link>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex md:hidden justify-center text-center h-[327px] w-full bg-n-grey-dark rounded-lg mb-8">
            <img src={props.image.mobile} alt={props.name} className="object-contain p-1" />
          </div>
          <div className="hidden md:flex xl:hidden justify-center text-center h-[480px] w-[281px] bg-n-grey-dark rounded-lg">
            <img src={props.image.tablet} alt={props.name} className="object-contain p-1" />
          </div>
          <div className="hidden xl:flex justify-center text-center h-[560px] w-[540px] bg-n-grey-dark rounded-lg">
            <img src={props.image.desktop} alt={props.name} className="object-contain p-1" />
          </div>
          <div className="md:w-[340px] xl:w-[446px]">
            {props.new == true &&
              <p className="text-overline text-p-orange-dark mb-6 md:mb-[17px] xl:mb-4">NEW PRODUCT</p>
            }
            <h2 className="text-h4 xl:text-h2 mb-6 md:mb-8">{props.name.toUpperCase()}</h2>
            <p className="text-body opacity-50 mb-6 md:mb-8">{props.description}</p>
            <h3 className="text-h6 mb-[31px] xl:mb-[47px]">$ {formattedPrice}</h3>
            <div className="flex gap-4">
              <Quantity initial={1} updateQty={handleUpdateQty} />
              <div onClick={handleAddToCart}>
                <Button color="orange" btnTxt="ADD TO CART" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary;