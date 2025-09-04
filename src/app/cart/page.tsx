"use client";

import Breadcrumb from "@/components/breadCrumbs/Breadcrumbs";
import {
  selectAllProducts,
  selectCartIds,
} from "@/features/products/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function WishList() {
  const products = useSelector(selectAllProducts);
  const cartProductsIds = useSelector(selectCartIds);
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    cartProductsIds.reduce((acc, id) => {
      acc[id] = 1;
      return acc;
    }, {} as Record<string, number>)
  );
  const [shipping, setShipping] = useState(0);

  const onQuantityChange = (id: string, val: number) => {
    const value = Math.max(1, val || 1);
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const cartRows = products.filter((p) => cartProductsIds.includes(p.id));
  const grandTotal = cartRows.reduce(
    (acc, p) => acc + p.finalPrice * quantities[p.id],
    0
  );

  return (
    <div className="w-full">
      <Breadcrumb />
      <table className="w-full text-[16px] border-separate border-spacing-y-8 mt-10">
        <thead>
          <tr className="shadow font-normal h-20">
            <th className="py-4 px-8 text-left w-1/2 max-sm:w-1/4">Product</th>
            <th className="w-1/6">Price</th>
            <th className="w-1/6">Quantity</th>
            <th className="w-1/6">Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {cartRows.map((product) => {
            const qty = quantities[product.id];
            const subtotal = qty * product.finalPrice;

            return (
              <tr key={product.id} className="shadow h-25">
                <td className="py-3 px-8 h-25 flex items-center gap-2 w-1/2 max-sm:w-1/4">
                  <Image
                    src={product.gallery[0]}
                    alt={product.title}
                    width={50}
                    height={50}
                  />
                  <span>{product.title}</span>
                </td>

                <td className="text-center w-1/6">${product.finalPrice}</td>

                <td className="text-center w-1/6">
                  <input
                    type="number"
                    min="1"
                    className="w-20 text-center border rounded"
                    value={qty}
                    onChange={(e) =>
                      onQuantityChange(product.id, Number(e.target.value))
                    }
                  />
                </td>

                <td className="text-center w-1/6">${subtotal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex max-sm:flex-col max-sm:gap-5 justify-between max-sm:items-center">
        <Link
          href={"/"}
          className="border border-black/40 w-[218px] h-[56px] rounded-[4px] flex items-center justify-center"
        >
          Return To Shop
        </Link>
        <Link
          href={"/"}
          className="border border-black/40 w-[218px] h-[56px] rounded-[4px] flex items-center justify-center"
        >
          Update Cart
        </Link>
      </div>

      <div className="mt-20 flex max-sm:flex-col max-sm:gap-10 justify-between">
        <div className="flex gap-4">
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
        <div className="p-4 border border-black w-[470px] max-sm:w-full flex flex-col gap-6 rounded-[4px]">
          <h4 className="font-medium text-[20px]">Cart Total</h4>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-[16px]">
              <span>Subtotal:</span>
              <span>${grandTotal}</span>
            </div>
            <hr />
            <div className="flex justify-between text-[16px]">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : shipping}</span>
            </div>
            <hr />
            <div className="flex justify-between text-[16px]">
              <span>Total:</span>
              <span>${grandTotal + shipping}</span>
            </div>
          </div>
          <button className="font-medium text-[16px] text-white bg-[#DB4444] w-[260px] h-[56px] rounded-[4px] self-center">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
}
