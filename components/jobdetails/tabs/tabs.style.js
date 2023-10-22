import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium / 2,
    paddingHorizontal: SIZES.small,
    backgroundColor: name === activeTab ? COLORS.primary : '#FFF',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.large,
    marginRight: 5,
    flexDirection: 'row',
  }),
  btnText: (name, activeTab) => ({
    fontFamily: FONT.medium,
    letterSpacing: 0.25,
    color: name === activeTab ? COLORS.white : COLORS.primary,
  }),
  btnEmojiText: {
    marginRight: 5,
  },
});

export default styles;
