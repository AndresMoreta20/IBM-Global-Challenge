import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';
import { FlatList } from 'react-native-gesture-handler';
import ProductPost from '../Components/ProductPost';
import SuggestionPost from '../Components/SuggestionPost';

export default HomeView = ({ posts }) => {

    return (
        <>
            <Text style={styles.titulo}>For me</Text>
                {/* <TextInput style={styles.barraBusqueda}
                placeholder='What are you looking for?'/>
                <Foundation name="magnifying-glass" size={24} color="black" style={styles.iconoLupa}/> */}

                <View style={styles.barraBusqueda}>
                    <TextInput placeholder='What are you looking for?' />
                    <Foundation name="magnifying-glass" size={24} color={DarkGray} style={styles.iconoLupa} />
                </View>
            <View style={styles.feed}>
                <FlatList
                    data={posts}
                    renderItem={() => <SuggestionPost />}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: Green,
        marginTop: '10%',
        marginLeft: '3%',
        marginBottom: '5%',
        fontSize: 20
    },

    barraBusqueda:{
        marginHorizontal: '3%',
        width: '75%',
        paddingLeft: 5,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Black,
        borderWidth: 1.5,
        borderRadius: 5
    },
    discover: {
        width: '20%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textoDiscover: {
        color: Green,
        textAlign: 'center',
        fontSize: 10
    },


    feed: {
        width: '100%',
        paddingHorizontal: '3%',
    },
});