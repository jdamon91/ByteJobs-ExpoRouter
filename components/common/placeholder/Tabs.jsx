import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './tabs.style';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab(90)} />
      <View style={styles.tab(135)} />
      <View style={styles.tab(175)} />
    </View>
  );
};

Tabs.propTypes = {
  height: PropTypes.number,
  width: PropTypes.string,
};

export default Tabs;
