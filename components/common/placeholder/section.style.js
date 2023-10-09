import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  section: (height) => ({
    height,
    width: '90%',
    backgroundColor: COLORS.gray3,
    borderRadius: 10,
  }),
});

export default styles;
