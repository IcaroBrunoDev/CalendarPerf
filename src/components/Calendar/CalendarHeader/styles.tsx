import {styled} from '@stitches.config';

export const HeaderWrapper = styled('View');

export const TitleWrapper = styled('View');

export const DaysWrapper = styled('View', {
  marginTop: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 15,
});

export const DayAcron = styled('View', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});
