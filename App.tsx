import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {View,Text  } from 'react-native'
import Stack from './src/stack';

//
//

const App = () => {
  return (
    // <View><Text>APP</Text></View>

    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
