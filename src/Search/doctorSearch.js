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


import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const backarrow = <Icon name="arrowleft" size={20} color="#fff"/>;
const search = <EvilIcons name="search" size={30} color="#fff" />;

// const diseaseList = [{name:"Dr Navin Khanal",special:"Cardiology"},{name:"Ent",special:"Cardiology"},{name:"Ear",special:"Cardiology"},{name:"Cardiology",special:"Cardiology"}];

export default class FindDoctor extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            isLoading:false,
            diseaseDetailList:'',
            doctorDetailList:'',
            searchText:'',
            searchValidation:'',
            diseaseName:'',

            searchDiseaseList:''
        }

    }

    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
    };

    //component did mount
    componentDidMount(){
     
      //  this.makeRemoteRequest();
        this._diseaselistapi()
    }

    //fetch the api for desease list
    _diseaselistapi = () => {
     
        fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDiseases")
            .then((response) => response.json())
            .then((responseJson) => {
            
            this.setState({
                diseaseDetailList:responseJson,
                
            })
            console.log('get disease list', responseJson)
            
            })
            .catch((error) => {
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
            });
                
    }
    
    // fetch the api 
    // makeRemoteRequest = () => {
     
    //     fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctor")
    //         .then((response) => response.json())
    //         .then((responseJson) => {
            
    //         this.setState({
    //             doctorDetailList:responseJson.filter((item) => item.Doctor_Specialty == special),
    //             refreshing:false,
    //         })
    //         console.log('get fetch data', responseJson)
            
    //         })
    //         .catch((error) => {
    //         this.setState({
    //             refreshing:true,

    //         })
            
    //         ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
    //         });
                
    // }


    // searchDoctor(text,type){
    //     alph = /^[a-zA-Z]+$/
      
    //         if(type == 'search')
    //          {  
    
                
    //            if(alph.test(text)){
    //                this.setState({
    //                    searchValidation:true,
    //                    searchText:text,
    //                })
    //            }else{
    //                this.setState({
    //                    searchValidation:false
    //                })
    //            } 
    //         }
    //     }

    searchDoctor(st)
    {
        
        var search_results = this.state.diseaseDetailList.filter( (item) => (item.Diseases_Name.slice(0,st.length).toUpperCase()  == st.toUpperCase()  ));
        this.setState({
            searchDiseaseList:search_results
        })
            
    }


        // searchButton()
        // {
        //     this.setState({
        //         doctorDetailList:'',
        //         diseaseName:'Not Found'
                
        //     });
            
        //     if(this.state.searchText == '' && this.state.searchValidation == false)
        //     {
        //         ToastAndroid.showWithGravity(
        //             'Soory Please fill text',
        //             ToastAndroid.SHORT,
        //             ToastAndroid.BOTTOM,
        //             25,
        //             50,
        //           );
        //     }else{
        //        diseaseList.map((item) => {
        //           if(item.name == this.state.searchText)
        //           {
        //               this.setState({
        //                   diseaseName:item.special
        //               });
        //               this.makeRemoteRequest(item.special) 
        //           }
        //        })
        //     }
        // }



    toolbar()
    {
        return(
            <View style={{borderColor:"#000",backgroundColor:"#000",elevation:5.0,flexDirection:'row',height:60,padding:10}}>
                <View style={{width:"15%",justifyContent:'center'}} >
                    <TouchableOpacity onPress={() => this.props.navigation. goBack()}>
                        <Text>{backarrow}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"85%"}}>
                    <TextInput 
                        autoFocus = {true} 
                        placeholder="Search" 
                        style={{paddingLeft:20,backgroundColor:'#fff'}} 
                        onChangeText={(text) => this.searchDoctor(text)} >

                    </TextInput>
                </View>
               
               
            </View>
        )
    }


