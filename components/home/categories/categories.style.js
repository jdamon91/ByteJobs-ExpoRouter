import { StyleSheet } from 'react-native';

import { MARGIN, SIZES, FONT, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  cardContainer: {
    marginRight: MARGIN.large,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    marginLeft: SIZES.medium,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
