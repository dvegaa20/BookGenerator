import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

const LanguageSelector = ({
  selectedRegion,
  onChange,
  regions,
}: LanguageProps) => {
  return (
    <div>
      <Label className="text-sm text-muted-foreground mb-1.5 block">
        Language
      </Label>
      <Select value={selectedRegion} onValueChange={onChange}>
        <SelectTrigger className="w-[180px] h-[34px]">
          <SelectValue placeholder="Select Region" />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
