import React from 'react';
import { View } from 'react-native';

import styles from './gap.style';

const Gap = ({ height = 30, width = '100%' }) => {
  return <View style={styles.gap(height, width)} />;
};

export default Gap;
