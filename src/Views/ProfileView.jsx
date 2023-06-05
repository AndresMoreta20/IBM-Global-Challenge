import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import imagen from '../../assets/img.png';
import ProductPostEditable from '../Components/ProductPostEditable.jsx';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Black, DarkGray, Gray, Green, White } from '../Components/Estilos';

export default ProfileView = ({ userData, posts }) => {

    /*Función que maneja la acción del botón, debería redirigir al usuario a Editar perfil
    !! Aunque se podría reemplazar con un Stack*/
    const goProfileEdit = () => {

    }

    return (
        <>
            {/*Info usuario*/}
            <Text style={styles.titulo}>{userData.firstname} {userData.lastname}</Text>
            {/*Recuadro de información del usuario*/}
            <View style={styles.infoUsuario}>
                <Image
                    source={imagen}
                    style={styles.profileImg}
                />
                <View style={styles.detallesUsuario}>
                    <Text style={styles.texto}>{userData.email}</Text>
                    <Text style={styles.texto}>{userData.phone}</Text>
                    <Text style={styles.texto}>{userData.country}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.editBtn} onPress={goProfileEdit()/*Debería navegar a pagina de edición perfil*/}>
                <Text style={{ color: White }}>Editar</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>Mis publicaciones</Text>
            <View style={styles.publicacionesUsuario}>
                <FlatList
                    data={posts}
                    /*Configuración de como se imprime cada elemento*/
                    renderItem={({ item }) => <ProductPostEditable postInfo={item} editable={true} />} />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    /*!! No se bien como manejar los porcentajes de altura de cada sección*/

    /* Estilos titulo, nombre usuario y Mis publicaciones */
    titulo: {
        alignSelf: 'flex-start',
        marginBottom: '3%',
        marginLeft: '5%',
        marginTop: '7%',
        fontSize: 20
    },
    /* Estilos recuadro información usuario */
    infoUsuario: {
        width: '90%',
        height: '20%',
        marginHorizontal: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    /* Estilos primera columna información de usuario */
    imagenYBoton: {
        /*!! toda esta columna me está dando problema, no se como hacer para que se vea bien*/
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImg: {
        width: '35%',
        height: '100%',
        resizeMode: 'center'
    },

    /*Estilos del botón*/
    editBtn: {
        width: '20%',
        padding: '1%',
        backgroundColor: Black,
        alignItems: 'center',
        marginLeft: '10%'
    },

    /* Estilos segunda columna información de usuario */
    detallesUsuario: {
        height: '100%',
        width: '60%',
        paddingBottom: '10%',
        paddingTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    texto: {
        //height: '30%',
    },

    /* Estilod feed de Mis publicaciones */
    publicacionesUsuario: {
        height: '54%',
        width: '90%',
        marginHorizontal: '5%'
    },
    post: {
        width: '100%'
    }
});