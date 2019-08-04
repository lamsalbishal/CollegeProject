import React, {Component} from 'react';
import {
        StyleSheet,
        View,
        TextInput,
        TouchableOpacity,
        Text,
        ActivityIndicator,
        AsyncStorage,
        ToastAndroid,
        Alert
        } from 'react-native';

export default class LoginForm extends Component{

  //constructor 
  constructor(props){
    super(props);
    this.state = {
        username : '',
        usernameValidate: true,
        password : '',
        passwordValidate:true,
        showMe:false, 
        registerItem:''
    }

  }

 
  
  //validation the form
  loginValidate(text,type){
    alph = /^[a-zA-Z]+$/
    passval = /^[0-9a-zA-Z]+$/
    
        if(type == 'username')
         {  

           if(alph.test(text)){
               this.setState({
                   usernameValidate:true,
                   username:text,
               })
           }else{
               this.setState({
                   usernameValidate:false
               })
           } 
        }
        

        if(type == 'password'){
          if(passval.test(text)){
            this.setState({
                passwordValidate:true,
                password:text,
            })
          }else{
            this.setState({
                passwordValidate:false
            })
         } 
        }
  } 

  //submitting the form
  login()
  {
    
    this.setState({
      showMe:true
    })
    if(this.state.username == ''  &&  this.state.password == '' ){
        Alert.alert('Soory','Please field the form !');
        this.setState({
          showMe:false
        })

    } else{
        this._login_form();
        
    }
  }
  
  //login part
  //  = () => {
   
  //   this.setState({
  //     showMe:false,
  //   })
  //   let collection = {}
  //   collection.username = this.state.username,
  //   collection.password = this.state.password

  //   console.log("loginItem",this.state.registerItem);

  //    this.state.registerItem.map((item) => {
  //      {item.username == this.state.username ? console.log("username correct"):null}
  //    })            
    
       
  // }

  _login_form = async () => {
    try {
      
      const value = await AsyncStorage.getItem('register');
      console.log("value",value);
      const x = [];
      x.push(JSON.parse(value))
      if(value != null)
      {
        x.map((item) =>
        {
          {item.username == this.state.username?
            item.password == this.state.password?
            this.successLogin()
            
            :
            Alert.alert(
              'Soory',
              'Password not match',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            ):
            Alert.alert(
              'Soory Title',
              'Username not match',
              [
               
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
          }
        })
      
      }


    } catch (error) {
      // Error retrieving data
    }
   this.setState({
     showMe:false
   })
  };

  successLogin = () => {
    Alert.alert("message","i am at login");
    AsyncStorage.setItem('signin',"true");
    this.props.navigation.navigate('DoctorList') 

   
  }
   
  
  //render the data 
  render() {
    
    return (
        <View style={styles.container}>
           

            {/* username input field */}
            <TextInput 
                style={[styles.inputBox, !this.state.usernameValidate?styles.error:null]} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                onChangeText={(text) => this.loginValidate(text,'username')} 
                placeholder="UserName" 
                placeholderTextColor='#000000'
                returnKeyType = {"next"}
                autoFocus = {true}
                onSubmitEditing={() => { this.firstTextInput.focus(); }}/>
            
            {/* password input field */}
            <TextInput 
                style={[styles.inputBox, !this.state.passwordValidate?styles.error:null]} 
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)' 
                onChangeText={(text) => this.loginValidate(text,'password')} 
                placeholder="Password"
                placeholderTextColor='#000000'
                ref={(input) => { this.firstTextInput = input; }}/>
          
            {/* for the login button */}
            {this.state.showMe?
              <View>
                  <ActivityIndicator size="large" />
              </View>:
              
            
            <TouchableOpacity
                style={styles.button}
                navigation={this.props.navigation} 
                onPress= {() => {this.login()}}>
                <Text
                    style={styles.bottomText}>
                    {this.props.type}
                </Text>
            </TouchableOpacity>
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
    },

    inputBox: {
        backgroundColor:'#E8EAEE',
        width:300,
        color:'#000000',
        fontSize:16,
        paddingHorizontal:16,
        margin:5,
        borderRadius:50,
        paddingLeft:30,   
    },

    bottomText:{
        color:'#ffffff',
        fontSize:20,
        textAlign:'center',
        margin:5,
    },

    button:{
        backgroundColor:'#16a085',
        width:100,
        borderRadius: 50,
        marginTop:15,
        borderWidth: 1,
        borderColor:"#000000",
    },
    
    error:{
        borderWidth:3,
        borderColor:'red',
    }
});
