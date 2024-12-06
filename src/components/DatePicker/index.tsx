import React from "react";
import PopoverWrapper from "../PopoverWrapper";
import DateSelector from "./DateSelector";
import dayjs, { Dayjs } from "dayjs";
import clsx from "clsx";

interface DatePickerProps {
  /**
   * Placeholder text to display in the input field when no date is selected.
   * Defaults to the provided `format` value if not set.
   */
  placeholder?: string;

  /**
   * The format in which the selected date will be displayed.
   * Defaults to "DD-MM-YYYY".
   */
  format?: string;

  /**
   * Additional class name(s) to style the input field.
   */
  inputClassName?: string;

  /**
   * The trigger action to open the date picker popover.
   * Can be either "click" or "hover". Defaults to "click".
   */
  trigger?: "click" | "hover";

  /**
   * Callback function triggered when a date is selected.
   * Receives the selected date as a `Dayjs` object.
   */
  onChange?: (date: Dayjs) => void;

  /**
   * The default date value for the date picker.
   * Should be a valid `Dayjs` object to prefill the input field.
   */
  defaultValue?: Dayjs;
}

const DatePicker: React.FC<DatePickerProps> = ({
  placeholder,
  format = "DD-MM-YYYY",
  inputClassName,
  trigger = "click",
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = React.useState<string | undefined>("");

  const onDateChange = (date: Dayjs) => {
    setValue(date.format(format));
    if (onChange) onChange(date);
  };

  return (
    <PopoverWrapper
      trigger={trigger}
      content={
        <DateSelector onChange={onDateChange} defaultValue={defaultValue} />
      }
    >
      <input
        value={value}
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
