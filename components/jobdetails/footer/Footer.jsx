import { View, Text, TouchableOpacity, Linking } from 'react-native';

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

export default Footer;
