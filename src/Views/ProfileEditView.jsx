import React, { Component } from 'react';
import { Text, TextInput, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import imagen from '../../assets/img.png';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';

export default HomeView = ({ userData }) => {

    return (
        <>
            <View style={styles.contenedor}>
                <Text>EDITAR MI PERFIL</Text>

                <Image source={imagen} style={styles.imagen} />

                <Text>{userData.firstname} {userData.lastname}</Text>

                <Text>Correo</Text>
                <TextInput  style={styles.input}
                    defaultValue={userData.email} />

                <Text>Celular</Text>
                <TextInput style={styles.input}
                defaultValue={userData.phone} />

                <Text>País</Text>
                <TextInput style={styles.input}
                defaultValue={userData.country} />

                <TouchableOpacity>
                    <Text>Guardar Cambios</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        paddingTop: '10%',
        paddingHorizontal: '5%'
    },

    imagen: {
        width: '60%',
        height: '30%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    input:{
        borderWidth: 1.5,
        borderColor: Black,
        borderRadius: 5,
        height: 36,
        paddingHorizontal: 10
    },
});