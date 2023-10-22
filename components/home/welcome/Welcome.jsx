import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { SIZES } from '../../../constants';
import SearchBar from '../../common/search/SearchBar';
import LoadingModal from '../../motivation/LoadingModal';
import Robot from '../../common/animation/Robot';

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];
const jobTypeEmojis = ['👨‍💻', '👩‍💻', '👨‍💼'];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Chasing the Dream Job?</Text>
        <Text style={styles.welcomeMessage}>
          Hope you&apos;re wearing good shoes!
        </Text>
      </View>
      <LoadingModal visible={modalVisible} />
      <Robot imageStyle={styles.robotIcon} />
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
              style={styles.tab}
              onPress={() => router.push(`/search/${item}`)}
            >
              <Text style={styles.tabEmoji}>
                {jobTypeEmojis[jobTypes.indexOf(item)]}
              </Text>
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small, marginLeft: 20 }}
          horizontal
        />
      </View>
    </View>
  );
};

Welcome.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Welcome;
