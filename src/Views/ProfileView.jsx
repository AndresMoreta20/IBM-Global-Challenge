import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import imagen from '../../assets/img.png';
import Post from '../Components/Post.jsx';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ProfileView = () => {

    {/*Datos de prueba, deberían venir en props de la función*/ }
    userData = {
        name: "Tito Jaramillo",
        email: "tito.jaramillo@udla.edu.ec",
        phone: "+593 996693539",
        country: "Ecuador",
    };

    /*Función que maneja la acción del botón, debería redirigir al usuario a Editar perfil
    !! Aunque se podría reemplazar con un Stack*/
    const goProfileEdit = () => {

    }

    return (
        <>{/*Pensabe usar un ScrollView pero me sale un errorc*/}
            {/*Info usuario*/}
            <Text style={styles.titulo}>{userData.name}</Text>
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
                <Text style={{ color: '#fff' }}>Editar</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>Mis publicaciones</Text>
            <View style={styles.publicacionesUsuario}>
                {/*!! Talvez se debe cambiar este flatlist por una función si queremos que todo se escrolee a la 
                vez y no se quede fijo el infoUsuario*/}
                <FlatList
                    /*Datos de prueba, esto debería sacarse de algun lado con los props¿? */
                    data={[
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Descripción de la publicación',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../../assets/img.png'
                        },
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ante tortor, eget molestie dui efficitur non. Curabitur auctor, leo eu placerat maximus, erat orci tincidunt est, facilisis vulputate neque nulla in urna. Nam eu ultrices nisi, eget sollicitudin metus. Duis bibendum lacus eros, sit amet ullamcorper eros commodo quis. Proin aliquet vitae turpis eu consequat. Nam finibus velit non eleifend congue. Etiam leo augue, efficitur sit amet ullamcorper eu, hendrerit vitae diam. Integer vulputate aliquet lectus ac mattis.',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../../assets/img.png'
                        },
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Descripción de la publicación',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../../assets/img.png'
                        },
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Descripción de la publicación',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../../assets/img.png'
                        },
                    ]}
                    /*Configuración de como se imprime cada elemento*/
                    renderItem={({ item }) => <Post props={item} />}>
                </FlatList>
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
        backgroundColor: '#000',
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