import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  icon: (size, radius) => ({
    width: size,
    height: size,
    borderRadius: radius,
    backgroundColor: COLORS.gray3,
  }),
});

export default styles;
