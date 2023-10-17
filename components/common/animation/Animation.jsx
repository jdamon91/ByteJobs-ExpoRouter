import React from 'react';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';

const Animation = ({ image }) => {
  return <LottieView source={image} autoPlay loop />;
};

Animation.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Animation;
