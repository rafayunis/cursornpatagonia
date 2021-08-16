import {StyleSheet} from 'react-native';

import {colors} from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
    width: '80%',
    paddingBottom: 10,
  },
  primary: {
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
  },
});

export const buttonTextColors = {
  primary: colors.white,
  secondary: colors.mainOrange,
};

export default styles;
