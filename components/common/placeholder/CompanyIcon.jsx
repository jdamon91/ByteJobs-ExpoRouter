import React from 'react';
import { View } from 'react-native';

import styles from './companyIcon.style';

const CompanyIcon = ({ size = 50, radius = 10 }) => {
  return <View style={styles.icon(size, radius)} />;
};

export default CompanyIcon;
