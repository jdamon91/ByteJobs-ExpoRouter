import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { SIZES, images } from '../../../constants';
import SearchBar from '../../common/search/SearchBar';

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Your Dream Job</Text>
        <Text style={styles.welcomeMessage}>
          is a lot closer than you think!
        </Text>
      </View>
      <Image
        source={images.robot}
        style={styles.robotIcon}
        resizeMode="contain"
      />
      <View style={styles.searchContainer}>
        <SearchBar
          searchTerm={searchTerm}
          handleClick={handleClick}
          setSearchTerm={setSearchTerm}
        />
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
