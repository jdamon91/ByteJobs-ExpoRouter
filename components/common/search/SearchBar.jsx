import { TextInput, TouchableOpacity, Image, View } from 'react-native';

import { icons } from '../../../constants';

import styles from './searchBar.style';

const SearchBar = ({ searchTerm, handleClick }) => {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Let's start looking for it..."
      />
      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
