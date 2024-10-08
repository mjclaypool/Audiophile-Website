import { Link } from "react-router-dom";
import Button from "../UI/Button";

type otherProps = {
  others: {
    slug: string,
    name: string,
    category: string,
    image: {
      mobile: string,
      tablet: string,
      desktop: string
    }
  }[]
}

const Others = (props: otherProps) => {
  return (
    <div className="flex flex-col items-center text-center font-manrope px-6 md:px-[39px] mb-[120px] xl:mb-[160px]">
      <h2 className="text-h5 leading-9 mb-10 md:mb-[56px] xl:mb-16">YOU MAY ALSO LIKE</h2>
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-[360px] md:max-w-[689px] xl:max-w-[1110px] gap-[56px] md:gap-[11px] xl:gap-[30px]">
        {props.others.map((product) => (
          <div key={product.slug} className="flex flex-col w-full">
            <img src={product.image.mobile} alt={product.name} className="flex md:hidden h-[120px] object-cover bg-n-grey-dark rounded-lg mb-8" />
            <img src={product.image.tablet} alt={product.name} className="hidden md:flex xl:hidden h-[318px] object-cover bg-n-grey-dark rounded-lg mb-10" />
            <img src={product.image.desktop} alt={product.name} className="hidden xl:flex h-[318px] object-cover bg-n-grey-dark rounded-lg mb-10" />
            <p className="text-h5 mb-8">{product.name}</p>
            <Link to={`/${product.category}/${product.slug}`} onClick={() => window.scrollTo(0, 0)}>
              <Button color="orange" btnTxt="SEE PRODUCT"/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Others;