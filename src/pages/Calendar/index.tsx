import React, {useCallback, useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

import CalendarWrapper from 'components/Calendar';
import PageWrapper from 'components/Layout/PageWrapper';

import {styled} from '@stitches.config';
import Fab from 'components/UI/Fab';
import FabAction from 'components/UI/Fab/Action';
import {useCalendar} from 'contexts/CalendarContext';

const Calendar: React.FC = () => {
  const {width} = useWindowDimensions();
  const {calendar, currentDate} = useCalendar();

  const initialScrollIndex = useMemo(() => {
    if (!calendar.length) return false;

    const index = calendar.findIndex(
      month =>
        month.year === currentDate.year() &&
        month.monthName === currentDate.format('MMMM'),
    );

    return index;
  }, [currentDate, calendar]);

  const getItemLayout = useCallback(
    (_: any, index: number) => {
      return {length: width, offset: width * index, index};
    },
    [width],
  );

  if (!initialScrollIndex || initialScrollIndex === -1) return <></>;

  return (
    <PageWrapper>
      <StyledFlatList
        horizontal
        pagingEnabled
        data={calendar}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.monthName}-${item.year}`}
        getItemLayout={getItemLayout}
        extraData={calendar}
        renderItem={({item}) => <CalendarWrapper {...item} />}
      />

      <Fab>
        <FabAction
          title="Teste"
          icon="calendar-outline"
          onPress={() => console.log('Dasd')}
        />
        <FabAction
          title="Teste"
          icon="checkmark-circle-outline"
          onPress={() => console.log('123')}
        />
      </Fab>
    </PageWrapper>
  );
};

const StyledFlatList = styled('FlatList');

export default Calendar;
