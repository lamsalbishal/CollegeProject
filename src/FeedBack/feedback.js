import React, {Component} from 'react';
import {
     StyleSheet, 
     Text, 
     StatusBar,
     View,
     TextInput,
     TouchableOpacity,
     Share,
     KeyboardAvoidingView,
     Image,
     FlatList,
     RefreshControl
    } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const search = <Icon name="search" size={20} color="#000"/>
const share = <Icon name="share" size={20} color="#000"/>
const star = <Icon name="star" size={20} color="#000"/>

export default class Feedback extends Component {
      
    constructor(props){
        super(props); 
        this.state = {
            doctorDetailList:'',
           
            refreshing: false,
            startArray : []
          }
    }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'Feedback'),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#302F2F',
           
          },

        };
    };

    componentDidMount(){
        this.makeRemoteRequest();
        
     }

    makeRemoteRequest = () => {
        fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctorComment")
            .then((response) => response.json())
            .then((responseJson) => {
            
            this.setState({
                doctorDetailList:responseJson.filter((item) => item.Doctor_ID == this.props.navigation.getParam("doctorId")),
                refreshing:false,
            })
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
          this.makeRemoteRequest())
      
      }

    header(){
        return(
            <View style={{height:280}}>
                <Image 
                    style={{height:250,width:"100%",resizeMode:'cover'}}
                    source={{uri:this.props.navigation.getParam('doctorImage')}}
                ></Image>
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.3)',marginTop:-34}}>
                    <Text style={{paddingLeft:20,paddingTop:10,paddingRight:10,fontWeight:'bold',color:'#000',fontSize:18}}>{this.props.navigation.getParam("doctorName")}</Text>
                </View>
               
             
            </View>
        )
    }

    _renderItem = ({item}) => (
        <View style={styles.renderContainer}>

            <View style={{elevation:5,paddingTop:20,paddingLeft:10,paddingBottom:20,backgroundColor:'#302F2F'}}>
                <Text  style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>{item.Doctor_Comment}</Text>
                <View style={{flexDirection:'row',paddingTop:5}}>
                    <View style={{width:'50%'}}>
                        <Text style={{color:'#fff',fontSize:10,}} >{item.User_Email}</Text>
                        <Text style={{color:'#fff',fontSize:10}} >{item.Doctor_Comment_Date}</Text>
                    </View>
                    <View style={{alignItems:'flex-end',width:'50%',paddingRight:20}}>
                       {item.Doctor_Classification == "1"?
                       <Text style={{backgroundColor:'green',color:'#fff',paddingLeft:13,paddingRight:13,paddingTop:5,paddingBottom:5,borderRadius:8}}>Positive</Text>
                       :
                       <Text style={{backgroundColor:'orange',color:'#fff',paddingLeft:13,paddingRight:13,paddingTop:5,paddingBottom:5,borderRadius:8}}>Negative</Text>
                       }
                    </View>
                </View>
            </View>
        </View>
    );
  
      body()
      {
        return(
          <View>
              <View>
             
                <Text style={{fontWeight:'bold',fontSize:16,color:'#fff',paddingLeft:10}}>Reviewed Doctor</Text>
              </View>
                {/* using the flatlist */}
                <View style={{paddingTop:20}}>
                  <FlatList
                       
                        data={this.state.doctorDetailList}
                        renderItem={this._renderItem}
                        showsVerticalScrollIndicator={false}
                        refreshControl ={
                          <RefreshControl
                          refreshing = {this.state.refreshing}
                          onRefresh={()=>this._onRefresh()}/>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                {/* close the flatlist */}
  
          </View>
        )
      }

   
    render(){
        return(
            <KeyboardAvoidingView behavior="padding">
            <ScrollView style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}} >
                {this.header()}
                {this.body()}
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#E8EAEE',
      paddingTop:30,
      backgroundColor:'rgba(0,0,0,0.7)'
    },
  
    
    
   
  
    //Start for Review
    renderContainer: {
     paddingTop:5,
    },

})

