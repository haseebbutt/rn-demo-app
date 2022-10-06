import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

//
//

export interface IListItem {
  id: any;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

const ListScreen = ({navigation}) => {
  console.log(navigation);

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FlatList
        data={ListData}
        keyExtractor={item => item.id}
        maxToRenderPerBatch={15}
        renderItem={item => (
          <ListItem
            Data={item}
            key={item.id}
            onPress={() => navigation.navigate('ItemScreen', item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