//     <View style={{width:"20%",alignItems:'center',justifyContent:'center'}}>
//     <TouchableOpacity onPress={() =>{this.searchButton()}}>
//         <View>
//             <Text>
//                 {search}
//             </Text>
//         </View>
//     </TouchableOpacity>
// </View>

    // _renderItem = ({item,index}) =>{
       
    //     return(

    //         <View>

    //         <View style={{flexDirection:'row',elevation:5,padding:15,backgroundColor:"#F9F5F5",margin:5}}>
    //             <View style={{width:'30%'}} >
    //                 <Image  
                                  
    //                     style={{width:90, height:80}}
    //                     source={{uri:item.Doctor_Image_URL}}
    //                 />
    //             </View>
    //             <View style={{paddingLeft:10,width:'60%'}}>
    //                 <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>{item.Doctor_Name}</Text>
    //                 <Text>Age {item.Doctor_Age}</Text>
    //                 <Text>{item.Doctor_Specialty}</Text>
                    
    //             </View>
    //             <View style={{width:'10%'}}>
    //                 <Text>Ahp</Text>
    //             </View>
    //         </View>

    //         </View>

    //     )
        

    // }
                   
                    
                    

    body()
    {
        return(
            <ScrollView style={{padding:10}}>
                <View style={{padding:10}}>
                    <View style={{flexDirection:'row'}}>
                        {/* <Text>Speciality order is </Text>
                        <Text style={{color:'red',fontSize:16,fontWeight:'bold'}}>{this.state.diseaseName}</Text> */}
                    </View>
                  
                </View>

             
            {this.state.searchDiseaseList != ''?
            this.state.searchDiseaseList.map((item) => {
                return(
                    <View style={{padding:10}}>
                        <TouchableOpacity 
                            onPress={() => {this.props.navigation.navigate('DoctorList',{
                            specalityName:item.Diseases_Name,
                            specalityID:item.Speciality_ID,
                            })}}>
                            <Text style={{color:"#fff",fontSize:16,fontWeight:'bold'}}>{item.Diseases_Name}</Text>
                        </TouchableOpacity>
                      
                    </View>
                )
            }):null}
               
                <View>
                    {/* <FlatList
                        extraData= {this.state}
                        data={this.state.doctorDetailList}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        
                    /> */}
                </View>
               
            </ScrollView>
        )
    }

    render()
    {
        return(
            <View style={{backgroundColor:'#rgba(0,0,0,0.7)',flex:1}}>

              
                {this.toolbar()}
                {this.body()}
                
            </View>
          
        )
    }
}

// export default class Search extends Component {
      
//     constructor(props){
//         super(props);
//         this.state = {
//             search:'',
//             modalVisible: false,
//             oneCheck:false,
//             twoCheck:false,
//             threeCheck:false,
//             fourCheck:false,
//             doctorDetailList:'',
//             apiData:'',
//             doctorFilterData:'',
//             gender:'',
//             refreshing: false,
            
//         }
//     }

//     setModalVisible(visible) {
//         this.setState({modalVisible: visible});
//     }

//     componentDidMount(props){
     
//        this.makeRemoteRequest()
//     }

//     _onRefresh() {
//         this.setState({refreshing: true,},
//           this.makeRemoteRequest())
      
//       }
    
//     oneCheckFun = () => {
//         if(this.state.oneCheck == false) {
//            this.setState({
//                oneCheck:true,         
//            })

//         }else {
//            this.setState({
//               oneCheck:false
//            })
//         }
//     }

//     twoCheckFun = () => {
//         if(this.state.twoCheck == false){
//            this.setState({
//                 twoCheck:true,    
               
//            })
//         }else{
//             this.setState({
//                twoCheck:false
//             })
//         }
//     }

//     threeCheckFun = () => {
//         if(this.state.threeCheck == false){
//           this.setState({
//               threeCheck:true,
//               fourCheck:false
//           })
//         }else {
//            this.setState({
//               fourCheck:false
//            })
//         }
//     }

//     fourCheckFun = () => {
//         if(this.state.fourCheck == false){
//             this.setState({
//                 fourCheck:true,
//                 threeCheck:false,
               
              
//         })
//         }else {
//             this.setState({
            
//             threeCheck:false,
//             })
//         } 
//     }


//     //fetch the api 
//     makeRemoteRequest = () => {
        
//         fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctorComment")
//             .then((response) => response.json())
//             .then((responseJson) => {
            
//             this.setState({
//                 doctorDetailList:responseJson,
//                 apiData:responseJson,
//                 refreshing:false,
//             })
//             console.log('get fetch data', responseJson)
            
