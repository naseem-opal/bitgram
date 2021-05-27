import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {test1, test2} from '../components/testComponent1';


const Tab = createMaterialTopTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={test1} />
      <Tab.Screen name="Settings" component={test2} />
    </Tab.Navigator>
  );
}