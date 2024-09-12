import Banner from "../components/Banner";
import Products from "../components/Products";
import Categories from '../components/Categories';
import About from '../components/About';

export default function Speakers() {
  return (
    <>
      <Banner txt="speakers" />
      <Products cat="speakers"/>
      <Categories />
      <About />
    </>
  )
}