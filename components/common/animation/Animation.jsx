import React from 'react';
import LottieView from 'lottie-react-native';

const Animation = ({ image }) => {
  return <LottieView source={image} autoPlay loop />;
};

export default Animation;
