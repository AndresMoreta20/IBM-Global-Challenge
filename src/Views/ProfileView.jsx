import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import imagen from '../test_img/img.png';
import Post from '../Components/Post.jsx';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ProfileView = () => {

    userData = {
        name: "Tito Jaramillo",
        email: "tito.jaramillo@udla.edu.ec",
        phone: "+593 996693539",
        country: "Ecuador",
    };

    return (
        <>
            {/*Info usuario*/}
            <Text style={{ alignSelf: 'flex-start', marginLeft: '5%' }}>{userData.name}</Text>
            {/*Recuadro de información del usuario*/}
            <View style={styles.infoUsuarioContainer}>
                <View style={styles.imgEditContainer}>
                    <Image
                        source={imagen}
                        style={styles.profileImg}
                    />
                    <TouchableOpacity style={styles.editBtn} onPress={null}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoUsuario}>
                    <Text>{userData.email}</Text>
                    <Text>{userData.phone}</Text>
                    <Text>{userData.country}</Text>
                </View>
            </View>
            <View style={styles.publicacionesUsuario}>
                <Text>Mis publicaciones</Text>
                <FlatList
                    data={[
                        { name: 'a' },
                        { name: 'b' },
                        { name: 'c' },
                        { name: 'd' },
                        { name: 'e' },
                        { name: 'f' },
                    ]}
                    renderItem={({ item }) => <Post props={item} />}>
                </FlatList>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    perfilUsuario: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '7%',
        height: '30%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    infoUsuarioContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgEditContainer: {
        width: '38%',
        display: 'flex',
        flexDirection: 'column'
    },
    profileImg: {
        height: '60%',
        width: '100%',
        resizeMode: 'contain',
    },
    editBtn: {
        height: '30%',
        backgroundColor: '#fff'

    },
    infoUsuario: {
        width: '58%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    publicacionesUsuario: {
        marginHorizontal: '5%',
    }
});  