"use client";

import Link from "next/link";
import { useState } from "react";

export default function AccountSideNave() {
  const [active, setActive] = useState("");
  return (
    <div className="flex flex-col gap-6 w-1/4 max-sm:flex-row max-sm:w-full max-sm:text-center max-sm:self-center">
      <ul className="ml-4 max-sm:ml-0 text-black/40 text-[16px] flex flex-col gap-2">
        <Link
          href={"/my-account"}
          className={`-ml-4 max-sm:ml-0 text-black font-medium h-fit w-fit`}
        >
          Manage My Account
        </Link>
        <li>
          <Link
            href={"#"}
            className={` ${active === "My Profile" && "text-[#DB4444]"}`}
            onClick={() => setActive("My Profile")}
          >
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            onClick={() => setActive("Address Book")}
            className={` ${active === "Address Book" && "text-[#DB4444]"}`}
          >
            Address Book
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            onClick={() => setActive("My Payment Options")}
            className={` ${
              active === "My Payment Options" && "text-[#DB4444]"
            }`}
          >
            My Payment Options
          </Link>
        </li>
      </ul>

      <ul className="ml-4 max-sm:ml-0 text-black/40 text-[16px] flex flex-col gap-2">
        <Link
          href={"#"}
          className="-ml-4 max-sm:ml-0 text-black font-medium h-fit w-fit"
          onClick={() => setActive("My Orders")}
        >
          My Orders
        </Link>
        <li>
          <Link
            href={"#"}
            onClick={() => setActive("My Returns")}
            className={` ${active === "My Returns" && "text-[#DB4444]"}`}
          >
            My Returns
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            onClick={() => setActive("My Cancellations")}
            className={` ${active === "My Cancellations" && "text-[#DB4444]"}`}
          >
            My Cancellations
          </Link>
        </li>
      </ul>

      <Link
        href={"/wishlist"}
        className="text-black font-medium text-[16px] h-fit w-fit"
      >
        My WishList
      </Link>
    </div>
  );
}
