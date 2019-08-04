import React, {Component} from 'react';
import {
        StyleSheet,
        Text,
        View,
        TouchableOpacity,
        AsyncStorage,
        Image
        } from 'react-native';
import LoginForm from './login_form';

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loginVal:false,
      registerVal:''

    }
  }

  componentDidMount()
  {
    this._reteriveData();
  }

  _reteriveData = async() =>
  {
    try{
      const value = await AsyncStorage.getItem('signin');
      if(value != null)
      {
        const registerVal = await AsyncStorage.getItem('register');
        console.log("value",value);
        const x = [];
        x.push(JSON.parse(registerVal))
        this.setState({
          loginVal:value,
          registerVal:x
        })
      }
    
     
      
    }catch(e)
    {
      console.log(e);
    }
    console.log("loginval",this.state.registerVal);
   
  }



  logout = async() => {
    try {
      await AsyncStorage.removeItem("signin");
      
      this.props.navigation.navigate("Home");
     
    }
    catch(exception) {
     console.log("error","error in logout")
    }
   
  }


  
  render() {
    if(this.state.loginVal)
    {
      return(
        <View>
          {this.state.registerVal.map((item) => 
          

          <View>
            <View style={{width:'100%',height:200,backgroundColor:'#F2F2F2',alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/doctoricon.png')} style={{width:60,height:60,borderRadius:30,borderWidth:1,borderColor:'gray',padding:10}} />
              <Text style={{paddingTop:10}}>{item.username}</Text>
              <Text>{item.email}</Text>
            </View>
            <View style={{padding:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Information</Text>
              <Text style={{paddingTop:5}}>The most comprehensive people search. Pipl is the place to find the person behind the email address, social username or phone number.</Text>
              <Text style={{paddingTop:10}}>Country: {item.countryname}</Text>
              <Text style={{paddingTop:10}}>Address: {item.countryaddress}</Text>
              <Text style={{paddingTop:10}}>Email: {item.email}</Text>
              <Text style={{paddingTop:10}}>Phone: {item.phone}</Text>
            </View>
         </View>
          )}

          <View style={{justifyContent:'flex-end',backgroundColor:'blue',padding:10,margin:20}}>
            <TouchableOpacity onPress={() => this.logout()} >
              <Text style={{color:'#fff',fontSize:16,fontWeight:'bold',textAlign:'center'}}>Logout</Text>  
              </TouchableOpacity>
          </View>
        </View>
      )

    }else
    {

      return (
        <View style={styles.container}>
           
          <View style={styles.loginDialogBox}>
              <LoginForm type="Sign In" navigation={this.props.navigation} />
              <View style={styles.signUpAccount}>
                  
                  <Text style={styles.signupText}>Don't have any account? </Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                      <Text style={styles.signupButton}> Sign Up</Text>
                  </TouchableOpacity>
  
              </View>  
          </View>
  
        </View>
      );

    }
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAEE',
  },

  loginDialogBox:{
    backgroundColor:'#ffffff',
    width:350,
    height:350,
    borderRadius:20,
    paddingTop:50,
  },

  textContain: {
    color:'#FF0000',
  },

  signUpAccount:{
    alignItems:'center',
    marginBottom:10,  
  },

  signupText:{
    color:'#000000',
    fontSize:16,
    textAlign:'center',
  },

  signupButton:{
    color:'#000000',
    fontSize:18,
  }
  
});