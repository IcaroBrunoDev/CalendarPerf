import {FC, memo, useMemo} from 'react';

import {styled} from '@stitches.config';

import {months, weekDays} from 'utils/calendar';

import dayjs from 'dayjs';

import CalendarDay from './CalendarDay';

import type {ICalendar, MonthDays} from 'types/calendar';

const CalendarBody: FC<ICalendar> = ({
  year,
  monthName,
  totalInDays,
  firstMonthDay,
}) => {
  const monthDays = useMemo(() => {
    const currentMonthIndex = months.indexOf(monthName);

    const prevMonthIndex = currentMonthIndex - 1;

    const prevMounthDaysQuantity = dayjs().month(prevMonthIndex).daysInMonth();

    const currentFirstDayIndex = weekDays.indexOf(firstMonthDay);

    const prevMonthComplement = new Array(currentFirstDayIndex)
      .fill(1)
      .map((_, index): MonthDays => {
        return {
          day: prevMounthDaysQuantity - index,
          month: months[prevMonthIndex],
          year,
        };
      });

    const currentMonthDays = new Array(totalInDays)
      .fill(1)
      .map((_, index): MonthDays => {
        return {day: index + 1, month: months[currentMonthIndex], year};
      });

    const monthCurrentAndPrev = [
      ...prevMonthComplement.reverse(),
      ...currentMonthDays,
    ];

    if (monthCurrentAndPrev.length < 42) {
      const nextDays = new Array(42 - monthCurrentAndPrev.length)
        .fill(1)
        .map((_, index): MonthDays => {
          return {day: index + 1, month: months[currentMonthIndex], year};
        });

      return [...monthCurrentAndPrev, ...nextDays];
    }

    return monthCurrentAndPrev;
  }, [year, monthName, totalInDays, firstMonthDay]);

  if (!monthDays.length) return <></>;

  return (
    <Wrapper>
      {monthDays.map((data, key) => (
        <CalendarDay key={`${data.day}-${data.month}-${key}`} {...data} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('View', {
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

export default memo(CalendarBody);
