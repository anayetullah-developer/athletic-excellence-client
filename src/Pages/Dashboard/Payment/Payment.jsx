import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {

    const mySelelctedClass = useLoaderData();
    const price = mySelelctedClass.price;
    const convertedPrice = parseFloat(price);
    console.log(convertedPrice);

  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-2xl font-semibold my-5">Pay to enroll</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={convertedPrice} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
