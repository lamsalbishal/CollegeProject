
// import React, { Component } from 'react';
// //import react in our code.
 
// import { StyleSheet, View, Image, TouchableOpacity, Alert,Text,Share } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// const star = <Icon name="star" size={20} color="#f12711"/>;
// const unstar = <Icon name="star-o" size={20} color="#000" />;
// const email = <MaterialIcons name="email" size={20} color="#000"/>
// //import all the components we are going to use.
 
// export default class DoctorDetail extends Component {
//   clickHandler = () => {
//     this.props.navigation.navigate("Appointment",{
//      Name: this.props.navigation.getParam('Name'),
//      Speciality:this.props.navigation.getParam("Speciality"),
//      Hospital:this.props.navigation.getParam("Hospital")

//     });
//   };
   
//    //navigation header bar
//    static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('Name', 'Doctor Detail'),
//     };
//   };
  

//   onShare = async () => {
//     try {
//       const result = await Share.share({
//         title:
//         'Doctor recommendation',
//         message:
//           'Recommendation Doctor for  treatment: '+ this.props.navigation.getParam("Name","Doctor Recommendation") + '\n Speciality: '+ this.props.navigation.getParam("Speciality") + '\n Hospital: ' + this.props.navigation.getParam('Hospital') 
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   //top header for doctor detail
//   header(){
   
//     return(
//       <View>
//         <View style={{flexDirection:'row',}}>
//           <View style={{width:150,borderWidth:1,borderColor:'gray'}}>
//             <Image  source={{uri:this.props.navigation.getParam("ImageUrl")}} style={{width:'100%',height:150,resizeMode:'cover'}} />
//           </View>
//           <View style={{paddingLeft:20}}>
//             <Text style={{fontSize:18,fontWeight:'bold',color:'blue'}}>{this.props.navigation.getParam('Name')}</Text>
//             <View style={{flexDirection:'row',paddingTop:5}}>
//               <Text>{this.props.navigation.getParam('Sex')}</Text>
//               <Text style={{paddingLeft:3,paddingRight:3}}>|</Text>
//               <Text>Age:{this.props.navigation.getParam('Age')}</Text>
//             </View>
           
//             <Text style={{paddingTop:5}}>{this.props.navigation.getParam('Review')} Review</Text>
            
//             <View style={styles.startPosotion}>
//                       {Math.round(this.props.navigation.getParam('Star')/this.props.navigation.getParam('Comment_Count')) == 5?
//                          <View style={{flexDirection:"row"}}>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           </View>
//                         :null }


//                         {Math.round(this.props.navigation.getParam('Star')/this.props.navigation.getParam('Comment_Count')) == 4?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null }

//                         {Math.round(this.props.navigation.getParam('Star')/this.props.navigation.getParam('Comment_Count')) == 3?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null
//                        }

//                         {Math.round(this.props.navigation.getParam('Star')/this.props.navigation.getParam('Comment_Count')) == 2?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null }

//                         {Math.round(this.props.navigation.getParam('Star')/this.props.navigation.getParam('Comment_Count')) == 1?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null  }

//                         {Math.round(this.props.navigation.getParam('Star')/this.props.navigation.getParam('Comment_Count')) == 0?
//                          <View style={{flexDirection:"row"}}>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                           :null }
                         
//             </View>
            
            
//           </View>
//         </View>
//       </View>
//     )
//   }

//   middle(){
//     return(
//       <View style={{paddingTop:10,}}>
//         <View style={{flexDirection:'row'}}>
//           <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Speciality</Text>

//           <Text style={{fontSize:16,fontWeight:'bold',fontWeight:'bold',paddingLeft:5,color:'blue'}}>{this.props.navigation.getParam('Speciality')}</Text>
//         </View>
       
//         <Text style={{paddingTop:5,paddingLeft:5}}>{this.props.navigation.getParam('Education')}</Text>
//         <View style={{paddingTop:10}}>
//           <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Hospital</Text>
//           <Text style={{paddingTop:5,paddingLeft:5}}>{this.props.navigation.getParam('Hospital')} </Text>
//          </View>
//       </View>
//     )
//   }

//   biography(){
//     return(
//        <View style={{paddingTop:10}}>
         
//          <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Biography</Text>
//          <Text style={{paddingTop:5,paddingLeft:5}}>{this.props.navigation.getParam('Biography')} </Text>
//          <View>
//             <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Contact </Text>
//             <View style={{flexDirection:'row'}}>
//                 <Text style={{paddingTop:5,paddingLeft:5}}>{email}</Text>
//                 <Text style={{paddingTop:5,paddingLeft:5}}>{this.props.navigation.getParam('Email')} </Text>
//             </View>
           
//            <View style={{paddingTop:20,width:'30%'}}>
//              <TouchableOpacity  onPress={this.onShare}>
//                <View style={{backgroundColor:'blue',padding:10}}>
//                   <Text style={{color:'#fff',fontSize:16,textAlign:'center'}}>Share</Text>
//                </View>
               
//              </TouchableOpacity>
//            </View>
//          </View>
//        </View>
//     )
//   }


//   //float button fucntion
//   floatButton(){
//     return(
//             <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={this.clickHandler}
//             style={styles.TouchableOpacityStyle}>
//             <Image
//               //We are making FAB using TouchableOpacity with an image
//               //We are using online image here
//               source={{
//               uri:'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
//               }}
//               //You can use you project image Example below
//               //source={require('./images/float-add-icon.png')}
//               style={styles.FloatingButtonStyle}
//             />
//           </TouchableOpacity>
//     )
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//        {this.header()}
//        {this.middle()}
//        {this.biography()}

//        {this.floatButton()}
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     padding:10
//   },
 
//   TouchableOpacityStyle: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     right: 30,
//     bottom: 30,
//   },
 
//   FloatingButtonStyle: {
//     resizeMode: 'contain',
//     width: 50,
//     height: 50,
//     //backgroundColor:'black'
//   },

//   startPosotion:{
//     flexDirection:'row',
//     paddingTop:5
//   },
//   starIcon:{
//      paddingLeft:2
//   },
// });





// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow
// //  */

// // import React, {Component} from 'react';
// // import { StyleSheet, Text, StatusBar,View,TextInput,Image} from 'react-native';
// // import { FlatList } from 'react-native-gesture-handler';
// // import Icon from 'react-native-vector-icons/FontAwesome';

// // const star = <Icon name="star" size={20} color="#f12711"/>;


// // export default class SearchDetail extends Component {
 
// //     static navigationOptions = {
// //         title: 'Doctor Name',
// //         headerStyle: {
// //           backgroundColor: '#f4511e',
// //         },
// //         headerTintColor: '#fff',
// //         headerTitleStyle: {
// //           fontWeight: 'bold',
// //           fontSize:18
// //         },
// //       };

      
// //       header(){
// //         return(
// //           <view style={}>
// //             <View>
// //               <Image source={require('../assets/doctoricon.png')} style={{widthL:'100%',height:200}} />
// //             </View>
// //             <View>
// //               <Text>Doctor name</Text>
// //               <Text>1 Review</Text>
// //             </View>
// //         </view>
     
// //         )
// //       }
   
    
// //     render() {
// //         return (
// //             <View style={styles.container}>
// //                {this.header()}
            
// //             </View>
// //         );
// //     }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#E8EAEE',
// //     padding:10
// //   },

 
// // });