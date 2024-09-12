import Banner from "../components/Banner";
import Products from "../components/Products";
import Categories from '../components/Categories';
import About from '../components/About';

export default function Earphones() {
  return (
    <>
      <Banner txt="earphones" />
      <Products cat="earphones"/>
      <Categories />
      <About />
    </>
  )
}