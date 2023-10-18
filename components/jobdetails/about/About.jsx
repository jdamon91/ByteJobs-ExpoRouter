import React, { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './about.style';

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

About.propTypes = {
  info: PropTypes.string,
};

export default About;
