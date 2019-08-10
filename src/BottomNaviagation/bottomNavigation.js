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
      tabBarIcon: ({tintColor}) => (
        
        <Entypo name="home" size={20} color={tintColor}/>
      )
  })},
 
  Search:{screen: SearchPage,
    navigationOptions: () => ({
      
      tabBarIcon: ({tintColor}) => (
        <Icon name="search" size={20} color={tintColor} />
      )
  })
  },


},{
  tabBarOptions : {
    activeTintColor: '#FCF301',
    inactiveTintColor: '#fff',
    indicatorStyle: {
      borderBottomColor: '#87B56A',
      borderBottomWidth: 2,
    },
    barStyle: {
      borderBottomWidth:2,
       backgroundColor: '#000'
       },
   
    style: {
      backgroundColor: '#E05484',
    },
  }
}
);

export default createAppContainer(TabNavigator);