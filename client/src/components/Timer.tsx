import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface TimerProps {
  duration: number;
  onTimeout: () => void;
}

export default function Timer({ duration, onTimeout }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const progress = (timeLeft / duration) * 100;

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span>Time Remaining</span>
        <span>{timeLeft}s</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
