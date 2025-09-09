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

function PromotionalTimer({ targetDate }: TargetDateType) {
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
    <div className="grid grid-cols-4 gap-2 self-start max-sm:self-center max-sm:w-full">
      <div className="flex flex-col items-center bg-white rounded-full w-[60px] h-[60px] justify-center">
        <span className="font-bold text-[16px]">
          {String(timeLeft?.days).padStart(2, "0")}
        </span>
        <span className="font-medium text-[10px]">Days</span>
      </div>

      <div className="flex flex-col items-center bg-white rounded-full w-[60px] h-[60px] justify-center">
        <span className="font-bold text-[16px]">
          {String(timeLeft?.hours).padStart(2, "0")}
        </span>
        <span className="font-medium text-[10px]">Hours </span>
      </div>

      <div className="flex flex-col items-center bg-white rounded-full w-[60px] h-[60px] justify-center">
        <span className="font-bold text-[16px]">
          {String(timeLeft?.minutes).padStart(2, "0")}
        </span>
        <span className="font-medium text-[10px]">Minutes </span>
      </div>

      <div className="flex flex-col items-center bg-white rounded-full w-[60px] h-[60px] justify-center">
        <span className="font-bold text-[16px]">
          {String(timeLeft?.seconds).padStart(2, "0")}
        </span>
        <span className="font-medium text-[10px]">Seconds </span>
      </div>
    </div>
  );
}

export default PromotionalTimer;
