// import React, {Component} from 'react';
// import { StyleSheet, Text, StatusBar,View,TextInput,Image,FlatList,Modal,TouchableOpacity,ToastAndroid,ActivityIndicator} from 'react-native';
// import { Toolbar } from 'react-native-material-ui';
// import { CheckBox } from 'react-native-elements'


// import Icon from 'react-native-vector-icons/FontAwesome';
// const star = <Icon name="star" size={20} color="#f12711"/>;
// const unfillstar = <Icon name="star-o" size={20} color="#f12711"/>;



// export default class DoctorList extends Component {
      
//     constructor(props){
//         super(props);
//         this.state = {
//             search:'',
//             modalVisible: false,
//             checked:false,
//             doctorname:'',
//             oneStar:false,
//             twoStar:false,
//             threeStar:false,
//             fourStar:false,
//             fiveStar:false,
//             count:0,
//             feedbackText:'',
//             useremail:'',
//             doctorID:'',
//             dataSet:'',
//             doctorDetailList:'',
//             doctorDetailListView:'',
//             errorText:false,
//             showIndicator:false
            
           
//         }
//     }

   

//     componentDidMount(){
//        this.makeRemoteRequest();
//     }

//     onPressBackButton = () => {
//         this.props.navigation.goBack();
//     }


//     searchingValue(st) {
        
//             var search_results = this.state.doctorDetailListView.filter( (item) => (item.Doctor_Name.slice(0,st.length).toUpperCase() == st.toUpperCase() ));
//             console.log("doctorlistSerch",this.state.doctorDetailListView);
            
//                 this.setState({
//                     doctorDetailList: search_results 
//                 });
           

       
       
//     };

    

//     static navigationOptions = {
//         header: null
//     };

//       setModalVisible(visible,doctorName,doctorID) {
//         this.setState({
//             modalVisible: visible,
//             doctorname:doctorName,
//             doctorID:doctorID
//         });
      
        
//       }

//       oneStarFun = () => {
//           if(this.state.oneStar === false){
//             this.setState({
//                 oneStar: true,
//                 count:1
//             })
            

//           }else{
//             this.setState({
//                 twoStar:false,
//                 threeStar:false,
//                 fourStar:false,
//                 fiveStar:false,
//                 count:1
//             })
//           }
      
//       }

//       sencondStarFun = () => {
//         if(this.state.twoStar === false){
//             this.setState({
//                 oneStar: true,
//                 twoStar:true,
//                 count:2
//             })
//           }else{
//             this.setState({
                
//                 threeStar:false,
//                 fourStar:false,
//                 fiveStar:false,
//                 count:2
//             })
//           }
       
//       }

//       thirdStarFun = () => {
//         if(this.state.threeStar === false){
//             this.setState({
//                 oneStar: true,
//                 twoStar:true,
//                 threeStar:true,
//                 count:3

//             })
//           }else{
//             this.setState({
                
//                 fourStar:false,
//                 fiveStar:false,
//                 count:3
//             })
//           }
//       }

//       fourStarFun = () => {
//         if(this.state.fourStar === false){
//             this.setState({
//                 oneStar: true,
//                 twoStar:true,
//                 threeStar:true,
//                 fourStar:true,
//                 count:4

//             })
//           }else{
//             this.setState({
                
//                 fiveStar:false,
//                 count:4
//             })
//           }
//       }

//       fiveStarFun = () => {
//         if(this.state.fiveStar === false){
//             this.setState({
//                 oneStar: true,
//                 twoStar:true,
//                 threeStar:true,
//                 fourStar:true,
//                 fiveStar:true,
//                 count:5

//             })
//           }
//       }

    
//     //submit the form
//     feedBackForm(text,type){
//         if(type == 'feedbackText')
//         {  
//         this.setState({
//             feedbackText:text,  
//         })
//     } 
//     if(type == 'useremail'){
//         this.setState({
//             useremail:text
//         })
//     }

    
//     }

//     //fetch the api 
//     makeRemoteRequest = () => {
        
//         fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctor")
//             .then((response) => response.json())
//             .then((responseJson) => {
            
//             this.setState({
//                 doctorDetailList:responseJson,
//                 doctorDetailListView:responseJson

//             })
          
            
//             })
//             .catch((error) => {
//             this.setState({
//                 isLoading:true
//             })
            
//             ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
//             });
                
//     }
            

//     feedbackSubmit(){
      
//         this.setState({
//             showIndicator:true
//         })

