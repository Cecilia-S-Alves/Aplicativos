import { ScrollView, Text,Image, Button, StyleSheet } from "react-native";

export default function Feed({navigation}){
    return(
        <ScrollView style={styles.conteiner}>
            <Text style={styles.texto}>Feed!</Text>
            <Text style={styles.texto}>Sumikkogurashi</Text>

            <Image style={styles.imagem} source={{uri:'https://cdn.shopify.com/s/files/1/0683/0194/7201/files/sumikko-gurashi-how-many-sumikko-gurashi-are-theresumikko-gurashi-cafe-740px_jpg.jpg?v=1687248610'}}/>
            <Image style={styles.imagem} source={{uri:'https://i.pinimg.com/736x/46/79/81/46798151b712e27b7cd7a900bee0c631.jpg'}}/>
            <Button title="Saiba mais" onPress={()=> navigation.navigate('home')} color={'#7575e0'}></Button>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:'space-evenly',
        backgroundColor:'#fad2dd'
    },
    imagem:{
        height:'248px',
        width:"349px",
        alignSelf:'center',
        borderColor:'#a8a8ed',
        borderWidth:5,
        
    },
    texto:{
        color:'#7575e0',
        fontSize:35,
        alignSelf:"center",
        textDecorationStyle:'dotted',
        textDecorationColor:'#a8a8ed',
        textDecorationLine:'underline',
    }
})