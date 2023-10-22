import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './nearbyJobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useJobFetch from '../../../hook/useJobFetch';
import { MotiView } from 'moti';

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useJobFetch('search', {
    query: 'React Native developer',
    num_pages: '1',
  });

  const onShowAllPress = () => {
    router.push('/search/Nearby jobs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
            from={{ opacity: 0, bottom: -200 }}
            animate={{ opacity: 1, bottom: 0 }}
            transition={{ type: 'timing', duration: 2000, delay: 1000 }}
          >
            {data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))}
          </MotiView>
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
