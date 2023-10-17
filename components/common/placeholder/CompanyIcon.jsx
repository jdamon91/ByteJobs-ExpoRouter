import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './companyIcon.style';

const CompanyIcon = ({ size = 50, radius = 10 }) => {
  return <View style={styles.icon(size, radius)} />;
};

CompanyIcon.propTypes = {
  size: PropTypes.number,
  radius: PropTypes.number,
};

export default CompanyIcon;
