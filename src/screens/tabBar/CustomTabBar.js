/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useRef, useState} from 'react';
import {Animated, View, TouchableOpacity, ScrollView} from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

function MyTabBar({state, descriptors, navigation, position}) {
  const [indexA, setIndex] = useState(position);
  const [xValue, setXValue] = useState([]);
  const ref = useRef(0);

  const openItem = () => {
    console.log('masuk openItem');
    ref.current.scrollTo({x: xValue[indexA] - 50, animated: true});
  };

  useEffect(() => {
    console.log('change index');
    console.log('indexA', indexA);
    openItem();
  }, [indexA]);

  useEffect(() => {
    if (state.routes.length === xValue.length) {
      console.log('masuk sni');
      console.log('first', indexA);
      openItem();
    }
  }, [xValue]);

  return (
    <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
      <ScrollView
        ref={ref}
        showsHorizontalScrollIndicator={true}
        horizontal
        contentContainerStyle={{
          columnGap: 20,
          paddingTop: 20,
          paddingLeft: 20,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
              setIndex(index);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
          });

          const borderColor = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i =>
              i === index ? '#000' : 'rgba(0, 0, 0, 0.3)',
            ),
          });

          return (
            <AnimatedTouchable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onLayout={event => {
                const {layout} = event.nativeEvent;
                setXValue(prevState => [...prevState, layout.x]);
              }}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                borderWidth: 1,
                padding: 16,
                borderRadius: 10,
                borderColor,
              }}>
              <Animated.Text style={{opacity, color: '#000'}}>
                {label}
              </Animated.Text>
            </AnimatedTouchable>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default MyTabBar;
