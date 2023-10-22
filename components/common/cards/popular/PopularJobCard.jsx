import React, { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import Bookmark from '../../bookmark/Bookmark';
import styles from './popularJobCard.style';
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <Bookmark saved={false} containerStyle={styles.bookmark} />
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher}>{item?.job_publisher} -</Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

PopularJobCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleCardPress: PropTypes.func.isRequired,
};

export default PopularJobCard;
