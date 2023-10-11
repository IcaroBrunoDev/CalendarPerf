import {FC, memo} from 'react';

import {styled, useTheme} from '@stitches.config';

import Text from 'components/UI/Text';

import {useWindowDimensions} from 'react-native';

import type {MonthDays} from 'types/calendar';

const CalendarDay: FC<MonthDays> = ({day}) => {
  const theme = useTheme();

  const {width, height} = useWindowDimensions();

  return (
    <DayWrapper
      style={{
        width: width / 7,
        height: (height - 70) / 6,
        borderColor: theme.colors.borderColor,
      }}>
      <Text text={day} />
    </DayWrapper>
  );
};

const DayWrapper = styled('TouchableOpacity', {
  borderRightWidth: 0.5,
  borderTopWidth: 0.5,
  alignItems: 'center',
  paddingTop: 15,
});

export default memo(CalendarDay);
