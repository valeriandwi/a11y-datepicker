import React from "react";
import PopoverWrapper from "../PopoverWrapper";
import DateSelector from "./DateSelector";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";

interface DatePickerProps {
  placeholder?: string;
  format?: string;
  inputClassName?: string;
  trigger?: "click" | "hover";
  onChange?: (date: Dayjs) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder,
  format = "DD-MM-YYYY",
  inputClassName,
  trigger = "click",
  onChange,
}) => {
  const [value, setValue] = React.useState<string | undefined>("");
  const onDateChange = (date: Dayjs) => {
    setValue(date.format("DD MMM YYYY"));
    if (onChange) onChange(date);
  };

  return (
    <PopoverWrapper
      trigger={trigger}
      content={<DateSelector onChange={onDateChange} />}
    >
      <input
        value={value ? dayjs(value).format(format) : ""}
        placeholder={placeholder ?? format}
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