//             })
//             .catch((error) => {
//             this.setState({
//                 isLoading:true,

//             })
            
//             ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
//             });
                
//     }
    

//     ShowModal = () => {
//         this.setModalVisible(!this.state.modalVisible);
//     }
//     searchBox(text){
//      console.log(text)
//     }

//     filterData  =() =>{
        
//         this.state.doctorDetailList = this.state.apiData;
       
//         if(this.state.oneCheck){  
//             this.setState({
//                 doctorDetailList :  this.state.doctorDetailList.filter((item) => item.Doctor_Address === "New Road" )  
//             })
//         }
         
//         if(this.state.threeCheck){
//             this.state.gender = "Male"
//             this.setState({
              
//             doctorDetailList:  this.state.doctorDetailList.filter((item) => item.Doctor_Sex === "Male" )  
//             })   
//         }
 
//          if(this.state.fourCheck){
//              this.state.gender = "Female";
//              this.setState({
                
//                  doctorDetailList:this.state.doctorDetailList.filter((item) => item.Doctor_Sex === "Female" )  
//              })
//         }
         
       

//         if(this.state.oneCheck && this.state.threeCheck || this.state.fourCheck){
         
//             this.setState({
//                 doctorDetailList:  this.state.doctorDetailList.filter((item) => item.Doctor_Address === "New Road" && item.Doctor_Sex == this.state.gender )  
//                 }) 
//         }     
       
//         this.setState({
            
//             modalVisible:false
//         })
//     }

//     searchingValue(st) {
        
//         var search_results = this.state.apiData.filter( (item) => (item.Doctor_Specialty.slice(0,st.length).toUpperCase()  == st.toUpperCase()  ));
//         console.log("doctorlistSerch",this.state.doctorDetailListView);
        
//             this.setState({
//                 doctorDetailList: search_results 
//             }); 
//    };
   

//     _renderItem = ({item}) =>(
       
      
//         <View>
//             <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchDetail',{
//                 Name:item.Doctor_Name,
//                 Age:item.Doctor_Age,
//                 Sex:item.Doctor_Sex,
//                 Review:item.Doctor_Review,
//                 Star:item.Doctor_Total_Star,
//                 Speciality:item.Doctor_Specialty,
//                 Education:item.Doctor_Education,
//                 Email:item.Doctor_Email,
//                 Biography:item.Doctor_Bio,
//                 Hospital:item.Hospital_Name,
//                 ImageUrl:item.Doctor_Image_URL,
//                 Comment_Count:item.Comment_Count
              
//             })}>

           
//             <View style={{flexDirection:'row',marginTop:10,borderBottomWidth:2,borderBottomColor:'#846602',padding:10,backgroundColor:'#F2F2F2'}}>

//                 <View>
//                     <Image
//                         style={{width:70, height:80}}
//                         source={{uri:item.Doctor_Image_URL}}
//                     />
//                 </View>

//                 <View style={{paddingLeft:20}}>
//                     <Text style={{color:'#000',fontSize:16,fontWeight:'bold'}}>               
//                         {item.Doctor_Name}
//                     </Text>
//                     <View style={{flexDirection:'row'}}>
//                         <Text>Age {item.Doctor_Age}</Text>
//                         <Text> | </Text>
//                         <Text>{item.Doctor_Specialty}</Text>
                       
//                     </View>
//                     <View>
                       
//                         <Text>{item.Comment_Count} Review</Text>

//                     </View>

//                     <View style={styles.startPosotion}>
                         
//                         {Math.round(item.Doctor_Total_Star/item.Comment_Count) == 5?
//                          <View style={{flexDirection:"row"}}>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           <Text style={styles.starIcon}>{star}</Text>
//                           </View>
//                         :null }


//                         {Math.round(item.Doctor_Total_Star/item.Comment_Count) == 4?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null }

//                         {Math.round(item.Doctor_Total_Star/item.Comment_Count) == 3?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null
//                        }

//                         {Math.round(item.Doctor_Total_Star/item.Comment_Count) == 2?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null }

//                         {Math.round(item.Doctor_Total_Star/item.Comment_Count) == 1?
//                           <View style={{flexDirection:"row"}}>
//                             <Text style={styles.starIcon}>{star}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                             <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                         :null  }

