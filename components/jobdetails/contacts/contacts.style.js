import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center',
    marginTop: SIZES.medium,
    marginBottom: SIZES.small,
    letterSpacing: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.small,
    flexWrap: 'wrap',
    columnGap: SIZES.xLarge,
    rowGap: SIZES.xLarge,
    paddingBottom: SIZES.xLarge,
  },
  subTitle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
});

export default styles;
