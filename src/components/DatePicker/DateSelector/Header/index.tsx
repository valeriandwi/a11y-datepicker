import BackIcon from "@/assets/back-icon";
import NextIcon from "@/assets/next-icon";
import { Dayjs } from "dayjs";
import React from "react";

interface DateSelectorProps {
  onDateChange: (value: Dayjs) => void;
  currentDate: Dayjs;
}

const DateSelectorHeader: React.FC<DateSelectorProps> = ({
  onDateChange,
  currentDate,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <button onClick={() => onDateChange(currentDate.subtract(1, "month"))}>
        <BackIcon />
      </button>
      <div className="font-bold">{currentDate.format("MMM YYYY")}</div>
      <button onClick={() => onDateChange(currentDate.add(1, "month"))}>
        <NextIcon />
      </button>
    </div>
  );
};

export default DateSelectorHeader;
