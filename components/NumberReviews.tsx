import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function NumberReviews({ reviews, onChange }: NumberReviewsProps) {
  const [isIncreasing, setIsIncreasing] = useState(true);

  const handleClick = () => {
    const newValue = isIncreasing
      ? Math.min(5, Number((reviews + 0.1).toFixed(1)))
      : Math.max(0, Number((reviews - 0.1).toFixed(1)));
    onChange(newValue);
    setIsIncreasing(!isIncreasing);
  };

  return (
    <div className="w-[140px]">
      <Label className="text-sm text-muted-foreground mb-1.5 block">
        Review
      </Label>
      <div className="relative">
        <Input
          type="number"
          value={reviews}
          onChange={(e) => onChange(Number(e.target.value))}
          min={0}
          max={5}
          step={0.1}
          className="bg-muted/100 border-0 font-medium text-lg"
        />
        <button
          onClick={handleClick}
          className="absolute top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-sm transition-colors"
        ></button>
      </div>
    </div>
  );
}
