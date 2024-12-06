import React, { forwardRef } from "react";
import clsx from "clsx";

interface DayGridProps {
  day: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  isCurrentMonth?: boolean;
  isCurrentDay?: boolean;
}

const DayGrid = forwardRef<HTMLButtonElement, DayGridProps>(
  ({ day, onClick, onKeyDown, isCurrentMonth = true, isCurrentDay }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          isCurrentMonth ? "text-black" : "text-gray-400",
          isCurrentDay
            ? "border border-blue-400 text-center rounded-xl bg-blue-200 outline-blue-400"
            : "text-center border-transparent outline-none"
        )}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <span>{day}</span>
      </button>
    );
  }
);

export default DayGrid;
