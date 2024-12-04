import dayjs, { Dayjs } from "dayjs";
import React from "react";
import DateSelectorHeader from "./Header";
import WeekDays from "./WeekDays";
import Content from "./Content";
import { dayListsGenerator } from "../../../utils/dateObjectGenerator";

interface DateSelectorProps {
  onChange?: (date: Dayjs) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onChange }) => {
  const [currentDate, setCurrentDate] = React.useState<Dayjs>(
    dayjs(Date.now())
  );
  const onDateChange = (date: Dayjs) => {
    setCurrentDate(date);
  };

  const daysListGenerator = dayListsGenerator(currentDate);

  return (
    <div className="w-max flex flex-col space-y-4 p-2">
      <DateSelectorHeader
        currentDate={currentDate}
        onDateChange={onDateChange}
      />
      <WeekDays />
      <Content
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        daysList={daysListGenerator}
        onChange={onChange}
      />
    </div>
  );
};

export default DateSelector;
