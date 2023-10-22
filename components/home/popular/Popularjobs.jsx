import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './popularJobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useJobFetch from '../../../hook/useJobFetch';
import { MotiView } from 'moti';

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useJobFetch('search', {
    query: 'React developer',
    num_pages: '1',
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  const onShowAllPress = () => {
    router.push('/search/Popular jobs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity onPress={onShowAllPress}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <MotiView
            from={{ opacity: 0, right: -200 }}
            animate={{ opacity: 1, right: 0 }}
            transition={{ type: 'timing', duration: 2000, delay: 1000 }}
          >
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={(item) => item.job_id}
              contentContainerStyle={{
                columnGap: SIZES.medium,
                paddingHorizontal: SIZES.medium,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </MotiView>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
