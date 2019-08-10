/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
   StyleSheet, 
   Text, 
   StatusBar,
   View,
   Image,
   RefreshControl,
   TouchableOpacity,
   ScrollView,
   FlatList,
  } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
const comment = <FontAwesome name="comments-o" size={20} color="#FCF301"/>;
const hot = <Icon name="hotjar" size={20} color="#FCF301" />;



export default class Home extends Component {
 


    constructor(props){
      super(props);
      this.state = {
        doctorDetailList:'',
        getDoctorList:'',
        refreshing: false,
        startArray : [],
        doctorApi:[]
       
      }
    }
      
    //calling the search function 
    
    componentDidMount(){
      this.makeRemoteRequest();
      this.getDoctorApi();
      this.interval = setInterval(()=>{
        this._onRefresh();
      },5000)
   }

   componentWillUnmount() {
    clearInterval(this.interval);
  }
    

  
    //fetch the api 
    makeRemoteRequest = () => {
     // http://manojphuyal-001-site1.atempurl.com/api/GetDoctorComment
      fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctorCommentSingle")
          .then((response) => response.json())
          .then((responseJson) => {
          
          this.setState({
              doctorDetailList:responseJson,
              refreshing:false,
          })
 
         const dataarray = [];
          responseJson.map((item) => {
            dataarray.push(item.Doctor_ID)
          })

          this.setState({
            doctorApi: dataarray.filter((item,index) => dataarray.indexOf(item) === index)
          });

      
        

          })
          .catch((error) => {
          this.setState({
              isLoading:true
          })
          
          ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
          });          
    }

    _onRefresh() {
      this.setState({refreshing: true,},
        this.makeRemoteRequest)
        this.getDoctorApi()
    
    }

    
   

    //for the header section 
    getDoctorApi = () => {
        
      fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctor")
          .then((response) => response.json())
          .then((responseJson) => {
          
          this.setState({
              getDoctorList:responseJson,
              refreshing:false,
          })
          

          })
          .catch((error) => {
          this.setState({
              refreshing:true,

          })
          
          ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
          });
              
  }

