import {Text, View, StyleSheet, Image} from 'react-native';

export default function Tela(){
    return(
        <View style={styles.Tela}>
            <Text style={styles.texto1tela}>Sanrio</Text>
            <View style={styles.row}>
                <Image style={styles.imagemtela} source={{uri:'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_KU_1200x1200_1_1024x1024.png?v=1664470975'}}/>
                <Image style={styles.imagemtela} source={{uri:'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_CN_1200x1200_88c02180-90a1-4745-921e-341c191ec84a_480x480.png?v=1646098139'}}/>
            </View>
            <Text style={styles.texto2tela}>friends!</Text>
            <View style={styles.row}>
                <Image style={styles.imagemtela} source={{uri:'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_PN_1200x1200_d3d2c3bb-d4a4-4bbd-8c5a-0d3739f7923c_480x480.png?v=1648494640'}}/>
                <Image style={styles.imagemtela} source={{uri:'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_KR_1200x1200_9daa3a2f-bca0-4c2b-a947-f1a4287b535a_480x480.png?v=1656536264'}}/>
            </View>
            <Text style={styles.texto3tela}>Créditos: Cecília e Rafaela (design)</Text>

        </View>
    )
};
const styles = StyleSheet.create({
    texto1tela:{
        alignSelf:'flex-start',
        fontSize:60,
        color:'rgb(185, 101, 250)',
        fontWeight:'bold',
        margin:15,
    },
    texto2tela:{
        alignSelf:'flex-end',
        fontSize:60,
        color:'rgb(185, 101, 250)',
        fontWeight:'bold',
        margin:15,
    },
    texto3tela:{
        alignSelf:'center',
        fontSize:20,
        color:'rgb(150, 95, 55)',
        textAlign:'center',
    },
    imagemtela:{
        height:160,
        width:160, 
    },
    Tela:{
        flex:1,
        backgroundColor:'rgb(250, 205, 227)',
        justifyContent:'space-evenly',
    },
    row:{
        flexDirection: 'row',
        flexWrap:'wrap',
        alignSelf:'center',
        gap:25,
    },
})