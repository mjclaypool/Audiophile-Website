import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutSummary from '../components/CheckoutSummary';
import CheckoutModal from "../components/CheckoutModal";
import UserProgressContext from "../store/UserProgressContext";

const Checkout = () => {
  const userProgressCtx = useContext(UserProgressContext);

  return (
    <div className="flex justify-center w-full bg-n-grey-light">
      <div className="flex flex-col w-full max-w-[1110px] mb-[97px] md:mb-[116px] xl:mb-[141px]">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <p className="text-body opacity-50 mx-6 md:mx-[39px] xl:mx-0 mt-4 md:mt-[48px] xl:mt-[79px] mb-6 xl:mb-[38px] hover:text-p-orange-dark hover:opacity-100">Go Back</p>
        </Link>
        <div className="flex flex-col xl:flex-row xl:justify-between w-full">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
      {userProgressCtx.progress == "checkout" && <CheckoutModal/>}
    </div>
  )
}

export default Checkout;