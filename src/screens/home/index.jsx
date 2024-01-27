import {Button, StyleSheet, FlatList, View, SafeAreaView} from 'react-native';
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
            onPress={() => handlePress(item.nav)}
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
