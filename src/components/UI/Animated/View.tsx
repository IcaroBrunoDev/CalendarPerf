import {styled} from '@stitches.config';
import {Animated} from 'react-native';

const View = styled('View');

const AnimatedView = Animated.createAnimatedComponent(View);

export default AnimatedView;
