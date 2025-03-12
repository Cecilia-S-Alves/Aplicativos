
import {Text, View, StyleSheet, Image} from 'react-native';

export function Profile(){
    return(
        <View style={styles.Profile}>
            <Text style={styles.texto}>lorem ipsum</Text>
            <Text style={styles.texto1}>i gotta a feeling</Text>
            <Image style={styles.imagem} source={require('../assets/mymelodyimg.webp')}/>
        </View>
    );
}
export default function Gallery() {
    return(
        <View style={styles.container}> 
        <Text style={styles.texto}>Marilu</Text>
        <Image style={styles.imagem} source={{uri:'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_KU_1200x1200_1_1024x1024.png?v=1664470975'}}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b10B70',
    },
    texto:{ 
        marginTop:50,
        fontSize: 70,
    },
    texto1:{ 
        fontSize: 50,
        color:'#b10'
    },
    Profile:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70B10B',
    },
    imagem:{
        height:200,
        width:200,
        marginBottom:50,
    },
    
})
