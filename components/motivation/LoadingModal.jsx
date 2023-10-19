import React, { useEffect, useRef } from 'react';
import { Modal, Text, View, Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './loadingModal.style';
import LottieView from 'lottie-react-native';
import motivationalQuotes from '../../extra/data/motivationalQuotes';

const LoadingModal = ({ visible }) => {
  const randomMotivationalMessage =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  const animatedOpacity = useRef(new Animated.Value(0.5)).current;

  const animateOpacity = () => {
    Animated.sequence([
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => animateOpacity());
  };

  useEffect(() => {
    animateOpacity();
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Animated.View
            style={{ opacity: animatedOpacity, alignItems: 'center' }}
          >
            <Text style={styles.modalText}>
              {randomMotivationalMessage.text}
            </Text>
            <View style={styles.animationContainer}>
              <LottieView
                source={require('../../assets/images/loading-animation.json')}
                autoPlay
                loop
                style={{ height: 275, width: 275 }}
              />
            </View>
            <Text style={styles.modalSubText}>Loading your next job...</Text>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

LoadingModal.propTypes = {
  visible: PropTypes.bool,
};

export default LoadingModal;
