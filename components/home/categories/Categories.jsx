import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './categories.style';
import { languages } from '../../../constants/images';
import CategoryCard from '../../common/cards/categories/CategoryCard';
import { SIZES } from '../../../constants';
import { MotiView } from 'moti';

const Categories = () => {
  const router = useRouter();

  const onCategoryPress = (item) => {
    router.push(`/search/${item.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Programming Languages</Text>
      <MotiView
        from={{ opacity: 0, right: -200 }}
        animate={{ opacity: 1, right: 0 }}
        transition={{ type: 'timing', duration: 2000, delay: 3500 }}
      >
        <FlatList
          data={languages}
          horizontal
          style={styles.cardsContainer}
          contentContainerStyle={{ paddingHorizontal: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryCard
              item={item}
              handleCardPress={onCategoryPress}
              containerStyle={styles.cardContainer}
            />
          )}
        />
      </MotiView>
    </View>
  );
};

export default Categories;
