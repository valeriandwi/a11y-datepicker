import React from "react";
import PopoverWrapper from "../PopoverWrapper";
import DateSelector from "./DateSelector";
import dayjs, { Dayjs } from "dayjs";

interface DatePickerProps {
  placeholder?: string;
  format?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "DD/MM/YYYY",
  format = "DD/MM/YYYY",
}) => {
  const [value, setValue] = React.useState<string | undefined>("");
  const onDateChange = (date: Dayjs) => {
    setValue(date.format("DD MMM YYYY"));
  };

  return (
    <>
      <PopoverWrapper
        trigger="click"
        content={<DateSelector onChange={onDateChange} />}
      >
        <input
          value={value ? dayjs(value).format(format) : ""}
          placeholder={placeholder}
          className="block outline-blue-500 bg-gray-50 border-gray-400 border px-2 py-2 rounded-lg "
        />
      </PopoverWrapper>
    </>
  );
};

export default DatePicker;
