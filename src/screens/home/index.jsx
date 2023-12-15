import {Button, StyleSheet, FlatList, View, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    name: 'Basic',
  },
  {
    id: 2,
    name: 'Intermediate',
  },
];

const Home = () => {
  const navigation = useNavigation();

  const handlePress = screen => navigation.navigate(screen);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Button
            style={{width: 100, height: 100}}
            title={item.name}
            onPress={() => handlePress(item.name)}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{height: 25}} />}
        // horizontal
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
