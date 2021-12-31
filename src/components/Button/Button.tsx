import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from 'react-native-elements';

import styles from './styles';

type ButtonProps = {
  onOpenModal: () => void;
};

export const Button = ({ onOpenModal }: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onOpenModal}>
        <Icon
          name="md-add"
          type="ionicon"
          color="white"
          size={30}
          tvParallaxProperties={undefined}
        />
      </TouchableOpacity>
    </View>
  );
};
