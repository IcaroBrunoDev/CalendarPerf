import {styled} from '@stitches.config';
import {Animated} from 'react-native';

export const TouchableOpacity = styled('TouchableOpacity', {
  width: 60,
  height: 60,
  backgroundColor: '#383838',
  borderRadius: 10,
  elevation: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
});

const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export default TouchableAnimated;
