import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation';
import TransactionScreen from './screens/booktransactionscreen';
import SearchScreen from './screens/searchscreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  
  );
}
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen},
  
});
const AppContainer=createAppContainer(TabNavigator);

