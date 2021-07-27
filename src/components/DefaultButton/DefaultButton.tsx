import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  additionalStyle?: object;
  onPress: () => void;
  text?: string;
  textSize?: number;
}

const DefaultButton = ({additionalStyle, onPress, text, textSize}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle]}
      onPress={onPress}>
      <Text style={{fontSize: textSize}}> {text}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  addionalStyle: {},
  textSize: 12,
};

export default DefaultButton;
