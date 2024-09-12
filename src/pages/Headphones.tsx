import Banner from "../components/Banner";
import Products from "../components/Products";
import Categories from '../components/Categories';
import About from '../components/About';

export default function Headphones() {
  return (
    <>
      <Banner txt="headphones" />
      <Products cat="headphones" />
      <Categories />
      <About />
    </>
  )
}