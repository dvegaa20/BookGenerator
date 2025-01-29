import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const SeedInput = ({ seed, onChange, onGenerate }: SeedProps) => {
  return (
    <div>
      <Label className="text-sm text-muted-foreground mb-1.5 block">Seed</Label>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={seed}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder="Enter seed"
          className="w-[100px]"
        />
        <Button onClick={onGenerate} variant="outline" className="h-[35.5px]">
          🔀 Random Seed
        </Button>
      </div>
    </div>
  );
};

export default SeedInput;
