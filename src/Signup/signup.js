import React, {Component} from 'react';
import {
        StyleSheet,
        Text, 
        View,
        TouchableOpacity,
        ScrollView
        } from 'react-native';
import SignUpForm from './signup_form';


export default class Signup extends Component {

    //navigation header bar
    static navigationOptions = ({ navigation }) => {
        return {
        title: 'Sign Up',
        };
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <SignUpForm type="Signup" navigation={this.props.navigation}/>
                    <View style={styles.signUpAccount}>

                        <Text style={styles.signupText}>
                            Have already account? 
                        </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.signupButton}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E8EAEE',
    },

    textContain: {
        color:'#FF0000',
    },

    signUpAccount:{
        flexGrow:1,
        alignItems:'center',
        flexDirection:'row',
        margin:10,
    },

    signupText:{
        color:'#000000',
        fontSize:16,
    },

    signupButton:{
        color:'#000000',
        fontSize:18,
    }
  
});