//         console.log("countdata",this.state.count)
//         if(this.state.feedbackText.length > 0){
//             let collection = {}
//             collection.feedback = this.state.feedbackText
            
           
//             fetch('https://classify-feed.herokuapp.com/'+this.state.feedbackText, {
//               method: 'POST', // or 'PUT'
//               body: JSON.stringify(collection), // data can be `string` or {object}!
//               headers:{
//                 'Accept': 'appliaction/json',
//                 'Content-Type': 'application/json'
//               }
//             }).then(res => res.json())
//             .then(
//                 response => {
                
//                   this.setState({
//                       dataSet:response.data
//                   })
//                   let feedback_result = this.state.dataSet[0].classification;
//                   console.log('feedback result',feedback_result)
//                   let x ;
//                   if(feedback_result == "Positive")
//                   {
//                       x= 1
                      
//                   }else{
//                       x=0
                     
//                   }
//                 //   console.log('feedback count ',x);
//                 //   ToastAndroid.show('Success full', ToastAndroid.SHORT);
//                 this.allDataPOST(x)
                  
//                 }
//                 // showMe=>false
//                 ).catch(error => {
                 
//                  console.log('Login error',error)
                  
//                 });
//         }else{
//             this.setState({
//                 errorText:true
//             })
            
//         }
       
//     }


//     allDataPOST(x){
        
//         let collection ={}

//         collection.Doctor_Classification= x,
//         collection.Doctor_Comment = this.state.feedbackText, 
//         collection.Doctor_ID=this.state.doctorID,
//         collection. User_Email = this.state.useremail,
//         collection. Doctor_Point_No = this.state.count,
//         collection.Doctor_Star = this.state.count,
       
//         console.log('feedback collection',collection);

//         fetch('http://manojphuyal-001-site1.atempurl.com/api/PostDoctorComment', {
//             method: 'POST', // or 'PUT'
//             body: JSON.stringify(collection), // data can be `string` or {object}!
//             headers:{
//               'Accept': 'appliaction/json',
//               'Content-Type': 'application/json'
//             }
//           }).then(res => res.json())
//           .then(
//               response => {
                
               
//                 ToastAndroid.show('Success full', ToastAndroid.SHORT);
                
//               }
//               // showMe=>false
//               ).catch(error => {
               
//                console.log('Login error',error)
                
//               });

             
//         this.setState({
//             showIndicator:false,
//             modalVisible: !this.state.modalVisible, 
        
//         })     
//         this.props.navigation.navigate("Home"); 
//     }
   
//     //search toolbar for doctor search
//     searchToolbar(){
//         return(
//             <View>
//                 <Toolbar
//                     leftElement="arrow-back"
//                     onLeftElementPress={this.onPressBackButton}
//                     centerElement="Doctor Searchable ..."
//                     searchable={{
//                     autoFocus: true,
//                     placeholder: 'Search',
//                     onChangeText: text => {this.searchingValue(text)}
//                     }}
                
//                 />
//             </View>
//         )
//     }


//     //close thr form

//     _renderItem = ({item}) =>(
//         <View >
//            <TouchableOpacity  onPress={() => {
//             this.setModalVisible(true,item.Doctor_Name,item.Doctor_ID);
//             }}>

//             <View style={{backgroundColor:'#FFFFFF',padding:10,marginTop:8,flexDirection:'row',alignItems:'center'}}>
//                 <View>
//                     <Image
//                         style={{width: 55, height: 55,borderRadius:55,borderWidth:0.5,borderColor:'gray'}}
//                         source={{uri:item.Doctor_Image_URL}}
//                         />
//                 </View>
//                 <View style={{paddingLeft:10}}>
//                     <Text>               
//                         {item.Doctor_Name} 
//                     </Text>

                   
//                     <View style={{flexDirection:'row'}}>
//                        <Text>{item.Doctor_Specialty}</Text>
//                        <Text> | </Text>
//                        <Text>{item.Doctor_Experience} </Text>
//                     </View>
//                     <View style={{flexDirection:'row'}}>
//                        <Text>{item.Doctor_Sex}</Text>
//                        <Text> | </Text>
//                        <Text>{item.Doctor_Age} yrs</Text>
//                     </View>
                   
//                 </View>  
//             </View>
              
//             </TouchableOpacity>
//         </View>
//     );

