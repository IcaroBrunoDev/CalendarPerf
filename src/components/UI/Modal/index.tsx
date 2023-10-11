import React, {memo, FC} from 'react';

import {Modal, TouchableOpacity} from 'react-native';
import Text from '../Text';

interface IModal {
  visible: boolean;
  onClose: () => void;
}

export const ModalUI: FC<IModal> = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
      style={{backgroundColor: '#000'}}>
      <TouchableOpacity onPress={onClose}>
        <Text text="Modal" />
      </TouchableOpacity>
    </Modal>
  );
};

export default memo(ModalUI);
