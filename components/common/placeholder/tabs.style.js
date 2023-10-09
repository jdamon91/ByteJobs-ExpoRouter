import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 15,
    width: '100%',
    paddingLeft: 20,
  },
  tab: (width) => ({
    height: 42,
    width,
    backgroundColor: COLORS.gray3,
    borderRadius: 21,
  }),
});

export default styles;
