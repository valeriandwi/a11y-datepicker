import React from "react";
import PopoverWrapper from "../PopoverWrapper";
import DateSelector from "./DateSelector";

interface DatePickerProps {
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "DD/MM/YYYY",
}) => {
  return (
    <>
      <PopoverWrapper trigger="click" content={<DateSelector />}>
        <input
          placeholder={placeholder}
          className="block outline-blue-500 bg-gray-50 border-gray-400 border px-2 py-2 rounded-lg "
        />
      </PopoverWrapper>
    </>
  );
};

export default DatePicker;
