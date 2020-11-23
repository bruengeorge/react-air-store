import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://cdn.pixabay.com/photo/2015/10/30/17/42/world-1014504_960_720.jpg"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* BasketItem */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
        <h2>Insert subtotal here</h2>
      </div>
    </div>
  );
}

export default Checkout;
