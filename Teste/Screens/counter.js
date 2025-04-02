import { View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-web";

export default function Counter(){
    const [contador,setContador] = useState(0)
function Aumentar(){
    setContador(contador +1)
}
function Diminuir(){
    if(contador>0.5){
    setContador(contador -1)
    }
    
}
    return(
        <View style={styles.jeronimo}>
            <Text style={styles.texto}>Contador!</Text>
            <Text style={styles.texto}>{contador}</Text>
            <View style={styles.botao}>
            <TouchableOpacity style={styles.bo} onPress={Aumentar} ><Text style={styles.textbo}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bo} onPress={Diminuir} ><Text style={styles.textbo}>-</Text></TouchableOpacity>
            </View>
            <View style={styles.caixa}>
            <TextInput style={styles.input} placeholder="Nome" inputMode='text'/>
            <TextInput style={styles.input} placeholder="Email" inputMode='text'/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    jeronimo:{
        flex:1,
        backgroundColor:'#fad2dd',
        alignContent:'center',
    },
    texto:{
        color:'#7575e0',
        fontSize:45,
        alignSelf:"center",
        textDecorationStyle:'dotted',
        textDecorationColor:'#a8a8ed',
        textDecorationLine:'underline',
        margin:35,
    },
    botao:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'flex-end',
        width:'100%',
    },
    bo:{
        backgroundColor:'#7575e0',
        width:'40%',
        borderWidth:5,
        borderColor:'#a8a8ed'
    },
    textbo:{
        textAlign:'center',
        color:'#ffff',
        fontSize:40,

    },
    input:{
        fontSize:30,
        borderWidth:1,
        borderColor:'#7575e0',
        color:'#7575e0',
        width:'80%',
        alignSelf:'center'
    },
    caixa:{
        flex:0.5,
        justifyContent:'space-evenly',
    }
})