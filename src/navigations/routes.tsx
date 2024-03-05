import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllTasks from '../screens/AllTasks';
import CreateTask from '../screens/CreateTasks';
import {RootStackParamList} from '../types';
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllTask" component={AllTasks} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
