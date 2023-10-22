import React, { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './bookmark.style';
import icons from '../../../constants/icons';
import { useEffect, useState } from 'react';

const Bookmark = ({ saved, containerStyle }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const bookmarkIcon = bookmarked ? icons.bookmarkFilled : icons.bookmark;

  useEffect(() => {
    setBookmarked(saved);
  }, [saved]);

  const onBookmarkPress = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onBookmarkPress}
    >
      <Image
        source={bookmarkIcon}
        resizeMode="contain"
        style={styles.logoImage}
      />
    </TouchableOpacity>
  );
};

Bookmark.propTypes = {
  saved: PropTypes.bool.isRequired,
  containerStyle: PropTypes.object,
};

export default Bookmark;
