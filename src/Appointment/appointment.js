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
      title: navigation.getParam('Name', 'Appointment'),
    };
  };

  appointmentSubmit = () => {
      if(this.state.appointDate != '')
      {
        let collection = {}
        collection.fullname = this.props.navigation.getParam("Name"),
        collection.Speciality = this.props.navigation.getParam("Speciality"),
        collection.Hospital = this.props.navigation.getParam("Hospital"),
        collection.appointDate = this.state.appointDate,
        collection.shift = this.state.shift

        try{
            AsyncStorage.setItem('appointment',JSON.stringify(collection));
            this.props.navigation.navigate("Home")
            Alert.alert( 'Appointment', 'Appointment Successfully')
        }catch(e)
        {
            console.log("error in appointment",e)
        }


      }else{
          Alert.alert("Soory","Please fill the field");
      }
  }

    render(){
        return(
            <View style={styles.MainContainer}>
               <Text style={{fontSize:16,color:'#000',textAlign:'center',paddingTop:30}}>Appointment to {this.props.navigation.getParam("Name")}</Text>
               <View style={{padding:10,marginTop:20}}>

               <TextInput 
                    style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(text) => this.setState({appointDate:text})} 
                    placeholder="Appointment Date" placeholderTextColor='#000000'
                    
                    />
              
              <View style={{padding:10}}>
              <Picker
                    selectedValue={this.state.shift}
                    style={styles.inputBox}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({shift: itemValue})
                    }>
                    <Picker.Item label="Mroning (7-12)" value="Morning" />
                    <Picker.Item label="Day (1-4)" value="Day" />
                    <Picker.Item label="Evening (5-7)" value="Evening"/>
                    <Picker.Item label="Night (8-10)" value="Night"/>
                </Picker>
              </View>
               
                </View>

                <View style={{justifyContent:'center',paddingTop:10,alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.appointmentSubmit()}>
                        <View style={{padding:20,backgroundColor:'blue',width:"50%"}}>
                            <Text  style={{textAlign:'center',color:'#fff'}}>Appointment</Text> 
                        </View>
                            
                    </TouchableOpacity>
                </View>


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