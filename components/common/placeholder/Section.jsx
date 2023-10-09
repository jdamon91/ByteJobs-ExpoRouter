import React from 'react';
import { View } from 'react-native';

import styles from './section.style';

const Section = ({ height = 200 }) => {
  return <View style={styles.section(height)} />;
};

export default Section;
