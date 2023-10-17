import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import styles from './placeholder.style';
import { MARGIN } from '../../../constants';
import Text from '../../common/placeholder/Text';
import Gap from '../../common/placeholder/Gap';
import Card from '../../common/placeholder/Card';

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
      <Gap height={MARGIN.small} />
      <Text width="90%" height={50} />
      <Gap height={MARGIN.xSmall} />
      <Text width="80%" height={40} />
      <Gap height={MARGIN.xSmall} />
      <Card />
      <Gap height={0} />
      <Card />
      <Gap height={0} />
      <Card />
      <Gap height={0} />
      <Card />
      <Gap height={0} />
      <Card />
      <Gap height={0} />
      <Card />
      <Gap height={0} />
    </Animated.View>
  );
};

export default Placeholder;
