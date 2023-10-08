import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: name === activeTab ? COLORS.primary : '#AAA9B8',
    borderRadius: SIZES.xLarge,
    marginRight: 5,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: 'DMMedium',
    fontSize: SIZES.medium - 2,
    color: name === activeTab ? COLORS.primary : '#AAA9B8',
  }),
});

export default styles;