//    modalFunction(){
//        return(
//             <Modal
//                     animationType="slide"
//                     transparent={false}
//                     visible={this.state.modalVisible}
//                     onRequestClose={() => {
//                         this.setModalVisible(!this.state.modalVisible);
//                     }}>
//                     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     
//                         <View style={{backgroundColor:'#FFF',borderRadius:8}}>
//                             <Text>Likelihood of recommending {this.state.doctorname}*</Text>
                            
//                             <View style={styles.startPosotion}>
//                                 <CheckBox
//                                     checkedIcon={<Text>{star}</Text>}
//                                     uncheckedIcon={<Text>{unfillstar}</Text>}
//                                     checked={this.state.oneStar}
//                                     onPress={this.oneStarFun}
//                                     />
//                                 <CheckBox
//                                     checkedIcon={<Text>{star}</Text>}
//                                     uncheckedIcon={<Text>{unfillstar}</Text>}
//                                     checked={this.state.twoStar}
//                                     onPress={this.sencondStarFun}
//                                 />
//                                 <CheckBox
//                                     checkedIcon={<Text>{star}</Text>}
//                                     uncheckedIcon={<Text>{unfillstar}</Text>}
//                                     checked={this.state.threeStar}
//                                     onPress={this.thirdStarFun}
//                                 />
//                                 <CheckBox
//                                     checkedIcon={<Text>{star}</Text>}
//                                     uncheckedIcon={<Text>{unfillstar}</Text>}
//                                     checked={this.state.fourStar}
//                                     onPress={this.fourStarFun}
//                                 />

//                                 <CheckBox
//                                     checkedIcon={<Text>{star}</Text>}
//                                     uncheckedIcon={<Text>{unfillstar}</Text>}
//                                     checked={this.state.fiveStar}
//                                     onPress={this.fiveStarFun}
//                                 />
//                             </View>

//                             <Text>Tell us more about your visit</Text>

//                             <TextInput
                                
//                                 style={{backgroundColor:'#E8EAEE',marginTop:20}}
//                                 onChangeText={(text) => this.feedBackForm(text,'feedbackText')} 
//                                 underlineColorAndroid="transparent"
//                                 placeholder={"Type Something in Text Area."}
//                                 placeholderTextColor={"#9E9E9E"}
//                                 numberOfLines={2}
//                                 multiline={true}
//                             />

//                             <TextInput
//                                 keyboardType="email-address"
//                                 style={{height: 50,backgroundColor:'#E8EAEE',marginTop:20}}
//                                 onChangeText={(text) => this.feedBackForm(text,'useremail')}
//                                 placeholder="email@gmail.com"
//                                 value={this.state.text}
//                             />
//                             <View style={{paddingTop:10, width:'100%'}}>
                            
//                                 <CheckBox
//                                     containerStyle={{borderWidth:0,backgroundColor:'#E8EAEE',marginLeft:-1}}
//                                     textStyle={{fontSize:12,color:'gray'}}
//                                     title='I agree Term And Condition of Company'
//                                     checked={this.state.checked}
//                                     onPress={() => this.setState({checked: !this.state.checked})}
//                                 />
//                             </View>


//                             <View style={{paddingTop:10}}>
//                                 {this.state.showIndicator?
//                                 <ActivityIndicator></ActivityIndicator>
//                                 :
                                
                                
//                                 <TouchableOpacity onPress={() => {this.feedbackSubmit()}}>
                                
//                                     <Text style={{color:'#FFF',fontSize:20,backgroundColor:'red',borderRadius:10,padding:10,width:'50%',textAlign:'center'}}>Sumbit</Text>
                        
//                                 </TouchableOpacity>
//                                 }

//                             </View>

//                             {this.state.errorText?
//                             <Text style={{paddingTop:10,color:'red'}}>Please fill all field</Text>
//                             :null
//                             }


//                         </View>
//                     </View>
//                 </Modal>
//        )
//    }

    
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* using the modal  */}
//                   {this.modalFunction()}
                
//                 {/* //search toolbar  */}
//                 {this.searchToolbar()}

//                 {/* using the flatlist */}
//                 <View style={{paddingTop:5,paddingBottom:50}}>
//                     <FlatList
//                         data={this.state.doctorDetailList}
//                         renderItem={this._renderItem}
                        
//                     />
//                 </View>
               
//                 {/* close the flatlist */}

            
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#E8EAEE',
//     },

//     navigationHeader: {
//         padding:10,
//         backgroundColor:'#fff',
//         shadowColor: "#000000",
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         shadowOffset: {
//         height: 1,
//         width: 1
//         }
//     },
    
//     startPosotion:{
//         flexDirection:'row',
//     },

  
 
// });
