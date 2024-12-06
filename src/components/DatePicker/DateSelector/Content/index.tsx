import React from "react";
import { DayLists } from "../../../../utils/dateObjectGenerator";
import { Dayjs } from "dayjs";
import { usePopoverStore } from "../../../../stores/popover";
import DayGrid from "./DayGrid";

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
  const { show, setShow } = usePopoverStore();
  const todayRef = React.useRef<HTMLButtonElement | null>(null);
  React.useEffect(() => {
    // Set focus when modal showed
    if (show) {
      todayRef.current?.focus();
    }
  }, [show]);

  const changeDate = (day: Dayjs) => {
    if (onChange) onChange(day);
    setCurrentDate(day);
  };

  const handlePreviousMonthClick = (day: number) => {
    changeDate(currentDate.subtract(1, "month").date(day));
    setShow(false);
  };

  const handleCurrentMonthClick = (day: number) => {
    changeDate(currentDate.date(day));
    setShow(false);
  };

  const handleNextMonthClick = (day: number) => {
    changeDate(currentDate.add(1, "month").date(day));
    setShow(false);
  };

  const handleKeyDown = (
    key: ArrowKeys,
    withControlKey: boolean,
    withAltKey: boolean
  ) => {
    switch (key) {
      case "ArrowUp":
        changeDate(currentDate.subtract(1, "week"));
        break;
      case "ArrowDown":
        changeDate(currentDate.add(1, "week"));
        break;
      case "ArrowLeft":
        if (withControlKey) return changeDate(currentDate.subtract(1, "month"));
        if (withAltKey) return changeDate(currentDate.subtract(1, "year"));
        changeDate(currentDate.subtract(1, "day"));
        break;
      case "ArrowRight":
        if (withControlKey) return changeDate(currentDate.add(1, "month"));
        if (withAltKey) return changeDate(currentDate.add(1, "year"));
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
      {/* Days of Prev Month */}
      {daysList.prevMonthDays.map((day, index) => (
        <DayGrid
          key={`${day}/${index}`}
          day={day}
          isCurrentMonth={false}
          onClick={() => handlePreviousMonthClick(day)}
        />
      ))}
      {/* Days of Current Month */}
      {daysList.days.map((day, index) => {
        return (
          <DayGrid
            key={`${day}/${index}`}
            ref={index + 1 === daysList.day ? todayRef : null}
            day={day}
            onClick={(e) => {
              e.preventDefault();
              if (e.detail === 1) {
                // prevent key up is triggered when click
                handleCurrentMonthClick(day);
              }
            }}
            isCurrentMonth
            isCurrentDay={index + 1 === daysList.day}
            onKeyDown={(e) =>
              handleKeyDown(e.key as ArrowKeys, e.ctrlKey, e.altKey)
            }
          />
        );
      })}
      {/* Days of Next Month */}
      {daysList.remainingDays.map((day, index) => {
        return (
          <DayGrid
            key={`${day}/${index}`}
            day={day}
            isCurrentMonth={false}
            onClick={() => handleNextMonthClick(day)}
          />
        );
      })}
    </div>
  );
};

export default Content;
