import {Animated} from 'react-native';
import {styled} from 'stitches-native';

const Pressable = styled('Pressable', {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.4)',
});

const AnimatedBackdrop = Animated.createAnimatedComponent(Pressable);

export default AnimatedBackdrop;