    header()
    {
      return(
        <View style={{paddingBottom:20}}>
            <View style={{flexDirection:'row',paddingLeft:15,alignItems:'center'}}>
              <View style={{backgroundColor:'#E05484',height:40,width:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                <Text>{hot}</Text>
              </View>
              
              <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',paddingLeft:10}}>Featured Doctor </Text>
            </View>
           
           {/* using the flatlist */}
           <View style={{paddingTop:20}}>
                <FlatList
                      showsHorizontalScrollIndicator={false}
                      data={this.state.getDoctorList}
                      renderItem={this._getDoctor}
                      horizontal={true}
                      keyExtractor={(item, index) => index.toString()}
                  />
              </View>
              {/* close the flatlist */}
        </View>
      )
    }

    _getDoctor = ({item}) => (
      <View style={{paddingLeft:15}}>
         
         <TouchableOpacity onPress={() => this.props.navigation.navigate('DoctorProfile',
                            {
                                DoctorID:item.Doctor_ID,
                                Image:item.Doctor_Image_URL,
                                Name:item.Doctor_Name,
                                Age:item.Doctor_Age,
                                Speciality:item.Doctor_Specialty,
                                Address:item.Doctor_Address,
                                Biography:item.Doctor_Bio,
                                Education:item.Doctor_Education,
                                Experience:item.Doctor_Experience,
                                Sex:item.Doctor_Sex,
                                Working:item.Hospital_Name,
                                Phone:item.Doctor_Phone,
                                degree:item.Doctor_Degree,


                            })}>
            <View style={{borderRadius:8,width:120,height:230,backgroundColor:"#302F2F"}}>
              <Image             
                    style={{width:120, height:160}}
                    source={{uri:item.Doctor_Image_URL}}
                />

                <View style={{alignItems:'flex-end'}}>
                  <View style={{backgroundColor:'red',height:30,width:30,borderRadius:30,marginTop:-20,alignContent:'center',justifyContent:'center',borderWidth:2,borderColor:'#302F2F'}}>
                    <Text style={{textAlign:'center',color:'#fff'}}>{item.AHP_Point}</Text>
                  </View>
                </View>
                
                <Text style={{color:'#fff',fontWeight:'bold',padding:4,fontSize:12}} numberOfLines={1}>{item.Doctor_Name}</Text>
                <View style={{width:'100%',backgroundColor:'rgba(224,84,132,0.5)',padding:5,marginTop:2,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                  <Text style={{color:'#fff',fontWeight:'bold',padding:4,fontSize:12,textAlign:'center'}} numberOfLines={1}>AHP Score: {item.AHP_Score} </Text>
                </View>
               
               
            </View>
         </TouchableOpacity>
      </View>
    );

    // checkDoctorList(doctorid)
    // {
      
    //     this.state.doctorApi.map((item) => {
    //     if(item != doctorid)
    //     {
    //       this.state.doctorApi.push(doctorid);
    //     }
    //     })
    //     { console.log("viewdata",this.state.doctorApi)}
      
    // }

    //flatlist function for the renderView
    _renderItem = ({item}) => {
     
      return(
      <View style={styles.renderContainer}>

        {/* {this.checkDoctorList(item.Doctor_ID)} */}

        

        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Feedback",{
          doctorId:item.Doctor_ID,
          doctorImage:item.Doctor_Image_URL,
          doctorName:item.Doctor_Name,
        })}>

         
         
          <View style={{flexDirection:'row',elevation:5,paddingTop:20,paddingLeft:10,paddingBottom:20,backgroundColor:'#302F2F'}}>

            <View style={{width:"35%",alignItems:'center'}}>
              <Image
                style={{width: 100, height: 100,borderRadius:50,borderWidth:2,borderColor:'#fff'}}
                source={{uri:item.Doctor_Image_URL}}
                />
            </View>

            <View style={{width:'45%',justifyContent:'center'}}>

              <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}} numberOfLines={1} >{item.Doctor_Name.toString().length < 20?item.Doctor_Name:item.Doctor_Name.toString().substring(0,20) + "..."}</Text>
              <Text style={{color:'#FCF301',fontSize:16,fontWeight:'bold',paddingTop:5,}} numberOfLines={1} >View comments</Text>
              <Text style={{height:1,backgroundColor:'#fff',width:"75%"}}></Text>
                 
            </View>

            <View style={{alignItems:'center',paddingTop:10,width:"20%",justifyContent:'center'}}>
            {item.Doctor_Classification == "1" ?
              <Text  style={{borderWidth:2,borderColor:'green',color:'#fff',fontSize:12,paddingTop:12,paddingRight:3,width:40,height:40,borderRadius:20,textAlign:'center',fontWeight:'bold'}}> +1</Text>
            :
              <Text  style={{borderWidth:2,borderColor:'orange',color:'#fff',fontSize:12,paddingTop:12,paddingRight:3,width:40,height:40,borderRadius:20,textAlign:'center',fontWeight:'bold'}}> -1</Text>
             }
               
            </View> 


          </View>

        </TouchableOpacity>   
      </View>
    
      )};

    body()
    {
      return(
        <View>
           <View style={{flexDirection:'row',paddingLeft:15,alignItems:'center'}}>
              <View style={{backgroundColor:'#E05484',height:40,width:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                <Text>{comment}</Text>
              </View>
              
              <Text style={{fontWeight:'bold',fontSize:20,color:'#fff',paddingLeft:10}}>Recently Reviewed Doctor </Text>
            </View>
           
            
              {/* using the flatlist */}
              <View style={{paddingTop:20}}>
                <FlatList
                      data={this.state.doctorDetailList}
                      renderItem={this._renderItem}
                      showsVerticalScrollIndicator={false}
                     
                      keyExtractor={(item, index) => index.toString()}
                  />
              </View>
              {/* close the flatlist */}

        </View>
      )
    }
    
    render() {
        return (
            <ScrollView 
              refreshControl ={
                <RefreshControl
                refreshing = {this.state.refreshing}
                onRefresh={()=>this._onRefresh()}/>
              }
              style={styles.container}>
                <StatusBar hidden/>
                {this.header()}
                {this.body()}
            
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E8EAEE',
    paddingTop:30,
    backgroundColor:'rgba(0,0,0,0.7)'
  },

  
  
 

  //Start for Review
  renderContainer: {
   paddingTop:5,
  },
  reviewStyle : {
    borderWidth:1,
    borderColor:'gray',
    padding:10,
  },
  reviewText: {
    color:'#000',
    fontSize:16,
  },
  doctorDetailView: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10
  },
  doctorName: {
    fontSize:20,
    color:'#000'
  },
  startPosotion:{
    flexDirection:'row',
  },
  starIcon:{
     paddingLeft:2
  },
  peopleReview: {
    marginTop:10,
    color:'#000',
    fontSize:14,
  },
  peopleDetail: {
      paddingTop:10,
      
  },
  peopleName: {
      fontSize:18,
      color:'#000',
      
  }

  //Close for Review
  
 
});
