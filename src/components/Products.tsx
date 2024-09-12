import { Link } from "react-router-dom";
import Button from "../UI/Button";
import data from "../data/data.json";

type prodProps = {
  cat: string,
}

const Products = (props: prodProps) => {
  const catProducts = data.filter((product) => product.category == props.cat).reverse();

  return (
    <div className="flex justify-center px-6 md:px-[39px] mb-[120px] xl:mb-[160px]">
      <div className="flex flex-col items-center gap-[120px] xl:gap-[160px] max-w-[360px] md:max-w-none">
        {catProducts.map((prod) => (
          <div key={prod.slug} className="flex flex-col xl:flex-row items-center xl:justify-center xl:items-center w-full md:w-[689px] xl:w-[1110px] xl:gap-[125px]">
            <div className="flex md:hidden justify-center items-center w-full h-[352px] bg-n-grey-dark rounded-lg mb-8">
              <img src={prod.categoryImage.mobile} alt={prod.name} className="h-[352px] object-contain p-1"/>
            </div>
            <div className="hidden md:flex xl:hidden justify-center items-center w-full h-[352px] bg-n-grey-dark rounded-lg mb-[52px]">
              <img src={prod.categoryImage.tablet} alt={prod.name} className="object-contain p-1"/>
            </div>
            <div className="hidden xl:flex justify-center items-center w-[540px] h-[560px] bg-n-grey-dark rounded-lg">
              <img src={prod.categoryImage.desktop} alt={prod.name} className="object-contain p-1"/>
            </div>
            <div className="flex flex-col items-center xl:items-start text-center xl:text-start md:w-[572px] xl:w-[445px] font-manrope text-n-black md:px-1 xl:px-0">
              {prod.new == true &&
                <p className="text-overline text-p-orange-dark mb-6 md:mb-4">NEW PRODUCT</p>
              }
              <h3 className="text-h4 md:text-h2 px-8 md:px-48 xl:px-0 xl:pr-48 mb-6 md:mb-8">{prod.name.toUpperCase()}</h3>
              <p className="text-body opacity-50 mb-6 xl:mb-10">{prod.description}</p>
              <Link to={`/${props.cat}/${prod.slug}`}>
                <Button color="orange" btnTxt="SEE PRODUCT"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;