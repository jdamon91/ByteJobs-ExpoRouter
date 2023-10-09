import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  text: (height, width) => ({
    height,
    width,
    backgroundColor: COLORS.gray3,
    borderRadius: 10,
  }),
});

export default styles;
