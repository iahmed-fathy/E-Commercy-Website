"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  value?: number;
  size?: number;
  color1?: string;
  color2?: string;
  edit?: boolean;
  onChange?: (newValue: number) => void;
};

export default function Stars({
  value = 0,
  size = 25,
  color1 = "#C1C1C1",
  color2 = "#FFAD33",
  edit = false,
  onChange,
}: Props) {
  const [rating, setRating] = useState(value);

  const handleClick = (i: number) => {
    if (!edit) return;
    setRating(i);
    onChange?.(i);
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        return (
          <FaStar
            key={i}
            size={size}
            onClick={() => handleClick(starValue)}
            className="cursor-pointer"
            color={starValue <= rating ? color2 : color1}
          />
        );
      })}
    </div>
  );
}
