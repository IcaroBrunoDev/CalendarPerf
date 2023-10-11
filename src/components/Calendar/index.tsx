import React, {FC, memo} from 'react';

import {styled} from '@stitches.config';

import CalendarHeader from './CalendarHeader';

import {ICalendar} from 'types/calendar';
import {useWindowDimensions} from 'react-native';
import CalendarBody from './CalendarBody';

const CalendarWrapper: FC<ICalendar> = ({
  year,
  monthName,
  totalInDays,
  firstMonthDay,
}) => {
  const {width} = useWindowDimensions();

  return (
    <Wrapper style={{width: width}}>
      <CalendarHeader year={year} monthName={monthName} />
      <CalendarBody
        year={year}
        monthName={monthName}
        totalInDays={totalInDays}
        firstMonthDay={firstMonthDay}
      />
    </Wrapper>
  );
};

const Wrapper = styled('View', {
  marginTop: 20,
});

export default memo(CalendarWrapper);
