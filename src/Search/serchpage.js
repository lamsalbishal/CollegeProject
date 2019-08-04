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
      Button,
      TextInput
  } from 'react-native';


const {width,height} = Dimensions.get('window');

export default class Trending extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      getSpecilityList:'',
      
    }
  }

  componentDidMount()
  {
    this.getSpecilityApi();
  }

  //api hit for specility
  getSpecilityApi = () => {
        
    fetch("http://manojphuyal-001-site1.atempurl.com/api/GetDoctorSpeciality")
        .then((response) => response.json())
        .then((responseJson) => {
        
        this.setState({
            getSpecilityList:responseJson,
           
        })
        console.log('get fetch data', responseJson)
        
        })
        .catch((error) => {

        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        });
            
}

  header()
  {
    return(
      <View style={{marginTop:50}}>
        <View>
          <Text style={{fontSize:30,fontWeight:"bold",color:"#fff"}}>Search</Text>
          <Text style={{height:2,backgroundColor:"#fff",width:91,marginLeft:3}}></Text>
          <Text style={{color:"#fff",paddingTop:20,paddingBottom:20}}>Find the right doctor. Get the best care.</Text>
        </View>
        <View style={{paddingTop:30}}>
      
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('FindDoctor')}>
            <View style={{borderWidth:2,borderRadius:20,paddingLeft:20,borderColor:"#fff",backgroundColor:"#fff",height:50}}>
              <Text style={{paddingTop:13}}>Search...</Text>
            </View>
          </TouchableOpacity>
        
        </View>
      
    </View>
    )
  }

   getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  _getSpecility = ({item}) => {
    let x = this.getRandomColor();
    return(
      <View style={{marginTop:10,width:'50%'}}>
    
        <TouchableOpacity 
        onPress={() => {this.props.navigation.navigate('DoctorList',{
          specalityName:item.Doctor_Specialty,
          specalityID:item.Doctor_Specialty_ID,
        })}}
        style={{alignItems:'center',justifyContent:'center',height:100,backgroundColor:x,borderRadius:10,margin:5}}>
          <View  style={{padding:10}}> 
                <Text style={{color:"#fff",fontWeight:'bold',fontSize:15}}>{item.Doctor_Specialty}</Text> 
          </View>
        </TouchableOpacity>
   </View>
    )
  }

  body()
  {
    return(
      <View style={{paddingTop:40}}>
         <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={this.state.getSpecilityList}
                  renderItem={this._getSpecility}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                  />
      </View>
    )
  }
  
  render() {

        return (
          
          <View style={styles.container}>

          <ScrollView>
            <View style={{padding:20}}>


              {this.header()}


              {this.body()}


            </View>
            </ScrollView>
        </View>
        
      )

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginTop:0,
  },

 
 
});