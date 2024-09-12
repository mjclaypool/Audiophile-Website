import { useParams } from "react-router-dom";

import Summary from "../components/Summary";
import Features from "../components/Features";
import Includes from "../components/Includes";
import Gallery from "../components/Gallery";
import Others from "../components/Others";
import Categories from '../components/Categories';
import About from '../components/About';
import data from '../data/data.json';

const ProductDetail = () => {
  const params = useParams();
  let prodDetails = data.filter((product) => product.slug == params.product);

  return (
    <>
      <Summary
        name={prodDetails[0].name}
        image={prodDetails[0].image}
        new={prodDetails[0].new}
        price={prodDetails[0].price}
        description={prodDetails[0].description}
      />
      <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-[125px] mb-[88px] md:mb-[120px] xl:mb-[160px]">
        <Features features={prodDetails[0].features} />
        <Includes includes={prodDetails[0].includes} />
      </div>
      <Gallery gallery={prodDetails[0].gallery} />
      <Others others={prodDetails[0].others} />
      <Categories />
      <About />
    </>
  )
}

export default ProductDetail;