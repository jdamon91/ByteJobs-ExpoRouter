import { StyleSheet } from 'react-native';

import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  searchInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    flex: 1,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.medium,
    borderBottomLeftRadius: SIZES.medium,
    height: 45,
  },
  searchBtnImage: {
    width: '55%',
    height: '55%',
    tintColor: COLORS.primary,
  },
  searchWrapper: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 15,
    zIndex: 1,
  },
  searchBtn: {
    width: 45,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderTopRightRadius: SIZES.medium,
    borderBottomRightRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xSmall,
    paddingVertical: SIZES.small,
  },
  searchImage: {
    width: '100%',
    position: 'absolute',
    height: '90%',
    bottom: -35,
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginLeft: SIZES.medium,
  },
  searchSubtitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    color: COLORS.white,
    marginLeft: SIZES.medium,
    marginBottom: SIZES.small,
  },
});

export default styles;
