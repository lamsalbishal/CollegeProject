import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from '../Home/home';
import Search from '../Search/serchpage';





class HomePage extends React.Component {
  
  
 render() {
     return <Home navigation={this.props.navigation} />;
 }
}

class SearchPage extends React.Component {
   

   render() {
       return <Search navigation={this.props.navigation} />;
   }
}


const TabNavigator = createBottomTabNavigator({
  Home:
  {screen: HomePage,
    navigationOptions: () => ({
      tabBarIcon: () => (
        
        <Entypo name="home" size={20} color="#fff"/>
      )
  })},
 
  Search:{screen: SearchPage,
    navigationOptions: () => ({
      tabBarIcon: () => (
        <Icon name="search" size={20} color="#fff"/>
      )
  })
  },


},{
  tabBarOptions : {
    activeTintColor: '#fff',
    inactiveTintColor: 'gray',
    style: {
     
      backgroundColor: 'rgb(0,0,0)',
    }
  }
}
);

export default createAppContainer(TabNavigator);