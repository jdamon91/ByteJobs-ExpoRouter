import React, { View, Text, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';

import styles from './footer.style';

const Footer = ({ url, isLoading }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.applyBtn(isLoading)}
        disabled={isLoading}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>{`${
          isLoading ? '' : 'Apply for job'
        }`}</Text>
      </TouchableOpacity>
    </View>
  );
};

Footer.propTypes = {
  url: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Footer;
