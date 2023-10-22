import React, { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './categoryCard.style';

const CategoryCard = ({ item, handleCardPress, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => handleCardPress(item)}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={styles.logoImage}
      />
    </TouchableOpacity>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleCardPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.object,
};

export default CategoryCard;
