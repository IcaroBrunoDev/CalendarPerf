import {styled} from '@stitches.config';
import {TouchableOpacity} from 'components/UI/Animated/Touchable';
import AnimatedView from 'components/UI/Animated/View';
import Text from 'components/UI/Text';
import React, {FC, memo, useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface FabActionProps {
  icon: string;
  title: string;
  visible?: boolean;
  onPress: () => void;
}

const FabAction: FC<FabActionProps> = ({
  icon,
  title,
  visible = false,
  onPress,
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  const _runAnimation = useCallback(
    (value: number) => {
      Animated.spring(animation, {
        toValue: value,
        tension: 20,
        useNativeDriver: true,
      }).start();
    },
    [animation],
  );

  useEffect(() => {
    _runAnimation(Number(visible));
  }, [visible, _runAnimation]);

  return (
    <ButtonWrapper
      style={{
        height: !visible ? 0 : 'auto',
        opacity: animation,
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [200, 0],
            }),
          },
        ],
      }}>
      <Text text={title} />

      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 50,
          height: 50,
          marginLeft: 10,
        }}>
        <Icon name={icon} size={22} color="#fff" />
      </TouchableOpacity>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(AnimatedView, {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  flexDirection: 'row',
});

export default memo(FabAction);
