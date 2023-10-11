import {styled, useTheme} from '@stitches.config';
import React, {FC, memo, useCallback, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';

import TouchableAnimated from '../Animated/Touchable';
import Backdrop from '../Backdrop';

import Icon from 'react-native-vector-icons/Ionicons';
import {PropsWithChildren} from 'stitches-native/src/types/react-native';

interface FabProps {
  icon?: string;
}

const Fab: FC<PropsWithChildren<FabProps>> = ({
  icon = 'add-outline',
  children,
}) => {
  const theme = useTheme();

  const fab = useRef(new Animated.Value(0)).current;

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const childrenWithProps = useMemo(() => {
    if (!children) return;

    const childrens = Array.isArray(children) ? children : [children];

    return childrens.map((child, key) =>
      React.cloneElement(child, {visible: isMenuVisible, key}),
    );
  }, [children, isMenuVisible]);

  const _runAnimation = useCallback(
    (value: number) => {
      Animated.spring(fab, {
        toValue: value,
        tension: 20,
        useNativeDriver: true,
      }).start();
    },
    [fab],
  );

  const openFabMenu = () => {
    setIsMenuVisible(true);

    _runAnimation(1);
  };

  const closeFabMenu = () => {
    setIsMenuVisible(false);

    _runAnimation(0);
  };

  return (
    <>
      <Backdrop visible={isMenuVisible} onDismiss={closeFabMenu} />

      <FabWrapper>
        {childrenWithProps}
        <TouchableAnimated
          onPress={openFabMenu}
          style={{
            backgroundColor: fab.interpolate({
              inputRange: [0, 1],
              outputRange: [theme.colors.fab, theme.colors.fabActive],
            }),
            transform: [
              {
                rotate: fab.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                }),
              },
            ],
          }}>
          <Icon name={icon} size={30} color="#fff" />
        </TouchableAnimated>
      </FabWrapper>
    </>
  );
};

const FabWrapper = styled('View', {
  right: 20,
  bottom: 20,
  zIndex: 1050,
  display: 'flex',
  position: 'absolute',
  alignItems: 'flex-end',
  flexDirection: 'column',
});

export default memo(Fab);
