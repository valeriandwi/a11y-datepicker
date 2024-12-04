import React from "react";
import { DayLists } from "../../../../utils/dateObjectGenerator";
import { Dayjs } from "dayjs";
import clsx from "clsx";
import { usePopoverStore } from "../../../../stores/popover";

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
  const { setShow } = usePopoverStore();

  const changeDate = (day: Dayjs) => {
    if (onChange) onChange(day);
    setCurrentDate(day);
  };

  const handlePreviousMonthClick = (day: number) => {
    changeDate(currentDate.subtract(1, "month").date(day));
  };

  const handleCurrentMonthClick = (day: number) => {
    changeDate(currentDate.date(day));
  };

  const handleNextMonthClick = (day: number) => {
    changeDate(currentDate.add(1, "month").date(day));
  };

  const handleKeyDown = (key: ArrowKeys) => {
    switch (key) {
      case "ArrowUp":
        changeDate(currentDate.subtract(1, "week"));
        break;
      case "ArrowDown":
        changeDate(currentDate.add(1, "week"));
        break;
      case "ArrowLeft":
        changeDate(currentDate.subtract(1, "day"));
        break;
      case "ArrowRight":
        changeDate(currentDate.add(1, "day"));
        break;
      case "Enter":
        if (onChange) onChange(currentDate);
        setShow(false);
        return;
    }
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
            onClick={(e) => {
              e.preventDefault();
              if (e.detail === 1) {
                // prevent key up is triggered when click
                handleCurrentMonthClick(day);
              }
            }}
            onKeyUp={(e) => handleKeyDown(e.key as ArrowKeys)}
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
