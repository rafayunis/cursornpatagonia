import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {colors} from '../../utils/theme';
import {IS_ANDROID} from '../../utils/constants';

const typographyVariant = {
  bold: IS_ANDROID ? 'Raleway-Bold' : 'Raleway Bold',
  italic: IS_ANDROID ? 'Raleway-Italic' : 'Raleway Italic',
  medium: IS_ANDROID ? 'Raleway-Medium' : 'Raleway Medium',
  regular: IS_ANDROID ? 'Raleway-Regular' : 'Raleway Regular',
};

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  size?: number;
  variant: keyof typeof typographyVariant;
}

const getTextStyle = ({
  align,
  color,
  size,
  variant,
}: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };
  return textStyle;
};

const Typography = ({align, children, color, size, variant}: Props) => {
  const textStyle = getTextStyle({align, color, size, variant});

  return (
    <Text allowFontScaling={false} style={textStyle}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 16,
  variant: 'italic',
};

export default Typography;
