import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default function Nutri(props){
    return(
        <View>
            <View style={styles.card}>
                <Image resizeMode='cover' style={styles.capa} source={{uri: props.data.cover_nutri}} />
                <Text style={styles.titulo}>{props.data.title_nutri}</Text>
                <Text style={styles.subtitulo}>{props.data.subtitle_nutri}</Text>
                <Text style={styles.categoria}>Categoria: {props.data.category_nutri.toUpperCase()}</Text>
                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txtBtn}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        margin: 15,
        shadowColor: '#000',
        shadowOpacity: .8,
        elevation: 3,
        borderRadius: 5,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 1}
    },
    capa:{
        height: 250
    },
    titulo:{
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitulo:{
        fontSize: 17,
        padding: 10
    },
    categoria:{
        fontSize: 17,
        fontWeight: 'bold',
        padding: 10
    },
    areaBtn:{
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#dd5efe',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    btn:{
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtn:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})