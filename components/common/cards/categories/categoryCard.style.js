import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginRight: 5,
  },
  logoImage: {
    width: 85,
    height: 85,
  },
});

export default styles;
