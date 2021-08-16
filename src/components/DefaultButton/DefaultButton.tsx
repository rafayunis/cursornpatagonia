import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

import Typography from '../Typography';

import styles, {buttonTextColors} from './styles';
import {colors} from '../../utils/theme';
interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  textSize,
  variant = 'primary',
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles[variant], additionalStyle]}
      onPress={onPress}>
      <Typography
        color={buttonTextColors[variant] || colors.white}
        size={textSize}
        variant={'bold'}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  textSize: 18,
  variant: 'primary',
};

export default DefaultButton;
