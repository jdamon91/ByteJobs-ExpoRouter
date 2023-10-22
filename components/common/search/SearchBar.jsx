import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableOpacity, Image, View } from 'react-native';

import { icons, images } from '../../../constants';

import styles from './searchBar.style';
import { Text } from 'moti';

const SearchBar = ({ searchTerm, handleClick, setSearchTerm }) => {
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchTitle}>What are you looking for?</Text>
      <Text style={styles.searchSubtitle}>
        Hopefully we can help you find it...
      </Text>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Let's start looking..."
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <Image source={images.warehouseBg} style={styles.searchImage} />
    </View>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
