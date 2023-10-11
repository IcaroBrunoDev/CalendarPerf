import React, {FC, memo, useMemo} from 'react';
import {DayAcron, DaysWrapper, HeaderWrapper, TitleWrapper} from './styles';
import Text from 'components/UI/Text';

import type {ICalendar} from 'types/calendar';
import {weekDays} from 'utils/calendar';
import {useWindowDimensions} from 'react-native';

const CalendarHeader: FC<Pick<ICalendar, 'monthName' | 'year'>> = ({
  year,
  monthName,
}) => {
  const {width} = useWindowDimensions();

  const shortWeekDays = useMemo(() => {
    return weekDays.map(day => {
      return day.slice(0, 1);
    });
  }, []);

  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Text text={`${monthName} ${year}`} />
      </TitleWrapper>

      <DaysWrapper>
        {shortWeekDays.map((day, key) => (
          <DayAcron
            key={`${monthName}-${day}-${key}`}
            style={{width: width / 7}}>
            <Text text={day} />
          </DayAcron>
        ))}
      </DaysWrapper>
    </HeaderWrapper>
  );
};

export default memo(CalendarHeader);
