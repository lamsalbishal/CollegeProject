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
    Image
} from 'react-native';





export default class DoctorList extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            isLoading:false,
            doctorDetailList:'',
            SpecialityIDData:this.props.navigation.getParam("specalityID"),
        }
    }

   

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('specalityName', 'Doctor List'),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#302F2F',
           
          },
        };
    };


    //component did mount
    componentDidMount(props){
     
        this.makeRemoteRequest()
    }

    
    // fetch the api 
    makeRemoteRequest = () => {
        
        fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctor")
            .then((response) => response.json())
            .then((responseJson) => {
            
            this.setState({
                doctorDetailList:responseJson.filter((item) => item.Doctor_Specialty_ID == this.state.SpecialityIDData),
                refreshing:false,
            })
            console.log('get doctor list data', responseJson)
            
            })
            .catch((error) => {
            this.setState({
                refreshing:true,

            })
            
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
            });
                
    }


   

    _renderItem = ({item}) =>{
       
        
           return(
                <View style={{paddingTop:10}}>
                   {console.log("itemList", item)}
                   <View style={{flexDirection:'row',elevation:5,paddingTop:20,paddingLeft:10,paddingBottom:20,backgroundColor:'#302F2F'}}>
                   
                        <View style={{width:'30%'}} >
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
                                degree:item.Doctor_Degree


                            })}>
                                <Image             
                                    style={{width:100, height:100,borderRadius:100,borderColor:'#fff'}}
                                    source={{uri:item.Doctor_Image_URL}}
                                />
                               <View style={{alignItems:'flex-end'}}>
                                    <View style={{backgroundColor:'red',height:25,width:25,borderRadius:30,marginTop:-30,alignContent:'center',justifyContent:'center',borderWidth:2,borderColor:'#00'}}>
                                        <Text style={{textAlign:'center',color:'#fff',fontSize:12}}>{item.AHP_Point}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                           
                        </View>
                        <View style={{paddingLeft:10,width:'40%',justifyContent:'center'}}>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>{item.Doctor_Name}</Text>
                            <Text style={{color:'#fff'}}>Age {item.Doctor_Age}</Text>
                            <Text style={{color:'#fff'}}>{item.Doctor_Specialty}</Text>
                            
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',paddingRight:20,width:'30%'}}>
                            <View style={{height:60,borderColor:'#E05484',borderWidth:2,alignItems:'center',padding:5}}>
                                <Text style={{fontSize:18,color:'#fff',textAlign:'center'}}>{item.AHP_Score}</Text>
                                <Text style={{color:'#fff',fontSize:10}}> AHP Score</Text>
                          </View>
                                
                            
                        </View>
                    </View>
                </View>

           )
 

    }
                   
                    
                    

    body()
    {
        return(
            <View style={{paddingTop:20}}>
                <View style={{flexDirection:'row',paddingBottom:10,alignItems:'center'}}>
                  <Text style={{paddingLeft:10,color:'#fff',fontSize:17}}>Recommended doctors for </Text>
                  <Text style={{paddingLeft:5,color:'#fff',fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>{this.props.navigation.getParam('specalityName', 'Doctor List')}</Text>
                </View>
                <View>
                    <FlatList
                        extraData= {this.state}
                        data={this.state.doctorDetailList}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
               
            </View>
        )
    }

    render()
    {
        return(
            <View style={{backgroundColor:'rgba(0,0,0,0.6)',flex:1}}>

                 
                {this.body()}
                
            </View>
          
        )
    }
}


