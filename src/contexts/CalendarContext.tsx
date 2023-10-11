import dayjs from 'dayjs';
import React, {useCallback, useMemo, useState} from 'react';
import {NativeModules, Platform} from 'react-native';

import {months} from 'utils/calendar';

import updateLocale from 'dayjs/plugin/updateLocale';
import type {ICalendar} from 'types/calendar';

interface ProviderProps {
  children: JSX.Element;
}

interface ICalendarContext {
  calendar: ICalendar[];
  currentDate: dayjs.Dayjs;
  changeCurrentDate: (currentDate: dayjs.Dayjs) => void;
}

export const CalendarContext = React.createContext<ICalendarContext>(
  {} as ICalendarContext,
);

export function CalendarProvider({children}: ProviderProps) {
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs());
  const [calendar, setcalendar] = useState<ICalendar[]>([]);

  const generatedYearsRange = useMemo(() => {
    return new Array(1).fill(2023).map((data, index) => {
      return data + index;
    });
  }, []);

  const generateMonthData = useCallback((year: number) => {
    return months.map((month, index) => {
      return {
        monthName: month,
        totalInDays: dayjs().year(year).month(index).daysInMonth(),
        firstMonthDay: dayjs()
          .year(year)
          .month(index)
          .startOf('month')
          .format('dddd'),
        year,
      };
    });
  }, []);

  const changeCurrentDate = useCallback((currentDate: dayjs.Dayjs) => {
    setCurrentDate(currentDate);
  }, []);

  useMemo(() => {
    const locale =
      Platform.OS === 'android'
        ? NativeModules.I18nManager.localeIdentifier
        : NativeModules.SettingsManager.settings.AppleLocale;

    dayjs.extend(updateLocale);

    dayjs.updateLocale(locale, {months: months});

    const calendar2D = generatedYearsRange.map(year => {
      return generateMonthData(year);
    });

    const calendar1D = [].concat.apply([], calendar2D as never);

    setcalendar(calendar1D);
  }, [generatedYearsRange, generateMonthData]);

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        calendar,

        changeCurrentDate,
      }}>
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendar() {
  return React.useContext(CalendarContext);
}
