import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';
import { FlatList } from 'react-native-gesture-handler';
import ProductPost from '../Components/ProductPost';

export default HomeView = ({posts}) => {

    return (
        <>
            <Text style={styles.titulo}>Find your resources</Text>
            <View style={styles.busqueda}>
                <TextInput style={styles.barraBusqueda}
                placeholder='What are you looking for?'/>
                <Foundation name="magnifying-glass" size={24} color="black" style={styles.iconoLupa}/>
                <View style={styles.discover}>
                    <Text style={styles.textoDiscover}>Discover new Things</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-hexagon" size={35} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.feed}>
                <FlatList
                data={posts}
                renderItem={() => <ProductPost></ProductPost>}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    titulo:{
        color: Green,
        marginTop: '10%',
        marginLeft: '3%',
        fontSize: 20
    },


    busqueda: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',
        padding: 5
    },
    barraBusqueda: {
        width: '65%',
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: Black,
        paddingHorizontal: 7,
        marginBottom: '5%',
    },
    iconoLupa:{
        width: '5%',
        paddingBottom: '1%'
    },
    discover:{
        width: '17%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textoDiscover:{
        color: Green,
        textAlign: 'center',
        fontSize: 10
    },


    feed: {
        width: '100%',
        paddingHorizontal: '3%',
    },
});