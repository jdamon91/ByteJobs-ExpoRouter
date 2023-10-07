import { View, Text, TouchableOpacity, Image } from 'react-native';

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

export default CategoryCard;
