import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 85,
    height: 85,
  },
});

export default styles;
