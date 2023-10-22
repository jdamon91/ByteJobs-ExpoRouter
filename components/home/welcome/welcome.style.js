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
    fontSize: SIZES.xLarge,
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
    height: 90,
    position: 'absolute',
    left: 90,
    top: 0,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.primary,
    flexDirection: 'row',
  },
  tabText: {
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  contentContainer: {
    columnGap: SIZES.small,
    marginLeft: 20,
    paddingRight: 25,
  },
});

export default styles;
