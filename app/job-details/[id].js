import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import React, {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useJobFetch from '../../hook/useJobFetch';
import Placeholder from '../../components/jobDetails/placeholder/Placeholder';
import useJobContactFetch from '../../hook/useJobContactFetch';
import Contacts from '../../components/jobDetails/contacts/Contacts';

const tabs = ['About', 'Qualifications', 'Responsibilities', 'Connections'];

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useJobFetch('job-details', {
    job_id: params.id,
  });

  const employerWebsite = data[0]?.employer_website;
  console.log(employerWebsite);

  const {
    data: contactsData,
    isLoading: isContactsLoading,
    refetch: refetchContacts,
    error: contactsError,
  } = useJobContactFetch(employerWebsite);

  console.log('contacts data', contactsData, contactsError);

  useEffect(() => {
    if (employerWebsite) {
      refetchContacts();
    }
  }, [employerWebsite]);

  const isDataLoading = isLoading || isContactsLoading;

  const areErrors = error;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    refetchContacts();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case 'About':
        return (
          <JobAbout info={data[0].job_description ?? 'No data provided'} />
        );

      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      case 'Connections':
        return <Contacts title="Contacts" data={contactsData[0]} />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          // ),
          headerTitle: '',
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isDataLoading ? (
            <Placeholder />
          ) : areErrors ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <View style={{ paddingHorizontal: SIZES.medium }}>
                {displayTabContent()}
              </View>
            </View>
          )}
        </ScrollView>

        <JobFooter
          isLoading={isLoading}
          url={
            data[0]?.job_google_link ??
            'https://careers.google.com/jobs/results/'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
