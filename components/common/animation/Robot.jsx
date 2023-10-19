import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import { images } from '../../../constants';

const Robot = ({ imageStyle }) => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    const animate = () => {
      rotation.setValue(0);
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: -1,
          duration: 1000,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
      ]).start(animate);
    };

    animate();
  }, []);

  const rotationStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [-1, 1],
          outputRange: ['-10deg', '10deg'],
        }),
      },
    ],
  };

  return (
    <Animated.Image
      source={images.robot}
      style={[imageStyle, rotationStyle]}
      resizeMode="contain"
    />
  );
};

Robot.propTypes = {
  imageStyle: PropTypes.object,
};

export default Robot;
