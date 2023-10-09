import React from 'react';
import { View } from 'react-native';

import styles from './text.style';

const Text = ({ height = 30, width = '100%' }) => {
  return <View style={styles.text(height, width)} />;
};

export default Text;
