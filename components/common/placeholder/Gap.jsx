import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './gap.style';

const Gap = ({ height = 30, width = '100%' }) => {
  return <View style={styles.gap(height, width)} />;
};

Gap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.string,
};

export default Gap;
