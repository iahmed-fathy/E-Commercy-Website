export default function AccountSection() {
  return (
    <ul className="flex flex-col gap-4">
      <h6 className="font-Medium text-[24px]">Account</h6>
      <li>
        <a href="#" className="font-normal text-[16px]">
          My Account
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          Login / Register
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          Cart
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          Wishlist
        </a>
      </li>
      <li>
        <a href="#" className="font-normal text-[16px]">
          Shop
        </a>
      </li>
    </ul>
  );
}
