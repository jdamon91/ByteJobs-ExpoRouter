import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    paddingBottom: SIZES.xxLarge,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  applyBtn: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    paddingVertical: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: '#FFF',
    fontFamily: FONT.bold,
  },
});

export default styles;
