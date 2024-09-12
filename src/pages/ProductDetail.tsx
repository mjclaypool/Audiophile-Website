import { useParams } from "react-router-dom";

import Others from "../components/Others";
import Categories from '../components/Categories';
import About from '../components/About';
import data from '../data/data.json';

const ProductDetail = () => {
  const params = useParams();
  let prodDetails = data.filter((product) => product.slug == params.product);
  console.log(prodDetails);

  return (
    <>
      <Others others={prodDetails[0].others} />
      <Categories />
      <About />
    </>
  )
}

export default ProductDetail;