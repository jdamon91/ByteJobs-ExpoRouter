import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './text.style';

const Text = ({ height = 30, width = '100%' }) => {
  return <View style={styles.text(height, width)} />;
};

Text.propTypes = {
  height: PropTypes.number,
  width: PropTypes.string,
};

export default Text;
