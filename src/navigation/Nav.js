/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

    const AppNavigator = createStackNavigator({
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailScreen,
      },
    }, {
        initialRouteName: 'Home',
    });

    const SwitchNavigator = createSwitchNavigator({
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailScreen,
      },
    }, {
        initialRouteName: 'Home',
    });

    const DrawerNavigator = createDrawerNavigator({
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailScreen,
      }
    })

    const BottomTabNavigator = createBottomTabNavigator({
      Home: {
        screen: HomeScreen,
      },
      Details: {
        screen: DetailScreen,
      }
    })

    const MaterialBottomTab = createMaterialBottomTabNavigator({
      Album: { screen: HomeScreen },
      Library: { screen: DetailScreen },
      History: { screen: DetailScreen },
      Cart: { screen: HomeScreen },
    }, {
      initialRouteName: 'Album',
      activeColor: 'red',
      inactiveColor: 'red',
      barStyle: { backgroundColor: 'white' },
    });
    
    export default createAppContainer(MaterialBottomTab);
    