import React from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

function TabButton({ name, emoji, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnEmojiText}>{emoji}</Text>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, tabEmojis, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TabButton
            name={item}
            emoji={tabEmojis[index]}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{
          columnGap: SIZES.small / 2,
          paddingHorizontal: SIZES.medium,
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
  tabEmojis: PropTypes.array,
};

TabButton.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.string,
  onHandleSearchType: PropTypes.func,
  emoji: PropTypes.string,
};

export default Tabs;
