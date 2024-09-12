import { Link } from "react-router-dom";
import Button from "../UI/Button";
import data from "../data/data.json";

type prodProps = {
  cat: string,
}

const Products = (props: prodProps) => {
  const catProducts = data.filter((product) => product.category == props.cat).reverse();

  return (
    <div className="flex flex-col items-center gap-[120px] xl:gap-[160px] px-6 md:px-[39px] mb-[120px] xl:mb-[160px]">
      {catProducts.map((prod) => (
        <div key={prod.slug} className="flex flex-col md:max-w-[689px] xl:max-w-none xl:flex-row xl:justify-center xl:items-center gap-8 xl:gap-[125px] md:gap-[52px]">
          <div className="h-[352px] xl:h-[560px] bg-n-grey-dark xl:w-[540px] rounded-lg">
            <img src={prod.categoryImage.mobile} alt={prod.name}/>
          </div>
          <div className="flex flex-col items-center xl:items-start text-center xl:text-start xl:w-[445px] font-manrope text-n-black md:px-16 xl:px-0">
            {prod.new == true &&
              <p className="text-overline text-p-orange-dark mb-6 md:mb-4">NEW PRODUCT</p>
            }
            <h3 className="text-h4 xl:text-h2 px-8 md:px-48 xl:px-0 xl:pr-48 mb-6 md:mb-8">{prod.name.toUpperCase()}</h3>
            <p className="text-body opacity-50 mb-6 xl:mb-10">{prod.description}</p>
            <Link to={`/${props.cat}/${prod.slug}`}>
              <Button color="orange" btnTxt="SEE PRODUCT"/>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;