import React from "react";
import { DayLists } from "../../../../utils/dateObjectGenerator";
import { Dayjs } from "dayjs";
import clsx from "clsx";

interface ContentProps {
  currentDate: Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  daysList: DayLists;
  onChange?: (date: Dayjs) => void;
}

type ArrowKeys = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | "Enter";

const Content: React.FC<ContentProps> = ({
  daysList,
  currentDate,
  setCurrentDate,
  onChange,
}) => {
  const handlePreviousMonthClick = (day: number) => {
    const dayInPreviousMonth = currentDate.subtract(1, "month").date(day);
    setCurrentDate(dayInPreviousMonth);
  };

  const handleCurrentMonthClick = (day: number) => {
    const dayInPreviousMonth = currentDate.date(day);
    setCurrentDate(dayInPreviousMonth);
  };

  const handleNextMonthClick = (day: number) => {
    const dayInPreviousMonth = currentDate.date(day);
    setCurrentDate(dayInPreviousMonth);
  };

  const handleKeyDown = (key: ArrowKeys) => {
    let resultDay = currentDate;
    switch (key) {
      case "ArrowUp":
        resultDay = currentDate.subtract(1, "week");
        break;
      case "ArrowDown":
        resultDay = currentDate.add(1, "week");
        break;
      case "ArrowLeft":
        resultDay = currentDate.subtract(1, "day");
        break;
      case "ArrowRight":
        resultDay = currentDate.add(1, "day");
        break;
      case "Enter":
        if (onChange) onChange(currentDate);
        break;
    }
    setCurrentDate(resultDay);
  };

  return (
    <div className="grid grid-cols-7 w-full gap-4">
      {daysList.prevMonthDays.map((day, index) => {
        return (
          <button
            key={`${day}/${index}`}
            className="text-gray-500 text-center"
            onClick={() => handlePreviousMonthClick(day)}
          >
            <span className="text-gray-400">{day}</span>
          </button>
        );
      })}
      {daysList.days.map((day, index) => {
        return (
          <button
            key={`${day}/${index}`}
            className={clsx(
              index + 1 === daysList.day
                ? "border border-blue-400 text-center rounded-xl bg-blue-200 outline-blue-400"
                : "text-center border-transparent outline-none"
            )}
            onClick={() => handleCurrentMonthClick(day)}
            onKeyDown={(e) => handleKeyDown(e.key as ArrowKeys)}
          >
            <span className="text">{day}</span>
          </button>
        );
      })}
      {daysList.remainingDays.map((day, index) => {
        return (
          <button
            key={`${day}/${index}`}
            className="text-center"
            onClick={() => handleNextMonthClick(day)}
          >
            <div className=" text-gray-400">{day}</div>
          </button>
        );
      })}
    </div>
  );
};

export default Content;
