import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Label } from "./ui/label";
import { useState } from "react";

export function SliderLikes({
  className,
  likes,
  onChange,
  ...props
}: SliderProps & { likes: number; onChange: (value: number) => void }) {
  const [value, setValue] = useState(likes);

  return (
    <div className="w-[30%] space-y-4">
      <div className="flex justify-between items-center">
        <Label htmlFor="slider-demo">Likes</Label>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
      <Slider
        id="slider-demo"
        defaultValue={[value]}
        max={1000}
        step={50}
        className={cn("w-full", className)}
        onValueChange={(vals) => {
          onChange(vals[0]);
          setValue(vals[0]);
        }}
        {...props}
      />
    </div>
  );
}
