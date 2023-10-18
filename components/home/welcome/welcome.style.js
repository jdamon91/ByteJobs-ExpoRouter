import { StyleSheet } from 'react-native';

import { COLORS, FONT, MARGIN, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: SIZES.large,
    paddingHorizontal: SIZES.medium,
  },
  searchContainer: {
    marginVertical: MARGIN.xSmall,
    paddingHorizontal: SIZES.medium,
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
    paddingHorizontal: SIZES.medium,
  },
  robotIcon: {
    height: 100,
    position: 'absolute',
    left: 67,
    top: -8,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  tabText: {
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});

export default styles;
