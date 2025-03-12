import React from "react";
import { Text,View,StyleSheet,Button } from "react-native";
import { TextInput } from "react-native-web";

export default function Login(){
    return(
        <View style={styles.login1}>
            <Text style={styles.titulo}>Boas vindas!</Text>
            <Text style={styles.titulo}>Sumikkogurashi!</Text>
            <View>
                <TextInput style={styles.input} placeholder="Usuário" inputMode='text'/>
                <TextInput style={styles.input} placeholder="Senha" inputMode='text'/>
            </View>
            <Button title="Login"/>
        </View>
    )
};

const styles=StyleSheet.create({
    login1:{
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white',
        flex:1,
    },
    titulo:{
        fontSize:50,
        alignSelf:'center',
    },
    input:{
        fontSize:30,
        borderWidth:1,
        borderColor:'black',
        margin:20,
    }
})