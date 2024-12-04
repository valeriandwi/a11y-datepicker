import dayjs, { Dayjs } from "dayjs";

import LocaleData from "dayjs/plugin/localeData";

dayjs.extend(LocaleData);

export type DayLists = {
  prevMonthDays: number[];
  days: number[];
  remainingDays: number[];
  day: number;
  months: string[];
};

export const dayListsGenerator = (currentDate: Dayjs): DayLists => {
  const numOfDaysInPrevMonth = currentDate.subtract(1, "month").daysInMonth();
  const firstDayOfCurrentMonth = currentDate.startOf("month").day();
  return {
    days: Array.from(
      { length: currentDate.daysInMonth() },
      (_, index) => index + 1
    ),
    day: Number(currentDate.format("DD")),
    months: currentDate.localeData().months(),

    prevMonthDays: Array.from(
      { length: firstDayOfCurrentMonth },
      (_, index) => numOfDaysInPrevMonth - index
    ).reverse(),

    remainingDays: Array.from(
      { length: 6 - currentDate.endOf("month").day() },
      (_, index) => index + 1
    ),
  };
};
