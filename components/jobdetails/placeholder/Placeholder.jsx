import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

import styles from './placeholder.style';
import CompanyIcon from '../../common/placeholder/CompanyIcon';
import { MARGIN, SIZES } from '../../../constants';
import Tabs from '../../common/placeholder/Tabs';
import Section from '../../common/placeholder/Section';
import Text from '../../common/placeholder/Text';
import Gap from '../../common/placeholder/Gap';

const Placeholder = () => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    });

    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true,
    });

    const pulse = Animated.sequence([fadeIn, fadeOut]);

    const infinitePulse = Animated.loop(pulse);

    infinitePulse.start();

    return () => infinitePulse.stop();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <CompanyIcon size={80} radius={SIZES.large} />
      <Gap height={MARGIN.xSmall} />
      <Text width="60%" />
      <Text width="50%" height={30} />
      <Gap height={MARGIN.small} />
      <Tabs />
      <Gap height={MARGIN.xSmall} />
      <Section height={Dimensions.get('window').height / 2} />
    </Animated.View>
  );
};

export default Placeholder;
