import React, {FC, memo, useEffect, useCallback, useRef} from 'react';
import {Animated, useWindowDimensions} from 'react-native';
import AnimatedBackdrop from '../Animated/Backdrop';

interface BackdropProps {
  visible: boolean;
  onDismiss: () => void;
}

const Backdrop: FC<BackdropProps> = ({visible, onDismiss}) => {
  const {width, height} = useWindowDimensions();

  const backdrop = useRef(new Animated.Value(0)).current;

  const _runAnimation = useCallback(
    (value: number) => {
      Animated.spring(backdrop, {
        toValue: value,
        tension: 20,
        useNativeDriver: true,
      }).start();
    },
    [backdrop],
  );

  useEffect(() => {
    _runAnimation(Number(visible));
  }, [visible, _runAnimation]);

  return (
    <AnimatedBackdrop
      style={{
        width,
        height,
        transform: [
          {
            translateY: backdrop.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
          },
        ],
      }}
      onPress={onDismiss}
    />
  );
};

export default memo(Backdrop);
