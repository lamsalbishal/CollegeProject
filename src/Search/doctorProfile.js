import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Image,
    ToastAndroid
} from 'react-native';

const {width,height} = Dimensions.get("window");

import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const address = <Entypo name="location-pin" size={30} color="#E05484"/>;
const age = <FontAwesome5 name="birthday-cake" size={30} color="#E05484"/>; 
const sex = <MaterialCommunityIcons name="human-male-female" size={30} color="#E05484"/>;
const speciality = <Fontisto name="doctor" size={30} color="#E05484"/>;
const experience = <Icon name="user" size={30} color="#E05484"/>;
const degree = <FontAwesome5 name="user-graduate" size={30} color="#E05484"/>;
const hospital = <FontAwesome5 name="hospital" size={30} color="#E05484"/>;
const biography = <FontAwesome name="book" size={30} color="#E05484"/>;




const backarrow = <Icon name="arrowleft" size={20} color="#E05484"/>;


// MaterialCommunityIcons
export default class DoctorProfile extends Component{

    constructor(props)
    {
        super(props)
        
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('Name', 'Doctor Profile'),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#302F2F',
           
          },
        };
    };

   
   
     

    header(){
        return(
            <View style={{backgroundColor:'rgba(0, 0, 0, 0.7)',
                height:280,justifyContent:'center',alignItems:'center',paddingLeft:20}}
            >
                <Image 
                    style={{borderRadius:60,height:110,width:110,borderColor:'#fff',borderWidth:3,justifyContent:'center'}}
                    source={{uri:this.props.navigation.getParam('Image')}}
                ></Image>
                <Text style={{paddingTop:5,marginLeft:-20,textAlign:'center',fontWeight:'bold',color:'#fff',paddingLeft:20}}>{this.props.navigation.getParam("Name")}</Text>
                <Text style={{paddingTop:2,marginLeft:-20,textAlign:'center',paddingLeft:20,color:'#fff'}}>{this.props.navigation.getParam("Phone")}</Text>
            </View>
        )
    }
    

    body(){
        return(
           <View style={{marginTop:-35,marginLeft:40,marginRight:40}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Review",
              {
                doctorID:this.props.navigation.getParam("DoctorID"),
                doctorName:this.props.navigation.getParam("Name")

              })}>
                  <View style={{flexDirection:'row',padding:15,borderRadius:50,backgroundColor:'#E05484'}}>
                      <Text style={{width:'20%',backgroundColor:'#fff',width:35,height:35,borderRadius:50,textAlign:'center',paddingTop:7}} >{backarrow}</Text>
                      <Text style={{width:'80%',textAlign:'center',color:'#fff',fontSize:16,fontWeight:'bold',paddingTop:5}}>Feedback</Text>
                  </View>
              </TouchableOpacity>
           </View>
        )
    }

   
    
    footer()
    {
        return(
            <View style={{padding:20,}}>
                                
               <Text style={{fontSize:20,color:'#000',fontWeight:'bold'}}>
                   Profile Info
               </Text>
                <View style={{paddingTop:20}}>

                   
                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{address}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Address</Text>
                            <Text >{this.props.navigation.getParam("Address")}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{age}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Age</Text>
                            <Text >{this.props.navigation.getParam("Age")}</Text>
                        </View>
                    </View>

                 
                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{sex}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Sex</Text>
                            <Text >{this.props.navigation.getParam("Sex")}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{speciality}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Speciality</Text>
                            <Text >{this.props.navigation.getParam("Speciality")}</Text>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{experience}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Experience</Text>
                            <Text >{this.props.navigation.getParam("Experience")}</Text>
                        </View>
                    </View>


                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{degree}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Degree</Text>
                            <Text >{this.props.navigation.getParam("degree")}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{hospital}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Hospital</Text>
                            <Text >{this.props.navigation.getParam("Working")}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,paddingTop:10,paddingBottom:10,borderColor:'rgb(227,224,216)'}}>
                        <View>
                            <Text>{biography}</Text> 
                        </View>
                        <View style={{paddingLeft:5}}>
                            <Text  style={{fontSize:14,fontWeight:'bold',color:'#000'}}>Biography</Text>
                            <Text >{this.props.navigation.getParam("Biography")}</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

    render(){
        return(
            <ScrollView>
                {this.header()}
                {this.body()}
                {this.footer()}
            </ScrollView>
        )
    }
}






