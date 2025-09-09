"use client";
import { useEffect, useState } from "react";

type TimeLeftType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type TargetDateType = {
  targetDate: string;
};

function FlashSalesTimer({ targetDate }: TargetDateType) {
  const [timeLeft, setTimeLeft] = useState<TimeLeftType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const calculateTimeLeft = (): TimeLeftType => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeftType = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };

        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }

        return timeLeft;
      };

      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-8 gap-2 items-center text-center justify-between w-[350px] mx-auto">
      <div className="flex flex-col items-center">
        <span className="font-medium text-[16px]">Days</span>
        <span className="font-bold text-[32px]">
          {String(timeLeft?.days).padStart(2, "0")}
        </span>
      </div>

      <span className="font-bold text-[#E07575] text-[32px] self-end">:</span>

      <div className="flex flex-col items-center">
        <span className="font-medium text-[16px]">Hours </span>
        <span className="font-bold text-[32px]">
          {String(timeLeft?.hours).padStart(2, "0")}{" "}
        </span>
      </div>

      <span className="font-bold text-[#E07575] text-[32px] self-end">:</span>

      <div className="flex flex-col items-center">
        <span className="font-medium text-[16px]">Minutes </span>
        <span className="font-bold text-[32px]">
          {String(timeLeft?.minutes).padStart(2, "0")}{" "}
        </span>
      </div>

      <span className="font-bold text-[#E07575] text-[32px] self-end">:</span>

      <div className="flex flex-col items-center">
        <span className="font-medium text-[16px]">Seconds </span>
        <span className="font-bold text-[32px]">
          {String(timeLeft?.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default FlashSalesTimer;
