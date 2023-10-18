import React, { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as Linking from 'expo-linking';

import styles from './contacts.style';

const Contacts = ({ title, data }) => {
  const { domain } = data[0];

  const renderLink = (url) => {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(`https://${url}`)}>
        <Text style={styles.text}>{url}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      {domain && renderLink(domain)}
      <View style={styles.pointsContainer}>
        {/* {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))} */}
      </View>
    </View>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  // points: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Contacts;
