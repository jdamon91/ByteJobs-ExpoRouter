import { StyleSheet } from 'react-native';

import { COLORS, FONT, MARGIN, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: SIZES.large,
  },
  searchContainer: {
    marginVertical: MARGIN.xSmall,
  },
  welcomeTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginBottom: MARGIN.xSmall,
  },
  welcomeMessage: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    marginTop: 2,
    marginBottom: MARGIN.medium,
    marginLeft: MARGIN.xSmall,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  robotIcon: {
    height: 100,
    position: 'absolute',
    left: 67,
    top: -8,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.primary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.primary : COLORS.gray2,
  }),
});

export default styles;
