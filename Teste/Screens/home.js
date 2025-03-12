import { Text,Image,ImageBackground,View,StyleSheet } from "react-native";

export default function Home(){
    return(
        <View style={styles.home1}>
            <ImageBackground style={{flex:1}} source={{uri:'https://wallpapercave.com/wp/wp14439308.jpg'}}>
            <Text style={styles.titulo}>Personagens de Sumikkogurashi!</Text>
            <View style={styles.imagens}>
                <Image style={styles.foto} source={{uri:'https://static.wikia.nocookie.net/sumikko-gurashi/images/f/fd/Neko.png/revision/latest?cb=20230126202605'}}/>
                <Image style={styles.foto} source={{uri:'https://static.wikia.nocookie.net/sumikko-gurashi/images/5/56/Shirokuma.jpg/revision/latest/scale-to-width/360?cb=20230126020840'}}/>
            </View>
            <Text style={styles.texto} >Os mais fofos!</Text>
            <View style={styles.imagens}>
                <Image style={styles.foto}  source={{uri:'https://static.wikia.nocookie.net/sumikko-gurashi/images/6/69/Tokage.jpeg/revision/latest/scale-to-width/360?cb=20200801111137'}}/>
                <Image style={styles.foto}  source={{uri:'https://static.wikia.nocookie.net/sumikko-gurashi/images/1/18/Tonkatsu.jpg/revision/latest?cb=20230126202740'}}/>
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
    },
    texto:{
        fontSize:50,
        alignSelf:'flex-end',
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
    },
})

