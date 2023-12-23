import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import React, {useState} from 'react';

const Opacity = () => {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const animatedStyles = {
    opacity: animation,
  };
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

export default Opacity;
