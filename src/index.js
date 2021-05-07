import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './containers/HomePage';
import AddRemove from './containers/AddRemove';
import Opposite from './containers/Opposite';
import Even from './containers/Even';
import Odd from './containers/Odd';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Numbers'}}
        />
        <Stack.Screen name="AddRemove" component={AddRemove} />
        <Stack.Screen name="Opposite" component={Opposite} />
        <Stack.Screen name="Even" component={Even} />
        <Stack.Screen name="Odd" component={Odd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
