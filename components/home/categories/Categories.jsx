import React from 'react';
import { View, FlatList, Text } from 'react-native';

import styles from './categories.style';
import { languages } from '../../../constants/images';
import CategoryCard from '../../common/cards/categories/CategoryCard';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Programming Languages</Text>
      <FlatList
        data={languages}
        horizontal
        style={styles.cardsContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            handleCardPress={() => {}}
            containerStyle={styles.cardContainer}
          />
        )}
      />
    </View>
  );
};

export default Categories;
