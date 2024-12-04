import React from "react";
import { weekDays } from "../../constants";

const WeekDays: React.FC = () => {
  return (
    <div className="grid grid-cols-7 w-full gap-4">
      {weekDays.map((el, index) => (
        <div key={`${el}-${index}`} className="w-[40px] h-[20px] text-center">
          {el}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
