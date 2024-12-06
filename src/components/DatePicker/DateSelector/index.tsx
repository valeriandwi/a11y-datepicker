import dayjs, { Dayjs } from "dayjs";
import React from "react";
import DateSelectorHeader from "./Header";
import WeekDays from "./WeekDays";
import Content from "./Content";
import { dayListsGenerator } from "../../../utils/dateObjectGenerator";

interface DateSelectorProps {
  /**
   * Callback function triggered when a date is selected.
   * Receives the selected date as a `Dayjs` object.
   */
  onChange?: (date: Dayjs) => void;
  /**
   * The default date value for the date selector.
   * Should be a valid `Dayjs` object to initialize the selection.
   */
  defaultValue?: Dayjs;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  onChange,
  defaultValue = dayjs(Date.now()),
}) => {
  const [currentDate, setCurrentDate] = React.useState<Dayjs>(defaultValue);
  const onDateChange = (date: Dayjs) => {
    setCurrentDate(date);
  };

  const daysList = dayListsGenerator(currentDate);

  return (
    <div className="w-max flex flex-col space-y-4 p-2">
      <DateSelectorHeader
        currentDate={currentDate}
        onDateChange={onDateChange}
      />
      <WeekDays />
      <hr className="w-full" />
      <Content
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        daysList={daysList}
        onChange={onChange}
      />
    </div>
  );
};

export default DateSelector;
