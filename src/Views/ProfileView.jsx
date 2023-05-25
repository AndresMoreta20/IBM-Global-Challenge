import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import imagen from '../test_img/img.png';
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
                <View style={styles.imagenYBoton}>
                    <View style={styles.profileImgContainer}>
                        <Image
                            source={imagen}
                            style={styles.profileImg}
                        />
                    </View>
                    <TouchableOpacity style={styles.editBtn} onPress={goProfileEdit()/*Debería navegar a pagina de edición perfil*/}>
                        <Text style={{ color: '#fff' }}>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detallesUsuario}>
                    <Text style={styles.texto}>{userData.email}</Text>
                    <Text style={styles.texto}>{userData.phone}</Text>
                    <Text style={styles.texto}>{userData.country}</Text>
                </View>
            </View>
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
                            img: '../test_img/img.png'
                        },
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Descripción de la publicación',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../test_img/img.png'
                        },
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Descripción de la publicación',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../test_img/img.png'
                        },
                        {
                            product: 'Nombre del producto',
                            descripcion: 'Descripción de la publicación',
                            tags: ['tag1', 'tag2', 'tag3'],
                            likes: 234,
                            img: '../test_img/img.png'
                        },
                    ]}
                    /*Configuración de como se imprime cada elemento*/
                    renderItem={({ item }) => <Post props={item}/>}>
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
        height: '25%',
        marginHorizontal: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    /* Estilos primera columna información de usuario */
    imagenYBoton: {
        /*!! toda esta columna me está dando problema, no se como hacer para que se vea bien*/
        width: '35%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImgContainer: {
        width: '100%',
        height: '60%',
    },
    profileImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    editBtn: {
        /*!! Por alguna razón el botón no toma todo el ancho del contenedor*/
        width: '100%',
        height: '30%',
        backgroundColor: '#000'
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
        height: '55%',
        width: '90%',
        marginHorizontal: '5%'
    },
    post:{
        height: '30%',
        width: '100%'
    }
});