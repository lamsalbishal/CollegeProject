import React,{Component} from 'react';
import {View,Text,Modal} from 'react-native';

export default class ToastMessage extends Component{
    render(){
        return(
            <Modal 
              transparent={true}
              onShow={this.props.onShow}
              visible={this.props.modalVisible}
                ><View style={{flex:1,justifyContent:'flex-start'}}>
                    <View style={{height:'8%',backgroundColor:'#FFFF2A',elevation:4,justifyContent:'center'}}>            
                        <Text style={{color:'black',fontSize:16,textAlign:'center'}}>{this.props.toastMessage}</Text>
                    </View>  
                </View>
            </Modal>
        )      
    }
}