//                         {Math.round(item.Doctor_Total_Star/item.Comment_Count) == 0 || null?
//                          <View style={{flexDirection:"row"}}>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           <Text style={styles.starIcon}>{unstar}</Text>
//                           </View>
//                           :null }
                         
                      
//                     </View>
                    
//                 </View>

               

//             </View>
//             </TouchableOpacity>
           
//         </View>
        
//     );

    
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* search box */}
//                 <Modal
//                     animationType="fade"
//                     transparent={true}
//                     visible={this.state.modalVisible}
//                     onRequestClose={() => {
//                         this.setModalVisible(!this.state.modalVisible);
//                     }}>
//                     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
//                         <View style={{backgroundColor:'#fff',width:'90%',borderRadius:8,padding:10}}>

//                             <TouchableOpacity
//                                 onPress={() => {
//                                 this.setModalVisible(!this.state.modalVisible);
//                                 }}>
//                                 <Text style={{textAlign:'right'}}>{cross}</Text>
//                             </TouchableOpacity>

//                             <Text style={{padding:6}}>AVALIABILITY</Text>
//                             <View style={{flexDirection:'row',justifyContent:'space-between'}}>

//                                 <CheckBox  
//                                     textStyle={{fontSize:12,color:'gray'}}
//                                     title='Location'                          
//                                     checked={this.state.oneCheck}
//                                     onPress={this.oneCheckFun}
//                                 />

//                                 <CheckBox
//                                     textStyle={{fontSize:12,color:'gray'}}
//                                     title='Avaliable'
//                                     checked={this.state.twoCheck}
//                                     onPress={this.twoCheckFun}
//                                 />

//                             </View>
                           

//                             <Text style={{padding:6}}>GENDER</Text>
//                             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//                             <CheckBox 
//                                 textStyle={{fontSize:12,color:'gray'}}
//                                 title='Male'
//                                 checked={this.state.threeCheck}
//                                 onPress={this.threeCheckFun}
//                             />

//                             <CheckBox 
//                                 textStyle={{fontSize:12,color:'gray'}}
//                                 title='Female'
//                                 checked={this.state.fourCheck}
//                                 onPress={this.fourCheckFun}
//                             />
                             
//                             </View>
//                             <View style={{width:'100%',alignItems:'center'}}>
//                                 <View style={{flexDirection:'row',padding:10}}>
//                                     <TouchableOpacity onPress={() => this.filterData()}>
//                                         <Text style={{backgroundColor:'#0c1289',color:'#fff',fontSize:14,padding:10,borderRadius:10,marginRight:10}}>Submit</Text>
//                                     </TouchableOpacity>
                                    
//                                     <TouchableOpacity onPress={() => {
//                                             this.setModalVisible(!this.state.modalVisible);
//                                             }}>
//                                         <Text style={{borderRadius:10,borderWidth:1,borderColor:'gray',padding:10}}>Cancel</Text>
//                                     </TouchableOpacity>

//                                 </View>
//                             </View>
                           

                        
//                         </View>
//                     </View>
//                 </Modal>

//                 <Toolbar
//                     leftElement="menu"
//                     centerElement="Doctor Searchable ..."
//                     searchable={{
//                     autoFocus: true,
//                     placeholder: 'Search',
//                     onChangeText: text => {this.searchingValue(text)}
//                     }}
//                     onLeftElementPress={this.ShowModal}
//                     onRightElementPress={ (label) => { console.log(label) }}
//                 />
              
//                 {/* using the flatlist */}
//                 <FlatList
//                     navigation = {this.props.navigation}
//                     extraData= {this.state}
//                     data={this.state.doctorDetailList}
//                     renderItem={this._renderItem}
//                     refreshControl ={
//                         <RefreshControl
//                         refreshing = {this.state.refreshing}
//                         onRefresh={()=>this._onRefresh()}/>
//                       }
//                 />
//                 {/* close the flatlist */}

            
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAEE',
//   },

//   navigationHeader: {
//     padding:10,
//     backgroundColor:'#fff',
//     shadowColor: "#000000",
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     shadowOffset: {
//       height: 1,
//       width: 1
//     }
//    },
 
//    startPosotion:{
//     flexDirection:'row',
//   },

  
 
// });
