import { ReactNode } from "react";

type Category = {
  id: string;
  label: string;
  svg: ReactNode;
};

const categories: Category[] = [
  {
    id: "1",
    label: "Phones",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <rect
          x="18"
          y="8"
          width="20"
          height="40"
          rx="4"
          ry="4"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="28"
          cy="45"
          r="2"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "2",
    label: "Gaming",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <circle
          cx="28"
          cy="28"
          r="14"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18L36 40"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 18L20 40"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "3",
    label: "Health",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <circle
          cx="28"
          cy="20"
          r="6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 42C18 34 38 34 38 42"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "4",
    label: "Electronics",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <rect
          x="16"
          y="16"
          width="24"
          height="24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 24H32V32H24V24Z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "5",
    label: "Sports",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <circle
          cx="28"
          cy="28"
          r="18"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 10L28 46"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 28L46 28"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "6",
    label: "Pets",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <rect
          x="19"
          y="19"
          width="18"
          height="18"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="28"
          cy="28"
          r="8"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "7",
    label: "Men",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <circle
          cx="28"
          cy="18"
          r="8"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 42 L28 30 L40 42"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="28"
          y1="30"
          x2="28"
          y2="46"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "8",
    label: "HOUSE",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <rect
          x="16"
          y="30"
          width="24"
          height="16"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 14L16 30H40L28 14Z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "9",
    label: "Woman",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <circle
          cx="28"
          cy="18"
          r="6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 46C16 36 40 36 40 46"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "10",
    label: "Kids",
    svg: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-black group-hover:stroke-white"
      >
        <circle
          cx="28"
          cy="28"
          r="10"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 28L28 38L38 28"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default categories;
