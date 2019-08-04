/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './src/Home/home';
import BottomNavigation from './src/BottomNaviagation/bottomNavigation';
import FindDoctor from './src/Search/doctorSearch';
import DoctorList from './src/Search/doctorList';
import DoctorProfile from './src/Search/doctorProfile';
import Feedback from './src/FeedBack/feedback';
import Review from './src/FeedBack/review';



const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,   
    },

    BottomNavigation: {
      screen:BottomNavigation,
      navigationOptions: ({navigation}) => ({
        header:null
      }),
    },

    FindDoctor: {
      screen: FindDoctor,
      
    },

    DoctorList: {
      screen:DoctorList,
    },

    DoctorProfile: {
      screen: DoctorProfile
    },
    Feedback: {
      screen:Feedback
    },
    Review: {
      screen:Review
    }

   
   

  },{
    initialRouteName: 'BottomNavigation',
  });

const App = createAppContainer(MainNavigator);

export default App;


