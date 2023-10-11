interface ICalendar {
  year: number;
  monthName: string;
  totalInDays: number;
  firstMonthDay: string;
}

interface ICalendarGenerated {
  year: number;
  months: ICalendar[];
}

interface MonthDays {
  year: number;
  day: number;
  month: string;
}

export type {MonthDays, ICalendarGenerated, ICalendar};
