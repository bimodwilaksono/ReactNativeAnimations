import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    name: 'Opacity',
  },
  {
    id: 2,
    name: 'Translate',
  },
  {
    id: 3,
    name: 'Scale',
  },
  {
    id: 4,
    name: 'Width/Height',
  },
  {
    id: 5,
    name: 'Absolute',
  },
  {
    id: 6,
    name: 'Interpolation',
  },
  {
    id: 7,
    name: 'Color',
  },
  {
    id: 8,
    name: 'Width/Height Percentage',
  },
];
const Basic = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Pressable
            style={{
              backgroundColor: 'blue',
              width: 150,
              borderRadius: 5,
              padding: 5,
            }}
            onPress={() => navigation.navigate(item.name)}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {item.name}
            </Text>
          </Pressable>
        )}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          // flexWrap: 'wrap',
        }}
        // horizontal
        ItemSeparatorComponent={() => <View style={{height: 30}} />}
      />
    </View>
  );
};

export default Basic;
