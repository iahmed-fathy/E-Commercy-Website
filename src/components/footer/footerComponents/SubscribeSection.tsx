export default function SubscribeSection() {
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-4">
        <h6 className="font-bold text-[24px]">Exclusive</h6>
        <li>
          <a href="#" className="font-medium text-[20px]">
            Subscribe
          </a>
        </li>
        <li>
          <a href="#" className="font-normal text-[16px]">
            Get 10% off your first order
          </a>
        </li>
      </ul>
      <div className="flex border-2 border-white text-[#FAFAFA] px-3 py-2 max-w-[217px] items-center rounded-[4px]">
        <input
          type="mail"
          placeholder="Enter your email"
          className="w-full focus:outline-0"
        />
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.91196 9.9998H2.99996L1.02296 2.1348C1.0103 2.0891 1.00259 2.04216 0.999959 1.9948C0.977959 1.2738 1.77196 0.773804 2.45996 1.1038L21 9.9998L2.45996 18.8958C1.77996 19.2228 0.995959 18.7368 0.999959 18.0288C1.00198 17.9655 1.0131 17.9029 1.03296 17.8428L2.49996 12.9998"
            stroke="#FAFAFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
