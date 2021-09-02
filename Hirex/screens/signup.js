import React from 'react';
import { Text, TextInput, View, SafeAreaView, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

const Signup = () =>{
    return(
        <SafeAreaView>
            <View style={styles.l_layout}>
                <View style={styles.s_box1}>
                <Image  source={require('../assets/signup3.png')} styles={styles.l_image}/>
                </View>
                <View style={styles.l_box2}>
                    <Text style={styles.l_heading}>Create Account</Text>
                    <TextInput style={styles.l_input1} placeholder="   Enter your email"/>
                    <TextInput style={styles.l_input2} placeholder="   Choose a strong password"/>
                    <Pressable style={styles.l_button}><Text style={{color:'white'}}>Signup</Text></Pressable>
                    <View style={styles.l_media}>
                        <Image source={require('../assets/icons1.png')} style={styles.l_facebook}/>
                        <Image source={require('../assets/icons2.png')} style={styles.l_facebook}/>
                        <Image source={require('../assets/icons3.png')} style={styles.l_facebook}/>
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    l_layout:{
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor:'#0679FF',
    },
    s_box1:{
        justifyContent:'center',
        alignItems:'center'
    },
    l_box2:{
        flexDirection:'column',
        borderTopLeftRadius:20,
        borderTopLeftRadius:20,
    },
    l_heading:{
        alignSelf:'flex-start',
        fontSize:30,
        fontWeight:'bold',
    },
    l_image:{
        height:100,
        width:100,
        alignSelf:'center',
    },
    s_box1:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50,
        paddingBottom:20,
    },
    l_box2:{
        flexDirection:'column',
        backgroundColor:'white',
        borderTopEndRadius:40,
        borderTopStartRadius:40,
        paddingVertical:30,
        paddingHorizontal:30,
    },
    l_heading:{
        fontSize:27,
        fontWeight:'bold',
    },
    l_input1:{
      marginHorizontal: 5,
      marginTop:40,
      borderWidth: 0.5,
      padding: 10,
      margin: 10,
      marginBottom:20,
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      height:65,
      borderColor:'#212121',
    },
    l_input2:{
        marginHorizontal: 5,
        marginTop:1,
        borderWidth: 0.5,
        padding: 10,
        margin: 10,
        marginBottom:20,
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height:65,
        borderColor:'#212121', 
    },
    l_button:{
        marginHorizontal: 5,
        marginTop:5,
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height:65,
        backgroundColor:'#0679FF',
    },
    l_media:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40,
        marginHorizontal:30,
    },

});


export default Signup