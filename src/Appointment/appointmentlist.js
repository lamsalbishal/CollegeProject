import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar,View,TextInput,Image,TouchableOpacity,FlatList,Modal,Picker,Alert,AsyncStorage} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { CheckBox } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const cross = <Entypo name="circle-with-cross" size={30} color="#f12711"/>

const star = <Icon name="star" size={20} color="#f12711"/>;
const unstar = <Icon name="star-o" size={20} color="#000" />;


export default class Search extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            appointDate:'',
            shift:'',

        }
    }
    //navigation header bar
   static navigationOptions = ({ navigation }) => {
    return {
      title: "Appointment List"
    };
  };

  

    render(){
        return(
            <View style={styles.MainContainer}>
               <Text style={{fontSize:16,color:'#000',textAlign:'center',paddingTop:30}}>Hello</Text> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding:10,
      
    },
    inputBox: {
        backgroundColor:'#ffffff',
        width:300,
        color:'#000000',
        fontSize:16,
        paddingHorizontal:16,
        margin:5,
    },

})