import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';
import { FlatList } from 'react-native-gesture-handler';
import ProductPost from '../Components/ProductPost';

export default Discoverview = ({ posts }) => {

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.titulo}>Discover new things</Text>
                <MaterialCommunityIcons name="dots-hexagon" size={35} color="black" />
            </View>

            <View style={styles.busqueda}>
                <TextInput style={styles.barraBusqueda}
                    placeholder='What are you looking for?' />
                <Foundation name="magnifying-glass" size={24} color="black" style={styles.iconoLupa} />

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
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
        paddingHorizontal: '3%',
        marginBottom: '7%',
        alignItems: 'center'
    },
    titulo: {
        color: Green,
        fontSize: 20
    },


    busqueda: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: '3%',
        marginBottom: '5%',
    },
    barraBusqueda: {
        width: '85%',
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: Black,
        paddingHorizontal: 7
    },
    iconoLupa: {
        width: '5%',
        paddingBottom: '1%'
    },


    feed: {
        width: '100%',
        paddingHorizontal: '3%',
    },
});