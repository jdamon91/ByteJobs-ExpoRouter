import React from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
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
};

TabButton.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.string,
  onHandleSearchType: PropTypes.func,
};

export default Tabs;
