import React, { View, TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Linking from 'expo-linking';

import { socialIcons } from '../../../constants/images';
import styles from './contacts.style';

const listedContacts = [
  'domain',
  'facebook',
  'instagram',
  'linkedin',
  'github',
  'pinterest',
  'snapchat',
  'twitter',
  'youtube',
  'tiktok',
];

const Contacts = ({ data }) => {
  const renderLink = (name, url) => {
    const formatUrlWithHttps = (url) => {
      if (!url.startsWith('http')) {
        return `https://${url}`;
      }

      return url;
    };

    return (
      <TouchableOpacity
        onPress={() => Linking.openURL(formatUrlWithHttps(url))}
        style={styles.iconContainer}
      >
        <Image source={socialIcons[name]} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  if (!data) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect & Engage</Text>
      <Text style={styles.subTitle}>
        Learn more about this company and give yourself a better chance at
        getting hired!
      </Text>
      <View style={styles.linksContainer}>
        {Object.keys(data).map((key) => {
          if (listedContacts.includes(key)) {
            if (!data[key]) return null;

            return (
              <View style={styles.pointContainer} key={key}>
                {renderLink(key, data[key])}
              </View>
            );
          }
        })}
      </View>
    </View>
  );
};

Contacts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contacts;
