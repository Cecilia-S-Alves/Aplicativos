import { Text,Image,ImageBackground,View,StyleSheet } from "react-native";

export default function Home(){
    return(
        <View style={styles.home1}>
            <ImageBackground style={{flex:1}} source={{uri:'https://wallpapercave.com/wp/wp14439308.jpg'}}>
            <Text style={styles.titulo}>Personagens de Sumikkogurashi!</Text>
            <View style={styles.imagens}>
                <Image style={styles.foto}  source={{uri:'https://girlsprintinghouse.com/cdn/shop/files/7.png?v=1695857207&width=493'}}/>
                <Image style={styles.foto} source={{uri:'https://girlsprintinghouse.com/cdn/shop/files/10_523a6020-b500-4165-a293-d624cf8e78ee.png?v=1695857369&width=600'}}/>
               
            </View>
            <Text style={styles.texto} >Os mais fofos!</Text>
            <View style={styles.imagens}>
                 <Image style={styles.foto} source={{uri:'https://girlsprintinghouse.com/cdn/shop/files/5.png?v=1695857183&width=493'}}/>
                <Image style={styles.foto}  source={{uri:'https://girlsprintinghouse.com/cdn/shop/files/4.png?v=1695857152&width=493'}}/>
            </View>
            <View style={styles.imagens}>
            <Image style={styles.foto}  source={{uri:'https://girlsprintinghouse.com/cdn/shop/files/6.png?v=1695857066&width=493'}}/>
            </View>
            <Text style={styles.texto1}>Obrigada por passar por aqui!</Text>
            </ImageBackground>
        </View>
    )
};

const styles=StyleSheet.create({
    home1:{
        flex:1,
    },
    titulo:{
        fontSize:50,
        alignSelf:'flex-start',
        color:'#a8a8ed',
        textDecorationStyle:'double',
        textDecorationLine:'underline',
    },
    texto:{
        fontSize:50,
        alignSelf:'flex-end',
        color:'#a8a8ed',
        textDecorationStyle:'dotted',
        textDecorationLine:'underline',
    },
    imagens:{
        flexDirection:"row",
        flexWrap:'wrap',
        alignSelf:'center',
        gap:25,
    },
    foto:{
        height:160,
        width:160,
    },
    texto1:{
        fontSize:20,
        alignSelf:'center',
        color:'#8585f2',
    },
})

