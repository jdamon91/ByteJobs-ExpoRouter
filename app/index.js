import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images } from '../constants';
import {
  NearbyJobs,
  PopularJobs,
  Categories,
  ScreenHeaderBtn,
  Welcome,
} from '../components';
import { FadeInView } from '../components/common/animation/views/AnimatedViews';
import { MotiView } from 'moti';

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000)); // Wait 5 seconds before showing
      setAnimationState('popUp');
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Show for 3 seconds
      setAnimationState('popDown');
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Hide after another 3 seconds
      setAnimationState('hidden');
    };

    sequence();
  }, []);

  const animationConfigs = {
    initial: {
      translateY: 125,
      opacity: 1,
      right: -200,
    },
    popUp: {
      translateY: 0,
      opacity: 1,
      right: 0,
    },
    popDown: {
      translateY: 125,
      opacity: 0,
      right: -200,
    },
    hidden: {
      right: -200,
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: '',
          headerShown: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FadeInView>
          <View style={{ flex: 1 }}>
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
              }}
            />
            <Categories />
            <PopularJobs />
            <NearbyJobs />
          </View>
          <MotiView
            style={{
              flex: 1,
              position: 'absolute',
              right: 0,
              top: Dimensions.get('window').height - 180,
            }}
            from={animationConfigs.initial}
            animate={animationConfigs[animationState]}
            transition={{
              type: 'timing',
              duration: 3000,
            }}
          >
            <Image
              source={images.robotMagGlass}
              resizeMode="contain"
              style={{ height: 150, width: 150 }}
            />
          </MotiView>
        </FadeInView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
