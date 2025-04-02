import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function Counter(){
    const [contador,setContador] = useState(0)
function Aumentar(){
    setContador(contador +1)
}
function Diminuir(){
    setContador(contador -1)
}
    return(
        <View style={styles.conteiner}>
            <Text style={styles.texto}>Contador!</Text>
            <Text style={styles.texto}>Sumikkogurashi</Text>
            <Text style={styles.texto}>Contador:{contador}</Text>
            <Button title="+"  color={'#7575e0'} onPress={Aumentar} ></Button>
            <Button title="-"  color={'#a8a8ed'} onPress={Diminuir} ></Button>

        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fad2dd'
    },
    imagem:{
        height:'248px',
        width:"349px",
        alignSelf:'center',
        borderColor:'#a8a8ed',
        borderWidth:5,
        margin:15,
        
    },
    texto:{
        color:'#7575e0',
        fontSize:35,
        alignSelf:"center",
        textDecorationStyle:'dotted',
        textDecorationColor:'#a8a8ed',
        textDecorationLine:'underline',
        margin:40,
    }
})