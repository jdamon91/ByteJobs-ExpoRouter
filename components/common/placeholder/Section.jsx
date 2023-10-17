import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './section.style';

const Section = ({ height = 200 }) => {
  return <View style={styles.section(height)} />;
};

Section.propTypes = {
  height: PropTypes.number,
};

export default Section;
