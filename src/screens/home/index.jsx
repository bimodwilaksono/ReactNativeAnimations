import {
  Button,
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  Dimensions,
  PixelRatio,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    name: 'Basic',
    nav: 'Basic',
  },
  {
    id: 2,
    name: 'Intermediate',
    nav: 'Intermediate',
  },
  {
    id: 3,
    name: 'Custom Tab Bar',
    nav: 'TabBar',
  },
  {
    id: 4,
    name: 'Shared Elements',
    nav: '',
  },
  {
    id: 5,
    name: 'Flatlist ScrollToIndex',
    nav: 'FlatlistScrollToIndex',
  },
];

const Home = () => {
  const navigation = useNavigation();
  const {fontScale, height, scale, width} = useWindowDimensions();

  const handlePress = screen => navigation.navigate(screen);

  return (
    <ScrollView>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Button
            style={{width: 100, height: 100}}
            title={item.name}
            onPress={() => handlePress(item.nav)}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 25}} />}
        // horizontal
      />
      <Text maxFontSizeMultiplier={1} style={styles.text}>
        Height: {height}
      </Text>
      <Text allowFontScaling={false} style={styles.text}>
        Width: {width}
      </Text>
      <Text style={styles.text}>Font scale: {fontScale}</Text>
      <Text style={styles.text}>Pixel ratio: {scale}</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
