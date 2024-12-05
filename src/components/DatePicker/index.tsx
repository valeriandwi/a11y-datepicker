import React from "react";
import PopoverWrapper from "../PopoverWrapper";
import DateSelector from "./DateSelector";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";

interface DatePickerProps {
  placeholder?: string;
  format?: string;
  inputClassName?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "DD/MM/YYYY",
  format = "DD/MM/YYYY",
  inputClassName,
}) => {
  const [value, setValue] = React.useState<string | undefined>("");
  const onDateChange = (date: Dayjs) => {
    setValue(date.format("DD MMM YYYY"));
  };

  return (
    <PopoverWrapper
      trigger="click"
      content={<DateSelector onChange={onDateChange} />}
    >
      <input
        value={value ? dayjs(value).format(format) : ""}
        placeholder={placeholder}
        className={clsx(
          inputClassName,
          "block outline-none bg-gray-50 border-gray-400 border px-2 py-2 rounded-lg"
        )}
        readOnly
      />
    </PopoverWrapper>
  );
};

export default DatePicker;
