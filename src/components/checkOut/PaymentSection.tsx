"use client";
import {
  selectQuantities,
  selectShipping,
} from "@/features/checkout/checkoutSlice";
import { selectAllProducts } from "@/features/products/productsSlice";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function PaymentSection() {
  const products = useSelector(selectAllProducts);
  const quantities = useSelector(selectQuantities);
  const shipping = useSelector(selectShipping);

  const cartProduct = products.filter(
    (product) => quantities[product.id] && quantities[product.id] > 0
  );
  const totalPrice = cartProduct.reduce(
    (curr, product) => quantities[product.id] * product.finalPrice + curr,
    0
  );
  return (
    <div className="flex flex-col gap-4 w-1/2 mt-20  max-lg:w-full">
      {cartProduct.map((product) => (
        <div key={product.id} className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <Image
              src={product.gallery[0]}
              alt={`${product.title} image`}
              width={50}
              height={50}
            />
            <p>{product.title}</p>
          </div>
          <span>${product.finalPrice * quantities[product.id]}</span>
        </div>
      ))}
      <div className="flex justify-between mt-5">
        <span>Subtotal:</span>
        <span>${totalPrice}</span>
      </div>
      <hr className="w-full h-[2px] bg-black/40" />
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span>{shipping <= 0 ? "Free" : shipping}</span>
      </div>
      <hr className="w-full h-[2px] bg-black/40" />
      <div className="flex justify-between">
        <span>Total:</span>
        <span>${totalPrice + shipping}</span>
      </div>
      <fieldset className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="radio"
              name="paymentMethod"
              className="w-4 accent-black"
              value={"bank"}
              id="bankMethod"
            />
            <label htmlFor="bankMethod">Bank</label>
          </div>
          <Image
            src={"/icons/paymentMethodIcon.png"}
            alt="paymen Method"
            width={192}
            height={28}
          />
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="paymentMethod"
            className="w-4 accent-black"
            value={"cashondelivery"}
            id="cathMethod"
          />
          <label htmlFor="cathMethod">Cash on delivery</label>
        </div>
      </fieldset>
      <div className="flex gap-4 mt-2">
        <input
          type="text"
          name="couponCode"
          id="couponCode"
          className="w-[300px] max-sm:w-[200px] h-[56px] focus:outline-0 border border-black rounded-[4px] px-4"
          placeholder="Coupon Code"
        />
        <button className="font-medium text-[16px] text-white bg-[#DB4444] w-[211px] h-[56px] rounded-[4px]">
          Apply Coupon
        </button>
      </div>
      <button className="font-medium text-[16px] text-white bg-[#DB4444] w-[190px] h-[56px] rounded-[4px] mt-2">
        Place Order
      </button>
    </div>
  );
}
