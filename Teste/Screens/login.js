import React from "react";
import { Text,View,StyleSheet,Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";


export default function Login({navigation}){
    return(
        <View style={styles.login1}>
            <Text style={styles.titulo}>Boas vindas!</Text>
            <Text style={styles.titulo}>Sumikkogurashi!</Text>
            <View>
                <TextInput style={styles.input} placeholder="Usuário" inputMode='text'/>
                <TextInput style={styles.input} placeholder="Senha" inputMode='text' secureTextEntry='false'/>
            </View>
            <TouchableOpacity style={styles.bo} onPress={()=> navigation.navigate('tabs')} >
                <Text style={styles.tsxtbo}>Login</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({
    login1:{
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#fad2dd',
        flex:1,
    },
    titulo:{
        fontSize:50,
        alignSelf:'center',
        color:'#a8a8ed',
        textDecorationStyle:'dashed',
        textDecorationLine:'underline',
    },
    input:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#7575e0',
        margin:20,
        color:'#7575e0',
    },
    bo:{
        width:'40%',
        backgroundColor:'#7575e0',
        height:'8%',
    },
    tsxtbo:{
        color:'#ffff',
        textAlign:'center',
        fontSize:35,
        justifyContent:'center',
    }
})