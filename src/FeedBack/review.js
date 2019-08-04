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

import Icon from 'react-native-vector-icons/Entypo';

const sadoff = <Icon name="emoji-sad" size={40} color="grey"/>
const sadon = <Icon name="emoji-sad" size={40} color="#FCB202"/>
const happyoff = <Icon name="emoji-happy" size={40} color="grey"/>
const happyon = <Icon name="emoji-happy" size={40} color="#FCB202"/>

export default class Review extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
                    search:'',
                   
                    doctorname:'',
                   
                    feedbackText:'',
                    useremail:'',
                    doctorID:'',
                    dataSet:'',
                    doctorDetailList:'',
                    doctorDetailListView:'',
                    errorText:false,
                    showIndicator:false,

                    feedbackResult:'',
                    feedbackValidate:false,
                    emailValidation:false,
                    feedbackError:false,
                    emailError:false,
                    submitApiHit:false,


                        
                       
                }
    }


    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('doctorName', 'Feedback'),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#302F2F',
           
          },

        };
    };

        //submit the form
    feedBackForm(text,type){
        alph = /^[a-zA-Z]+$/;
        reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(type == 'feedbackText')
        { 
            this.setState({
                feedbackText:text,
               
            })

            this.onFeedbackClick()
            // if(alph.test(text)){
            //     this.setState({
            //         feedbackValidate:true,
            //         feedbackText:text,
            //     })
            //   }else{
            //     this.setState({ 
            //         feedbackValidate:false
            //     })
            // }  
    }else if(type == 'useremail')
    {
        if(reg.test(text)){
            this.setState({
                useremail:text,
                emailValidation:true,
            })
          }else{
            this.setState({
                emailValidation:false
            })
          } 
    }

    }

    
   //for the feedback check positive or negative
    onFeedbackClick()
    {
       
        { 

            let collection = {}
            collection.feedback = this.state.feedbackText
            
           
            fetch('https://classify-feed.herokuapp.com/'+this.state.feedbackText, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(collection), // data can be `string` or {object}!
              headers:{
                'Accept': 'appliaction/json',
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .then(
                response => {
                
                  this.setState({
                      dataSet:response.data
                  })
                  let feedback_result = this.state.dataSet[0].classification;
                  
                  this.setState({
                      feedbackResult:feedback_result
                  })
                  console.log('feedback result',feedback_result)

                  let x ;
                  if(feedback_result == "Positive")
                  {
                      x = 1
                      
                  }else{
                      x=0
                     
                  }

                if(this.state.submitApiHit == true)
                {
                    this.allDataPOST(x);
                }else{
                    this.setState({
                        submitApiHit:false
                    })
                }
                  
                }
                // showMe=>false
                ).catch(error => {
                 
                 console.log('Login error',error)
                  
                });


        } 
    }

     //Close the feedback check positive or negative


     //feedback post 
         allDataPOST(x){
            
           
                 

            let collection ={}

            collection.Doctor_Classification= x,
            collection.Doctor_Comment = this.state.feedbackText, 
            collection.Doctor_ID=this.props.navigation.getParam("doctorID"),
            collection. User_Email = this.state.useremail,
            collection. Doctor_Point_No = "1",
            collection.Doctor_Star = "1",
        
            console.log('feedback collection',collection);

            fetch('http://manojphuyal-001-site1.atempurl.com/api/PostDoctorComment', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(collection), // data can be `string` or {object}!
                headers:{
                'Accept': 'appliaction/json',
                'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(
                response => {
                    
                
                    ToastAndroid.show('Success full', ToastAndroid.SHORT);
                    
                }
                // showMe=>false
                ).catch(error => {
                
                console.log('Login error',error)
                    
                });

                
            this.setState({
                showIndicator:false,
                 
            
            })     
        this.props.navigation.navigate("Home"); 
    }
     //close the feedback


    
    feedbackSubmit()
    {
        
        this.setState({
                showIndicator:true
            })

        if(!this.state.feedbackText == '')
        { 
            if(!this.state.useremail == '' && this.state.emailValidation)
            {
              this.setState({
                  submitApiHit:true
              })
               this.onFeedbackClick()
            }else{
                ToastAndroid.showWithGravityAndOffset(
                    'Email Error',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                  );
            }

        }else
        {
            ToastAndroid.showWithGravityAndOffset(
                'Feedback Error',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
              );
        }
    }



    header()
    {
        return(
            <ScrollView style={{flex:1}}>
               

                <View style={{backgroundColor:'rgba(0, 0, 0, 0.7)',paddingTop:40,paddingLeft:20,paddingBottom:40,paddingRight:20}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>
                        Send us your Feedback! 
                    </Text>
                    <Text style={{color:'#fff',paddingTop:10}}>
                        Do you have a suggestion or found some bug?
                    </Text>
                    <Text style={{color:'#fff',paddingTop:1}}>
                        let us know in the field below.
                    </Text>
                </View>

                <View style={{padding:20}}>

                  <Text style={{fontSize:18,color:'#000',}}>How was your experiance?</Text>
                  
                  <View style={{flexDirection:'row',padding:10}}>
                      <View>
                        {this.state.feedbackResult == "Positive" ? 
                         <Text style={{paddingRight:10,color:'red'}}>{happyon}</Text>
                        : <Text style={{paddingRight:10,color:'red'}}>{happyoff}</Text>}
                      </View>
                      <View>
                      {this.state.feedbackResult == "Negative" ? 
                         <Text style={{paddingRight:10,color:'red'}}>{sadon}</Text>
                        : <Text style={{paddingRight:10,color:'red'}}>{sadoff}</Text>}
                      </View>
                      
                      
                  </View>
         

                    <TextInput
                            style={{height: 80,backgroundColor:'#E8EAEE',marginTop:20,padding:10}}
                            onChangeText={(text) => this.feedBackForm(text,'feedbackText')}
                            placeholder="Feedback ..."
                            returnKeyType = {"next"}
                            multiline={true}
                            autoFocus = {true}
                            onSubmitEditing={() => {this.firstTextInput.focus(); }}
                           
                        />

        
                    <TextInput
                        keyboardType="email-address"
                        style={{height: 50,backgroundColor:'#E8EAEE',marginTop:20,padding:10}}
                        onChangeText={(text) => this.feedBackForm(text,'useremail')}
                        placeholder="email@gmail.com"
                        value={this.state.text}
                        ref={(input) => { this.firstTextInput = input; }}
                    />

                    <View style={{paddingTop:20}}>
                        {this.state.showIndicator == true
                        ?<ActivityIndicator></ActivityIndicator>
                        :

                        <TouchableOpacity onPress={() => {this.feedbackSubmit()}}>
                                <View >
                                    <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',backgroundColor:'#E05484',textAlign:'center',padding:15,borderRadius:50}}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={{paddingTop:20}}>
                        <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                                <View >
                                    <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',backgroundColor:'#f2091d',textAlign:'center',padding:15,borderRadius:50}}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                </View>
 
               
            </ScrollView>
        )
    }

    render()
    {
        return(
            <ScrollView style={{flex:1}}>
                {this.header()}
            </ScrollView>
        )
    }
}